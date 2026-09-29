import { Destination } from '../../types/travel';

export const newyorkDestination: Destination = {
  id: 'new-york',
  name: 'New York City',
  country: 'United States',
  region: 'New York State',
  tagline: 'The Crossroads of the World, Ambition, and Endless Horizons',
  heroImage: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1600&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=800&q=80',
  ],
  coordinates: [40.7128, -74.006],
  intro: {
    whereItIs: 'At the mouth of the Hudson River in southeastern New York State, spanning Manhattan, Brooklyn, Queens, the Bronx, and Staten Island.',
    whyPeopleVisit: 'Iconic skyline, Broadway theater, Central Park, Metropolitan Museum of Art, diverse culinary pockets from Chinatown to Little Italy, and an unstoppable cultural pulse.',
    bestTimeToVisit: 'September to November for crisp autumn foliage and spring (April to June) for mild walking weather.',
    generalAtmosphere: 'Electrifying, ambitious, culturally infinite, cinematic, and fast-paced.',
    approxCostLevel: 'Premium to Luxury',
    recommendedDuration: '4 to 7 Days',
  },
  touristSpots: [
    {
      id: 'central-park',
      name: 'Central Park & Bethesda Terrace',
      category: 'Nature',
      isLesserKnown: false,
      image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=800&q=80',
      description: 'An 843-acre urban masterpiece designed by Olmsted and Vaux featuring winding pathways, rowboat lakes, Bow Bridge, and the Bethesda fountain.',
      location: 'Manhattan (59th to 110th St)',
      estimatedDuration: '3 - 4 Hours',
      approxCost: 'Free entry (rowboat rental $25/hr)',
      openingHours: '6:00 AM - 1:00 AM',
      distanceFromStay: 'Heart of Manhattan',
      whyWorthVisiting: 'A tranquil oasis nestled directly between soaring skyscrapers, full of street violinists and autumn foliage.',
      lat: 40.7829,
      lng: -73.9654,
    },
    {
      id: 'high-line-chelsea',
      name: 'The High Line & Chelsea Market',
      category: 'Culture',
      isLesserKnown: false,
      image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=800&q=80',
      description: 'A 1.45-mile elevated public park created on a historic freight rail line above Manhattan’s West Side, integrated with native flora and public art.',
      location: 'Gansevoort St to 34th St',
      estimatedDuration: '2 Hours',
      approxCost: 'Free',
      openingHours: '7:00 AM - 10:00 PM',
      distanceFromStay: 'Meatpacking District',
      whyWorthVisiting: 'Walk through tree canopies above street traffic, peer down Meatpacking cobblestones, and grab artisanal bites at Chelsea Market.',
      lat: 40.748,
      lng: -74.0048,
    }
  ],
  culture: {
    traditions: [
      'The morning bagel and coffee ritual from neighborhood street carts or Jewish delis',
      'Broadway theater curtain calls and Playbill collection',
      'Weekend strolls and flea market hunting through Brooklyn’s DUMBO and Williamsburg'
    ],
    festivals: [
      {
        name: 'Tribeca Festival',
        timing: 'June',
        description: 'World-renowned celebration of storytelling, independent cinema, music, and interactive art across Lower Manhattan.'
      }
    ],
    customs: [
      'Walking swiftly with purpose and stepping to the side if checking smartphone maps',
      'Holding subway doors or letting passengers exit trains before boarding',
      'Tipping 18% - 22% in restaurants and bars'
    ],
    socialEtiquette: [
      'New Yorkers are busy but genuinely helpful; be concise when asking for directions',
      'Stand on the right, walk on the left of escalators'
    ],
    dressConsiderations: 'Chic, layerable, comfortable walking footwear (plan for 15,000+ steps daily).',
    thingsVisitorsShouldRespect: [
      'Silence and solemn reverence at the 9/11 Memorial reflecting pools',
      'Honor personal space on crowded subway cars'
    ],
    culturalFacts: [
      'More than 800 languages are spoken in New York City, making it the most linguistically diverse city on earth.',
      'The NYC subway operates 24 hours a day, 365 days a year without closing.'
    ]
  },
  languages: {
    officialLanguages: ['English'],
    commonlySpoken: ['Spanish', 'Chinese (Mandarin/Cantonese)', 'Russian', 'Bengali', 'Yiddish'],
    usefulPhrases: [
      { category: 'greeting', phrase: 'Hey, how’s it going?', translation: 'Informal daily greeting', pronunciation: 'hey howz it go-ing' },
      { category: 'thank_you', phrase: 'Thanks a lot / Much appreciated', translation: 'Expressing gratitude', pronunciation: 'thanks uh lot' },
      { category: 'directions', phrase: 'Which uptown / downtown train do I take?', translation: 'Navigating subway platforms', pronunciation: 'wich up-town train' },
      { category: 'food', phrase: 'Can I get an everything bagel with scallion schmear?', translation: 'Ordering signature breakfast', pronunciation: 'ev-ree-thing bay-guhl' }
    ]
  },
  food: {
    dishes: [
      {
        id: 'ny-pastrami',
        name: 'Katz’s Delicatessen Hot Pastrami on Rye',
        category: 'Non-Vegetarian',
        description: 'Tender, peppery cured beef pastrami hand-sliced warm, piled high between seeded rye bread with spicy brown mustard.',
        image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80',
        whereToTry: 'Katz’s Delicatessen (Lower East Side)',
        approxPrice: '$28 - $32'
      },
      {
        id: 'ny-slice',
        name: 'Classic New York Thin-Crust Pizza Slice',
        category: 'Vegetarian',
        description: 'Crispy yet pliable charred thin crust topped with sweet tomato sauce and whole-milk mozzarella that folds neatly down the center.',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
        whereToTry: 'Joe’s Pizza (Greenwich Village) or Scarr’s Pizza (LES)',
        approxPrice: '$3.50 - $5.00'
      }
    ],
    recommendedExperiences: [
      'Grabbing a warm pastrami sandwich or knish on the Lower East Side',
      'Sunday morning bagel picnic in Central Park under golden willow trees',
      'Craft cocktail experience in a discreet 1920s speakeasy behind a phone booth'
    ]
  },
  experiences: [
    {
      id: 'broadway-show-experience',
      title: 'Broadway Evening Theater Experience & Backstage History',
      type: 'performance',
      description: 'Experience world-class live theater in the historic Theater District followed by post-show dinner in Hell’s Kitchen.',
      duration: '3.5 Hours',
      cost: '$120 - $220',
      image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=600&q=80',
      highlight: 'Electrifying live performances and standing ovations in century-old playhouses.'
    }
  ],
  chapterStyles: {
    'A peaceful chapter': {
      subtitle: 'Morning park benches, contemplative cloister courtyards, and riverside sunsets',
      quote: '“There is a quiet dignity in the heart of this electric stone forest.”',
      highlights: ['The Met Cloisters medieval gardens', 'Rowing a boat on Central Park lake', 'Brooklyn Heights Promenade at dawn'],
      sampleDay: 'Spend a quiet morning among tapestries at The Cloisters in Fort Tryon Park, browse independent bookstores in Greenwich Village, and watch twilight settle over the skyline.'
    },
    'An adventurous chapter': {
      subtitle: 'Walking the Brooklyn Bridge at midnight, soaring helicopter tours, and underground jazz',
      quote: '“Concrete canyons built for daring souls.”',
      highlights: ['Helicopter flight over Manhattan', 'Crossing the Brooklyn Bridge on foot', 'Late night Village Vanguard jazz session'],
      sampleDay: 'Scale the SUMMIT One Vanderbilt glass elevators, walk the high timber planks of the Brooklyn Bridge into DUMBO, and listen to improvisational jazz until 2 AM.'
    },
    'A cultural chapter': {
      subtitle: 'World-class museum halls, literary salons, and avant-garde galleries',
      quote: '“Art is the breath of New York’s soul.”',
      highlights: ['The Metropolitan Museum of Art', 'Museum of Modern Art (MoMA)', 'Guggenheim spiral gallery'],
      sampleDay: 'Explore Egyptian temples at The Met, stroll Museum Mile down Fifth Avenue, admire Van Gogh’s Starry Night at MoMA, and attend a salon reading in SoHo.'
    },
    'A food-filled chapter': {
      subtitle: 'From dim sum in Flushing to Michelin-starred dining and street carts',
      quote: '“To taste New York is to taste the world in a single city.”',
      highlights: ['Chinatown soup dumpling crawl', 'Lower East Side Jewish delis', 'Artisanal coffee and pizza crawl in Brooklyn'],
      sampleDay: 'Fresh everything bagel for breakfast, soup dumplings in Chinatown for lunch, cannoli in Little Italy, and an intimate tasting menu dinner in Tribeca.'
    },
    'A romantic chapter': {
      subtitle: 'Horse-drawn carriage rides, rooftop champagne bars, and skyline reflections',
      quote: '“I would rather be in New York with you than any other city on earth.”',
      highlights: ['Rooftop cocktail overlooking Empire State', 'Private harbor sailboat charter', 'Candlelit West Village bistro'],
      sampleDay: 'Stroll hand-in-hand through brownstone-lined West Village streets, take a sailboat into the sunset facing the Statue of Liberty, and dine by candlelight.'
    },
    'A family chapter': {
      subtitle: 'Dinosaur fossils, ferry rides past Lady Liberty, and giant toy stores',
      quote: '“Every child looks at these skyscrapers and dreams of reaching the stars.”',
      highlights: ['American Museum of Natural History giant blue whale', 'Staten Island Ferry ride past Statue of Liberty', 'Central Park Zoo'],
      sampleDay: 'Gaze up at the T-Rex skeleton at Natural History Museum, sail the free Staten Island Ferry with panoramic skyline views, and enjoy warm pretzels in the park.'
    },
    'A chapter of discovery': {
      subtitle: 'Speakeasies behind coffee counters, hidden elevated parks, and underground train relics',
      quote: '“New York has a thousand hidden doors waiting for those who look closely.”',
      highlights: ['Old City Hall decommissioned subway station view', 'Hidden rooftop gardens at Rockefeller Center', 'Secret speakeasies'],
      sampleDay: 'Ride the 6 train through the abandoned 1904 tiled City Hall station, find secret courtyard waterfalls in Midtown, and discover a vinyl listening lounge in Chinatown.'
    }
  },
  accommodations: [
    {
      id: 'the-greenwich-hotel',
      name: 'The Greenwich Hotel (Tribeca)',
      type: 'Luxury stay',
      priceRange: '$850 - $1,600 / night',
      location: 'Tribeca, Downtown Manhattan',
      facilities: ['Underground Japanese Shibui Spa', 'Courtyard Garden', 'Locanda Verde Italian Restaurant', 'Private Fireplaces'],
      rating: 4.9,
      reviewsCount: 880,
      distanceFromMajorAttractions: '10 mins to SoHo and Wall Street',
      suitableFor: ['Luxury Seekers', 'Couples', 'Celebrities'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'arman-soho-hotel',
      name: 'Arlo SoHo Boutique Hotel',
      type: 'Hotel',
      priceRange: '$220 - $420 / night',
      location: 'Hudson Square / SoHo',
      facilities: ['Rooftop Skyline Bar', 'Smart Micro-Rooms', 'Co-working Lounge', 'Complimentary Bicycles'],
      rating: 4.7,
      reviewsCount: 1950,
      distanceFromMajorAttractions: 'Walking distance to SoHo shopping and Tribeca',
      suitableFor: ['Solo Travelers', 'Couples', 'Digital Nomads'],
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
    }
  ],
  packages: [
    {
      id: 'nyc-3day-pulse',
      name: '3-Day Manhattan Pulse Chapter',
      durationDays: 3,
      tagline: 'Iconic skylines, Central Park strolls, Broadway lights, and Brooklyn bridges',
      includedExperiences: ['Broadway Orchestra Ticket', 'SUMMIT One Vanderbilt Entry', 'High Line Walking Guide'],
      accommodationCategory: '4-Star Boutique Downtown Hotel',
      transportation: 'Subway OMNY Pass Included',
      estimatedBudget: 490,
      activities: ['Central Park', 'Museum of Modern Art', 'Times Square lights', 'Brooklyn Bridge walk'],
      customizableOptions: ['Helicopter skyline flight', 'Met museum private docent tour']
    },
    {
      id: 'nyc-5day-complete',
      name: '5-Day Ultimate Big Apple Odyssey',
      durationDays: 5,
      tagline: 'The full cinematic experience: world-class art, speakeasies, harbor sailing, and 5-borough culture',
      includedExperiences: ['The Met Museum VIP Pass', 'Broadway Show', 'Private Harbor Sail', 'Food Tour'],
      accommodationCategory: 'Luxury Central Hotel',
      transportation: 'Subway & Private Black Car Transfers',
      estimatedBudget: 980,
      activities: ['All major iconic landmarks', 'SoHo & West Village', 'DUMBO & Brooklyn Heights', '9/11 Memorial'],
      customizableOptions: ['Private helicopter airport transfer', 'Chef’s table Michelin tasting']
    }
  ],
  budgetBreakdown: {
    currencySymbol: '$',
    currencyCode: 'USD',
    exchangeRateToUSD: 1.0,
    dailyCosts: {
      Budget: { stay: 70, food: 35, transport: 10, attractions: 20, activities: 25, misc: 15 },
      Moderate: { stay: 220, food: 80, transport: 20, attractions: 45, activities: 55, misc: 30 },
      Premium: { stay: 450, food: 160, transport: 50, attractions: 75, activities: 110, misc: 55 },
      Luxury: { stay: 950, food: 320, transport: 120, attractions: 120, activities: 250, misc: 120 }
    }
  },
  importantInfo: {
    transportation: {
      overview: 'The New York City Subway is the fastest way to get anywhere in the city, operating 24 hours a day with contactless tap-to-pay (OMNY).',
      options: [
        { name: 'Subway (OMNY)', desc: 'Simply tap your smartphone or contactless credit card at any turnstile ($2.90 per ride).', tip: 'Free automated fare cap after 12 rides in a Monday-Sunday week.' },
        { name: 'Yellow Cabs & Rideshare', desc: 'Hail yellow cabs with rooftop light on in Manhattan; Uber/Lyft readily available.', tip: 'Subways are almost always faster than cabs during rush hours (4-7 PM).' },
        { name: 'NYC Ferry', desc: 'Scenic passenger ferry connecting Manhattan, Brooklyn, Queens, and Governors Island for $4.00.', tip: 'Great affordable open-air skyline views from East River.' }
      ]
    },
    weather: {
      currentOverview: 'Four distinct seasons: crisp sunny autumns, festive snowy winters, blossoming springs, and warm vibrant summers.',
      seasons: [
        { name: 'Autumn (Peak)', months: 'Sep - Nov', temp: '12°C - 22°C', note: 'Golden park foliage, clear skies, and ideal walking conditions.' },
        { name: 'Spring', months: 'Apr - Jun', temp: '13°C - 24°C', note: 'Blooming cherry blossoms and sidewalk cafe reopenings.' },
        { name: 'Summer', months: 'Jul - Aug', temp: '22°C - 32°C', note: 'Warm with rooftop parties and free Shakespeare in the Park.' },
        { name: 'Winter', months: 'Dec - Feb', temp: '-2°C - 6°C', note: 'Rockefeller Christmas tree and ice skating in the parks.' }
      ]
    },
    currency: {
      name: 'US Dollar',
      symbol: '$',
      code: 'USD',
      cardAcceptance: 'Cards and Apple/Google Pay accepted universally; many cafes are cashless.',
      tippingCulture: '18% to 22% is standard in restaurants and bars; $1-2 per drink or per bag for bellhops.'
    },
    timeZone: 'EST (UTC-5) / EDT in summer (UTC-4)',
    emergency: {
      police: '911',
      ambulance: '911',
      touristHelpline: '311 (NYC non-emergency information)'
    },
    safetyTips: [
      'New York is one of the safest major cities in the United States.',
      'Stay alert and keep phones secured when riding late-night subway cars.',
      'Always enter licensed yellow cabs or verified rideshare vehicles.'
    ],
    localEtiquette: [
      'Step aside onto the sidewalk when stopping to read directions.',
      'Have your payment method ready before reaching subway turnstiles or ordering at delis.'
    ],
    travelTips: [
      'Wear broken-in comfortable walking shoes; you will effortlessly walk 6 to 10 miles each day.',
      'Visit observation decks (Top of the Rock, SUMMIT) at golden hour just before sunset.'
    ]
  },
  mapPoints: [
    { id: 'ny1', title: 'Central Park Bethesda Terrace', category: 'attraction', lat: 40.7738, lng: -73.9708, description: 'Iconic terrace and fountain overlooking the lake.', cost: 'Free' },
    { id: 'ny2', title: 'The High Line Park', category: 'attraction', lat: 40.748, lng: -74.0048, description: 'Elevated linear greenway with modern art.', cost: 'Free' },
    { id: 'ny3', title: 'Katz’s Delicatessen', category: 'food', lat: 40.7222, lng: -73.9874, description: 'Legendary 1888 pastrami delicatessen.', cost: '$$$' },
    { id: 'ny4', title: 'Arlo SoHo Hotel', category: 'accommodation', lat: 40.7238, lng: -74.0084, description: 'Boutique stay with rooftop views.', cost: '$$$' },
    { id: 'ny5', title: 'Broadway Theater District', category: 'experience', lat: 40.759, lng: -73.9845, description: 'Heart of world-class stage theatre.', cost: '$$$$' }
  ]
};
