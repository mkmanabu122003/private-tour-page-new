import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { InquiryForm } from "./InquiryForm";

vi.mock("@/lib/ga4", () => ({
  trackFormSubmit: vi.fn(),
  trackFormEngage: vi.fn(),
}));

function renderForm(lang: "en" | "es", initialTour?: string) {
  return render(
    <MemoryRouter>
      <InquiryForm lang={lang} initialTour={initialTour} />
    </MemoryRouter>
  );
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

  it("updates the hidden groupSize field when adults and children change", async () => {
    const user = userEvent.setup();
    const { container } = renderForm("en");
    await user.type(screen.getByLabelText("Adults *"), "2");
    await user.type(screen.getByLabelText("Children"), "1");
    expect(container.querySelector('input[name="groupSize"]')).toHaveValue("2 adults, 1 children");
  });
});
