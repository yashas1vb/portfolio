export const portfolioData = {
  personal: {
    firstName: "Supriya",
    lastName: "Naregal",
    greeting: "Hi, my name is",
    tagline: "M.A Advertising and Public Relations",
    
    // Image slots for Canva hero photos
    images: {
      leftPhoto: "/assets/hero/hero-left-rotated.webp",      // Left tilted photo (red shirt)
      centerPhoto: "/assets/hero/hero-center.webp",   // Center cutout (standing pose with sunglasses)
      rightPhoto: "/assets/hero/hero-right-rotated.webp",    // Right tilted photo (black top)
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
        image: "/assets/things-i-notice/billboard.webp",
      },
      {
        id: "trends",
        label: "whimsymaxxingg/trends",
        image: "/assets/things-i-notice/trends.webp",
      },
      {
        id: "creators",
        label: "creators/comeback",
        image: "/assets/things-i-notice/creators.webp",
      },
      {
        id: "memes",
        label: "memes/conversations",
        image: "/assets/things-i-notice/memes.webp",
      },
    ],
  },

  // Section 3: What I Bring? (Why Me)
  whatIBring: {
    title: "What I Bring?",
    pillars: [
      {
        id: "pr",
        label: "PR & Communication",
        image: "/assets/what-i-bring/pr-communication.webp",
        labelPosition: "top",
      },
      {
        id: "influencer",
        label: "Influencer Marketing",
        image: "/assets/what-i-bring/influencer-marketing.webp",
        labelPosition: "bottom",
      },
      {
        id: "creative",
        label: "Creative & Campaign Thinking",
        image: "/assets/what-i-bring/creative-thinking.webp",
        labelPosition: "top",
      },
      {
        id: "digital",
        label: "AI & Digital Creation",
        image: "/assets/what-i-bring/ai-digital-creation.webp",
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
        src: "/assets/stories/1-paper.webp",
        alt: "Press Article 1 - Amulyavani Obstructive Sleep Apnea Coverage",
        number: 1,
      },
      {
        id: "paper-2",
        src: "/assets/stories/3-paper.webp",
        alt: "Press Article 2 - IndiaTV Pain Management Options Coverage",
        number: 2,
      },
      {
        id: "paper-3",
        src: "/assets/stories/2-paper.webp",
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
      { id: "ss-1", src: "/assets/creator-hunting/1-ss.webp", alt: "Creator Profile @kadynjulia", number: 1 },
      { id: "ss-2", src: "/assets/creator-hunting/2-ss.webp", alt: "Creator Profile @madidecostee", number: 2 },
      { id: "ss-3", src: "/assets/creator-hunting/3-ss.webp", alt: "Creator Profile @hargun_kaurrrrr", number: 3 },
      { id: "ss-4", src: "/assets/creator-hunting/4-ss.webp", alt: "Creator Profile @aleshaahossain", number: 4 },
      { id: "ss-5", src: "/assets/creator-hunting/5-ss.webp", alt: "Outreach DM Collaboration Reply Khushi", number: 5 },
      { id: "ss-6", src: "/assets/creator-hunting/6-ss.webp", alt: "Outreach DM Collaboration Reply Madi", number: 6 },
    ],
  },

  // Section 6: Brand Building - Popo Ventures (Case Study 3)
  brandBuilding: {
    title: "Owning the Niche",
    subtitle: "(Case Study)",
    ventureTitle: ["POPO", "VENTURES", "GOURMET IDEA", "TO IDENTITY"],
    logos: [
      {
        id: "pizza-bakery",
        name: "The Pizza Bakery",
        image: "/assets/brand-building/Pizza Bakery Logo.webp",
      },
      {
        id: "paris-panini",
        name: "Paris Panini",
        image: "/assets/brand-building/Paris Panii Logo.webp",
      },
      {
        id: "smash-guys",
        name: "Smash Guys",
        image: "/assets/brand-building/Smash Guys Logo.webp",
      },
    ],
    summary: "All three serve gourmet food, but each found its own niche, gave it a personality, and let that identity do the work!",
    items: [
      {
        id: "panini",
        description: "French gourmet street food with a focus on hygienic, quality food.",
        image: "/assets/brand-building/Paris Panini Sandwich.webp",
        imagePosition: "right",
      },
      {
        id: "pizza",
        description: "Gourmet, Neapolitan-style sourdough pizza in a market led by large chains.",
        image: "/assets/brand-building/PB Pizza.webp",
        imagePosition: "left",
      },
      {
        id: "burger",
        description: "Found a gap for an authentic American-style smash-burger experience in India.",
        image: "/assets/brand-building/Smash Guys Burger.webp",
        imagePosition: "right",
      },
    ],
  },

  // Section 7: And They Come with Some Personality!!
  brandPersonality: {
    title: "And They Come with Some Personality!!",
    venues: [
      {
        id: "pizza-bakery",
        name: "Pizza Bakery",
        text: "Pizza Bakery: Rustic, playful, communal where artisanal pizza people gather around.",
        image: "/assets/evolution/Pizza Bakery.webp",
      },
      {
        id: "paris-panini",
        name: "Paris Panini",
        text: "Paris Panini: Parisian, youthful, art-forward gourmet made to feel accessible, not fancy.",
        image: "/assets/evolution/Paris Panini.webp",
      },
      {
        id: "smash-guys",
        name: "Smash Guys",
        text: "Smash Guys: American diner, loud, indulgent, nostalgic premium burgers with zero pretension.",
        image: "/assets/evolution/Smash Guys.webp",
      },
    ],
  },

  // Section 8: How Did They Evolve
  brandEvolution: {
    title: "How Did They Evolve",
    subtitle: "Finding a niche with a good idea is easy! Getting people to actually show up for it is the hard part.",
    items: [
      {
        id: "pizza-bakery",
        image: "/assets/evolution/PB.webp",
        text: "Built credibility through product-first intent and expanded across 15+ locations in Bangalore.",
      },
      {
        id: "food-truck",
        image: "/assets/evolution/Paris Panini Foodtruck.webp",
        text: "Began as a food truck, then pivoted due to traffic restrictions into a casual dining chain with 17+ Bangalore locations.",
      },
      {
        id: "smash-guys",
        image: "/assets/evolution/Smash pop-ups-Photoroom.webp",
        text: "Scaled from social media pop-ups to 5+ dedicated Bangalore outlets.",
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
    mainTitle: "The Strategy I'd Bring",
    caseTitleLines: ["GIVA", "FROM", "BACKLASH", "TO", "BELIEF"],
    campaignImage: "/assets/pr-strategy/giva-campaign.webp",
    apologyImage: "/assets/pr-strategy/kriti-message.webp",
    apologyImage2: "/assets/pr-strategy/message-2.webp",
    context: "What happened: Rakhi ad, backlash, ad pulled, apology posted.",
    approachHeading: "How My Approach Would Look Like",
    phases: [
      {
        id: "phase-1",
        title: "Phase 1 – Stand",
        body: "No pulling the ad. GIVA backs Kirti immediately, publicly, without hesitation.",
        colorScheme: "dark-yellow",
        rotation: "-1.5deg",
      },
      {
        id: "phase-2",
        title: "Phase 2 – Reflect",
        body: 'Instead of defending the ad line by line, GIVA reframes the conversation. Through Kirti: "This was never really about the clothing. It was about who gets to define respect."',
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
        colorScheme: "dark-pink",
        rotation: "2deg",
      },
    ],
    inHerWordsHeading: "GIVA Responds through Kriti!",
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
        body: "Campaign Tagline:\n\n\"wear it your way\"",
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
    mainTitle: "Finding Right Voice for Your Brand!",
    subtitle: "(SOCIAL MEDIA CONTENT STRATERGY)",
    brandTitleLines: ["TIN", "AND TAH", "THE", "CRAFT", "YOU CARRY"],
    heroImage: "/assets/influencer-voice/tin-and-tah-hero.webp",
    heroStatement: "The craft already has a story. What it needs is more eyes on it, especially outside India.",
    middleImage: "/assets/influencer-voice/model-box-pose.webp",
    middleStatement: "People love bold, detailed pieces! They just don't know the craft or story sitting behind them.",
    creatorCards: [
      {
        id: "diaspora",
        image: "/assets/influencer-voice/creator-diaspora.webp",
        caption: "Show it to a local artisan, any craft. They don't critique it, they make something inspired by it, in their own medium.",
      },
      {
        id: "reach",
        image: "/assets/influencer-voice/creator-reach.webp",
        caption: "Start with diaspora creators abroad, people who already get the culture and already have an audience that isn't Indian.",
      },
      {
        id: "unboxing",
        image: "/assets/influencer-voice/creator-unboxing.webp",
        caption: "Start with gifting first, go paid once the interest is real.",
      },
      {
        id: "success",
        image: "/assets/influencer-voice/creator-success.webp",
        caption: "Success is creators wearing it without a second ask, tagging it themselves, and followers asking where it's from.",
      },
    ],
  },

  // Section 12: Oh, I Also Make Things (Flipkart & Voyante AI Campaign)
  creativeWorks: {
    mainTitle: "Oh, I Also Make Things",
    flipkart: {
      title: "Flipkart Conceptual Campaigns",
      posters: [
        {
          id: "flipkart-deals",
          title: "Bade Bhi Bacche Ban Jaayein",
          image: "/assets/flipkart/flipkart-deals.webp",
        },
        {
          id: "flipkart-ivity",
          title: "IVITY - Smart-ivity For Productivity",
          image: "/assets/flipkart/flipkart-ivity.webp",
        },
      ],
    },
    voyante: {
      brand: "Voyante by Voyage",
      subheading: "Speculative AD Campaign with AI",
      productImage: "/assets/voyante/voyante-product.webp",
      billboardImage: "/assets/voyante/voyante-billboard.webp",
      storyboardTitle: "Storyboard",
      storyboardSub: "(TV/YouTube/OTT Commercial)",
      scenes: [
        {
          id: "scene-1",
          title: "Scene 1: The Abandoned Bag",
          image: "/assets/voyante/Scene-1.webp",
        },
        {
          id: "scene-2",
          title: "Scene 2: Agents Enters Frame",
          image: "/assets/voyante/Scene-2.webp",
        },
        {
          id: "scene-3",
          title: "Scene 3: Touchscreen Activation",
          image: "/assets/voyante/Scene-3.webp",
        },
        {
          id: "scene-4",
          title: "Scene 4: The Comic Extraction",
          image: "/assets/voyante/Scene-4.webp",
        },
        {
          id: "scene-5",
          title: "Scene 5: Shoppable Freeze-Frame Moment",
          image: "/assets/voyante/Scene-5.webp",
        },
      ],
    },
    aiVideo: {
      title: "AI Video 'Not everything is real' starring me.",
      videoUrl: "/assets/ai-video/ai-music-video.mp4",
      poster: "/assets/ai-video/ai-video-poster.webp",
    },
  },

  // Section 13: Educational Side Quests
  sideQuests: {
    title: "Educational Side Quests",
    quests: [
      {
        id: "conclave",
        title: "NDTV Marathi Emerging Business Conclave - Mumbai Chapter",
        image: "/assets/side-quests/conclave-event.webp",
      },
      {
        id: "auction",
        title: "UTT Player Auction Event",
        image: "/assets/side-quests/auction-event.webp",
      },
      {
        id: "awards",
        title: "Excellence Awards Ceremony",
        image: "/assets/side-quests/excellence-awards.webp",
      },
    ],
  },

  // Section 14: Why I'm Worth A Shot!
  worthAShot: {
    title: "WHY I'M WORTH A SHOT!",
    subtitle: "You've seen my work; now here's a bit about how I show up too.",
    tvIcon: "/assets/side-quests/TV-image.webp",
    cards: [
      {
        id: "proactive",
        column: "left",
        image: "/assets/worth-a-shot/worth-proactive.webp",
        caption: "Proactive – I don't wait to be told; I'm already on it",
      },
      {
        id: "detail",
        column: "right",
        image: "/assets/worth-a-shot/worth-detail.webp",
        caption: "Detail-obsessed – All the little things matter to me",
      },
      {
        id: "curiosity",
        column: "left",
        image: "/assets/worth-a-shot/worth-curiosity.webp",
        caption: "Curiosity isn't effort, it's my favorite hobby",
      },
      {
        id: "learning",
        column: "right",
        image: "/assets/worth-a-shot/worth-learning.webp",
        caption: "Always learning – I don't know it all, and that's the fun part",
      },
      {
        id: "people",
        column: "left",
        image: "/assets/worth-a-shot/worth-people.webp",
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
