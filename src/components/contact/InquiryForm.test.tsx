import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import { InquiryForm } from "./InquiryForm";

vi.mock("@/lib/ga4", () => ({
  trackFormSubmit: vi.fn(),
  trackFormEngage: vi.fn(),
}));

// Default: no site key, so the form behaves as it did before reCAPTCHA.
// Individual tests flip `siteKey` to exercise the captcha path.
const recaptchaState = vi.hoisted(() => ({ siteKey: "" }));
const toastSpy = vi.hoisted(() => vi.fn());
vi.mock("@/lib/recaptcha", async () => {
  const actual = await vi.importActual<typeof import("@/lib/recaptcha")>("@/lib/recaptcha");
  return {
    ...actual,
    getRecaptchaSiteKey: () => recaptchaState.siteKey,
    // Never load Google's script in tests. Resolve a fake grecaptcha so the
    // widget "renders" and a test can simulate the visitor passing.
    loadRecaptcha: () =>
      Promise.resolve({
        ready: (cb: () => void) => cb(),
        render: (_el: HTMLElement, params: { callback?: (t: string) => void }) => {
          window.__testRecaptchaPass = () => params.callback?.("test-token");
          return 1;
        },
        reset: vi.fn(),
        getResponse: () => "",
      }),
  };
});
vi.mock("@/hooks/use-toast", () => ({ useToast: () => ({ toast: toastSpy }) }));

declare global {
  interface Window {
    __testRecaptchaPass?: () => void;
  }
}

function renderForm(lang: "en" | "es", initialTour?: string) {
  return render(
    <MemoryRouter>
      <InquiryForm lang={lang} initialTour={initialTour} />
    </MemoryRouter>
  );
}

afterEach(() => {
  window.history.pushState({}, "", "/");
  recaptchaState.siteKey = "";
  toastSpy.mockReset();
  delete window.__testRecaptchaPass;
  vi.unstubAllGlobals();
});

async function fillRequired(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText("Your name *"), "Jane Smith");
  await user.type(screen.getByLabelText("Email address *"), "jane@example.com");
  await user.type(screen.getByLabelText("Preferred date or period *"), "late October");
  await user.type(screen.getByLabelText("Adults *"), "2");
}

