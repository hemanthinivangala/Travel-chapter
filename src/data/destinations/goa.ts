import { Destination } from '../../types/travel';

export const goaDestination: Destination = {
  id: 'goa',
  name: 'Goa',
  country: 'India',
  region: 'Konkan Coast',
  tagline: 'Sun-Drenched Shores, Portuguese Heritage, and Susegad Living',
  heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
  ],
  coordinates: [15.2993, 74.124],
  intro: {
    whereItIs: 'Along India’s southwestern coast, blessed with 105 kilometers of coastline facing the Arabian Sea.',
    whyPeopleVisit: 'A unique blend of 450 years of Portuguese influence and Indian Konkani culture, palm-fringed golden beaches, spice plantations, UNESCO cathedrals, and the relaxed state of contentment known as "Susegad".',
    bestTimeToVisit: 'November to February for balmy beach weather and cool festive evenings (20°C - 32°C).',
    generalAtmosphere: 'Laid-back, tropical, soulful, celebratory, and culturally rich.',
    approxCostLevel: 'Budget to Luxury',
    recommendedDuration: '4 to 6 Days',
  },
  touristSpots: [
    {
      id: 'fontainhas-latin-quarter',
      name: 'Fontainhas Latin Quarter (Panaji)',
      category: 'Culture',
      isLesserKnown: false,
      image: 'https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=800&q=80',
      description: 'UNESCO-recognized heritage precinct filled with vibrant yellow, indigo, and terracotta Portuguese villas with wrought-iron balconies and azulejo tiled murals.',
      location: 'Panaji (Capital City)',
      estimatedDuration: '2 - 3 Hours',
      approxCost: 'Free to walk',
      openingHours: 'Accessible all day',
      distanceFromStay: 'Central Goa location',
      whyWorthVisiting: 'Asia’s only Latin Quarter preserving 18th-century Lusitanian architecture, bakery cafes, and art galleries.',
      lat: 15.4989,
      lng: 73.8278,
    },
    {
      id: 'dudhsagar-falls',
      name: 'Dudhsagar Waterfalls',
      category: 'Adventure',
      isLesserKnown: false,
      image: 'https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=800&q=80',
      description: 'A four-tiered 310-meter white cascade resembling a "sea of milk" nestled deep inside the Bhagwan Mahavir Wildlife Sanctuary.',
      location: 'Sanguem Taluka, Western Ghats',
      estimatedDuration: '5 - 6 Hours',
      approxCost: '₹500 - ₹800 (jeep safari share)',
      openingHours: '6:00 AM - 5:00 PM (Oct to May)',
      distanceFromStay: '60 km east of coastal beaches',
      whyWorthVisiting: 'Exciting open-top 4x4 jungle safari crossing river streams followed by swimming in freshwater pools under the railway bridge cascade.',
      lat: 15.3144,
      lng: 74.3143,
    },
    {
      id: 'cola-beach-lagoon',
      name: 'Cola Beach & Emerald Lagoon',
      category: 'Nature',
      isLesserKnown: true,
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
      description: 'A secluded golden beach in South Goa divided by a serene emerald freshwater lagoon where natural jungle streams meet the sea.',
      location: 'Canacona, South Goa',
      estimatedDuration: '3 - 4 Hours',
      approxCost: 'Free (kayak rental ₹200)',
      openingHours: 'Sunrise to sunset',
      distanceFromStay: '20 mins north of Palolem',
      whyWorthVisiting: 'Paddle quietly on the calm freshwater lagoon or swim in the warm sea waves surrounded by red volcanic cliffs.',
      lat: 15.0567,
      lng: 73.9744,
    }
  ],
  culture: {
    traditions: [
      'The spirit of Susegad: embracing life with peaceful contentment and leisure',
      'Village Sao Joao festival where revelers wear floral coronets (copels) and leap into village wells to celebrate monsoon',
      'Artisanal feni distillation using cashew apples and copper stills'
    ],
    festivals: [
      {
        name: 'Goa Carnival',
        timing: 'February (pre-Lent)',
        description: 'Spectacular 4-day street parade led by King Momo featuring brass bands, masked dancers, and colorful floats across Panaji and Margao.'
      },
      {
        name: 'Shigmo Festival',
        timing: 'March',
        description: 'Traditional Konkani spring folk festival with elaborate street performances depicting mythological folklore and traditional instruments.'
      }
    ],
    customs: [
      'The afternoon siesta between 1:30 PM and 4:00 PM honored in traditional villages and local shops',
      'Removing footwear before entering traditional ancestral homes and churches',
      'Sharing fresh poee bread baked twice daily by neighborhood poder breadmakers'
    ],
    socialEtiquette: [
      'Dress respectfully when visiting historic churches like Basilica of Bom Jesus (cover shoulders/knees)',
      'Swimwear is appropriate on beaches, but wear cover-ups when walking into villages, towns, and local shops',
      'Respect sea turtle nesting areas on Morjim, Agonda, and Galgibaga beaches'
    ],
    dressConsiderations: 'Breezy linen and cotton shirts, shorts, sun hats, and sandals; light shawls for cathedral visits.',
    thingsVisitorsShouldRespect: [
      'Silence inside historical UNESCO churches in Old Goa',
      'Protect coastal sand dunes and refrain from driving vehicles on beaches',
      'Do not disturb olive ridley turtles or leave plastic waste on the sands'
    ],
    culturalFacts: [
      'Goa was liberated from Portuguese rule in 1961, 14 years after the rest of India gained independence.',
      'Goan cuisine uniquely blends Portuguese wine, vinegar, and garlic techniques with fiery Konkani kokum and coconut.'
    ]
  },
  languages: {
    officialLanguages: ['Konkani'],
    commonlySpoken: ['English', 'Hindi', 'Marathi', 'Portuguese (elder generation)'],
    usefulPhrases: [
      { category: 'greeting', phrase: 'Dev boro dis dium', translation: 'May God give you a good day / Hello', pronunciation: 'dev boh-roh dees dee-oom' },
      { category: 'thank_you', phrase: 'Dev borem korum', translation: 'Thank you (May God do good to you)', pronunciation: 'dev boh-rem koh-room' },
      { category: 'please', phrase: 'Upkar korun', translation: 'Please', pronunciation: 'oop-kaar koh-roon' },
      { category: 'help', phrase: 'Maka modot zai', translation: 'I need help', pronunciation: 'mah-kaa moh-doht zye' },
      { category: 'directions', phrase: 'Hem roste kaim veta?', translation: 'Where does this road lead?', pronunciation: 'haym roh-stay kym vay-taa' },
      { category: 'food', phrase: 'Xitt kodi ani nuste dya', translation: 'Please give me fish curry and rice', pronunciation: 'sheet koh-dee aa-nee noos-tay dyaa' }
    ]
  },
  food: {
    dishes: [
      {
        id: 'goan-fish-curry',
        name: 'Goan Fish Curry Rice (Xitt Kodi)',
        category: 'Non-Vegetarian',
        description: 'Fresh kingfish or pomfret simmered in a creamy gravy of grated fresh coconut, dried Kashmiri chillies, coriander seeds, and tangy tart kokum.',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
        whereToTry: 'Ritz Classic (Panaji) or Martin’s Corner (Betalbatim)',
        approxPrice: '₹280 - ₹450 ($3.50 - $5.50)'
      },
      {
        id: 'bebinca',
        name: 'Traditional 7-Layer Bebinca',
        category: 'Dessert',
        description: 'The queen of Goan desserts: a rich, slow-baked layered cake made with coconut milk, egg yolks, flour, nutmeg, and clarified ghee.',
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80',
        whereToTry: 'Confeitaria 31 de Janeiro (Fontainhas)',
        approxPrice: '₹120 - ₹200 ($1.50 - $2.50)'
      }
    ],
    recommendedExperiences: [
      'Sunset beach shack dining with fresh catch of the day cooked to order with butter garlic or recheado masala',
      'Spice plantation tour with traditional banana-leaf buffet and feni tasting in Ponda',
      'Heritage Portuguese home lunch cooked by an ancestral family in Chandor'
    ]
  },
  experiences: [
    {
      id: 'backwater-kayaking',
      title: 'Mangrove Backwater Kayaking along the Zuari River',
      type: 'nature',
      description: 'Paddle through calm tidal channels shaded by lush mangrove trees spotting kingfishers, flying fish, and otters.',
      duration: '2.5 Hours',
      cost: '₹1,500 ($18)',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80',
      highlight: 'Experience silent untouched wilderness minutes away from coastal highways.'
    },
    {
      id: 'spice-plantation-walk',
      title: 'Sahakari Spice Farm Walk & Konkani Herbal Lunch',
      type: 'cultural',
      description: 'Wander amidst betel nut palms, vanilla vines, and cinnamon barks followed by herbal tea and a traditional lunch.',
      duration: '3 Hours',
      cost: '₹700 ($8.50)',
      image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80',
      highlight: 'Discover medicinal ayurvedic herbs and traditional copper distillation.'
    }
  ],
  chapterStyles: {
    'A peaceful chapter': {
      subtitle: 'Gentle morning yoga by the tide, secluded South Goa bays, and church bells',
      quote: '“Let the rhythm of the waves wash the haste from your soul.”',
      highlights: ['Morning yoga on Agonda beach', 'Silent paddle on Cola freshwater lagoon', 'Sunset contemplation at Cabo de Rama'],
      sampleDay: 'Wake to birdsong in a rustic beach hut, practice yoga on soft sands, read under coconut palms, and dine by lantern light to the sound of breaking surf.'
    },
    'An adventurous chapter': {
      subtitle: 'White-water rapids, jungle waterfalls, and coastal scuba diving',
      quote: '“Life is pure adventure or it is nothing at all.”',
      highlights: ['Dudhsagar waterfall 4x4 safari', 'Scuba diving at Grande Island', 'Trek to Devil’s Canyon'],
      sampleDay: 'Board an early morning 4x4 into Bhagwan Mahavir Wildlife Sanctuary, hike through lush boulder tracks, swim beneath Dudhsagar waterfall, and ride coastal hills on a scooter.'
    },
    'A cultural chapter': {
      subtitle: 'Colonial Latin quarters, Portuguese mansions, and ancient Konkani shrines',
      quote: '“History is the memory of time etched in stone and soul.”',
      highlights: ['Fontainhas heritage architecture walk', 'Old Goa UNESCO cathedrals', 'Menezes Braganza 350-year-old mansion'],
      sampleDay: 'Explore the golden altars of Sé Cathedral, photograph the indigo blue tiles of Fontainhas, and listen to traditional Fado music over dinner.'
    },
    'A food-filled chapter': {
      subtitle: 'Fiery vindaloo, crab xec xec, fresh poee bread, and cashew feni',
      quote: '“Good food is the foundation of genuine happiness.”',
      highlights: ['Early morning fish auction at Betim', 'Spice plantation tasting trail', 'Beach shack butter garlic lobster'],
      sampleDay: 'Sip hot coffee with freshly baked choris pav, tour a spice farm for traditional lunch, and enjoy evening crab curry at a local beach shack.'
    },
    'A romantic chapter': {
      subtitle: 'Golden hour cliff walks, candlelit shores, and private sailing',
      quote: '“Where the sea meets the sky, love finds its horizon.”',
      highlights: ['Sunset drinks on Vagator cliffs', 'Private wooden boat cruise on Chapora river', 'Secluded candlelight dinner in South Goa'],
      sampleDay: 'Lazy morning with breakfast in bed, afternoon exploring quiet beaches of South Goa, and sunset cocktails overlooking the waves from a cliffside pavilion.'
    },
    'A family chapter': {
      subtitle: 'Dolphin spotting cruises, spice plantation fun, and calm swimming bays',
      quote: '“Together is our favorite place to be.”',
      highlights: ['Dolphin watching boat trip in Morjim', 'Spice farm elephant bath view', 'Safe shallow swimming at Palolem'],
      sampleDay: 'Embark on a gentle boat tour to spot wild dolphins, build sandcastles on the tranquil crescent of Palolem beach, and enjoy fresh wood-fired pizza.'
    },
    'A chapter of discovery': {
      subtitle: 'Ancient Buddhist caves of Rivona, forgotten forts, and artisan workshops',
      quote: '“Not all those who wander are lost.”',
      highlights: ['Cabo de Rama medieval ruins', 'Prehistoric rock carvings of Usgalimal', 'Rivona laterite meditation caves'],
      sampleDay: 'Ride backroads through green paddy fields to find 10,000-year-old petroglyphs at Usgalimal, explore the ramparts of Cabo de Rama fort, and watch the sun dip into the sea.'
    }
  },
  accommodations: [
    {
      id: 'alila-diwa-goa',
      name: 'Alila Diwa Goa',
      type: 'Resort',
      priceRange: '₹14,000 - ₹28,000 / night ($170 - $340)',
      location: 'Majorda, South Goa',
      facilities: ['Infinity Pool Overlooking Paddy Fields', 'Holistic Ayurveda Spa', 'Open-air Pavilions', 'Private Beach Shuttle'],
      rating: 4.8,
      reviewsCount: 1650,
      distanceFromMajorAttractions: '10 mins to Majorda Beach',
      suitableFor: ['Couples', 'Relaxation Seekers', 'Families'],
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'panjim-heritage-inn',
      name: 'WelcomHeritage Panjim Inn',
      type: 'Homestay',
      priceRange: '₹4,500 - ₹7,500 / night ($55 - $90)',
      location: 'Fontainhas, Panaji',
      facilities: ['Antiques & Period Furniture', 'Art Gallery', 'Veranda Restaurant', 'Free Wi-Fi'],
      rating: 4.7,
      reviewsCount: 890,
      distanceFromMajorAttractions: 'Located directly in the Latin Quarter',
      suitableFor: ['Heritage Lovers', 'Solo Travelers', 'Couples'],
      image: 'https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=600&q=80'
    }
  ],
  packages: [
    {
      id: 'goa-3day-escape',
      name: '3-Day Susegad Coastal Chapter',
      durationDays: 3,
      tagline: 'Sun, historic Latin quarters, and authentic Konkani coastal flavours',
      includedExperiences: ['Fontainhas Walking Tour', 'Sunset Cruise on Mandovi River', 'South Goa Beach Hopping'],
      accommodationCategory: 'Heritage Villa or Beach Boutique Resort',
      transportation: 'Rental Scooter or Private AC Cab',
      estimatedBudget: 195,
      activities: ['Panaji Latin Quarter', 'Old Goa Basilica', 'Palolem Crescent Beach', 'Beach shack dinner'],
      customizableOptions: ['Private catamaran sailing', 'Ayurvedic massage session']
    },
    {
      id: 'goa-5day-complete',
      name: '5-Day Coastal & Wilderness Chapter',
      durationDays: 5,
      tagline: 'The complete Goan tapestry: beaches, waterfalls, spice farms, and ancient forts',
      includedExperiences: ['Dudhsagar Jeep Safari', 'Spice Plantation Tour', 'Backwater Kayaking', 'Heritage Walk'],
      accommodationCategory: '4-Star Beachside Resort',
      transportation: 'Chauffeur Driven AC Cab',
      estimatedBudget: 380,
      activities: ['All iconic beaches', 'Dudhsagar falls swim', 'Spice lunch', 'Chapora fort sunset', 'Anjuna flea market'],
      customizableOptions: ['Scuba diving trip to Grande Island', 'Private chef barbecue']
    }
  ],
  budgetBreakdown: {
    currencySymbol: '₹',
    currencyCode: 'INR',
    exchangeRateToUSD: 0.012,
    dailyCosts: {
      Budget: { stay: 16, food: 12, transport: 6, attractions: 4, activities: 10, misc: 5 },
      Moderate: { stay: 55, food: 25, transport: 15, attractions: 8, activities: 25, misc: 10 },
      Premium: { stay: 150, food: 65, transport: 35, attractions: 18, activities: 50, misc: 25 },
      Luxury: { stay: 320, food: 120, transport: 60, attractions: 30, activities: 100, misc: 45 }
    }
  },
  importantInfo: {
    transportation: {
      overview: 'Renting a scooter or car is the most popular way to discover Goa’s coastal villages and secluded beaches.',
      options: [
        { name: 'Scooter / Motorcycle Rental', desc: 'Readily available across all beach hubs; valid driving license and helmet strictly required.', tip: 'Inspect tires and brakes before leaving the rental shop.' },
        { name: 'GoaMiles App', desc: 'Government-backed taxi app offering transparent fixed fares across the state.', tip: 'Book airport and railway transfers in advance via the app.' },
        { name: 'Self-Drive Cars', desc: 'Great for families or exploring South Goa’s remote jungle waterfalls.', tip: 'Carry your original physical driving license.' }
      ]
    },
    weather: {
      currentOverview: 'Tropical coastal climate; pleasant breezy winters, warm tropical summers, and dramatic green monsoons.',
      seasons: [
        { name: 'Winter (Peak)', months: 'Nov - Feb', temp: '20°C - 32°C', note: 'Clear blue skies, dry air, and festive vibrant nightlife.' },
        { name: 'Summer', months: 'Mar - May', temp: '25°C - 35°C', note: 'Warm and sunny; calm sea waters and fewer crowds.' },
        { name: 'Monsoon', months: 'Jun - Sep', temp: '23°C - 30°C', note: 'Lush greenery, swollen waterfalls, and serene uncrowded retreats.' }
      ]
    },
    currency: {
      name: 'Indian Rupee',
      symbol: '₹',
      code: 'INR',
      cardAcceptance: 'Cards and UPI digital payments widely accepted; carry cash for beach shacks and rural flea markets.',
      tippingCulture: '10% at restaurants and beach shacks for courteous service.'
    },
    timeZone: 'IST (UTC+5:30)',
    emergency: {
      police: '100 / 112',
      ambulance: '108',
      touristHelpline: '1364 (Goa Tourism Dept)'
    },
    safetyTips: [
      'Swim only in designated safe beach zones monitored by lifeguards; heed red flag warnings.',
      'Always wear a helmet when riding scooters on winding coastal roads.',
      'Goa is safe and hospitable; keep emergency numbers saved.'
    ],
    localEtiquette: [
      'Wear modest attire when visiting churches and temples.',
      'Refrain from loud music or littering on quiet residential village roads.'
    ],
    travelTips: [
      'Split your stay: 2 days in lively North Goa and 3 days in serene, untouched South Goa.',
      'Don’t miss freshly baked poee bread in the early morning.'
    ]
  },
  mapPoints: [
    { id: 'g1', title: 'Fontainhas Latin Quarter', category: 'attraction', lat: 15.4989, lng: 73.8278, description: 'Historic Portuguese colonial quarter in Panaji.', cost: 'Free' },
    { id: 'g2', title: 'Cola Beach & Lagoon', category: 'attraction', lat: 15.0567, lng: 73.9744, description: 'Secluded golden beach with freshwater lagoon.', cost: 'Free' },
    { id: 'g3', title: 'Ritz Classic Panaji', category: 'food', lat: 15.4952, lng: 73.826, description: 'Iconic authentic Goan fish thali restaurant.', cost: '$$' },
    { id: 'g4', title: 'Alila Diwa Resort', category: 'accommodation', lat: 15.3056, lng: 73.9122, description: 'Serene luxury resort in South Goa.', cost: '$$$$' },
    { id: 'g5', title: 'Dudhsagar Waterfall Point', category: 'experience', lat: 15.3144, lng: 74.3143, description: 'Four-tiered mountain waterfall jeep trek.', cost: '$$' }
  ]
};
