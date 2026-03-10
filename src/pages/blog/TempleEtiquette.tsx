import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const TempleEtiquette = () => {
  return (
    <Layout>
      <SEO
        title="Japan Temple & Shrine Etiquette: 8 Rules You Should Know"
        description="Dress code, prayer steps, purification ritual & common mistakes at Japanese temples and shrines. Explained by a licensed Tokyo guide with 500+ tours."
        canonicalPath="/blog/japan-temple-shrine-etiquette"
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/tours/senso-ji-temple-tokyo.jpg"
          alt="Senso-ji Temple in Tokyo, learn proper temple etiquette"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </section>

      {/* Article Header */}
      <section className="pt-16 pb-12 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-3xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <p className="text-label text-accent mb-3">Planning Your Trip</p>
            <h1 className="heading-display text-foreground">
              Temple & Shrine Etiquette in Japan: A Complete Guide
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Manabu, Licensed Tour Guide
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                February 25, 2026
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Written by Manabu, National Government Licensed Guide Interpreter (全国通訳案内士) with 500+ tours of Tokyo's temples and shrines.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            {/* Introduction */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              One of the most common questions I hear on my tours is: "Am I doing this right?" Whether it's standing at a shrine wondering how many times to clap, or hesitating at a temple entrance unsure whether to bow, visitors often worry about making mistakes at Japan's sacred sites. I completely understand the feeling. Nobody wants to accidentally offend.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Here's the good news: Japanese people genuinely appreciate any effort you make to participate respectfully. You don't need to be perfect. The fact that you're reading this guide already shows the kind of thoughtfulness that locals notice and value. Most Japanese visitors themselves aren't entirely sure of every ritual detail. They simply approach these places with a quiet, sincere attitude.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              That said, knowing the basics will make your experience far more meaningful. Instead of standing awkwardly while others pray, you'll be able to join in and understand what you're doing. This guide covers everything you need to know, from the fundamental difference between temples and shrines, to step-by-step instructions for prayer, purification, and general behavior. Let's start with the most basic question of all.
            </p>

            {/* Temple vs Shrine */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Temple vs Shrine: What's the Difference?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Before we dive into etiquette, it's essential to understand the distinction between temples and shrines, because the customs at each are different. This is the single most important thing to grasp, and once you do, everything else falls into place naturally.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Temples (寺 / tera)</strong> are Buddhist. You can identify them by their large entrance gates called <strong className="text-foreground">sanmon</strong>, the presence of incense burners, statues of Buddha or bodhisattvas, and pagodas. The atmosphere tends to be contemplative and quiet. Famous examples include Senso-ji in Asakusa, Kinkaku-ji (the Golden Pavilion) in Kyoto, and Kotoku-in in Kamakura, home to the Great Buddha. Temple names typically end in "-ji," "-dera," or "-in."
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Shrines (神社 / jinja)</strong> are Shinto, Japan's indigenous spiritual tradition. The unmistakable marker of a shrine is the <strong className="text-foreground">torii gate</strong>, that iconic vermillion gate you see in countless photos of Japan. You'll also notice shimenawa (sacred braided ropes), komainu (guardian lion-dog statues), and a distinctly open, nature-connected feel. Shrine names typically end in "-jinja," "-jingu," "-taisha," or "-gu." Meiji Shrine in Harajuku and Fushimi Inari in Kyoto are perhaps the most famous.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Here's something that surprises many visitors: <strong className="text-foreground">many sacred sites contain both a temple and a shrine</strong>. Buddhism and Shinto have coexisted in Japan for over a thousand years, and the two traditions often share the same grounds. A perfect example is the{" "}
              <Link to="/tours/asakusa" className="text-accent hover:underline">
                Asakusa area
              </Link>
              , where the famous Senso-ji Temple sits right next to Asakusa Shrine. They look similar at first glance, but the rituals are different, which is exactly why knowing the distinction matters.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              A simple rule of thumb: if you see a torii gate, it's a shrine. If you see a large Buddha statue or an incense burner, it's a temple. When in doubt, look for signage. Most major sites have English-language information boards near the entrance.
            </p>

            {/* Shrine Step-by-Step */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              At a Shrine: Step-by-Step
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Shinto shrines follow a specific sequence of rituals that has remained largely unchanged for centuries. Here's the complete process from the moment you arrive to the moment you leave.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Entering Through the Torii Gate
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As you approach the torii gate, pause briefly and offer a <strong className="text-foreground">shallow bow</strong> before passing through. This is your greeting to the kami (deity) who resides within the shrine grounds. Think of it as knocking before entering someone's home. Once through the gate, <strong className="text-foreground">walk along the sides of the approach path</strong>, not straight down the center. The center of the path, called the <strong className="text-foreground">sei-chu</strong>, is considered the pathway for the deity. Walking along the left or right side shows respect by leaving the deity's path clear. You'll notice that most Japanese visitors naturally drift to one side.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/nikko-toshogu-stone-torii-gate.jpg"
                alt="Visitors approaching through a stone torii gate at Nikko Toshogu shrine with ornate Yomeimon gate visible beyond"
                loading="lazy"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Walking through the stone torii at Nikko Toshogu — notice how visitors naturally walk to the sides, leaving the center path clear
              </figcaption>
            </figure>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Temizu: The Hand-Washing Purification
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Before approaching the main hall, you'll find a water pavilion called the <strong className="text-foreground">temizuya</strong> (or chozuya). This is where you purify yourself before meeting the deity. The ritual represents washing away the impurities of the outside world. Here's the correct sequence:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Step 1:</strong> Pick up the ladle (hishaku) with your right hand and scoop water from the basin.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Step 2:</strong> Pour water over your left hand, letting it flow off your fingertips.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Step 3:</strong> Transfer the ladle to your left hand and pour water over your right hand.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Step 4:</strong> Transfer the ladle back to your right hand, cup a small amount of water in your left palm, and use it to rinse your mouth. (Do not drink directly from the ladle.) Quietly spit the water beside the basin, not back into it.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Step 5:</strong> Tilt the ladle vertically so the remaining water runs down the handle, cleaning it for the next person. Replace the ladle face-down on the stand.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Don't worry about memorizing every detail. Many temizuya now have instruction signs in English, and since the pandemic, some have been closed or simplified. If the water isn't flowing or the ladles have been removed, you can simply skip this step.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/shrine-chozuya-dragon-purification.jpg"
                alt="Dragon-shaped water spout at a chozuya purification fountain with bamboo ladles at a Japanese shrine"
                loading="lazy"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                A chozuya with a dragon water spout — look for the bamboo ladles and follow the five-step purification sequence
              </figcaption>
            </figure>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Prayer: Ni-hai, Ni-hakushu, Ichi-hai
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At the main hall (haiden), you'll see a wooden offering box (saisen-bako) and a thick rope with a bell. Here's the standard prayer ritual:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Toss a coin</strong> into the offering box. A <strong className="text-foreground">¥5 coin</strong> is traditional. The word for five yen, "go-en," is a homophone for "good connection" or "good fortune." But any amount is fine.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Ring the bell</strong> by shaking the rope gently (if there is one). This alerts the deity to your presence.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Bow deeply twice</strong> (ni-hai), about a 90-degree angle from the waist.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Clap your hands twice</strong> (ni-hakushu). Hold your hands at chest height and clap firmly. The sound is said to attract the deity's attention and express joy.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">With your hands together, offer a moment of silent prayer or reflection.</strong> You can make a wish, express gratitude, or simply clear your mind.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Bow deeply once more</strong> (ichi-hai) to conclude.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The phrase to remember is <strong className="text-foreground">ni-hai, ni-hakushu, ichi-hai</strong>: two bows, two claps, one bow. A small number of shrines have their own variations (Izumo Taisha uses four claps instead of two), but 2-2-1 is correct at the vast majority of shrines across Japan.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Omikuji and Ema
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              After praying, many visitors enjoy two popular shrine activities. <strong className="text-foreground">Omikuji</strong> are paper fortune slips that you draw randomly (usually for ¥100-200). Fortunes range from dai-kichi (great blessing) to dai-kyo (great curse). If you draw a good fortune, keep it with you as a lucky charm. If you draw a bad fortune, the tradition is to <strong className="text-foreground">tie it to the designated wire rack or tree branches</strong> at the shrine, symbolically leaving the bad luck behind. The shrine's spiritual power is believed to neutralize it.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong className="text-foreground">Ema</strong> are small wooden plaques where you write a wish or prayer. Purchase one from the shrine office (usually ¥500-1,000), write your wish on the blank side (it's perfectly fine to write in English; the kami understand all languages), and hang it on the designated ema rack. You'll see hundreds of wishes hanging together, which in itself is a beautiful sight. Take a moment to read some. You'll find everything from exam prayers to health wishes to marriage hopes, giving you a touching window into what matters to people.
            </p>

            {/* Temple Step-by-Step */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              At a Temple: Step-by-Step
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Buddhist temple etiquette overlaps with shrine customs in some ways but differs in several important respects. The overall atmosphere tends to be quieter and more contemplative, reflecting Buddhism's emphasis on inner peace and mindfulness.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/nikko-ornate-temple-hall.jpg"
                alt="Ornate Buddhist temple hall at Nikko with red pillars, gold trim, and stone lanterns"
                loading="lazy"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                A richly decorated temple hall at Nikko — Buddhist temples tend to be more ornate and contemplative than Shinto shrines
              </figcaption>
            </figure>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Incense: Purifying with Smoke
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Many temples have a large incense burner (jokoro) near the entrance of the main hall. This is one of the most distinctive temple experiences. Purchase an incense stick from the nearby stand (usually ¥100), light it from the communal flame, and place it upright in the sand-filled burner. Then, use your hands to <strong className="text-foreground">waft the smoke toward yourself</strong>. The smoke is believed to have healing properties. Direct it toward any part of your body that needs attention. Many visitors wave smoke toward their heads for wisdom, or toward an injured area for healing. You'll see local visitors doing this enthusiastically, and it's a lovely moment of shared ritual.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              An important note: when lighting incense, if the flame doesn't go out on its own, <strong className="text-foreground">wave the stick gently to extinguish the flame</strong> rather than blowing on it. In Japanese Buddhist tradition, blowing with your mouth is considered impure because breath carries the "impurities" of the body. This is a small detail, but one that locals will notice and appreciate.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Prayer: Silent and Respectful
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At a temple, the prayer ritual is different from a shrine. Approach the main hall, toss a coin into the offering box, and then <strong className="text-foreground">press your palms together (gassho) and bow your head silently</strong>. Close your eyes and offer a moment of silent prayer or reflection. <strong className="text-foreground">Do not clap your hands</strong>. Clapping is a Shinto tradition exclusive to shrines. This is the single most common mistake visitors make, and now that you know the difference, you'll be ahead of many tourists. At a temple: silence. At a shrine: clapping. Simple.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Some temples, particularly those in the Zen tradition, may also have specific seated meditation areas where you can sit quietly for a few minutes. If meditation sessions are offered, they're a wonderful way to experience Buddhist practice directly, but always follow the instructions of the temple staff.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Removing Shoes
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Many temples require you to <strong className="text-foreground">remove your shoes</strong> before entering indoor areas, particularly main halls, tatami rooms, and garden viewing areas. Look for rows of shoes near the entrance or a shoe rack. These are clear signals to remove yours. Most temples provide plastic bags to carry your shoes or have shoe lockers available. Wearing clean, hole-free socks is a practical tip that will save you potential embarrassment. In the colder months, temple floors can be quite cold, so warm socks are a genuine comfort.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Photography Rules
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Photography policies vary widely between temples. Outdoor areas and gardens are almost always fine to photograph. However, many temples <strong className="text-foreground">prohibit photography inside their main halls</strong>, particularly near altar areas and sacred statues. Always look for signage. A camera icon with a red line through it is universal. When in doubt, ask a staff member or a monk. Even where photography is permitted, use your camera respectfully: no flash, no selfie sticks near sacred objects, and no posing in ways that could be seen as disrespectful (leaning on statues, mimicking Buddhist poses as a joke, and so on). Silence your shutter sound as well. The repeated click of cameras in a quiet prayer hall is genuinely disruptive.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/kamakura-serene-temple-garden.jpg"
                alt="Serene Japanese temple garden in Kamakura with traditional tea house and camellia flowers"
                loading="lazy"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                A temple garden in Kamakura — these tranquil spaces invite quiet contemplation, not selfie sessions
              </figcaption>
            </figure>

            {/* General Etiquette */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              General Etiquette for Both Temples and Shrines
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Beyond the specific rituals at each type of sacred site, there are several universal rules of behavior that apply wherever you go. These are the basics that will carry you through any temple or shrine visit in Japan with confidence.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Dress Code
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Japan doesn't enforce strict dress codes at most temples and shrines the way some religious sites in other countries do. You won't be turned away for wearing shorts or a tank top. That said, <strong className="text-foreground">covering your shoulders and knees is considered respectful</strong> at major sites, especially if you plan to enter inner halls or attend a ceremony. Casual and comfortable clothing is absolutely fine, just avoid anything that could be considered overly revealing or disrespectful. Hats should be removed when entering indoor areas and during prayer.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Noise and Behavior
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Keep your voice low.</strong> Temples and shrines are places of worship, not tourist attractions, even though millions of tourists visit them. Many Japanese visitors come to pray sincerely, and a loud conversation can disrupt their experience. You don't need to whisper, but be conscious of your volume, especially inside halls and near prayer areas. Put your phone on silent. If you're traveling with children, gently encourage them to use indoor voices.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Offerings and Money
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As mentioned earlier, <strong className="text-foreground">¥5 coins are considered the luckiest offering</strong> because "go-en" sounds like the Japanese word for "good connection" or "good fortune." Some people offer ¥50 (for extra luck) or ¥25 ("double good fortune"). Avoid ¥10 coins if you're superstitious, since "to-en" can sound like "far connection," implying disconnection. In practice, any amount is perfectly acceptable and appreciated. Just be sure to have small coins ready before you approach the offering box. Fumbling with your wallet in front of the prayer area holds up the line.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Things to Avoid
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Don't point at statues or sacred objects.</strong> Pointing is generally considered rude in Japan, and doubly so when directed at a deity or sacred image. If you need to indicate something, use an open hand.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Don't touch sacred objects</strong> unless explicitly invited to do so. Some temples have specific statues that visitors are encouraged to touch (like the healing smoke at Senso-ji), but these are clearly marked.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Don't eat or drink while walking</strong> within the temple or shrine grounds. This applies to water bottles as well. If you need a drink, step to the side and stand still. Eating while walking (tabearuki) is generally frowned upon in Japan, but it's especially inappropriate on sacred grounds.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Don't step on thresholds.</strong> When entering a temple gate or building, step over the raised wooden threshold at the bottom of the doorway, not on it. The threshold is considered a boundary between worlds, and stepping on it is disrespectful.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Don't litter or smoke</strong> on the grounds. This should go without saying, but it bears mentioning. Many temple and shrine grounds are maintained by volunteers and monks who take great pride in their cleanliness.
              </li>
            </ul>

            {/* Famous Temples & Shrines */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Famous Temples & Shrines to Visit
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Now that you know the etiquette, where should you put it into practice? Here are some of Japan's most iconic sacred sites that we frequently visit on our tours, each offering a unique experience and a chance to apply what you've learned.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Senso-ji Temple, Asakusa:</strong> Tokyo's oldest and most visited temple, dating back to 645 AD. The massive Kaminarimon (Thunder Gate) with its enormous red lantern is one of Japan's most recognizable landmarks. The Nakamise-dori approach is lined with traditional shops selling snacks, souvenirs, and crafts. Despite the crowds, Senso-ji retains a powerful spiritual atmosphere, especially early in the morning or in the evening when the lanterns glow. Our{" "}
                <Link to="/tours/asakusa" className="text-accent hover:underline">
                  Asakusa walking tour
                </Link>{" "}
                includes both Senso-ji and the adjacent Asakusa Shrine, giving you the perfect chance to practice both temple and shrine etiquette in one visit.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Meiji Shrine, Harajuku:</strong> Dedicated to Emperor Meiji and Empress Shoken, this grand Shinto shrine sits in the middle of a 170-acre forest right in the heart of Tokyo. Walking through the towering torii gate and along the gravel path surrounded by ancient trees, you'll forget you're in one of the world's busiest cities. Meiji Shrine is ideal for experiencing the torii approach, temizu purification, and the full 2-2-1 prayer ritual. We visit on our{" "}
                <Link to="/tours/shibuya-harajuku" className="text-accent hover:underline">
                  Shibuya & Harajuku tour
                </Link>
                , combining the shrine experience with the electric energy of Takeshita Street and Shibuya Crossing.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Tsurugaoka Hachimangu, Kamakura:</strong> The most important shrine in Kamakura, originally established in 1063. A dramatic, tree-lined approach road leads from the coast up to the hillside shrine, passing through massive torii gates. The shrine is dedicated to Hachiman, the patron deity of warriors, and its history is deeply intertwined with the samurai culture of medieval Japan. Explore it on our{" "}
                <Link to="/tours/kamakura-day-trip" className="text-accent hover:underline">
                  Kamakura day trip
                </Link>
                , which also includes the Great Buddha and serene bamboo groves.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Toshogu Shrine, Nikko:</strong> A UNESCO World Heritage Site and the most lavishly decorated shrine in all of Japan. Built as the mausoleum of Tokugawa Ieyasu, the founder of the Tokugawa shogunate, Toshogu features over 5,000 intricate carvings including the famous "see no evil, speak no evil, hear no evil" monkeys and the legendary Sleeping Cat (Nemuri-neko). The artistry here is staggering, and a guide is essential to decode the layers of symbolism in every panel. Join our{" "}
                <Link to="/tours/nikko-day-trip" className="text-accent hover:underline">
                  Nikko day trip
                </Link>{" "}
                to experience this masterpiece along with stunning natural scenery.
              </li>
            </ul>

            {/* Common Mistakes */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              The Most Common Mistakes Tourists Make
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              After guiding over 500 tours to Tokyo's temples and shrines, I've seen the same mistakes come up again and again. None of these are serious offenses (Japanese people are understanding of foreign visitors), but avoiding them will make your experience smoother and more respectful.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Not bowing before passing through the torii gate.</strong> Many visitors walk straight through without pausing. A brief, shallow bow at the torii is the simplest way to show respect. Think of it as saying "excuse me" before entering someone's home.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Getting the temizuya hand-washing order wrong.</strong> The most common error is pouring water directly into the mouth from the ladle, or washing both hands at the same time. Follow the right-left-mouth-handle sequence described above, and you'll stand out as someone who took the time to learn.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Taking excessive photos at the main hall.</strong> While outdoor photography is almost always fine, many visitors spend so much time photographing that they miss the actual experience. I always tell my guests: take one or two photos, then put the camera away and be present. The memory of participating in the ritual will last longer than any photo.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Misunderstanding offering amounts.</strong> Some travel blogs suggest offering ¥537 or other specific combinations for luck, but this is largely an internet myth. In practice, a single ¥5 coin (go-en = good connection) is the most meaningful offering. Don't overthink it. Sincerity matters far more than the amount.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Avoiding the incense smoke at Senso-ji.</strong> I often see visitors step away from the jokoro (incense burner) because they don't understand what it's for. The smoke is believed to have healing properties, so waft it toward yourself, directing it to any part of your body that needs attention. It's one of the most participatory rituals available to visitors, and skipping it means missing a beautiful moment.
              </li>
            </ul>

            {/* Detailed Differences */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Differences Between Buddhist Temples and Shinto Shrines
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              While I covered the basics earlier, many visitors on my tours ask for more detail about how to tell temples and shrines apart, and why the prayer methods differ. Here's a more comprehensive comparison that I share with my guests.
            </p>
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Visual Identification
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Torii gates</strong> are exclusive to shrines. If you see one, you're at a Shinto shrine. Temples have sanmon gates instead. These are larger, more architectural structures, often with statues of fierce guardian figures (Nio) on either side.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Incense burners (jokoro)</strong> are found at temples, not shrines. The large communal incense burner where visitors waft smoke toward themselves is a distinctly Buddhist tradition.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Shimenawa (sacred rope)</strong> and shide (zigzag paper streamers) indicate a shrine. These mark sacred boundaries in Shinto tradition and are never found at Buddhist temples.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Pagodas and Buddha statues</strong> indicate a temple. While some shrines have tower-like structures, the classic multi-tiered pagoda is a Buddhist architectural element.
              </li>
            </ul>
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Prayer Methods Compared
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This is the most important practical difference for visitors:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">At a shrine:</strong> Ni-hai, ni-hakushu, ichi-hai: two bows, two claps, one bow. The clapping is unique to Shinto and is believed to call the attention of the kami (deity) and express joy.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">At a temple:</strong> Gassho: press your palms together silently and bow your head. No clapping. The Buddhist tradition emphasizes inner stillness and quiet reflection.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a guide, the question I get most often is: "What happens if I accidentally clap at a temple?" The honest answer is: nothing bad. No one will be offended, and no spiritual consequence will follow. But knowing the difference shows genuine respect and allows you to engage more authentically with each tradition. It's the kind of detail that transforms you from a passive observer into an active participant.
            </p>

            {/* Senso-ji 30 Million */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Senso-ji Temple: What the 30 Million Annual Visitors Figure Really Means
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You'll often see Senso-ji described as receiving "30 million visitors annually," making it one of the most visited religious sites in the world. But is this figure accurate? As someone who visits Senso-ji multiple times a week with tour guests, I can offer some context.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The 30 million figure comes from surveys conducted by the Tokyo Metropolitan Government's Bureau of Industrial and Labor Affairs (now the Bureau of Tourism and Local Economy), which tracks visitor numbers at major tourist destinations across the city. This number includes both foreign tourists and domestic Japanese visitors, as well as repeat visitors throughout the year. It's an estimate rather than an exact count (Senso-ji doesn't have turnstiles), but it's based on systematic survey methodology and is widely cited in official Tokyo tourism statistics.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              What does this mean in practice? On a busy weekend afternoon, the Nakamise-dori approach can feel genuinely packed, with shoulder-to-shoulder crowds stretching from Kaminarimon all the way to the main hall. However, the experience varies dramatically depending on when you visit.
            </p>
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Best Times to Visit Senso-ji (Manabu's Advice)
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Early morning (6:00–7:30 AM):</strong> The temple grounds are open 24 hours, and the main hall opens at 6:00 AM (6:30 AM from October to March). At this hour, you'll share the space with only a handful of early risers and local worshippers. The morning light on the pagoda is spectacular, and you can experience the rituals in near-silence. This is my top recommendation.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Weekday mornings (before 10 AM):</strong> Still manageable crowds. You can walk Nakamise-dori comfortably and take photos without crowds in the background.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Evening (after 5 PM):</strong> The Nakamise shops close around 5–6 PM, but the temple grounds remain open. The illuminated Kaminarimon and five-story pagoda at night are magical, and the crowds thin significantly after the shops close.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Avoid:</strong> Weekend afternoons (especially Saturday 11 AM – 3 PM), national holidays, and the first three days of January (hatsumode, the traditional New Year's shrine visit, which draws millions).
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              On my{" "}
              <Link to="/tours/asakusa" className="text-accent hover:underline">
                private Asakusa walking tour
              </Link>
              , I always time our visit to avoid the worst crowds, and I know the quieter corners of the temple complex that most visitors walk right past. Experiencing Senso-ji with expert guidance makes all the difference between feeling overwhelmed by crowds and truly appreciating what makes this 1,400-year-old temple so special.
            </p>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                Want to visit Tokyo's temples and shrines with an expert guide?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Knowing the etiquette is one thing. Having someone beside you to explain the history, symbolism, and hidden details brings these sacred sites to life. On our tours, I walk you through every step of the rituals, share stories that guidebooks miss, and answer all your questions in real time. Whether it's your first shrine visit or your tenth, there's always something new to discover.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/tours" className="btn-accent">
                  Browse Private Tokyo Tours
                </Link>
                <Link to="/contact" className="btn-outline">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="heading-section text-foreground mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Can I visit temples and shrines for free?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Most temples and shrines in Tokyo are free to enter. Major sites like Senso-ji, Meiji Shrine, and Asakusa Shrine have no entrance fee. Some temples charge a small admission (typically ¥300–500) for special inner gardens, treasure halls, or seasonal exhibitions. Shinjuku Gyoen, while not a temple, charges ¥500. In general, the core worship areas are always free. You can participate in prayer rituals, buy omikuji fortune slips, and experience the atmosphere without any entrance cost.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    What should I wear to a temple or shrine in Japan?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    There is no strict dress code at most Tokyo temples and shrines. You won't be refused entry for wearing casual clothing, shorts, or sandals. That said, covering your shoulders and knees is considered respectful, especially if you plan to enter inner halls or attend a ceremony. Comfortable walking shoes are essential, as many temple grounds involve gravel paths and stairs. Wear clean socks without holes, as you may need to remove your shoes at some temples. Hats should be removed when entering indoor worship areas.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Is it disrespectful to take photos at temples?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Photography rules vary by location. Outdoor areas, gardens, and building exteriors are almost always fine to photograph. Many temples prohibit photography inside main halls and near sacred statues. Look for camera icons with a red line through them. Even where allowed, use discretion: no flash, no selfie sticks near sacred objects, and silence your shutter sound. When in doubt, ask a staff member. The key principle is to be present and respectful rather than treating the visit purely as a photo opportunity.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    What is the correct way to pray at a Japanese shrine?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The standard practice at Shinto shrines is called ni-hai, ni-hakushu, ichi-hai: two deep bows, two claps, then one final deep bow. Before praying, toss a coin (a ¥5 coin is traditional) into the offering box and ring the bell if one is present. At Buddhist temples, the ritual is different: press your palms together silently (gassho) and bow your head without clapping. The most important thing is to approach with sincerity. Japanese people genuinely appreciate foreign visitors making the effort to participate respectfully.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Temple & Shrine Etiquette in Japan: A Complete Guide",
            "description": "Japan temple and shrine etiquette explained by a licensed Tokyo guide with 500+ tours. Dos and don'ts, common mistakes, and insider tips for visiting Senso-ji and beyond.",
            "author": {
              "@type": "Person",
              "name": "Manabu",
              "jobTitle": "National Government Licensed Guide Interpreter",
              "url": "https://tanuki-tabi-travel.com/about",
            },
            "datePublished": "2026-02-25",
            "dateModified": "2026-03-07",
            "publisher": {
              "@type": "Organization",
              "name": "Tanuki Tabi Travel",
              "url": "https://tanuki-tabi-travel.com",
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://tanuki-tabi-travel.com/blog/japan-temple-shrine-etiquette",
            },
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Can I visit temples and shrines for free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most temples and shrines in Tokyo are free to enter. Major sites like Senso-ji, Meiji Shrine, and Asakusa Shrine have no entrance fee. Some temples charge a small admission (typically ¥300–500) for special inner gardens, treasure halls, or seasonal exhibitions. In general, the core worship areas are always free.",
                },
              },
              {
                "@type": "Question",
                "name": "What should I wear to a temple or shrine in Japan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "There is no strict dress code at most Tokyo temples and shrines. You won't be refused entry for wearing casual clothing. Covering your shoulders and knees is considered respectful, especially if you plan to enter inner halls. Comfortable walking shoes are essential, and wear clean socks as you may need to remove your shoes at some temples.",
                },
              },
              {
                "@type": "Question",
                "name": "Is it disrespectful to take photos at temples?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Photography rules vary by location. Outdoor areas are almost always fine. Many temples prohibit photography inside main halls and near sacred statues. Even where allowed, use discretion: no flash, no selfie sticks near sacred objects, and silence your shutter sound. When in doubt, ask a staff member.",
                },
              },
              {
                "@type": "Question",
                "name": "What is the correct way to pray at a Japanese shrine?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The standard practice at Shinto shrines is ni-hai, ni-hakushu, ichi-hai: two deep bows, two claps, then one final deep bow. Toss a coin into the offering box and ring the bell before praying. At Buddhist temples, press your palms together silently (gassho) and bow without clapping.",
                },
              },
            ],
          }),
        }}
      />
    </Layout>
  );
};

export default TempleEtiquette;