describe("InquiryForm fields", () => {
  it("renders EN labels, required fields, and form-name=contact", () => {
    const { container } = renderForm("en");
    const form = container.querySelector("form");
    expect(form).toHaveAttribute("name", "contact");
    expect(container.querySelector('input[name="form-name"]')).toHaveValue("contact");

    expect(screen.getByLabelText("Your name *")).toBeRequired();
    expect(screen.getByLabelText("Email address *")).toBeRequired();
    expect(screen.getByLabelText("Preferred date or period *")).toBeRequired();
    expect(screen.getByLabelText("Adults *")).toBeRequired();

    expect(screen.getByLabelText("Country")).not.toBeRequired();
    expect(screen.getByLabelText("Children")).not.toBeRequired();
    expect(screen.getByLabelText("City")).not.toBeRequired();
    expect(screen.getByLabelText("Preferred language")).not.toBeRequired();
    expect(screen.getByLabelText("Tour of interest")).not.toBeRequired();
    expect(screen.getByLabelText("Interests and requests")).not.toBeRequired();

    expect(screen.getByLabelText("Preferred language")).toHaveValue("en");
    expect(screen.getByRole("button", { name: /Send inquiry/ })).toBeInTheDocument();
  });

  it("renders ES labels, defaults language to Español, and uses contact-es", () => {
    const { container } = renderForm("es");
    expect(container.querySelector("form")).toHaveAttribute("name", "contact-es");
    expect(container.querySelector('input[name="form-name"]')).toHaveValue("contact-es");

    expect(screen.getByLabelText("Nombre *")).toBeRequired();
    expect(screen.getByLabelText("Correo electrónico *")).toBeRequired();
    expect(screen.getByLabelText("Fecha o período deseado *")).toBeRequired();
    expect(screen.getByLabelText("Adultos *")).toBeRequired();
    expect(screen.getByLabelText("Niños")).not.toBeRequired();
    expect(screen.getByLabelText("Idioma de la consulta")).toHaveValue("es");
    expect(screen.getByRole("button", { name: /Enviar consulta/ })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /Send inquiry/ })).not.toBeInTheDocument();
  });

  it("prefills a known tour slug and ignores unknown ones", () => {
    const { unmount } = renderForm("en", "asakusa");
    expect(screen.getByLabelText("Tour of interest")).toHaveValue("asakusa");
    unmount();

    renderForm("en", "not-a-real-tour");
    expect(screen.getByLabelText("Tour of interest")).toHaveValue("");
  });

  it("applies a late initialTour so prerendered contact pages pick up ?tour=", () => {
    const { rerender } = render(
      <MemoryRouter>
        <InquiryForm lang="en" initialTour="" />
      </MemoryRouter>
    );
    expect(screen.getByLabelText("Tour of interest")).toHaveValue("");
    rerender(
      <MemoryRouter>
        <InquiryForm lang="en" initialTour="asakusa" />
      </MemoryRouter>
    );
    expect(screen.getByLabelText("Tour of interest")).toHaveValue("asakusa");
  });

  it("reads ?tour= from the window location when the router prop is empty", () => {
    window.history.pushState({}, "", "/contact?tour=asakusa");
    renderForm("en");
    expect(screen.getByLabelText("Tour of interest")).toHaveValue("asakusa");
  });

  it("updates the hidden groupSize field when adults and children change", async () => {
    const user = userEvent.setup();
    const { container } = renderForm("en");
    await user.type(screen.getByLabelText("Adults *"), "2");
    await user.type(screen.getByLabelText("Children"), "1");
    expect(container.querySelector('input[name="groupSize"]')).toHaveValue("2 adults, 1 children");
  });
});

describe("InquiryForm reCAPTCHA", () => {
  it("renders no widget and no Netlify recaptcha attribute without a site key", () => {
    const { container } = renderForm("en");
    expect(screen.queryByTestId("recaptcha-box")).not.toBeInTheDocument();
    expect(container.querySelector("form")).not.toHaveAttribute("data-netlify-recaptcha");
  });

  it("still submits without a token when no site key is configured", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();
    renderForm("en");
    await fillRequired(user);
    await user.click(screen.getByRole("button", { name: /Send inquiry/ }));

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const body = new URLSearchParams(fetchMock.mock.calls[0][1].body as string);
    expect(body.get("form-name")).toBe("contact");
    expect(body.has("g-recaptcha-response")).toBe(false);
    expect(toastSpy).not.toHaveBeenCalled();
  });

  it("renders the widget and flags the form for Netlify when a site key is set", async () => {
    recaptchaState.siteKey = "site-key-123";
    const { container } = renderForm("es");
    expect(container.querySelector("form")).toHaveAttribute("data-netlify-recaptcha", "true");
    expect(screen.getByTestId("recaptcha-box")).toBeInTheDocument();
    await waitFor(() => expect(window.__testRecaptchaPass).toBeTypeOf("function"));
  });

  it("refuses to POST until the visitor passes the captcha, then sends the token", async () => {
    recaptchaState.siteKey = "site-key-123";
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();
    renderForm("en");
    await fillRequired(user);
    await waitFor(() => expect(window.__testRecaptchaPass).toBeTypeOf("function"));

    await user.click(screen.getByRole("button", { name: /Send inquiry/ }));
    expect(fetchMock).not.toHaveBeenCalled();
    expect(toastSpy).toHaveBeenCalledTimes(1);
    expect(toastSpy.mock.calls[0][0].title).toBe("One more step");

    act(() => window.__testRecaptchaPass?.());
    await user.click(screen.getByRole("button", { name: /Send inquiry/ }));

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const body = new URLSearchParams(fetchMock.mock.calls[0][1].body as string);
    expect(body.get("g-recaptcha-response")).toBe("test-token");
    expect(body.get("form-name")).toBe("contact");
  });
});
