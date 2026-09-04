import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail, MapPin, Check } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { InquiryForm } from "@/components/contact/InquiryForm";
import { trackContactPageView } from "@/lib/ga4";
import guidePortrait from "@/assets/About_page_Manabu_team_photo.webp";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const initialTour = searchParams.get("tour") || "";

  useEffect(() => {
    trackContactPageView();
  }, []);

  return (
    <Layout>
      <SEO
        title="Book a Private Tokyo Tour | Tanuki Tabi Travel"
        description="Ready to book a private Tokyo tour? Contact Manabu to discuss your itinerary, dates, and interests. Government-licensed guide · 500+ tours · 4.86★ rating."
        canonicalPath="/contact"
        hreflang={[
          { lang: "en", path: "/contact" },
          { lang: "es", path: "/es/contact" },
          { lang: "x-default", path: "/contact" },
        ]}
      />

      {/* Header */}
      <section className="pt-16 pb-12 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-2xl">
            <p className="text-label text-accent mb-3">Get in Touch</p>
            <h1 className="heading-display text-foreground">Contact Us / Book a Tour</h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Ready to explore Tokyo? Fill out the form below and I'll get back 
              to you within 24 hours to confirm your booking or answer any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-8 bg-secondary/30 border-b border-border">
        <div className="container-section">
          <div className="flex items-center gap-4 max-w-2xl">
            <img
              src={guidePortrait}
              alt="Manabu, your licensed Tokyo tour guide"
              className="w-14 h-14 rounded-full object-cover border-2 border-accent shrink-0"
            />
            <p className="text-muted-foreground text-sm leading-relaxed italic">
              "I personally read every message and reply within 24 hours." — <span className="text-foreground font-medium not-italic">Manabu</span>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="inquiry-form" className="py-16 scroll-mt-24">
        <div className="container-section">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <InquiryForm lang="en" initialTour={initialTour} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-accent mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Email</p>
                        <a href="mailto:info@tanuki-tabi-travel.com" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                          info@tanuki-tabi-travel.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Location</p>
                        <p className="text-sm text-muted-foreground">Tokyo, Japan</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Quick Info
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-highlight mt-0.5 shrink-0" />
                      Response within 24 hours
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-highlight mt-0.5 shrink-0" />
                      Book at least 48 hours ahead
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-highlight mt-0.5 shrink-0" />
                      Custom tours available
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
