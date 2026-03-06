// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { Award, Globe, Briefcase, Heart, MapPin, Languages, Shield, Users, BookOpen, Utensils, Star } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import guidePortrait from "@/assets/About_page_Manabu_team_photo.webp";
import heroImage from "@/assets/hero-asakusa.jpg";

const stats = [
  { label: "Tours Completados", value: "516+" },
  { label: "Valoración Media", value: "4.86★" },
  { label: "Idiomas", value: "3" },
  { label: "Zonas de Tour", value: "5+" },
];

const credentials = [
  {
    icon: Shield,
    title: "Guía con Licencia del Gobierno",
    description: "Intérprete-guía con licencia nacional del gobierno japonés (全国通訳案内士) — la certificación profesional más alta para guías en Japón, que requiere amplio conocimiento de historia, cultura, geografía y dominio del idioma.",
  },
  {
    icon: Globe,
    title: "Experiencia Internacional",
    description: "Amplia experiencia laboral en el extranjero que aporta perspectiva global y habilidades de comunicación intercultural a cada tour.",
  },
  {
    icon: Briefcase,
    title: "Formación Empresarial",
    description: "Experiencia profesional en el mundo empresarial que garantiza tours bien organizados con excelente comunicación y atención al detalle.",
  },
  {
    icon: Languages,
    title: "Multilingüe",
    description: "Dominio de japonés, inglés y español para una comunicación fluida con viajeros de todo el mundo.",
  },
];

const whyChooseGuide = [
  {
    icon: Users,
    title: "A Tu Ritmo",
    description: "Los tours privados significan no esperar a desconocidos. Camina a tu velocidad, detente donde te dé curiosidad y sáltate lo que no te interese.",
  },
  {
    icon: Shield,
    title: "Calidad Certificada",
    description: "Un guía con licencia nacional ha aprobado rigurosos exámenes del gobierno que cubren historia, geografía, cultura y competencia lingüística japonesa.",
  },
  {
    icon: BookOpen,
    title: "Más Allá de la Guía de Viaje",
    description: "Descubre templos escondidos, tiendas solo para locales e historias de barrio que no encontrarás en ninguna app de viajes o blog.",
  },
  {
    icon: Utensils,
    title: "Asistencia Completa",
    description: "Desde reservas en restaurantes y navegación del tren hasta consejos de etiqueta cultural — tu guía se encarga de los detalles para que tú disfrutes del viaje.",
  },
];

const allReviews = [
  {
    text: "We did 3 tours in Tokyo and Manabu's was by far the most informative and engaging. He was very clear in his delivery and offered interesting cultural insights as sidebars to each venue we visited. Highly recommended!",
    author: "Couple visiting Tokyo",
  },
  {
    text: "Manabu's tour was one of the best I've been on — he is professional, kind, very knowledgeable and an awesome story-teller. His route is well-planned and offers fun experiences. You can tell he is a full-time tour guide because of the effort he puts in.",
    author: "Solo traveler",
  },
  {
    text: "This was an excellent tour. Manabu was entertaining, charismatic and knowledgeable. All places visited were awesome and he provided very interesting tips. A great start to our Japan trip.",
    author: "First-time visitors to Japan",
  },
  {
    text: "Manabu was simply amazing! He speaks a very good level of English, so he's very clear in the explanations. He shared interesting insights about Japanese culture that I really appreciated. The tour points of interest are the ones to be seen and with him I was able to notice things I'd have never understood.",
    author: "Traveler from Italy",
  },
  {
    text: "We are from Europe and enjoyed a lot of walking tours. Here in Japan they are not so spread yet, but Manabu's is one of the best we ever had! Perfect length and rhythm, with great tips about food, local culture, and curiosities about Asakusa. Extremely recommended.",
    author: "Couple from Europe",
  },
  {
    text: "Our family did a walking tour with Manabu and it was a fantastic experience. The route is very child friendly, mostly on flat ground and suitable for prams. We have learned a lot about Japan and the Japanese people. He made sure he gave his attention to everyone in the group. Highly recommended.",
    author: "Family group",
  },
  {
    text: "As a group with a wheelchair user in our party, he really made sure to take the time to make sure we had got back to the group, especially in areas like Senso-ji which was very crowded. As a result, we felt included and that we didn't miss out on any information either! 10/10",
    author: "Group from the UK",
  },
  {
    text: "This is my second tour with Manabu so that's saying something! Really enjoyed his engaging, cultural anecdotes. He was very professional and easy to listen to.",
    author: "Repeat visitor",
  },
];

