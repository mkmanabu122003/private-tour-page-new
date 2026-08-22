/**
 * GA4 Key Event Tracking Utilities
 *
 * Events tracked:
 * - contact_page_view: Contact page viewed
 * - book_now_click: Any "Book Now" CTA clicked
 * - form_submit: Contact form submitted
 * - tour_page_view: Tour detail page viewed
 * - blog_to_tour_click: Related tour card clicked from blog
 *
 * Testing: Use GA4 DebugView to verify events.
 * 1. Install "Google Analytics Debugger" Chrome extension
 * 2. Enable the extension (icon turns green)
 * 3. Open GA4 Admin > DebugView
 * 4. Browse the site — events appear in real time
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function gtag(...args: unknown[]) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag(...args);
  }
}

export function trackContactPageView() {
  gtag("event", "contact_page_view", {
    page_location: window.location.href,
  });
}

export function trackBookNowClick(buttonText: string, location?: string) {
  gtag("event", "book_now_click", {
    source_page: window.location.pathname,
    button_text: buttonText,
    cta_location: location,
  });
}

export function trackFormSubmit() {
  gtag("event", "form_submit", {
    form_location: window.location.pathname,
  });
}

/**
 * First interaction with the contact form, fired once per page view.
 *
 * GA4's enhanced measurement already emits `form_start`, but it is a black box:
 * in 2026-08 it reported contact_page_view 86 → form_start 21 (24%), down from
 * 43% the month before, with no way to tell a real drop-off from a detection
 * change. This is deliberately named differently so both events coexist and can
 * be compared — if they diverge, the automatic one is the unreliable side.
 *
 * `first_field` records where people actually begin, so an abandoned form can be
 * traced to a specific input rather than guessed at.
 */
export function trackFormEngage(firstField: string) {
  gtag("event", "form_engage", {
    form_location: window.location.pathname,
    first_field: firstField,
  });
}

export function trackTourPageView(tourName: string) {
  gtag("event", "tour_page_view", {
    tour_name: tourName,
    tour_path: window.location.pathname,
  });
}

export function trackBlogToTourClick(destinationTour: string) {
  gtag("event", "blog_to_tour_click", {
    source_blog: window.location.pathname,
    destination_tour: destinationTour,
  });
}

// Fires blog_to_tour_click for any in-body `<a href="/tours/...">` click
// from a `/blog/` page. Capture phase so React Router Link's preventDefault
// can't swallow the event before we see it.
export function installBlogToTourClickDelegate() {
  if (typeof document === "undefined") return;
  document.addEventListener(
    "click",
    (e) => {
      const anchor = (e.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !/^\/(es\/)?tours(\/|$)/.test(href)) return;
      if (!/\/blog(\/|$)/.test(window.location.pathname)) return;
      gtag("event", "blog_to_tour_click", {
        source_blog: window.location.pathname,
        destination_tour: href,
      });
    },
    true,
  );
}

export function trackDiagnosticStart(toolId: string) {
  gtag("event", "diagnostic_start", {
    tool_id: toolId,
    page_path: window.location.pathname,
  });
}

export function trackDiagnosticAnswer(toolId: string, questionId: string, answerIndex: number) {
  gtag("event", "diagnostic_answer", {
    tool_id: toolId,
    question_id: questionId,
    answer_index: answerIndex,
  });
}

export function trackDiagnosticComplete(toolId: string, resultId: string) {
  gtag("event", "diagnostic_complete", {
    tool_id: toolId,
    result_id: resultId,
    page_path: window.location.pathname,
  });
}

export function trackDiagnosticToTour(toolId: string, resultId: string) {
  gtag("event", "diagnostic_to_tour", {
    tool_id: toolId,
    result_id: resultId,
  });
}

export function trackDiagnosticToContact(toolId: string, resultId: string) {
  gtag("event", "diagnostic_to_contact", {
    tool_id: toolId,
    result_id: resultId,
  });
}

export function trackDiagnosticToArticle(toolId: string, resultId: string) {
  gtag("event", "diagnostic_to_article", {
    tool_id: toolId,
    result_id: resultId,
  });
}
