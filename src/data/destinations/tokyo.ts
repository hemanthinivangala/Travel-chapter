import { Destination } from '../../types/travel';

export const tokyoDestination: Destination = {
  id: 'tokyo',
  name: 'Tokyo',
  country: 'Japan',
  region: 'Kanto',
  tagline: 'Where Ancient Serenity Meets Electric Tomorrow',
  heroImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
  ],
  coordinates: [35.6762, 139.6503],
  intro: {
    whereItIs: 'Located on the eastern coast of Honshu island around Tokyo Bay, Tokyo is the world’s most populous metropolis.',
    whyPeopleVisit: 'Seamless coexistence of centuries-old Shinto shrines and futuristic neon skylines, Michelin-starred culinary artistry, anime pop culture, and unmatched safety.',
    bestTimeToVisit: 'March to May (cherry blossom season) and September to November (crisp autumn foliage).',
    generalAtmosphere: 'Hyper-efficient, tranquil, polite, cutting-edge, safe, and endlessly fascinating.',
    approxCostLevel: 'Moderate to Premium',
    recommendedDuration: '5 to 7 Days',
  },
  touristSpots: [
    {
      id: 'senso-ji',
      name: 'Sensō-ji Temple & Nakamise-dōri',
      category: 'Culture',
      isLesserKnown: false,
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
      description: 'Tokyo’s oldest Buddhist temple founded in 645 AD, entered through the iconic Kaminarimon (Thunder Gate) with its giant red paper lantern.',
      location: 'Asakusa, Taito City',
      estimatedDuration: '2 - 3 Hours',
      approxCost: 'Free entry',
      openingHours: 'Main hall 6:00 AM - 5:00 PM (grounds open 24/7)',
      distanceFromStay: 'Heart of Old Tokyo',
      whyWorthVisiting: 'Smell sweet cedar incense, draw an omikuji fortune, and sample freshly roasted ningyo-yaki cakes.',
      lat: 35.7148,
      lng: 139.7967,
    },
    {
      id: 'shibuya-crossing',
      name: 'Shibuya Scramble & Hachiko Memorial',
      category: 'Photography',
      isLesserKnown: false,
      image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80',
      description: 'The world’s busiest pedestrian intersection where up to 3,000 people cross simultaneously under gigantic video billboards.',
      location: 'Shibuya Station, Hachiko Exit',
      estimatedDuration: '1.5 Hours',
      approxCost: 'Free (Shibuya Sky observation deck ~¥2,200)',
      openingHours: 'Accessible 24/7 (peak energy after 6:00 PM)',
      distanceFromStay: 'Major subway hub',
      whyWorthVisiting: 'The beating pulse of 21st-century modern civilization and youth fashion.',
      lat: 35.6595,
      lng: 139.7005,
    },
    {
      id: 'yanaka-ginza',
      name: 'Yanaka Old Town & Nezu Shrine',
      category: 'Culture',
      isLesserKnown: true,
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
      description: 'A preserved "shitamachi" historic merchant neighborhood that survived WWII bombings, featuring Edo-era wooden houses, cat sculptures, and azalea tunnels.',
      location: 'Yanaka, Taito/Bunkyo area',
      estimatedDuration: '3 Hours',
      approxCost: 'Free walking',
      openingHours: 'Shops open 10:00 AM - 6:00 PM',
      distanceFromStay: 'Near Nippori Station',
      whyWorthVisiting: 'Step back into nostalgic 1950s Showa-era Japan with slow-drip coffee, artisanal senbei rice crackers, and quiet temple graveyards.',
      lat: 35.7275,
      lng: 139.7681,
    }
  ],
  culture: {
    traditions: [
      'Omotenashi: wholehearted hospitality and anticipatory care for guests',
      'The Japanese tea ceremony (Sadō): mindful preparation of powdered matcha',
      'Bow (Ojigi) variations expressing respect, gratitude, and apology'
    ],
    festivals: [
      {
        name: 'Sanja Matsuri',
        timing: 'Third weekend of May',
        description: 'Vibrant Asakusa festival where portable mikoshi shrines are carried through streets amid energetic chanting and flutes.'
      },
      {
        name: 'Sumida River Fireworks',
        timing: 'Last Saturday of July',
        description: 'Centuries-old summer fireworks display where locals wear traditional yukata cotton kimonos along the river.'
      }
    ],
    customs: [
      'Removing shoes at the genkan entrance before stepping onto tatami mats or homes',
      'Handling business cards or money trays with both hands',
      'Slurping noodles enthusiastically to aerate broth and signal appreciation to the chef'
    ],
    socialEtiquette: [
      'Never eat or drink while walking on streets; finish treats near the stall or vending machine',
      'Maintain quiet phone etiquette on trains (keep phones on silent / "manner mode")',
      'Stand on the left side of escalators in Tokyo (walk on the right)'
    ],
    dressConsiderations: 'Clean, modest, wrinkle-free attire; slip-on shoes are convenient for temples and traditional ryokans.',
    thingsVisitorsShouldRespect: [
      'Tipping is strictly NOT part of Japanese culture and can cause confusion or embarrassment',
      'Sort trash meticulously into recycling bins (burnable, PET bottles, aluminum)',
      'Cover visible tattoos at public onsen bathhouses unless designated tattoo-friendly'
    ],
    culturalFacts: [
      'Tokyo has more Michelin stars than Paris, London, and New York combined.',
      'Tokyo’s Shinjuku Station is the busiest transport hub in the world, serving over 3.5 million passengers daily.'
    ]
  },
  languages: {
    officialLanguages: ['Japanese'],
    commonlySpoken: ['English at major hotels, train ticket counters, and department stores'],
    usefulPhrases: [
      { category: 'greeting', phrase: 'Konnichiwa', translation: 'Hello / Good afternoon', pronunciation: 'kone-nee-chee-wah' },
      { category: 'thank_you', phrase: 'Arigatou gozaimasu', translation: 'Thank you very much', pronunciation: 'ah-ree-gah-toh goh-zai-mahs' },
      { category: 'please', phrase: 'Onegaishimasu / Kudasai', translation: 'Please', pronunciation: 'oh-neh-guy-shee-mahs' },
      { category: 'help', phrase: 'Tasukete kudasai / Sumimasen', translation: 'Please help / Excuse me', pronunciation: 'tah-soo-keh-teh koo-dah-sigh' },
      { category: 'directions', phrase: 'Eki wa doko desu ka?', translation: 'Where is the train station?', pronunciation: 'eh-kee wah doh-koh dess kah' },
      { category: 'food', phrase: 'Kore o kudasai / Oishii desu', translation: 'Please give me this / It is delicious', pronunciation: 'koh-reh oh koo-dah-sigh / oy-shee dess' }
    ]
  },
  food: {
    dishes: [
      {
        id: 'ramen-tonkotsu',
        name: 'Tokyo Shoyu & Tonkotsu Ramen',
        category: 'Non-Vegetarian',
        description: 'Springy wheat noodles in rich umami broth simmered for 16 hours, crowned with chashu pork belly, ajitsuke tamago egg, and nori.',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
        whereToTry: 'Afuri (Ebisu) or Fuunji (Shinjuku)',
        approxPrice: '¥950 - ¥1,400 ($6.50 - $9.50)'
      },
      {
        id: 'edomae-sushi',
        name: 'Edomae Nigiri Sushi',
        category: 'Non-Vegetarian',
        description: 'Pristine, seasonal fish brushed with aged nikiri soy sauce over seasoned warm sushi rice prepared by master itamae.',
        image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80',
        whereToTry: 'Toyosu Outer Market stalls or Ginza sushi bars',
        approxPrice: '¥2,500 - ¥8,000 ($17 - $55)'
      },
      {
        id: 'matcha-parfait',
        name: 'Uji Matcha Parfait',
        category: 'Dessert',
        description: 'Layers of ceremonial-grade matcha soft serve, warabi mochi, red bean paste, and crunchy rice crisps.',
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80',
        whereToTry: 'Suzukien (Asakusa - 7 levels of matcha intensity)',
        approxPrice: '¥700 - ¥1,200 ($5 - $8)'
      }
    ],
    recommendedExperiences: [
      'Early morning sushi breakfast at Toyosu Fish Market',
      'Tasting Yakitori skewers along Omoide Yokocho (Memory Lane) under red lanterns',
      'Mindful vegetarian Shojin Ryori temple cuisine lunch at a Buddhist cloister'
    ]
  },
  experiences: [
    {
      id: 'tea-ceremony-tokyo',
      title: 'Traditional Chado Tea Ceremony with Kimono Dressing',
      type: 'cultural',
      description: 'Dress in an authentic silk kimono and learn the philosophical movements of matcha whisking in a 100-year-old tea pavilion.',
      duration: '2 Hours',
      cost: '¥6,500 ($45)',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80',
      highlight: 'Gain insight into Wabi-Sabi—finding beauty in imperfection and impermanence.'
    },
    {
      id: 'shinjuku-night-walk',
      title: 'Neon & Izakaya Alleyways Night Photography Walk',
      type: 'photography',
      description: 'Navigate the glowing labyrinths of Golden Gai and Kabukicho with a street photographer to capture rain reflections and neon light trails.',
      duration: '2.5 Hours',
      cost: '¥5,000 ($35)',
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80',
      highlight: 'Learn camera settings for high-contrast neon nightscapes.'
    }
  ],
  chapterStyles: {
    'A peaceful chapter': {
      subtitle: 'Zen rock gardens, quiet cedar forests, and early morning shrine contemplation',
      quote: '“Stillness is where creativity and clarity are born.”',
      highlights: ['Meiji Jingu shrine inner forest walk', 'Hamarikyu Gardens tea pavilion over pond', 'Silent bookstore cafes in Daikanyama'],
      sampleDay: 'Breathe deep at Meiji Shrine at 7:00 AM before crowds arrive, sip matcha overlooking the tidal pond at Hamarikyu, and browse architectural monographs in Daikanyama T-Site.'
    },
    'An adventurous chapter': {
      subtitle: 'Summiting Mount Takao, go-kart street racing, and futuristic VR arcades',
      quote: '“Step outside your realm into the thrill of the electric unknown.”',
      highlights: ['Hiking Mount Takao cedar ridge', 'Akihabara electronics quest', 'Odaiba futuristic bay monorail'],
      sampleDay: 'Board the Keio express train to Mount Takao for morning ridge hiking, descend for hot soba noodles, and explore multi-story retro arcade towers in Akihabara.'
    },
    'A cultural chapter': {
      subtitle: 'Ancient Kabuki theater, Edo pottery workshops, and samurai artifacts',
      quote: '“Culture is the widening of the mind and spirit.”',
      highlights: ['Kabukiza theater performance in Ginza', 'Tokyo National Museum samurai armor hall', 'Nezu Museum bamboo promenade'],
      sampleDay: 'Witness an act of Kabuki drama in Ginza, admire folding screens at Nezu Museum, and explore calligraphy scrolls in Asakusa craft ateliers.'
    },
    'A food-filled chapter': {
      subtitle: 'Tasting menu omakase, steaming ramen ticket bars, and underground depachika food halls',
      quote: '“One cannot think well, love well, sleep well, if one has not dined well.”',
      highlights: ['Tsukiji outer market street tasting', 'Ramen street ticket sprint under Tokyo Station', 'Depachika dessert wonderland'],
      sampleDay: 'Tamagoyaki omelet and fresh sashimi for breakfast, tsukemen dipping noodles for lunch, matcha parfait snack, and an intimate 8-seat yakitori counter dinner.'
    },
    'A romantic chapter': {
      subtitle: 'Starlight observation decks, cherry blossoms, and Meguro river walks',
      quote: '“In every crowd, the heart seeks its anchor.”',
      highlights: ['Meguro River lantern illumination walk', 'Roppongi Hills Mori Tower starlight deck', 'Cozy Omotesando wine bistros'],
      sampleDay: 'Stroll along the willow-lined canals of Meguro, share wagashi sweets in a traditional garden, and gaze over Tokyo Tower glowing red from Shibuya Sky.'
    },
    'A family chapter': {
      subtitle: 'Interactive digital art, bullet train marvels, and friendly character cafes',
      quote: '“Joy shared with family doubles in light.”',
      highlights: ['teamLab Borderless digital wonderland', 'Ueno Zoo giant panda pavilion', 'Ghibli Museum animated magic'],
      sampleDay: 'Wander barefoot through infinite mirror rooms at teamLab Planets, ride the Yurikamome automated monorail across Rainbow Bridge, and eat panda pastries in Ueno.'
    },
    'A chapter of discovery': {
      subtitle: 'Vintage record dens in Shimokitazawa, knife sharpening artisans, and hidden shrines',
      quote: '“Discovery consists of seeing what everybody has seen and thinking what nobody has thought.”',
      highlights: ['Kappabashi Kitchen Town knife masters', 'Shimokitazawa vintage vinyl stores', 'Underground bar nooks of Golden Gai'],
      sampleDay: 'Watch master blacksmiths engrave Japanese santoku knives in Kappabashi, flip through rare jazz records in Shimokitazawa, and discover a micro-bar in Golden Gai.'
    }
  },
  accommodations: [
    {
      id: 'mimaru-tokyo',
      name: 'Mimaru Tokyo Station East',
      type: 'Hotel',
      priceRange: '¥22,000 - ¥38,000 / night ($150 - $260)',
      location: 'Nihombashi / Hatchobori',
      facilities: ['Japanese Apartment Style', 'Kitchenette & Dining Area', 'Laundromat', 'High-Speed Wi-Fi', 'Family Rooms'],
      rating: 4.8,
      reviewsCount: 1250,
      distanceFromMajorAttractions: '10 mins walk to Tokyo Station',
      suitableFor: ['Families', 'Groups', 'Extended Stay'],
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'hoshinoya-tokyo',
      name: 'Hoshinoya Tokyo Luxury Ryokan',
      type: 'Luxury stay',
      priceRange: '¥95,000 - ¥160,000 / night ($650 - $1,100)',
      location: 'Otemachi, Chiyoda City',
      facilities: ['Rooftop Natural Hot Spring Onsen', 'Tatami Flooring Throughout', 'Tea Lounge on Every Floor', 'Nippon Cuisine'],
      rating: 4.9,
      reviewsCount: 680,
      distanceFromMajorAttractions: 'Adjacent to Imperial Palace gardens',
      suitableFor: ['Couples', 'Luxury Connoisseurs'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
    }
  ],
  packages: [
    {
      id: 'tokyo-1day-explorer',
      name: '1-Day Tokyo Contrasts',
      durationDays: 1,
      tagline: 'Ancient temple serenity by morning, vibrant Shibuya scramble by night',
      includedExperiences: ['Asakusa Sensoji Guided Stroll', 'Tokyo Metro All-Day Pass', 'Shibuya Sky Deck Ticket'],
      accommodationCategory: 'Standard Modern Hotel',
      transportation: 'Subway & Walking',
      estimatedBudget: 95,
      activities: ['Asakusa Sensoji', 'Ueno Park', 'Meiji Jingu', 'Shibuya Crossing at sunset'],
      customizableOptions: ['Add Harajuku kawaii fashion tour', 'Sushi tasting add-on']
    },
    {
      id: 'tokyo-3day-culture',
      name: '3-Day Spirit & Neon Chapter',
      durationDays: 3,
      tagline: 'Deep dive into imperial shrines, modern art pavilions, anime hubs, and food alleys',
      includedExperiences: ['teamLab Borderless Entry', 'Kimono Tea Ceremony', 'Tsukiji Market Walk'],
      accommodationCategory: 'Boutique Hotel in Shinjuku or Ginza',
      transportation: 'Suica Smart Transit Card Included',
      estimatedBudget: 340,
      activities: ['Imperial Palace East Gardens', 'Akihabara electronics', 'Shinjuku Gyoen national garden', 'Roppongi art triangle'],
      customizableOptions: ['Sumo morning practice stable visit', 'Mt. Fuji day bullet train trip']
    },
    {
      id: 'tokyo-5day-complete',
      name: '5-Day Ultimate Tokyo Odyssey',
      durationDays: 5,
      tagline: 'The complete futuristic and traditional journey including Nikko or Kamakura day trip',
      includedExperiences: ['Kamakura Giant Buddha Day Trip', 'teamLab Entry', 'Omakase Sushi Dinner', 'Shinjuku Night Tour'],
      accommodationCategory: '4-Star Premium Hotel or Modern Ryokan',
      transportation: 'JR Pass Regional + Metro',
      estimatedBudget: 620,
      activities: ['All iconic precincts', 'Historic Kamakura coastline', 'Underground depachika food halls', 'Ginza luxury architecture'],
      customizableOptions: ['Knife making atelier in Kappabashi', 'Private onsen experience']
    }
  ],
  budgetBreakdown: {
    currencySymbol: '¥',
    currencyCode: 'JPY',
    exchangeRateToUSD: 0.0068,
    dailyCosts: {
      Budget: { stay: 35, food: 22, transport: 8, attractions: 10, activities: 15, misc: 8 },
      Moderate: { stay: 110, food: 50, transport: 14, attractions: 20, activities: 35, misc: 15 },
      Premium: { stay: 240, food: 110, transport: 30, attractions: 35, activities: 70, misc: 30 },
      Luxury: { stay: 580, food: 220, transport: 60, attractions: 60, activities: 140, misc: 80 }
    }
  },
  importantInfo: {
    transportation: {
      overview: 'Tokyo boasts the world’s most punctual, spotless, and extensive train and subway network operated by JR East and Tokyo Metro.',
      options: [
        { name: 'Suica / Pasmo IC Card', desc: 'Rechargeable contactless cards (also available in Apple Wallet) for all trains, buses, and vending machines.', tip: 'No need to buy paper tickets; just tap your phone or card.' },
        { name: 'Tokyo Metro Pass', desc: 'Unlimited 24, 48, or 72-hour tourist subway passes offering exceptional savings.', tip: 'Available at airport and tourist information centers with passport.' },
        { name: 'Taxis', desc: 'Immaculately clean with automated opening doors; relatively expensive compared to trains.', tip: 'Drivers wear white gloves; no tipping.' }
      ]
    },
    weather: {
      currentOverview: 'Four distinct beautiful seasons; cherry blossoms in late March/April, warm summers, and crisp clear blue autumns.',
      seasons: [
        { name: 'Spring', months: 'Mar - May', temp: '12°C - 21°C', note: 'Sakura blossoms and mild pleasant breeze.' },
        { name: 'Summer', months: 'Jun - Aug', temp: '22°C - 33°C', note: 'Humid with summer festivals and fireworks.' },
        { name: 'Autumn', months: 'Sep - Nov', temp: '14°C - 23°C', note: 'Clear skies and vibrant red momiji maple leaves.' },
        { name: 'Winter', months: 'Dec - Feb', temp: '2°C - 11°C', note: 'Crisp sunny days with crystal-clear views of Mount Fuji.' }
      ]
    },
    currency: {
      name: 'Japanese Yen',
      symbol: '¥',
      code: 'JPY',
      cardAcceptance: 'Cards and IC cards widely accepted; keep cash for small noodle counters and shrine amulets.',
      tippingCulture: 'No tipping anywhere! Excellent service is considered the baseline standard.'
    },
    timeZone: 'JST (UTC+9)',
    emergency: {
      police: '110',
      ambulance: '119',
      touristHelpline: '050-3816-2720 (Japan National Tourism Org)'
    },
    safetyTips: [
      'Tokyo consistently ranks among the top 3 safest cities on earth.',
      'Lost items are almost invariably turned into the nearest Koban (police box).',
      'Familiarize yourself with basic earthquake safety protocols posted in all hotels.'
    ],
    localEtiquette: [
      'Do not walk while eating or drinking.',
      'Maintain silence on commuter trains.',
      'Always use the small cash tray (tsurisen-torei) when paying.'
    ],
    travelTips: [
      'Convenience stores (7-Eleven, Lawson, FamilyMart) offer gourmet-quality onigiri, egg sandwiches, and ATM cash withdrawals.',
      'Rent a pocket Wi-Fi or purchase an eSIM before arrival for navigation.'
    ]
  },
  mapPoints: [
    { id: 't1', title: 'Sensō-ji Temple', category: 'attraction', lat: 35.7148, lng: 139.7967, description: 'Ancient Asakusa Buddhist sanctuary.', cost: 'Free' },
    { id: 't2', title: 'Shibuya Scramble Crossing', category: 'attraction', lat: 35.6595, lng: 139.7005, description: 'Iconic bustling pedestrian intersection.', cost: 'Free' },
    { id: 't3', title: 'Afuri Ramen Ebisu', category: 'food', lat: 35.6469, lng: 139.7103, description: 'Signature yuzu broth ramen bar.', cost: '$$' },
    { id: 't4', title: 'Mimaru Tokyo Station', category: 'accommodation', lat: 35.6789, lng: 139.7745, description: 'Spacious Japanese family apartment hotel.', cost: '$$$' },
    { id: 't5', title: 'Shinjuku Golden Gai Alleyways', category: 'experience', lat: 35.6942, lng: 139.7047, description: 'Atmospheric nightlife and photography lane.', cost: '$$' },
    { id: 't6', title: 'Tokyo Station Marunouchi', category: 'transit', lat: 35.6812, lng: 139.7671, description: 'Historic red-brick Shinkansen railway hub.', cost: 'Transit' }
  ]
};