const EsAbout = () => {
  return (
    <Layout>
      <SEO
        title="Conoce a Manabu — Tu Guía Privado en Tokio | Tanuki Tabi Travel"
        description="Manabu es un guía japonés nativo con licencia oficial del gobierno (全国通訳案内士), 516+ tours y valoración de 4.86★. Nacido en Kanazawa, criado en Kioto, ahora en Tokio."
        canonicalPath="/es/about"
        hreflang={[
          { lang: "en", path: "/about" },
          { lang: "es", path: "/es/about" },
          { lang: "x-default", path: "/about" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-secondary/30">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-label text-accent mb-3">Tu Guía</p>
              <h1 className="heading-display text-foreground">
                Conoce a tu guía: <span className="text-accent">Manabu</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Soy Manabu, intérprete-guía con licencia nacional del gobierno japonés (全国通訳案内士) con base en Tokio. Esta es una certificación nacional emitida por el gobierno japonés, que requiere amplios conocimientos de historia, cultura, geografía y dominio del inglés y español. Solo los guías certificados están legalmente reconocidos como guías turísticos profesionales en Japón.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Nacido en Kanazawa, criado en Kioto y ahora viviendo en Tokio — aporto una perspectiva única de las regiones culturalmente más ricas de Japón. Con más de 516 tours completados y una valoración media de 4.86 estrellas, mi pasión es compartir las historias de Japón con viajeros de todo el mundo.
              </p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <p className="text-2xl font-serif font-semibold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-[var(--shadow-medium)]">
                <img
                  src={guidePortrait}
                  alt="Manabu, guía privado con licencia oficial en Tokio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Guiding Philosophy */}
      <section className="py-20">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-label text-accent mb-3">Mi Enfoque</p>
            <h2 className="heading-section text-foreground">
              Cómo Guío
            </h2>
            <div className="mt-8 text-muted-foreground leading-relaxed space-y-4 text-left">
              <p>
                Mi filosofía como guía se basa en un principio: <strong className="text-foreground">cada viajero es diferente</strong>. En los primeros 30 minutos de cada tour, presto mucha atención a lo que te emociona — ya sea la arquitectura, la comida callejera, las curiosidades históricas o la fotografía — y adapto la ruta en tiempo real.
              </p>
              <p>
                No doy monólogos con guión. Mis tours son conversaciones. Comparto historias y contexto cultural, pero también quiero escuchar tus preguntas, tus observaciones y lo que te sorprende de Japón. Ese intercambio es lo que hace la experiencia memorable.
              </p>
              <p>
                Mis años en el mundo empresarial me dieron la oportunidad de viajar y trabajar con personas de diversos orígenes. Me di cuenta de que los visitantes a Japón a menudo perdían el contexto y el significado detrás de lo que veían — el "por qué" que hace las experiencias verdaderamente significativas.
              </p>
              <p className="font-medium text-foreground">
                Hoy, nada me da más alegría que ver el momento de comprensión en los ojos de un visitante — cuando un templo deja de ser solo piedras viejas y se convierte en una conexión viva con siglos de creencia y artesanía.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose a Licensed Private Guide */}
      <section className="py-20 bg-secondary/30">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-label text-accent mb-3">Ventajas</p>
            <h2 className="heading-section text-foreground">
              ¿Por qué elegir un guía privado con licencia?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseGuide.map((item) => (
              <div key={item.title} className="flex gap-5 p-6 bg-card border border-border rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-label text-accent mb-3">Credenciales</p>
            <h2 className="heading-section text-foreground">
              Formación Profesional
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {credentials.map((item) => (
              <div key={item.title} className="flex gap-5 p-6 bg-background rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Areas */}
      <section className="py-20 bg-secondary/30">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video rounded-lg overflow-hidden shadow-[var(--shadow-medium)]">
                <img
                  src={heroImage}
                  alt="Distrito histórico de Asakusa en Tokio con el Templo Senso-ji y arquitectura tradicional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-label text-accent mb-3">Experiencia</p>
              <h2 className="heading-section text-foreground">
                Zonas que Mejor Conozco
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Cada barrio de Tokio tiene su propio carácter e historias. Estas son las zonas donde he desarrollado un conocimiento profundo y conexiones locales:
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { area: "Asakusa y Sumida", link: "/es/tours/asakusa" },
                  { area: "Ueno y Yanaka", link: "/es/tours/yanaka" },
                  { area: "Tsukiji y Ginza", link: "/es/tours/tsukiji-ginza" },
                  { area: "Shibuya y Harajuku", link: "/es/tours/shibuya-harajuku" },
                  { area: "Palacio Imperial y Marunouchi", link: "/es/tours/imperial-palace" },
                  { area: "Kamakura (Excursión)", link: "/es/tours/kamakura-day-trip" },
                  { area: "Hakone (Excursión)", link: "/es/tours/hakone-day-trip" },
                  { area: "Nikko (Excursión)", link: "/es/tours/nikko-day-trip" },
                ].map((item) => (
                  <Link
                    key={item.area}
                    to={item.link}
                    className="flex items-center gap-3 group"
                  >
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="text-foreground group-hover:text-accent transition-colors">
                      {item.area}
                    </span>
                  </Link>
                ))}
              </div>

              <Link to="/es/" className="btn-accent mt-8 inline-flex">
                Explorar Tours
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-label text-accent mb-3">Opiniones</p>
            <h2 className="heading-section text-foreground">Lo Que Dicen los Viajeros</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {allReviews.map((review) => (
              <blockquote
                key={review.author}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-gold text-gold"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                  "{review.text}"
                </p>
                <footer>
                  <cite className="not-italic font-medium text-foreground text-sm">
                    — {review.author}
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Más de 500 reseñas de cinco estrellas de viajeros de todo el mundo
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-section text-center">
          <Heart className="w-12 h-12 mx-auto mb-6 text-accent" />
          <h2 className="heading-section">Exploremos Tokio Juntos</h2>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
            Tengo muchas ganas de compartir mis lugares favoritos y las historias que hacen de Tokio una ciudad tan especial. Creemos recuerdos juntos.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/es/" className="btn-accent">
              Ver Tours
            </Link>
            <Link to="/es/contact" className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-medium rounded-md transition-all duration-200 hover:bg-primary-foreground/10">
              Reservar un Tour
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Person Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Manabu",
            "jobTitle": "Government-Licensed Tour Guide",
            "worksFor": {
              "@type": "LocalBusiness",
              "name": "Tanuki Tabi Travel",
              "url": "https://tanuki-tabi-travel.com",
            },
            "knowsLanguage": ["Japanese", "English", "Spanish"],
            "knowsAbout": ["Tokyo", "Japanese Culture", "Japanese History", "Walking Tours"],
          }),
        }}
      />
    </Layout>
  );
};

export default EsAbout;
