import { Destination } from '../../types/travel';

export const dubaiDestination: Destination = {
  id: 'dubai',
  name: 'Dubai',
  country: 'United Arab Emirates',
  region: 'Arabian Gulf',
  tagline: 'Oasis of the Future, Golden Dunes, and Timeless Desert Mystique',
  heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80',
  ],
  coordinates: [25.2048, 55.2708],
  intro: {
    whereItIs: 'On the northeast coast of the Arabian Peninsula bordering the Persian Gulf and Arabian Desert.',
    whyPeopleVisit: 'Architectural marvels including Burj Khalifa, Museum of the Future, luxury resorts on Palm Jumeirah, desert dune safaris, historic gold & spice souks, and tax-free shopping.',
    bestTimeToVisit: 'November to March when desert winter brings pleasant sunshine (19°C - 27°C).',
    generalAtmosphere: 'Visionary, luxurious, cosmopolitan, safe, and deeply ambitious.',
    approxCostLevel: 'Moderate to Ultra-Luxury',
    recommendedDuration: '4 to 6 Days',
  },
  touristSpots: [
    {
      id: 'burj-khalifa',
      name: 'Burj Khalifa & Dubai Fountain',
      category: 'Architecture',
      isLesserKnown: false,
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
      description: 'The world’s tallest structure at 828 meters featuring 360° observation decks and choreographic music fountain shows on Burj Lake.',
      location: 'Downtown Dubai',
      estimatedDuration: '2.5 Hours',
      approxCost: 'AED 179 - AED 399 ($48 - $108)',
      openingHours: '8:30 AM - 11:00 PM',
      distanceFromStay: 'Downtown hub',
      whyWorthVisiting: 'Stand above the clouds on Level 124 or 148 and watch the sunset illuminate the Arabian Gulf and desert expanse.',
      lat: 25.1972,
      lng: 55.2744,
    },
    {
      id: 'al-fahidi-historic',
      name: 'Al Fahidi Historical Neighbourhood & Creek Abra',
      category: 'Culture',
      isLesserKnown: true,
      image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80',
      description: '19th-century heritage quarter preserved with traditional gypsum, coral stone, and wind tower (Barjeel) architecture along Dubai Creek.',
      location: 'Bur Dubai',
      estimatedDuration: '3 Hours',
      approxCost: 'Free entry (Abra boat ride AED 1 / $0.27)',
      openingHours: '7:00 AM - 8:00 PM',
      distanceFromStay: 'Old Dubai district',
      whyWorthVisiting: 'Experience Old Arabia before skyscrapers: sip Arabic coffee with cardamom at the Coffee Museum and cross the creek on a wooden motorized abra.',
      lat: 25.2636,
      lng: 55.2972,
    }
  ],
  culture: {
    traditions: [
      'Emirati hospitality: welcoming guests with Gahwa (Arabic coffee with saffron) and sweet dates',
      'Falconry (Al Saker): the revered desert art of training hunting falcons',
      'Traditional pearl diving songs and maritime folklore along the Creek'
    ],
    festivals: [
      {
        name: 'Dubai Shopping Festival (DSF)',
        timing: 'December to January',
        description: 'Citywide extravaganza with drone light shows, fireworks over the beach, and cultural pop-up markets.'
      }
    ],
    customs: [
      'Greeting with "As-salamu alaykum" (Peace be upon you)',
      'Accepting coffee cups with the right hand',
      'Dressing respectfully in public malls and government premises'
    ],
    socialEtiquette: [
      'Dress modestly covering shoulders and knees in public malls and heritage areas',
      'Ask permission before photographing people, especially Emirati women',
      'Displays of public intimacy are legally and culturally discouraged'
    ],
    dressConsiderations: 'Comfortable, breathable cottons and linens; bring light shawls for air-conditioned interiors and sacred visits.',
    thingsVisitorsShouldRespect: [
      'Respect Islamic prayer times and etiquette at mosques',
      'Alcohol is served only in licensed hotel restaurants, beach clubs, and bars'
    ],
    culturalFacts: [
      'Burj Khalifa’s design was inspired by the Hymenocallis (spider lily) desert desert flower.',
      'Dubai Creek was historically the primary hub where dhow boats traded frankincense, spices, and pearls with India and Africa.'
    ]
  },
  languages: {
    officialLanguages: ['Arabic'],
    commonlySpoken: ['English (the universal language of commerce and daily life)', 'Hindi', 'Urdu', 'Tagalog'],
    usefulPhrases: [
      { category: 'greeting', phrase: 'Marhaban / As-salamu alaykum', translation: 'Hello / Peace be upon you', pronunciation: 'mar-hah-bun / us-suh-laa-moo uh-lye-koom' },
      { category: 'thank_you', phrase: 'Shukran jazeelan', translation: 'Thank you very much', pronunciation: 'shook-run juh-zee-lun' },
      { category: 'please', phrase: 'Min fadlik', translation: 'Please', pronunciation: 'min fud-lik' },
      { category: 'help', phrase: 'Musa’ada, min fadlik', translation: 'Help me, please', pronunciation: 'moo-saa-uh-duh min fud-lik' },
      { category: 'directions', phrase: 'Ayna mahattat al-metro?', translation: 'Where is the metro station?', pronunciation: 'eye-nuh muh-hut-tut ul-meh-troh' },
      { category: 'food', phrase: 'Hatha ladheedh jiddan', translation: 'This is very delicious', pronunciation: 'haa-thaa luh-theeth jid-dun' }
    ]
  },
  food: {
    dishes: [
      {
        id: 'machboos',
        name: 'Emirati Chicken or Lamb Machboos',
        category: 'Non-Vegetarian',
        description: 'Fragrant basmati rice slow-cooked with spiced meat, black dried lime (loomi), cardamom, cloves, and toasted pine nuts.',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
        whereToTry: 'Al Fanar Restaurant & Cafe (Festival City or Al Seef)',
        approxPrice: 'AED 65 - AED 95 ($18 - $26)'
      },
      {
        id: 'luqaimat',
        name: 'Crisp Luqaimat Dumplings',
        category: 'Dessert',
        description: 'Golden fried dough dumplings, crunchy on the outside and airy inside, drizzled generously with date syrup and toasted sesame seeds.',
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80',
        whereToTry: 'Arabian Tea House (Al Fahidi)',
        approxPrice: 'AED 25 - AED 40 ($7 - $11)'
      }
    ],
    recommendedExperiences: [
      'Traditional Emirati breakfast in the leafy courtyard of Arabian Tea House',
      'Bedouin barbecue dinner around an open fire under star-studded desert skies',
      'Fresh shawarma and fresh mango avocado juices along 2nd December Street'
    ]
  },
  experiences: [
    {
      id: 'desert-safari',
      title: 'Red Dune 4x4 Desert Safari & Bedouin Camp Stargazing',
      type: 'adventure',
      description: 'Dune bashing across dramatic Lahbab crimson sand dunes, sandboarding, camel rides, and an authentic dinner with falconry demonstration.',
      duration: '6 Hours',
      cost: 'AED 220 ($60)',
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=600&q=80',
      highlight: 'Sunset over endless rolling desert dunes with glowing embers of Arabic coffee.'
    }
  ],
  chapterStyles: {
    'A peaceful chapter': {
      subtitle: 'Gentle desert dawns, peaceful Persian Gulf waters, and quiet heritage wind towers',
      quote: '“The desert teaches that in vast simplicity lies profound majesty.”',
      highlights: ['Hot air balloon flight over desert dunes at sunrise', 'Coffee courtyards in Al Fahidi', 'Sunset stroll on Kite Beach'],
      sampleDay: 'Float over desert sand dunes in a hot air balloon as dawn breaks, sip mint tea in a wind tower courtyard, and swim in calm turquoise waters.'
    },
    'An adventurous chapter': {
      subtitle: 'Skydiving over Palm Jumeirah, dune buggy racing, and ziplining through skyscrapers',
      quote: '“Dare to touch the sky.”',
      highlights: ['Skydive Dubai over the Palm', 'Desert buggy dunes ride', 'XLine Dubai Marina zipline'],
      sampleDay: 'Freefall from 13,000 feet over the iconic Palm Jumeirah, race buggies over red sand dunes, and finish with a jet ski tour past Burj Al Arab.'
    },
    'A cultural chapter': {
      subtitle: 'Ancient trading souks, pearl diving history, and calligraphy arts',
      quote: '“Heritage is the foundation upon which the future builds its towers.”',
      highlights: ['Dubai Creek historic abra boat journey', 'Gold and Spice Souks', 'Jumeirah Mosque guided cultural dialogue'],
      sampleDay: 'Cross Dubai Creek on a wooden abra, bargain for saffron and frankincense in spice souks, and engage in open cultural conversation at Jumeirah Mosque.'
    },
    'A food-filled chapter': {
      subtitle: 'From Michelin star fine dining to fragrant Levantine grills and Emirati feasts',
      quote: '“Spice was the original currency that connected continents.”',
      highlights: ['Al Fanar traditional Emirati breakfast', 'Deira street shawarma trail', 'Underwater dining at Ossiano'],
      sampleDay: 'Savor spiced shakshuka and Arabic bread for breakfast, try authentic mezze and grilled meats for lunch, and dine in an underwater restaurant surrounded by marine life.'
    },
    'A romantic chapter': {
      subtitle: 'Private yacht cruises, sunset desert glamping, and rooftop skyline lounges',
      quote: '“Two souls beneath a desert sky where stars whisper eternity.”',
      highlights: ['Private yacht charter around Dubai Marina', 'Overnight luxury desert glamping', 'Dinner on Burj Khalifa observation terrace'],
      sampleDay: 'Sail past modern architectural towers into the sunset on a private yacht, dine under the stars in a luxury desert pavilion, and sleep in a canvas canopy.'
    },
    'A family chapter': {
      subtitle: 'Aquaventure waterparks, Dubai Aquarium shark tunnels, and indoor ski slopes',
      quote: '“Childhood dreams come alive where nothing is impossible.”',
      highlights: ['Aquaventure world’s largest waterpark', 'Dubai Aquarium 10-million liter tank', 'Museum of the Future interactive floors'],
      sampleDay: 'Walk through shark tunnels at Dubai Mall aquarium, slide down towering waterslides at Atlantis Palm, and explore tomorrow at Museum of the Future.'
    },
    'A chapter of discovery': {
      subtitle: 'Hatta mountain kayak lakes, camel milk chocolate factories, and hidden art warehouses',
      quote: '“Look beyond the glitz to find the true soul of Arabia.”',
      highlights: ['Hatta turquoise mountain dam kayaking', 'Alserkal Avenue independent art warehouses', 'Camel milk chocolate tasting'],
      sampleDay: 'Drive to the rugged Hajar mountains of Hatta for quiet turquoise lake kayaking, and spend the afternoon discovering indie art galleries in Alserkal Avenue.'
    }
  },
  accommodations: [
    {
      id: 'atlantis-the-royal',
      name: 'Atlantis The Royal',
      type: 'Luxury stay',
      priceRange: 'AED 2,800 - AED 6,500 / night ($760 - $1,770)',
      location: 'Palm Jumeirah Crescent',
      facilities: ['Cloud 22 Rooftop Sky Pool', '17 World-Class Restaurants', 'Private Beach Access', 'Complimentary Waterpark Entry'],
      rating: 4.9,
      reviewsCount: 3100,
      distanceFromMajorAttractions: 'Located on the outer crescent of Palm Jumeirah',
      suitableFor: ['Luxury Seekers', 'Couples', 'Celebrities'],
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'xva-art-hotel',
      name: 'XVA Art Hotel & Cafe',
      type: 'Homestay',
      priceRange: 'AED 450 - AED 850 / night ($120 - $230)',
      location: 'Al Fahidi Historical Neighbourhood',
      facilities: ['Traditional Wind Tower Architecture', 'Shaded Courtyards', 'Art Gallery', 'Vegetarian Cafe'],
      rating: 4.7,
      reviewsCount: 760,
      distanceFromMajorAttractions: 'Heart of Old Dubai Creek',
      suitableFor: ['Culture Enthusiasts', 'Couples', 'Solo Travelers'],
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
    }
  ],
  packages: [
    {
      id: 'dubai-3day-glamour',
      name: '3-Day Dunes & Icons Chapter',
      durationDays: 3,
      tagline: 'Burj Khalifa summit, desert dune safari, and Dubai Creek history',
      includedExperiences: ['Burj Khalifa Level 124 Entry', '4x4 Desert Safari & Dinner', 'Old Dubai Abra Cruise'],
      accommodationCategory: '4-Star Downtown Hotel',
      transportation: 'Metro Nol Card + Private Safari Transfers',
      estimatedBudget: 390,
      activities: ['Burj Khalifa', 'Dubai Mall fountains', 'Desert safari camp', 'Al Fahidi heritage walk'],
      customizableOptions: ['Helicopter skyline flight', 'Museum of the Future ticket']
    },
    {
      id: 'dubai-5day-complete',
      name: '5-Day Future & Desert Odyssey',
      durationDays: 5,
      tagline: 'The full spectrum: futuristic icons, luxury beaches, desert adventures, and cultural souks',
      includedExperiences: ['Museum of the Future Entry', 'Burj Khalifa At The Top', 'Luxury Desert Safari', 'Yacht Cruise'],
      accommodationCategory: '5-Star Beach or Downtown Resort',
      transportation: 'Private Chauffeur Transfers',
      estimatedBudget: 780,
      activities: ['All top sights', 'Marina yacht sailing', 'Palm Jumeirah monorail', 'Gold & Spice Souks'],
      customizableOptions: ['Hot air balloon sunrise flight', 'Abu Dhabi Sheikh Zayed Mosque day tour']
    }
  ],
  budgetBreakdown: {
    currencySymbol: 'AED',
    currencyCode: 'AED',
    exchangeRateToUSD: 0.27,
    dailyCosts: {
      Budget: { stay: 40, food: 22, transport: 8, attractions: 18, activities: 25, misc: 10 },
      Moderate: { stay: 130, food: 55, transport: 20, attractions: 40, activities: 55, misc: 20 },
      Premium: { stay: 320, food: 130, transport: 50, attractions: 75, activities: 120, misc: 40 },
      Luxury: { stay: 850, food: 280, transport: 110, attractions: 120, activities: 240, misc: 100 }
    }
  },
  importantInfo: {
    transportation: {
      overview: 'Dubai Metro is fully automated, air-conditioned, and connects major attractions; taxis are clean and metered.',
      options: [
        { name: 'Dubai Metro', desc: 'Driverless elevated trains with dedicated Gold Class and Women & Children carriages.', tip: 'Buy a Silver Nol Card at airport metro stations for tap-and-go travel.' },
        { name: 'RTA Taxis & Careem', desc: 'Cream-colored government metered taxis; easily hailed or booked via the Careem app.', tip: 'Cards and cash accepted; drivers are licensed and regulated.' },
        { name: 'Traditional Abra Boats', desc: 'Wooden water taxis crossing Dubai Creek between Deira and Bur Dubai for just AED 1.', tip: 'One of the most authentic and picturesque experiences in the city.' }
      ]
    },
    weather: {
      currentOverview: 'Arid subtropical desert climate; warm sunny winters and hot summers with air-conditioned indoor wonderlands.',
      seasons: [
        { name: 'Winter (Peak)', months: 'Nov - Mar', temp: '19°C - 28°C', note: 'Perfect outdoor weather, beach days, and evening desert safaris.' },
        { name: 'Shoulder (Spring/Fall)', months: 'Apr & Oct', temp: '25°C - 35°C', note: 'Warm with warm seas and lively beach clubs.' },
        { name: 'Summer', months: 'May - Sep', temp: '33°C - 44°C', note: 'Hot; life centers around cooled indoor resorts, mega-malls, and night dining.' }
      ]
    },
    currency: {
      name: 'UAE Dirham',
      symbol: 'AED',
      code: 'AED',
      cardAcceptance: 'Cards and Apple/Google Pay accepted everywhere; keep a few dirhams for traditional abra boat crossings.',
      tippingCulture: '10% to 15% is customary for restaurant and taxi staff.'
    },
    timeZone: 'GST (UTC+4)',
    emergency: {
      police: '999',
      ambulance: '998',
      touristHelpline: '800 4888 (Dubai Tourism Police)'
    },
    safetyTips: [
      'Dubai is one of the safest cities worldwide with virtually non-existent violent crime.',
      'Stay hydrated in summer months and protect skin with high-SPF sunscreen.',
      'Always use pedestrian crossings when crossing multi-lane avenues.'
    ],
    localEtiquette: [
      'Dress respectfully in public malls and government offices.',
      'Ask permission before photographing residents.',
      'Respect Islamic traditions and prayer times.'
    ],
    travelTips: [
      'Reserve Burj Khalifa and Museum of the Future tickets at least 2 weeks in advance.',
      'Combine an early morning visit to Old Dubai Creek with an afternoon desert safari.'
    ]
  },
  mapPoints: [
    { id: 'd1', title: 'Burj Khalifa', category: 'attraction', lat: 25.1972, lng: 55.2744, description: 'World’s tallest building and observation deck.', cost: 'AED 179+' },
    { id: 'd2', title: 'Al Fahidi Historic District', category: 'attraction', lat: 25.2636, lng: 55.2972, description: 'Historic 19th-century wind tower quarter.', cost: 'Free' },
    { id: 'd3', title: 'Arabian Tea House', category: 'food', lat: 25.2634, lng: 55.298, description: 'Traditional courtyard cafe with authentic Emirati food.', cost: '$$' },
    { id: 'd4', title: 'Atlantis The Royal', category: 'accommodation', lat: 25.1378, lng: 55.1278, description: 'Ultra-luxury resort on Palm Jumeirah.', cost: '$$$$' },
    { id: 'd5', title: 'Desert Safari Camp', category: 'experience', lat: 24.975, lng: 55.55, description: 'Crimson sand dune bashing and bedouin camp.', cost: '$$' }
  ]
};
