import { Destination } from '../../types/travel';

export const parisDestination: Destination = {
  id: 'paris',
  name: 'Paris',
  country: 'France',
  region: 'Île-de-France',
  tagline: 'The City of Light, Artful Alleyways, and Timeless Romance',
  heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1509299349698-dd22323b5963?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
  ],
  coordinates: [48.8566, 2.3522],
  intro: {
    whereItIs: 'Set in north-central France along the River Seine, Paris is the historic crossroads of European art, philosophy, haute couture, and gastronomy.',
    whyPeopleVisit: 'World-renowned museums like the Louvre and Musée d’Orsay, neoclassical boulevards, sidewalk bistro culture, bohemian Montmartre, and romantic riverside walks.',
    bestTimeToVisit: 'April to June and September to November for temperate weather, blooming gardens, and fewer crowds.',
    generalAtmosphere: 'Sophisticated, poetic, culturally rich, strollable, and deeply aesthetic.',
    approxCostLevel: 'Moderate to Luxury',
    recommendedDuration: '4 to 7 Days',
  },
  touristSpots: [
    {
      id: 'eiffel-tower',
      name: 'Eiffel Tower & Champ de Mars',
      category: 'History',
      isLesserKnown: false,
      image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80',
      description: 'Gustave Eiffel’s 330-meter wrought-iron lattice monument erected for the 1889 Exposition Universelle.',
      location: 'Champ de Mars, 7th arrondissement',
      estimatedDuration: '2 - 3 Hours',
      approxCost: '€18 - €29 (elevator to summit)',
      openingHours: '9:30 AM - 11:45 PM',
      distanceFromStay: 'Central Western Paris',
      whyWorthVisiting: 'Panoramic 360° views across Paris and shimmering hourly light sparkle after dusk.',
      lat: 48.8584,
      lng: 2.2945,
    },
    {
      id: 'louvre-museum',
      name: 'Musée du Louvre & Cour Carrée',
      category: 'Culture',
      isLesserKnown: false,
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
      description: 'The world’s largest art museum housed in a former royal palace with I.M. Pei’s iconic glass pyramid entrance.',
      location: 'Rue de Rivoli, 1st arrondissement',
      estimatedDuration: '3 - 5 Hours',
      approxCost: '€22 (online reservation recommended)',
      openingHours: '9:00 AM - 6:00 PM (Closed Tuesdays; open until 9:45 PM Fridays)',
      distanceFromStay: 'Heart of the city along the Seine',
      whyWorthVisiting: 'Home to the Mona Lisa, Venus de Milo, Winged Victory of Samothrace, and 35,000 historic works.',
      lat: 48.8606,
      lng: 2.3376,
    },
    {
      id: 'musee-de-la-vie-romantique',
      name: 'Musée de la Vie Romantique',
      category: 'Culture',
      isLesserKnown: true,
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
      description: 'A charming 1830 country villa at the foot of Montmartre where painter Ary Scheffer hosted Chopin, George Sand, and Delacroix.',
      location: '16 Rue Chaptal, 9th arrondissement',
      estimatedDuration: '1.5 Hours',
      approxCost: 'Free permanent collection (€10 temporary exhibitions)',
      openingHours: '10:00 AM - 6:00 PM (Closed Mondays)',
      distanceFromStay: '10 mins walk from Pigalle or Saint-Georges',
      whyWorthVisiting: 'A tranquil courtyard shaded by lilacs and rose bushes with a greenhouse tea salon far from tourist crowds.',
      lat: 48.8812,
      lng: 2.3339,
    },
    {
      id: 'promenade-plantee',
      name: 'Coulée Verte René-Dumont (Promenade Plantée)',
      category: 'Nature',
      isLesserKnown: true,
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
      description: 'An elevated 4.7 km linear park built atop an abandoned 19th-century railway viaduct overgrown with climbing roses and bamboo groves.',
      location: '12th arrondissement (from Bastille to Bois de Vincennes)',
      estimatedDuration: '2 Hours',
      approxCost: 'Free',
      openingHours: '8:00 AM - Dusk',
      distanceFromStay: 'Starts near Opéra Bastille',
      whyWorthVisiting: 'The serene prototype that inspired NYC’s High Line, offering tree-canopy views of Parisian rooftop chimneys.',
      lat: 48.8488,
      lng: 2.3811,
    }
  ],
  culture: {
    traditions: [
      'The "Flâneur" philosophy: artfully wandering the boulevards without a destination',
      'The ritual of the Apéro: gathering around 6 PM for wine and conversation',
      'Sunday morning neighborhood open-air market grocery runs with woven baskets'
    ],
    festivals: [
      {
        name: 'Fête de la Musique',
        timing: 'June 21',
        description: 'All-night solstice celebration where free musical performances fill every street corner, square, and bridge across Paris.'
      },
      {
        name: 'Nuit Blanche',
        timing: 'First Saturday of June',
        description: 'An all-night arts festival transforming public spaces, monuments, and gardens with contemporary installations.'
      }
    ],
    customs: [
      'Always saying "Bonjour Madame/Monsieur" upon entering any shop, café, or bakery',
      'Asking "L’addition, s’il vous plaît" (the check is never brought automatically until requested)',
      'Respectful quiet speaking volume on public transit'
    ],
    socialEtiquette: [
      'Politeness begins with a friendly greeting before asking questions',
      'Do not rush meals; dining is an unhurried social art form in France',
      'Tipping is not mandatory since service is included, but rounding up 5-10% for great service is appreciated'
    ],
    dressConsiderations: 'Smart casual; neutral tones, comfortable stylish walking shoes, well-cut layers.',
    thingsVisitorsShouldRespect: [
      'Greet shopkeepers warmly upon entry and say "Au revoir" when leaving',
      'Respect quiet hours on residential stairwells and metro carriages',
      'Keep bread directly on the table cloth or side plate, never upside down'
    ],
    culturalFacts: [
      'There is only one stop sign in the entire city of Paris; priority to the right is the universal rule.',
      'Paris has over 400 municipal parks and gardens.'
    ]
  },
  languages: {
    officialLanguages: ['French'],
    commonlySpoken: ['English in hotels, restaurants, and museums', 'Spanish', 'Arabic'],
    usefulPhrases: [
      { category: 'greeting', phrase: 'Bonjour / Bonsoir', translation: 'Hello / Good evening', pronunciation: 'bohn-zhoor / bohn-swahr' },
      { category: 'thank_you', phrase: 'Merci beaucoup', translation: 'Thank you very much', pronunciation: 'mair-see boh-koo' },
      { category: 'please', phrase: 'S’il vous plaît', translation: 'Please', pronunciation: 'seel voo pleh' },
      { category: 'help', phrase: 'Pouvez-vous m’aider, s’il vous plaît ?', translation: 'Could you help me, please?', pronunciation: 'poo-vay voo may-day seel voo pleh' },
      { category: 'directions', phrase: 'Où se trouve la station de métro ?', translation: 'Where is the metro station?', pronunciation: 'oo suh troov lah stah-see-ohn duh meh-troh' },
      { category: 'food', phrase: 'Une baguette tradition et un café au lait, s’il vous plaît', translation: 'A traditional baguette and coffee with milk, please', pronunciation: 'oon bah-get trah-dee-see-ohn ay uhn kah-fay oh leh' }
    ]
  },
  food: {
    dishes: [
      {
        id: 'croissant-beurre',
        name: 'Croissant au Beurre Artisanal',
        category: 'Vegetarian',
        description: 'Golden, honeycomb-layered flaky viennoiserie made with pure Normandy butter and caramelized crust.',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80',
        whereToTry: 'Du Pain et des Idées (10th arr) or Mamiche (9th arr)',
        approxPrice: '€1.40 - €2.00'
      },
      {
        id: 'beef-bourguignon',
        name: 'Bœuf Bourguignon',
        category: 'Non-Vegetarian',
        description: 'Tender beef braised for hours in Pinot Noir with pearl onions, lardons, and button mushrooms, served with buttered egg noodles.',
        image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=600&q=80',
        whereToTry: 'Bistrot Paul Bert (11th arr) or Chez René (5th arr)',
        approxPrice: '€22 - €32'
      },
      {
        id: 'tarte-tatin',
        name: 'Tarte Tatin',
        category: 'Dessert',
        description: 'Caramelized upside-down apple tart served warm with a dollop of thick Isigny crème fraîche.',
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80',
        whereToTry: 'Café de Flore (Saint-Germain) or Stohrer (oldest bakery in Paris)',
        approxPrice: '€8 - €12'
      }
    ],
    recommendedExperiences: [
      'Sunset picnic along the Pont des Arts or Canal Saint-Martin with fresh cheese, baguette, and wine',
      'Pastry tasting trail through the Marais with macarons and choux pastries',
      'Historic literary cafe afternoon at Les Deux Magots'
    ]
  },
  experiences: [
    {
      id: 'seine-cruise',
      title: 'Illuminated Night Cruise along the River Seine',
      type: 'relaxation',
      description: 'Glide beneath the Pont Neuf and Alexandre III bridges under night illuminations with an audio commentary on Parisian lore.',
      duration: '1.2 Hours',
      cost: '€18 ($20)',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80',
      highlight: 'Witness Notre-Dame, the Musée d’Orsay, and the sparkling Eiffel Tower from the water.'
    },
    {
      id: 'boulangerie-masterclass',
      title: 'Traditional French Baguette & Croissant Baking Workshop',
      type: 'cooking',
      description: 'Step into a certified Parisian bakery kitchen and master the art of lamination and fermentation from a master baker.',
      duration: '3 Hours',
      cost: '€95 ($105)',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80',
      highlight: 'Taste your hot, freshly baked pastries straight from the deck oven.'
    }
  ],
  chapterStyles: {
    'A peaceful chapter': {
      subtitle: 'Tranquil Luxembourg garden benches, quiet bookstore nooks, and morning canals',
      quote: '“Paris is always a good idea, especially when taken quietly.”',
      highlights: ['Morning reading at Jardin du Luxembourg', 'Browsing Shakespeare and Company bookstore', 'Hidden cloister courtyards'],
      sampleDay: 'Sip morning espresso on a quiet terrace, spend two unhurried hours exploring the Rodin sculpture gardens, and watch chess games under chestnut trees.'
    },
    'An adventurous chapter': {
      subtitle: 'Underground catacombs, rooftop viewpoints, and night biking',
      quote: '“Adventure awaits around every cobblestone turn.”',
      highlights: ['Exploring the Paris Catacombs', 'Midnight Vélib bike tour of illuminated monuments', 'Climbing Montmartre steps'],
      sampleDay: 'Descend into the limestone catacombs in the morning, cycle along the banks of the Seine, and climb the tower of Saint-Jacques for 360° views.'
    },
    'A cultural chapter': {
      subtitle: 'Impressionist galleries, historic operas, and salon conversations',
      quote: '“Whoever does not visit Paris regularly will never really be elegant.”',
      highlights: ['Musée d’Orsay impressionist halls', 'Palais Garnier opera tour', 'Marais modern art galleries'],
      sampleDay: 'Marvel at Monet’s Water Lilies at Musée de l’Orangerie, walk through the historic Place des Vosges, and attend an evening concert at Sainte-Chapelle.'
    },
    'A food-filled chapter': {
      subtitle: 'From Michelin bistronomy to market stalls and cellar wines',
      quote: '“To eat well in Paris is to participate in an art form.”',
      highlights: ['Marché d’Aligre culinary market', 'Natural wine tastings in Belleville', 'Artisanal cheese cellar flight'],
      sampleDay: 'Morning croissant crawl, oyster tasting at Marché Bastille, afternoon cheese and wine flight in Saint-Germain, and a dinner at an authentic French bistro.'
    },
    'A romantic chapter': {
      subtitle: 'Sunset along the Seine, candlelit bistros, and secret gardens',
      quote: '“There is only one Paris and however hard living may be, the heart remembers.”',
      highlights: ['Picnic on Square du Vert-Galant', 'Love locks view from Pont Neuf', 'Candlelit dinner in Montmartre'],
      sampleDay: 'Stroll hand-in-hand through the rose garden of Musée Rodin, enjoy a private boat ride on the Seine at twilight, and dine on an intimate cobblestone alley.'
    },
    'A family chapter': {
      subtitle: 'Toy boats on palace fountains, science museums, and carousel rides',
      quote: '“Childhood wonder finds its castle in Paris.”',
      highlights: ['Sailing vintage wooden boats in Tuileries', 'Natural History Museum dinosaur gallery', 'Jardin d’Acclimatation'],
      sampleDay: 'Rent wooden sailboat toys at Luxembourg Gardens, visit the Grande Galerie de l’Évolution, and sample artisanal hot chocolate at Angelina.'
    },
    'A chapter of discovery': {
      subtitle: 'Covered passages of the 19th century, flea markets, and artist ateliers',
      quote: '“To wander is to live.”',
      highlights: ['Passage des Panoramas glass arcades', 'Marché aux Puces de Saint-Ouen antique hunting', 'Secret medieval towers'],
      sampleDay: 'Explore 19th-century glass-roofed arcades filled with antiquarian bookshops, uncover vintage treasures at Saint-Ouen, and discover the hidden Roman arena of Lutetia.'
    }
  },
  accommodations: [
    {
      id: 'hotel-le-marais',
      name: 'Hôtel Caron de Beaumarchais',
      type: 'Hotel',
      priceRange: '€180 - €320 / night ($195 - $350)',
      location: 'Le Marais, 4th arrondissement',
      facilities: ['18th-Century Antiques', 'Free High-speed Wi-Fi', 'Continental Breakfast', 'Concierge Service'],
      rating: 4.8,
      reviewsCount: 940,
      distanceFromMajorAttractions: '5 mins walk to Place des Vosges & Seine',
      suitableFor: ['Couples', 'Culture Lovers', 'Solo Travelers'],
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'le-bristol-paris',
      name: 'Le Bristol Paris Palace',
      type: 'Luxury stay',
      priceRange: '€1,200 - €2,400 / night ($1,300 - $2,600)',
      location: 'Rue du Faubourg Saint-Honoré, 8th arr',
      facilities: ['Rooftop Pool with Eiffel Views', '3-Michelin-Star Epicure', 'Private Courtyard Garden', 'Luxury Spa'],
      rating: 4.9,
      reviewsCount: 1540,
      distanceFromMajorAttractions: 'Steps from Élysée Palace and Champs-Élysées',
      suitableFor: ['Luxury Travelers', 'Honeymooners'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
    }
  ],
  packages: [
    {
      id: 'paris-1day-explorer',
      name: '1-Day Parisian Essence',
      durationDays: 1,
      tagline: 'The timeless monuments, riverside promenade, and classic bistro meal',
      includedExperiences: ['Seine Sightseeing Cruise', 'Tuileries Gardens Walk', 'Montmartre Funicular'],
      accommodationCategory: 'Boutique Hotel or Day Transit',
      transportation: 'Metro Day Pass & Walking',
      estimatedBudget: 110,
      activities: ['Eiffel Tower grounds', 'Louvre Courtyard', 'Notre-Dame view', 'Latin Quarter bistro dinner'],
      customizableOptions: ['Add skip-the-line museum pass', 'Private guided photography walk']
    },
    {
      id: 'paris-3day-culture',
      name: '3-Day Art & Light Chapter',
      durationDays: 3,
      tagline: 'Masterpieces, literary cafes, bohemian villages, and iconic gardens',
      includedExperiences: ['Musée d’Orsay Ticket', 'Baguette Baking Class', 'Evening Seine Cruise'],
      accommodationCategory: '4-Star Marais Boutique Stay',
      transportation: 'Metro & Walking',
      estimatedBudget: 380,
      activities: ['Louvre highlights', 'Montmartre artists square', 'Latin Quarter & Shakespeare and Co', 'Sainte-Chapelle stained glass'],
      customizableOptions: ['Private Versailles day excursion', 'Wine and cheese cellar tasting']
    },
    {
      id: 'paris-5day-complete',
      name: '5-Day Grand Parisian Life',
      durationDays: 5,
      tagline: 'The complete immersion: palaces, secret passages, haute cuisine, and gardens',
      includedExperiences: ['Versailles Palace Entry', 'Opera Garnier Private Tour', 'Baking Workshop', 'Bistronomy Tasting'],
      accommodationCategory: 'Historic 5-Star Hotel',
      transportation: 'Chauffeur + Metro',
      estimatedBudget: 720,
      activities: ['All iconic monuments', 'Covered arcades', 'Marais boutiques', 'Saint-Germain literary walk', 'Versailles gardens'],
      customizableOptions: ['Perfume creation atelier', 'Champagne region day trip']
    }
  ],
  budgetBreakdown: {
    currencySymbol: '€',
    currencyCode: 'EUR',
    exchangeRateToUSD: 1.08,
    dailyCosts: {
      Budget: { stay: 45, food: 25, transport: 10, attractions: 15, activities: 20, misc: 10 },
      Moderate: { stay: 140, food: 60, transport: 15, attractions: 30, activities: 40, misc: 20 },
      Premium: { stay: 280, food: 120, transport: 35, attractions: 50, activities: 80, misc: 40 },
      Luxury: { stay: 700, food: 250, transport: 80, attractions: 80, activities: 160, misc: 100 }
    }
  },
  importantInfo: {
    transportation: {
      overview: 'Paris has one of the world’s dense and efficient public transit networks; you are never more than 500 meters from a metro station.',
      options: [
        { name: 'Metro & RER', desc: '16 metro lines and 5 RER commuter rail lines connecting every corner of the city.', tip: 'Use contactless Navigo Easy card or smartphones for ticket carnets.' },
        { name: 'Vélib Métropole', desc: 'Public bike-sharing with thousands of mechanical and electric green bikes.', tip: 'Great along the car-free banks of the Seine (Rives de Seine).' },
        { name: 'Walking', desc: 'Paris is extraordinarily walkable; crossing the entire city center takes under 2 hours on foot.', tip: 'Wear supportive shoes for uneven cobblestones.' }
      ]
    },
    weather: {
      currentOverview: 'Temperate oceanic climate with mild springs, warm summers, golden autumns, and cool winters.',
      seasons: [
        { name: 'Spring', months: 'Mar - May', temp: '10°C - 20°C', note: 'Blooming cherry blossoms and chestnut trees.' },
        { name: 'Summer', months: 'Jun - Aug', temp: '18°C - 30°C', note: 'Long daylight until 10 PM; open-air cinema and festivals.' },
        { name: 'Autumn', months: 'Sep - Nov', temp: '10°C - 18°C', note: 'Crisp air and gorgeous golden foliage in the parks.' },
        { name: 'Winter', months: 'Dec - Feb', temp: '3°C - 8°C', note: 'Festive holiday lights and cozy warm cafes.' }
      ]
    },
    currency: {
      name: 'Euro',
      symbol: '€',
      code: 'EUR',
      cardAcceptance: 'Contactless cards (Visa/Mastercard) and Apple Pay/Google Pay accepted everywhere.',
      tippingCulture: 'Service is legally included (service compris); leaving €1-€2 per person at cafes is customary.'
    },
    timeZone: 'CET (UTC+1) / CEST in summer (UTC+2)',
    emergency: {
      police: '17 / 112',
      ambulance: '15',
      touristHelpline: '+33 1 49 52 42 63'
    },
    safetyTips: [
      'Beware of pickpockets around high-traffic tourist sites (Eiffel Tower, Louvre, Gare du Nord).',
      'Ignore petition signers, gold ring scams, or street shell games.',
      'Paris is safe for walking at night in illuminated central arrondissements.'
    ],
    localEtiquette: [
      'Always greet with "Bonjour" before asking for anything in shops or cafes.',
      'Keep conversational volume moderate in public spaces and restaurants.',
      'Do not ask for ice or drastic ingredient changes in traditional French restaurants.'
    ],
    travelTips: [
      'Pre-book timed museum tickets (Louvre, Orsay) at least 2 weeks in advance during peak season.',
      'Many national museums offer free admission on the first Sunday of every month.'
    ]
  },
  mapPoints: [
    { id: 'p1', title: 'Eiffel Tower', category: 'attraction', lat: 48.8584, lng: 2.2945, description: 'Iconic wrought-iron monument.', cost: '€29' },
    { id: 'p2', title: 'Musée du Louvre', category: 'attraction', lat: 48.8606, lng: 2.3376, description: 'World’s most renowned art museum.', cost: '€22' },
    { id: 'p3', title: 'Bistrot Paul Bert', category: 'food', lat: 48.8524, lng: 2.3855, description: 'Classic Parisian bistro with stellar steak frites.', cost: '$$$' },
    { id: 'p4', title: 'Hôtel Caron de Beaumarchais', category: 'accommodation', lat: 48.8576, lng: 2.3582, description: 'Charming 18th-century boutique stay in Le Marais.', cost: '$$$' },
    { id: 'p5', title: 'Pont Neuf Seine Cruise Pier', category: 'experience', lat: 48.8571, lng: 2.3414, description: 'Riverboat boarding dock for evening cruises.', cost: '€18' },
    { id: 'p6', title: 'Châtelet-Les Halles Hub', category: 'transit', lat: 48.8617, lng: 2.3475, description: 'Central metro and RER commuter intersection.', cost: '€2.15' }
  ]
};
