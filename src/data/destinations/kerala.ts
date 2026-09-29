import { Destination } from '../../types/travel';

export const keralaDestination: Destination = {
  id: 'kerala',
  name: 'Kerala',
  country: 'India',
  region: 'Malabar Coast',
  tagline: "God's Own Country: Emerald Backwaters, Spice Hills, and Ayurvedic Harmony",
  heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600100397608-f010f443b74f?auto=format&fit=crop&w=800&q=80',
  ],
  coordinates: [9.9312, 76.2673],
  intro: {
    whereItIs: 'At the southwestern tip of India between the Arabian Sea and the mist-clad Western Ghats mountains.',
    whyPeopleVisit: 'Famous for tranquil houseboat cruises through palm-fringed backwaters, tea and spice plantations of Munnar, classical Kathakali dance-theatre, authentic Ayurvedic healing, and peaceful coastal beaches.',
    bestTimeToVisit: 'September to March for pleasant sunny weather and calm backwaters (22°C - 32°C); June to August for therapeutic monsoon Ayurveda.',
    generalAtmosphere: 'Lush, rejuvenating, culturally profound, tranquil, and deeply connected with nature.',
    approxCostLevel: 'Moderate to Luxury',
    recommendedDuration: '5 to 7 Days',
  },
  touristSpots: [
    {
      id: 'alleppey-backwaters',
      name: 'Alleppey (Alappuzha) Backwaters',
      category: 'Nature',
      isLesserKnown: false,
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
      description: 'An intricate labyrinth of emerald canals, lagoons, and lakes where traditional thatched wooden houseboats (Kettuvallam) glide past paddy fields.',
      location: 'Alappuzha District',
      estimatedDuration: 'Day cruise or overnight stay',
      approxCost: '₹8,000 - ₹18,000 / night (full private houseboat with crew and meals)',
      openingHours: 'Houseboats cruise until 5:30 PM (docked overnight)',
      distanceFromStay: '1.5 hours south of Kochi',
      whyWorthVisiting: 'Experience living on water as village life unfolds: children canoeing to school, fishermen casting nets, and golden sunsets reflecting on calm waterways.',
      lat: 9.4981,
      lng: 76.3388,
    },
    {
      id: 'munnar-tea-hills',
      name: 'Munnar Rolling Tea Estates & Top Station',
      category: 'Mountains',
      isLesserKnown: false,
      image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
      description: 'Verdant rolling hill station at 1,600m altitude carpeted in velvety emerald tea gardens, misty peaks, and colonial tea bungalows.',
      location: 'Idukki District',
      estimatedDuration: '2 Days',
      approxCost: 'Free entry (Tea Museum ₹125)',
      openingHours: 'Museum 9:00 AM - 4:00 PM',
      distanceFromStay: '3.5 hours scenic drive from Kochi',
      whyWorthVisiting: 'Crisp mountain air, aromatic tea factory tastings, and spotting the endangered Nilgiri Tahr mountain goat.',
      lat: 10.0889,
      lng: 77.0595,
    },
    {
      id: 'fort-kochi',
      name: 'Fort Kochi & Chinese Fishing Nets',
      category: 'Culture',
      isLesserKnown: false,
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
      description: 'Historic seaside town blending Portuguese churches, Dutch palaces, Jewish synagogues, spice godowns, and cantilevered Chinese fishing nets.',
      location: 'Kochi Harbour',
      estimatedDuration: 'Full Day',
      approxCost: 'Free walking',
      openingHours: 'Accessible all day',
      distanceFromStay: 'Kochi coastal hub',
      whyWorthVisiting: 'Watch the sun set behind giant bamboo cantilever nets operated by four-man counterweight teams since the 14th century.',
      lat: 9.9658,
      lng: 76.2427,
    }
  ],
  culture: {
    traditions: [
      'Kathakali: 17th-century classical dance-theatre with facial makeup (chutti) and hand mudras',
      'Kalaripayattu: one of the world’s oldest martial arts originating in Kerala',
      'Vallam Kali: majestic traditional snake boat races rowed by 100 oarsmen chanting rhythmic boat songs'
    ],
    festivals: [
      {
        name: 'Onam Harvest Festival',
        timing: 'August / September (Chingam)',
        description: 'Spectacular 10-day homecoming celebration featuring floral carpets (Pookalam), tiger dance (Pulikali), and grand feasts (Onasadya).'
      },
      {
        name: 'Thrissur Pooram',
        timing: 'April / May',
        description: 'The mother of all temple festivals with percussion ensembles (Panchavadyam) and ornate parasol exchanges.'
      }
    ],
    customs: [
      'Eating meals served on fresh plantain banana leaves with right hand',
      'Wearing the traditional Kasavu off-white handloom attire with golden zari borders',
      'Practicing daily Ayurvedic self-care and herbal oil massage'
    ],
    socialEtiquette: [
      'Maintain quiet respect during sacred temple rituals; some sanctums require men to remove shirts',
      'Remove footwear before entering traditional homes and temple courtyards',
      'Always accept food and drinks with your right hand'
    ],
    dressConsiderations: 'Comfortable light cottons; modest clothing covering shoulders and knees when visiting villages or sacred sites.',
    thingsVisitorsShouldRespect: [
      'Preserve the pristine ecosystem of the backwaters; never discard waste overboard',
      'Honor sacred customs and photography restrictions in orthodox temple sanctums'
    ],
    culturalFacts: [
      'Kerala boasts the highest literacy rate and highest female-to-male ratio in India.',
      'The Western Ghats of Kerala are older than the Himalayas and recognized as one of the world’s eight "hottest hotspots" of biological diversity.'
    ]
  },
  languages: {
    officialLanguages: ['Malayalam'],
    commonlySpoken: ['English (widely understood in tourism & cities)', 'Tamil', 'Hindi'],
    usefulPhrases: [
      { category: 'greeting', phrase: 'Namaskaram', translation: 'Hello / Greetings', pronunciation: 'nuh-muh-skaa-rum' },
      { category: 'thank_you', phrase: 'Nanni', translation: 'Thank you', pronunciation: 'nun-nee' },
      { category: 'please', phrase: 'Dhayavayi', translation: 'Please', pronunciation: 'dhuh-yuh-vaa-yee' },
      { category: 'help', phrase: 'Enikku sahayikamo?', translation: 'Can you help me?', pronunciation: 'eh-neek-koo saa-haa-yee-ky-moe' },
      { category: 'directions', phrase: 'Ithu ethu vazhiyano?', translation: 'Which way is this?', pronunciation: 'ee-thoo eh-thoo vuh-zhee-yaa-noh' },
      { category: 'food', phrase: 'Appavum stew-um nannayirikkunnu', translation: 'The appam and stew are delicious', pronunciation: 'up-puh-vum stew-um nun-naa-yee-reek-koon-noo' }
    ]
  },
  food: {
    dishes: [
      {
        id: 'kerala-sadya',
        name: 'Traditional Kerala Sadya Feast',
        category: 'Vegetarian',
        description: 'Lavish multi-course banquet served on a fresh banana leaf featuring red matta rice, sambar, avial, thoran, olan, pachadi, and sweet payasam.',
        image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80',
        whereToTry: 'Grand Hotel (Kochi) or Mothers Veg Plaza (Trivandrum)',
        approxPrice: '₹250 - ₹450 ($3.00 - $5.50)'
      },
      {
        id: 'karimeen-pollichathu',
        name: 'Karimeen Pollichathu (Pearl Spot)',
        category: 'Non-Vegetarian',
        description: 'Fresh backwater pearl spot fish marinated in spicy shallot, ginger, and curry leaf masala, wrapped in a banana leaf and pan-roasted on a slow flame.',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
        whereToTry: 'Backwater houseboats or Paragon Restaurant (Kochi/Calicut)',
        approxPrice: '₹350 - ₹600 ($4.20 - $7.20)'
      },
      {
        id: 'appam-stew',
        name: 'Appam with Vegetable / Coconut Stew',
        category: 'Vegetarian',
        description: 'Bowl-shaped fermented rice and coconut milk pancakes with soft spongy centers and lacy crisp edges, served with mild spiced coconut milk stew.',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
        whereToTry: 'Traditional homestays and heritage cafes across Kerala',
        approxPrice: '₹120 - ₹220 ($1.50 - $2.70)'
      }
    ],
    recommendedExperiences: [
      'Enjoying a piping hot meal cooked fresh by the on-board chef during a backwater houseboat cruise',
      'Morning spice tea tasting atop mist-clad hills in a Munnar tea plantation',
      'Fresh tender coconut water enjoyed at roadside stalls beneath coconut groves'
    ]
  },
  experiences: [
    {
      id: 'kerala-houseboat-voyage',
      title: 'Private Thatched Kettuvallam Houseboat Voyage',
      type: 'relaxation',
      description: 'Sail through scenic Vembanad lake and narrow rural canals with a private captain, navigator, and chef preparing local delicacies.',
      duration: 'Overnight or 5 Hours',
      cost: '₹9,500 ($115)',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80',
      highlight: 'Watch kingfishers dive into the waters while sipping fresh coconut water on the open wooden deck.'
    },
    {
      id: 'kathakali-backstage-performance',
      title: 'Kathakali Makeup & Theatrical Performance',
      type: 'cultural',
      description: 'Arrive early to watch master actors paint their faces with natural mineral pigments followed by a live demonstration of 24 mudras and eye expressions.',
      duration: '2.5 Hours',
      cost: '₹500 ($6)',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80',
      highlight: 'Witness ancient facial muscle control and dramatic storytelling with live Chenda drums.'
    }
  ],
  chapterStyles: {
    'A peaceful chapter': {
      subtitle: 'Gentle ripples on backwater canals, herbal oil therapies, and misty tea peaks',
      quote: '“Silence is not an absence, but the presence of quiet harmony.”',
      highlights: ['Sunset meditation on houseboat deck', 'Daily Ayurvedic Abhyanga massage', 'Silent morning walks through tea estates'],
      sampleDay: 'Begin with sunrise yoga overlooking misty backwaters, receive a warm herbal oil massage, sip spiced cardamom tea, and read on an open veranda.'
    },
    'An adventurous chapter': {
      subtitle: 'Bamboo rafting in Periyar tiger sanctuary, waterfall treks, and mountain cycling',
      quote: '“The mountains call and we must go.”',
      highlights: ['Full day bamboo rafting in Periyar', 'Trek to Meesapulimala peak (2,640m)', 'White water kayaking'],
      sampleDay: 'Trek into Periyar tiger reserve at dawn, board a bamboo raft across the mountain lake spotting wild elephants, and cycle through spice ridges.'
    },
    'A cultural chapter': {
      subtitle: 'Living Kathakali theatre, 500-year-old Jewish synagogues, and spice godowns',
      quote: '“To understand a culture, sit quietly and watch its traditions breathe.”',
      highlights: ['Fort Kochi heritage trail', 'Kathakali facial transformation', 'Mattancherry Jewish synagogue and murals'],
      sampleDay: 'Explore the 1568 Paradesi Synagogue in Jew Town, inhale the aromas of ginger and pepper warehouses, and watch evening Kathakali drama.'
    },
    'A food-filled chapter': {
      subtitle: 'Fluffy appams with stew, banana-leaf sadya feasts, and Malabar biryani',
      quote: '“Kerala is the ancient spice garden that seduced the globe.”',
      highlights: ['Plantain leaf grand Sadya banquet', 'Karimeen pearl spot fish wrapped in banana leaf', 'Calicut halwa street tasting'],
      sampleDay: 'Taste warm idiyappam with coconut milk for breakfast, savor a 24-dish Onasadya banquet for lunch, and dine on fresh tiger prawns by Kochi harbor.'
    },
    'A romantic chapter': {
      subtitle: 'Secluded luxury houseboats, cliff-top sunsets in Varkala, and private infinity pools',
      quote: '“Drifting together, where time slows down to the speed of water.”',
      highlights: ['Private candlelit dinner on houseboat deck', 'Sunset over red laterite cliffs of Varkala', 'Couples Ayurvedic rejuvenation therapy'],
      sampleDay: 'Wake to mist rising from the lake, cruise past secluded river islands, and enjoy a private candlelit seafood dinner under a canopy of stars.'
    },
    'A family chapter': {
      subtitle: 'Elephant rehabilitation centers, boat safaris, and beach fun',
      quote: '“Family trips turn into stories told for generations.”',
      highlights: ['Boat safari spotting wild deer and elephants in Thekkady', 'Climbing colonial lighthouse at Kovalam', 'Spice garden interactive walk'],
      sampleDay: 'Take the family on a calm lake safari in Periyar, discover vanilla and cocoa pods in a spice garden, and swim in gentle shallow coastal waters.'
    },
    'A chapter of discovery': {
      subtitle: 'Theyyam sacred trance rituals in North Malabar, hidden hill caves, and tribal heritage',
      quote: '“Step off the beaten path into sacred living mysteries.”',
      highlights: ['Midnight Theyyam oracle performance in Kannur', 'Edakkal Neolithic rock engravings', 'Centuries-old herbal medicine practitioners'],
      sampleDay: 'Travel to Wayanad to hike up to prehistoric Edakkal rock engravings, and travel north to witness an all-night mystical Theyyam ritual in a village sacred grove.'
    }
  },
  accommodations: [
    {
      id: 'kumarakom-lake-resort',
      name: 'Kumarakom Lake Resort',
      type: 'Resort',
      priceRange: '₹18,000 - ₹38,000 / night ($215 - $450)',
      location: 'Kumarakom, Vembanad Lake',
      facilities: ['Heritage Villas Reassembled from 16th Century', 'Meandering Pool', 'Ayurmana Spa', 'Sunset Cruise Included'],
      rating: 4.9,
      reviewsCount: 2200,
      distanceFromMajorAttractions: 'Direct waterfront on Vembanad Lake',
      suitableFor: ['Couples', 'Luxury Seekers', 'Families'],
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'brunton-boatyard',
      name: 'Brunton Boatyard - CGH Earth',
      type: 'Hotel',
      priceRange: '₹14,000 - ₹24,000 / night ($170 - $290)',
      location: 'Fort Kochi Harbour',
      facilities: ['Colonial Victorian Architecture', 'Harbour-view Pool', 'Historic Shipyard Heritage', 'Sustainable Eco Practices'],
      rating: 4.8,
      reviewsCount: 1340,
      distanceFromMajorAttractions: 'Steps from Fort Kochi pier',
      suitableFor: ['Heritage Enthusiasts', 'Couples'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
    }
  ],
  packages: [
    {
      id: 'kerala-3day-backwaters',
      name: '3-Day Backwater & Heritage Chapter',
      durationDays: 3,
      tagline: 'Fort Kochi colonial lore and a serene private houseboat cruise',
      includedExperiences: ['Fort Kochi Heritage Walk', 'Overnight Houseboat Stay', 'All Houseboat Meals'],
      accommodationCategory: 'Boutique Hotel + Private Luxury Houseboat',
      transportation: 'Dedicated AC Chauffeur',
      estimatedBudget: 260,
      activities: ['Chinese fishing nets', 'Mattancherry Jewish town', 'Alleppey cruise', 'Village walk'],
      customizableOptions: ['Ayurvedic massage session', 'Cooking demo on boat']
    },
    {
      id: 'kerala-5day-complete',
      name: '5-Day Hills, Backwaters & Coast',
      durationDays: 5,
      tagline: 'The classic circuit: Fort Kochi, misty Munnar tea hills, and Alleppey houseboats',
      includedExperiences: ['Munnar Tea Plantation Tour', 'Overnight Houseboat Cruise', 'Kathakali Performance', 'Spice Garden Tour'],
      accommodationCategory: '4-Star Hill Bungalow & Waterfront Resort',
      transportation: 'Dedicated Private AC Vehicle & Driver',
      estimatedBudget: 480,
      activities: ['Tea museum visit', 'Scenic mountain viewpoints', 'Backwater sailing', 'Heritage Fort Kochi walk'],
      customizableOptions: ['Periyar wildlife bamboo rafting', 'Ayurvedic wellness retreat upgrade']
    }
  ],
  budgetBreakdown: {
    currencySymbol: '₹',
    currencyCode: 'INR',
    exchangeRateToUSD: 0.012,
    dailyCosts: {
      Budget: { stay: 18, food: 10, transport: 8, attractions: 4, activities: 10, misc: 5 },
      Moderate: { stay: 60, food: 22, transport: 18, attractions: 10, activities: 25, misc: 10 },
      Premium: { stay: 160, food: 60, transport: 40, attractions: 20, activities: 55, misc: 25 },
      Luxury: { stay: 340, food: 110, transport: 70, attractions: 35, activities: 110, misc: 50 }
    }
  },
  importantInfo: {
    transportation: {
      overview: 'Having a dedicated car and chauffeur is the most comfortable and stress-free way to traverse between Kochi, Munnar, Thekkady, and Alleppey.',
      options: [
        { name: 'Private AC Taxi & Driver', desc: 'Affordable, fixed daily rates, offering door-to-door comfort on winding hill roads.', tip: 'Book your chauffeur for the entire 5-7 day circuit.' },
        { name: 'State Water Transport Ferries', desc: 'Government public ferries in Alleppey running regular passenger services for just ₹10 - ₹20.', tip: 'A wonderful budget-friendly way to see village life.' },
        { name: 'Kochi Water Metro', desc: 'Modern air-conditioned electric hybrid catamarans connecting Kochi islands with transit smart cards.', tip: 'A scenic and eco-friendly urban transit experience.' }
      ]
    },
    weather: {
      currentOverview: 'Tropical climate; dry and balmy in winter (Nov-Feb), warm in summer (Mar-May), and lush, romantic monsoons (Jun-Sep).',
      seasons: [
        { name: 'Winter (Peak)', months: 'Nov - Feb', temp: '21°C - 31°C', note: 'Sunny, pleasant humidity, best for backwaters and sightseeing.' },
        { name: 'Monsoon (Ayurveda)', months: 'Jun - Sep', temp: '22°C - 28°C', note: 'Considered the ideal time for Ayurvedic therapies as skin pores open.' },
        { name: 'Summer', months: 'Mar - May', temp: '25°C - 35°C', note: 'Warm and sunny; hill stations like Munnar remain cool.' }
      ]
    },
    currency: {
      name: 'Indian Rupee',
      symbol: '₹',
      code: 'INR',
      cardAcceptance: 'Cards accepted at hotels and resorts; keep cash for rural markets and boat tips.',
      tippingCulture: '10% at restaurants; ₹300 - ₹500 per day for houseboat crews and personal drivers.'
    },
    timeZone: 'IST (UTC+5:30)',
    emergency: {
      police: '100 / 112',
      ambulance: '108',
      touristHelpline: '1-800-425-4747 (Kerala Tourism)'
    },
    safetyTips: [
      'Kerala is one of India’s safest and most welcoming states with very low crime against tourists.',
      'Always wear life jackets when taking small canoe excursions on deeper waterways.',
      'Drink boiled or bottled water and use mosquito repellent in the evenings.'
    ],
    localEtiquette: [
      'Honor temple dress codes; remove footwear and cover legs/shoulders.',
      'Greet locals with hands folded in "Namaskaram" and a warm smile.'
    ],
    travelTips: [
      'Do not rush Kerala; the slower you travel, the deeper you will connect with the landscape.',
      'Experience at least one meal served on a fresh banana leaf.'
    ]
  },
  mapPoints: [
    { id: 'k1', title: 'Fort Kochi Chinese Nets', category: 'attraction', lat: 9.9658, lng: 76.2427, description: 'Historic seaside cantilevered fishing nets.', cost: 'Free' },
    { id: 'k2', title: 'Alleppey Backwater Jetty', category: 'experience', lat: 9.4981, lng: 76.3388, description: 'Houseboat embarkation dock.', cost: '$$$' },
    { id: 'k3', title: 'Munnar Tea Plantations', category: 'attraction', lat: 10.0889, lng: 77.0595, description: 'Verdant rolling hill tea gardens.', cost: 'Free' },
    { id: 'k4', title: 'Brunton Boatyard', category: 'accommodation', lat: 9.9682, lng: 76.244, description: 'Colonial heritage hotel in Fort Kochi.', cost: '$$$$' },
    { id: 'k5', title: 'Paragon Restaurant Kochi', category: 'food', lat: 9.9816, lng: 76.2798, description: 'Award-winning Malabar seafood cuisine.', cost: '$$' }
  ]
};
