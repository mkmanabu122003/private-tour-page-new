import { useState } from "react";
import { Mail, MapPin, Send, Check } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tourType: "",
    date: "",
    groupSize: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Encode form data for Netlify Forms
      const formElement = e.target as HTMLFormElement;
      const formDataEncoded = new FormData(formElement);

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataEncoded as any).toString(),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your inquiry. I'll respond within 24 hours.",
        });

        setFormData({
          name: "",
          email: "",
          tourType: "",
          date: "",
          groupSize: "",
          message: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Header */}
      <section className="pt-16 pb-12 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-2xl">
            <p className="text-label text-accent mb-3">Get in Touch</p>
            <h1 className="heading-display text-foreground">Book Your Tour</h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Ready to explore Tokyo? Fill out the form below and I'll get back 
              to you within 24 hours to confirm your booking or answer any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container-section">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Hidden fields for Netlify Forms */}
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                      placeholder="your-email@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="tourType" className="block text-sm font-medium text-foreground mb-2">
                      Tour Type
                    </label>
                    <select
                      id="tourType"
                      name="tourType"
                      value={formData.tourType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    >
                      <option value="">Select a tour</option>
                      <option value="asakusa">Asakusa Walking Tour</option>
                      <option value="yanaka">Ueno & Yanaka Discovery</option>
                      <option value="shibuya-harajuku">Shibuya & Harajuku Tour</option>
                      <option value="tsukiji-ginza">Tsukiji & Ginza Tour</option>
                      <option value="imperial-palace">Imperial Palace & Marunouchi</option>
                      <option value="custom">Custom Private Tour</option>
                      <option value="other">Other / Not sure</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="groupSize" className="block text-sm font-medium text-foreground mb-2">
                      Group Size
                    </label>
                    <select
                      id="groupSize"
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    >
                      <option value="">Select size</option>
                      <option value="1">1 person</option>
                      <option value="2">2 people</option>
                      <option value="3-4">3-4 people</option>
                      <option value="5-6">5-6 people</option>
                      <option value="7+">7+ people</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                    placeholder="Tell me about your travel plans, interests, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-accent w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-foreground mb-4">
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
                  <h3 className="font-serif text-lg font-medium text-foreground mb-4">
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
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-highlight mt-0.5 shrink-0" />
                      Free cancellation up to 24h
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
