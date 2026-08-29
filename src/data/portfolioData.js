export const portfolioData = {
  personal: {
    firstName: "Supriya",
    lastName: "Naregal",
    greeting: "Hi, my name is",
    tagline: "M.A Advertising and Public Relations",
    
    // Image slots for Canva hero photos
    images: {
      leftPhoto: "/assets/hero/hero-left.webp",      // Left tilted photo (red shirt)
      centerPhoto: "/assets/hero/hero-center.png",   // Center cutout (standing pose with sunglasses)
      rightPhoto: "/assets/hero/hero-right.jpeg",    // Right tilted photo (black top)
    },

    // Bottom 2-column editorial copy
    introColumns: {
      left: "I love good conversations, new places, trying random things, and going down rabbit holes just because something caught my interest.",
      right: "At work, I bring that same energy. I like people, ideas, creating things, and figuring out how to make them work. There's always something new catching my eye.",
    },

    socialLinks: {
      linkedin: "http://www.linkedin.com/in/supriyanaregal",
      email: "mailto:supriyavnaregal@gmail.com",
    },
  },

  // Section 2: Things I Notice! (My Take)
  thingsINotice: {
    title: "Things I Notice!",
    items: [
      {
        id: "billboard",
        label: "interactive billboard/campaigns",
        image: "/assets/things-i-notice/billboard.png",
      },
      {
        id: "trends",
        label: "whimsymaxxingg/trends",
        image: "/assets/things-i-notice/trends.png",
      },
      {
        id: "creators",
        label: "creators/comeback",
        image: "/assets/things-i-notice/creators.png",
      },
      {
        id: "memes",
        label: "memes/conversations",
        image: "/assets/things-i-notice/memes.png",
      },
    ],
  },

  // Section 3: WHAT I BRING? (Why Me)
  whatIBring: {
    title: "WHAT I BRING?",
    pillars: [
      {
        id: "pr",
        label: "PR & Communication",
        image: "/assets/what-i-bring/pr-communication.png",
        labelPosition: "top",
      },
      {
        id: "influencer",
        label: "Influencer Marketing",
        image: "/assets/what-i-bring/influencer-marketing.png",
        labelPosition: "bottom",
      },
      {
        id: "creative",
        label: "Creative & Campaign Thinking",
        image: "/assets/what-i-bring/creative-thinking.png",
        labelPosition: "top",
      },
      {
        id: "digital",
        label: "AI & Digital Creation",
        image: "/assets/what-i-bring/ai-digital-creation.png",
        labelPosition: "bottom",
      },
    ],
  },

  // Section 4: Stories That Got Me Seen! (Case Study 1)
  storiesThatGotMeSeen: {
    titleLines: ["STORIES", "THAT", "GOT ME", "SEEN!"],
    role: "Apollo Spectra · PR Internship",
    points: [
      "Communication with doctors/clients",
      "Writing for industry and feature articles",
      "Pitch to media and maintain relations",
      "Got seen along with Coverages",
    ],
    papers: [
      {
        id: "paper-1",
        src: "/assets/stories/1-paper.png",
        alt: "Press Article 1 - Amulyavani Obstructive Sleep Apnea Coverage",
        number: 1,
      },
      {
        id: "paper-2",
        src: "/assets/stories/3-paper.png",
        alt: "Press Article 2 - IndiaTV Pain Management Options Coverage",
        number: 2,
      },
      {
        id: "paper-3",
        src: "/assets/stories/2-paper.png",
        alt: "Press Article 3 - Hindustan Times Gut Microbiota & Kidney Health",
        number: 3,
      },
    ],
  },

  // Section 5: I Went Creator Hunting (Case Study 2)
  creatorHunting: {
    titleLines: ["I WENT", "CREATOR", "HUNTING"],
    role: "Boond Fragrances · Influencer Marketing",
    points: [
      "Found → relevant creators",
      "Reached out → creator communication",
      "Connected → brand × creator × audience",
      "Moved it forward → collaborations",
    ],
    cards: [
      { id: "ss-1", src: "/assets/creator-hunting/1-ss.png", alt: "Creator Profile @kadynjulia", number: 1 },
      { id: "ss-2", src: "/assets/creator-hunting/2-ss.png", alt: "Creator Profile @madidecostee", number: 2 },
      { id: "ss-3", src: "/assets/creator-hunting/3-ss.png", alt: "Creator Profile @hargun_kaurrrrr", number: 3 },
      { id: "ss-4", src: "/assets/creator-hunting/4-ss.png", alt: "Creator Profile @aleshaahossain", number: 4 },
      { id: "ss-5", src: "/assets/creator-hunting/5-ss.PNG", alt: "Outreach DM Collaboration Reply Khushi", number: 5 },
      { id: "ss-6", src: "/assets/creator-hunting/6-ss.PNG", alt: "Outreach DM Collaboration Reply Madi", number: 6 },
    ],
  },

  // Section 6: Brand Building - Popo Ventures (Case Study 3)
  brandBuilding: {
    title: "OWNING THE NICHE",
    subtitle: "(Case Study)",
    ventureTitle: ["POPO", "VENTURES", "GOURMET IDEA", "TO IDENTITY"],
    logos: [
      {
        id: "pizza-bakery",
        name: "The Pizza Bakery",
        image: "/assets/brand-building/Pizza Bakery Logo.png",
      },
      {
        id: "paris-panini",
        name: "Paris Panini",
        image: "/assets/brand-building/Paris Panii Logo.png",
      },
      {
        id: "smash-guys",
        name: "Smash Guys",
        image: "/assets/brand-building/Smash Guys Logo.png",
      },
    ],
    summary: "All three serve gourmet food, but each found its own niche, gave it a personality, and let that identity do the work!",
    items: [
      {
        id: "panini",
        description: "French gourmet street food with a focus on hygienic, quality food.",
        image: "/assets/brand-building/Paris Panini Sandwich.png",
        imagePosition: "right",
      },
      {
        id: "pizza",
        description: "Gourmet, Neapolitan-style sourdough pizza in a market led by large chains.",
        image: "/assets/brand-building/PB Pizza.png",
        imagePosition: "left",
      },
      {
        id: "burger",
        description: "Found a gap for an authentic American-style smash-burger experience in India.",
        image: "/assets/brand-building/Smash Guys Burger.png",
        imagePosition: "right",
      },
    ],
  },

  // Section 7: And They Come With Some Personality!!
  brandPersonality: {
    title: "AND THEY COME WITH SOME PERSONALITY!!",
    venues: [
      {
        id: "pizza-bakery",
        name: "Pizza Bakery",
        text: "Pizza Bakery: Rustic, playful, communal where artisanal pizza people gather around.",
        image: "/assets/evolution/Pizza Bakery.png",
      },
      {
        id: "paris-panini",
        name: "Paris Panini",
        text: "Paris Panini: Parisian, youthful, art-forward gourmet made to feel accessible, not fancy.",
        image: "/assets/evolution/Paris Panini.png",
      },
      {
        id: "smash-guys",
        name: "Smash Guys",
        text: "Smash Guys: American diner, loud, indulgent, nostalgic premium burgers with zero pretension.",
        image: "/assets/evolution/Smash Guys.png",
      },
    ],
  },

  // Section 8: How Did They Evolve
  brandEvolution: {
    title: "HOW DID THEY EVOLVE",
    subtitle: "Finding a niche with a good idea is easy! Getting people to actually show up for it is the hard part.",
    items: [
      {
        id: "pizza-bakery",
        image: "/assets/evolution/PB.png",
        text: "Built credibility through product-first intent and expanded across 15+ locations in Bangalore.",
      },
      {
        id: "food-truck",
        image: "/assets/evolution/Paris Panini Foodtruck.png",
        text: "Started as a food truck, but traffic restrictions forced a pivot to evolve into casual dining with 17+ locations in Bangalore.",
      },
      {
        id: "smash-guys",
        image: "/assets/evolution/Smash pop-ups-Photoroom.png",
        text: "Initially played around with curiosity on socials, then tested demand through pop-ups and secret drops. Now has 5+ dedicated outlets in Bangalore.",
      },
    ],
    summary: "They worked hard to nail the product, prove demand, and expand in that order every time without missing a step.",
  },

  // Section 9: When Founder Become The Face!
  founderFace: {
    titleLines: ["WHEN", "FOUNDER", "BECOME", "THE", "FACE!"],
    topVideo: {
      id: "store-visit",
      video: "/assets/founder-face/video-store-visit.mp4",
      title: "Store Visit Surprise Check",
    },
    reels: [
      {
        id: "founder-talk",
        video: "/assets/founder-face/video-founder-talk.mp4",
        title: "Founder Video Q&A",
      },
      {
        id: "kitchen-tour",
        video: "/assets/founder-face/video-kitchen-tour.mp4",
        title: "Kitchen & Staff Walkthrough",
      },
    ],
    paragraphs: [
      "Saturday surprise checks became their thing, and a product builds trust only when the founder who shows up builds a relationship.",
      "Beyond that, they do podcasts, interviews, and quick F&B tips. Same person with same hook and same voice.",
    ],
  },

  // Section 10: The Strategy I'd Bring - GIVA Case Study
  prSocials: {
    mainTitle: "THE STRATEGY I'D BRING",
    caseTitleLines: ["GIVA", "FROM", "BACKLASH", "TO", "BELIEF"],
    campaignImage: "/assets/pr-strategy/giva-campaign.png",
    apologyImage: "/assets/pr-strategy/kriti-message.jpeg",
    context: "What happened: Rakhi ad, backlash, ad pulled, apology posted.",
    approachHeading: "How my approach would look like",
    phases: [
      {
        id: "phase-1",
        title: "Phase 1 – Stop",
        body: "Ad down, apology posted. Standard crisis managed, necessarily fast.",
        colorScheme: "dark-yellow",
        rotation: "-1.5deg",
      },
      {
        id: "phase-2",
        title: "Phase 2 – Reflect",
        body: 'After the dust settles, GIVA doesn\'t just move on quietly. It reopens the conversation on its own terms, through Kirti: "Was this really about the clothing, or a bigger idea of what respect should look like?"',
        colorScheme: "dark-orange",
        rotation: "1.8deg",
      },
      {
        id: "phase-3",
        title: "Phase 3 – Prove",
        body: 'Kirti fronts the message that devotion was never about fabric; it was carried by ancestors long before anyone decided what\'s "appropriate." So, Wear It Your Way!',
        colorScheme: "dark-blue",
        rotation: "-1.2deg",
      },
      {
        id: "phase-4",
        title: "Phase 4 – Sustain",
        body: 'A "Wear It Your Way" festive collection, pieces reflecting how women across India actually celebrate. Different regions, different stories, one belief: tradition worn on her own terms.',
        coreThought: "Core thought: Culture is carried from the heart and not measured.",
        colorScheme: "dark-green",
        rotation: "2deg",
      },
    ],
    inHerWordsHeading: "In Her Words – What the campaign would actually sound like from Kriti!",
    wordsCards: [
      {
        id: "word-1",
        body: '"Long before there were rules about what\'s \'appropriate,\' our ancestors adorned themselves the way their hearts told them to. Devotion was never measured in fabric; it was carved in temples, worn in rituals, passed down in stories, not in inches."',
        colorScheme: "dark-yellow",
        rotation: "-1.5deg",
      },
      {
        id: "word-2",
        body: '"My ancestors didn\'t ask what was appropriate. They asked what was meaningful. That\'s the culture every woman carries in her own way, and GIVA stands with all of it."',
        colorScheme: "dark-orange",
        rotation: "1.8deg",
      },
      {
        id: "word-3",
        body: "Wear It Your Way.",
        isHighlight: true,
        colorScheme: "dark-blue",
        rotation: "-1.2deg",
      },
      {
        id: "word-4",
        body: "From GIVA: Every woman wears her culture differently, and every way is right. That’s who we are!",
        colorScheme: "dark-pink",
        rotation: "2deg",
      },
    ],
  },

  // Section 11: Finding Right Voice For Your Brand! (Tin and Tah)
  influencerVoice: {
    mainTitle: "FINDING RIGHT VOICE FOR YOUR BRAND!",
    subtitle: "(INFLUENCER MARKETING)",
    brandTitleLines: ["TIN", "AND TAH", "THE", "CRAFT", "YOU CAN", "CARRY"],
    heroImage: "/assets/influencer-voice/tin-and-tah-hero.png",
    heroStatement: "The craft already has a story. What it needs is more eyes on it, especially outside India.",
    middleImage: "/assets/influencer-voice/model-box-pose.png",
    middleStatement: "People love bold, detailed pieces! They just don't know the craft or story sitting behind them.",
    creatorCards: [
      {
        id: "diaspora",
        image: "/assets/influencer-voice/creator-diaspora.png",
        caption: "start with diaspora creators, people of Indian origin abroad who already get the culture and already have an audience that isn't Indian.",
      },
      {
        id: "reach",
        image: "/assets/influencer-voice/creator-reach.png",
        caption: "diaspora creators build credibility first, then their reach brings in non-Indian creators who genuinely love bold, detailed fashion.",
      },
      {
        id: "unboxing",
        image: "/assets/influencer-voice/creator-unboxing.png",
        caption: "start with barter and gifting, move to paid once the interest is real.",
      },
      {
        id: "success",
        image: "/assets/influencer-voice/creator-success.png",
        caption: "At the end, success is creators wearing it without a second ask, tagging it themselves, & their followers asking \"where's this from?\"",
      },
    ],
  },

  // Section 12: OH, I ALSO MAKE THINGS (Flipkart & Voyante AI Campaign)
  creativeWorks: {
    mainTitle: "OH, I ALSO MAKE THINGS",
    flipkart: {
      title: "Flipkart Conceptual Campaigns",
      posters: [
        {
          id: "flipkart-deals",
          title: "Bade Bhi Bacche Ban Jaayein",
          image: "/assets/flipkart/flipkart-deals.jpeg",
        },
        {
          id: "flipkart-ivity",
          title: "IVITY - Smart-ivity For Productivity",
          image: "/assets/flipkart/flipkart-ivity.jpeg",
        },
      ],
    },
    voyante: {
      brand: "Voyante by Voyage",
      subheading: "Speculative AD Campaign with AI",
      productImage: "/assets/voyante/Voyanta Product.jpg.jpeg",
      billboardImage: "/assets/voyante/Voyanta Billboard.jpg.jpeg",
      storyboardTitle: "Storyboard",
      storyboardSub: "(TV/YouTube/OTT Commercial)",
      scenes: [
        {
          id: "scene-1",
          title: "Scene 1: The Abandoned Bag",
          image: "/assets/voyante/Scene-1.jpeg",
        },
        {
          id: "scene-2",
          title: "Scene 2: Agents Enters Frame",
          image: "/assets/voyante/Scene-2.jpeg",
        },
        {
          id: "scene-3",
          title: "Scene 3: Touchscreen Activation",
          image: "/assets/voyante/Scene-3.jpeg",
        },
        {
          id: "scene-4",
          title: "Scene 4: The Comic Extraction",
          image: "/assets/voyante/Scene-4.jpeg",
        },
        {
          id: "scene-5",
          title: "Scene 5: Shoppable Freeze-Frame Moment",
          image: "/assets/voyante/Scene-5.jpeg",
        },
      ],
    },
    aiVideo: {
      title: "AI Video 'Not everything is real' starring me.",
      videoUrl: "/assets/ai-video/ai-music-video.mp4",
      poster: "/assets/ai-video/ai-video-poster.jpg",
    },
  },

  // Section 13: Educational Side Quests
  sideQuests: {
    title: "EDUCATIONAL SIDE QUESTS",
    quests: [
      {
        id: "conclave",
        title: "NDTV Marathi Emerging Business Conclave - Mumbai Chapter",
        image: "/assets/side-quests/conclave-event.png",
      },
      {
        id: "auction",
        title: "UTT Player Auction Event",
        image: "/assets/side-quests/auction-event.png",
      },
      {
        id: "awards",
        title: "Excellence Awards Ceremony",
        image: "/assets/side-quests/excellence-awards.png",
      },
    ],
  },

  // Section 14: Why I'm Worth A Shot!
  worthAShot: {
    title: "WHY I'M WORTH A SHOT!",
    subtitle: "You've seen my work; now here's a bit about how I show up too.",
    tvIcon: "/assets/side-quests/TV-image.png",
    cards: [
      {
        id: "proactive",
        column: "left",
        image: "/assets/worth-a-shot/worth-proactive.png",
        caption: "Proactive – I don't wait to be told; I'm already on it",
      },
      {
        id: "detail",
        column: "right",
        image: "/assets/worth-a-shot/worth-detail.png",
        caption: "Detail-obsessed – All the little things matter to me",
      },
      {
        id: "curiosity",
        column: "left",
        image: "/assets/worth-a-shot/worth-curiosity.png",
        caption: "Curiosity isn't effort, it's my favorite hobby",
      },
      {
        id: "learning",
        column: "right",
        image: "/assets/worth-a-shot/worth-learning.png",
        caption: "Always learning – I don't know it all, and that's the fun part",
      },
      {
        id: "people",
        column: "left",
        image: "/assets/worth-a-shot/worth-people.png",
        caption: "People person – I love being around people, figuring out what they need",
      },
    ],
  },

  // Section 15: Contact
  contact: {
    heading: "Let's work together",
    subheading: "Have a project in mind, an opportunity, or just want to say hi? Feel free to reach out!",
    email: "contact@example.com",
  },

  navLinks: [
    { label: "Case Study", href: "#case-study" },
    { label: "My Take", href: "#my-take" },
    { label: "Why Me", href: "#why-me" },
    { label: "Contact", href: "#contact" },
  ],
};
