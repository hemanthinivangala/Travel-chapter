import { Destination } from '../../types/travel';
import { mumbaiDestination } from './mumbai';
import { parisDestination } from './paris';
import { tokyoDestination } from './tokyo';
import { goaDestination } from './goa';
import { keralaDestination } from './kerala';
import { newyorkDestination } from './newyork';
import { dubaiDestination } from './dubai';
import { tirupatiDestination } from './tirupati';

export {
  mumbaiDestination,
  parisDestination,
  tokyoDestination,
  goaDestination,
  keralaDestination,
  newyorkDestination,
  dubaiDestination,
  tirupatiDestination
};

export const allDestinations: Destination[] = [
  tirupatiDestination,
  mumbaiDestination,
  parisDestination,
  tokyoDestination,
  goaDestination,
  keralaDestination,
  newyorkDestination,
  dubaiDestination,
];

// Curated dictionary of smaller parts of the world, pilgrimage sanctuaries, and hidden gems
export interface MiniDestinationCatalog {
  name: string;
  country: string;
  region: string;
  tagline: string;
  type: 'spiritual' | 'mountain' | 'coastal' | 'heritage' | 'nature';
  heroImage: string;
  keySpot: string;
  signatureDish: string;
}

export const worldHiddenGemsCatalog: MiniDestinationCatalog[] = [
  {
    name: 'Tirupati & Tirumala',
    country: 'India',
    region: 'Andhra Pradesh',
    tagline: 'The Sacred Seven Hills and World-Renowned Abode of Lord Venkateswara',
    type: 'spiritual',
    heroImage: 'https://images.unsplash.com/photo-1621644827827-0c6114e9f74a?auto=format&fit=crop&w=1600&q=80',
    keySpot: 'Sri Venkateswara Swamy Temple atop Venkatadri',
    signatureDish: 'Srivari Tirupati Laddu Prasadam',
  },
  {
    name: 'Varanasi (Kashi)',
    country: 'India',
    region: 'Uttar Pradesh',
    tagline: 'The Eternal City of Light, Ganga Ghats, and Cosmic Liberation',
    type: 'spiritual',
    heroImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1600&q=80',
    keySpot: 'Dashashwamedh Ghat Evening Maha Aarti',
    signatureDish: 'Banarasi Kachori Sabzi & Malaiyo',
  },
  {
    name: 'Hampi',
    country: 'India',
    region: 'Karnataka',
    tagline: 'Bouldered Kingdom of Vijayanagara, Stone Chariots, and Tungabhadra Whispers',
    type: 'heritage',
    heroImage: 'https://images.unsplash.com/photo-1600100397608-f010f443b74f?auto=format&fit=crop&w=1600&q=80',
    keySpot: 'Virupaksha Temple & Stone Chariot at Vittala',
    signatureDish: 'Karnataka Jolada Rotti & Badanekayi Yennegai',
  },
  {
    name: 'Rishikesh & Haridwar',
    country: 'India',
    region: 'Uttarakhand (Himalayas)',
    tagline: 'Yoga Capital of the World, Emerald Ganga, and Himalayan Meditation',
    type: 'spiritual',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80',
    keySpot: 'Triveni Ghat & Parmarth Niketan Ganga Aarti',
    signatureDish: 'Aloo Puri & Hot Himalayan Herbal Chai',
  },
  {
    name: 'Leh Ladakh',
    country: 'India',
    region: 'Ladakh (Trans-Himalayas)',
    tagline: 'Land of High Passes, Turquoise Lakes, and Ancient Monasteries',
    type: 'mountain',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    keySpot: 'Pangong Tso Lake & Thiksey Monastery',
    signatureDish: 'Steaming Momos & Ladakhi Butter Tea',
  },
  {
    name: 'Udupi & Gokarna',
    country: 'India',
    region: 'Coastal Karnataka',
    tagline: 'Sacred Temples, Om Beach, and the Origin of Pure Vegetarian Cooking',
    type: 'spiritual',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=80',
    keySpot: 'Udupi Sri Krishna Matha & Om Beach',
    signatureDish: 'Authentic Udupi Sambar & Goli Baje',
  },
  {
    name: 'Rameswaram & Dhanushkodi',
    country: 'India',
    region: 'Tamil Nadu',
    tagline: 'The Consecrated Sea Bridge of Ram Setu, 22 Sacred Wells, and Coral Coasts',
    type: 'spiritual',
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80',
    keySpot: 'Ramanathaswamy Temple 1,200-meter corridor',
    signatureDish: 'Chettinad Kozhukattai & Jigarthanda',
  },
  {
    name: 'Hallstatt',
    country: 'Austria',
    region: 'Salzkammergut',
    tagline: 'Fairytale Alpine Village reflected in glassy mountain lakes',
    type: 'mountain',
    heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80',
    keySpot: 'Hallstatt Skywalk & 7,000-year-old Salt Mine',
    signatureDish: 'Fresh Lake Trout (Salzkammergut Reinanke)',
  },
  {
    name: 'Amalfi Coast & Positano',
    country: 'Italy',
    region: 'Campania',
    tagline: 'Terraced Lemon Groves, Pastel Cliffside Villas, and Tyrrhenian Sea Views',
    type: 'coastal',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80',
    keySpot: 'Path of the Gods (Sentiero degli Dei)',
    signatureDish: 'Spaghetti al Limone & Limoncello',
  },
  {
    name: 'Ubud & Sidemen',
    country: 'Indonesia',
    region: 'Bali',
    tagline: 'Emerald Rice Terraces, Balinese Healing, and Sacred Water Temples',
    type: 'nature',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80',
    keySpot: 'Tegalalang Rice Terraces & Tirta Empul',
    signatureDish: 'Bebek Betutu & Fresh Coconut Water',
  },
  {
    name: 'Shirdi',
    country: 'India',
    region: 'Maharashtra (Ahmednagar)',
    tagline: 'The Holy Sanctuary of Sai Baba, Universal Compassion, and Divine Harmony',
    type: 'spiritual',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80',
    keySpot: 'Shri Sai Baba Samadhi Mandir & Dwarkamai',
    signatureDish: 'Shirdi Prasad Ladoo & Sol Kadhi',
  },
  {
    name: 'Madurai',
    country: 'India',
    region: 'Tamil Nadu',
    tagline: 'The Ancient City of Nectar, Soaring Temple Towers, and Jasmine Blossoms',
    type: 'spiritual',
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80',
    keySpot: 'Meenakshi Amman Temple 14 Majestic Gopurams',
    signatureDish: 'Madurai Jigarthanda & Bun Parotta',
  },
  {
    name: 'Puri & Konark',
    country: 'India',
    region: 'Odisha (Bay of Bengal)',
    tagline: 'Holy Dham of Lord Jagannath, Sacred Chariots, and Sun Temple Majesty',
    type: 'spiritual',
    heroImage: 'https://images.unsplash.com/photo-1600100397608-f010f443b74f?auto=format&fit=crop&w=1600&q=80',
    keySpot: 'Jagannath Temple & Konark Sun Temple Stone Wheels',
    signatureDish: 'Mahaprasad Khaja & Dalma',
  },
  {
    name: 'Amritsar',
    country: 'India',
    region: 'Punjab',
    tagline: 'Home of the Golden Temple, Sacred Sarovar, and Selfless Langar Hospitality',
    type: 'spiritual',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=80',
    keySpot: 'Harmandir Sahib (The Golden Temple) & Amrit Sarovar',
    signatureDish: 'Amritsari Kulcha with Chole & Sweet Lassi',
  },
  {
    name: 'Ooty & Nilgiri Hills',
    country: 'India',
    region: 'Tamil Nadu',
    tagline: 'Queen of Hill Stations, Toy Train Heritage, and Rolling Blue Mountain Mist',
    type: 'mountain',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    keySpot: 'Nilgiri Mountain Railway (Toy Train) & Doddabetta Peak',
    signatureDish: 'Homemade Ooty Chocolates & Nilgiri Spiced Tea',
  },
  {
    name: 'Zermatt & Matterhorn',
    country: 'Switzerland',
    region: 'Valais Alps',
    tagline: 'Car-Free Alpine Wonder at the Pyramid Foot of the Iconic Matterhorn',
    type: 'mountain',
    heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80',
    keySpot: 'Gornergrat Railway Viewpoint & Matterhorn Glacier Paradise',
    signatureDish: 'Swiss Cheese Fondue & Röstis',
  },
  {
    name: 'Santorini & Oia',
    country: 'Greece',
    region: 'Cyclades Islands',
    tagline: 'Cobalt Domes, Whitewashed Cliffside Caldera, and Legendary Aegean Sunsets',
    type: 'coastal',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80',
    keySpot: 'Oia Castle Sunset Point & Red Sand Beach',
    signatureDish: 'Tomatokeftedes & Fresh Grilled Calamari',
  }
];

export function findDestinationById(id: string): Destination {
  const cleanId = id.toLowerCase().trim();
  if (
    cleanId === 'tirumala' ||
    cleanId === 'tirupati' ||
    cleanId === 'tirupathi' ||
    cleanId === 'balaji' ||
    cleanId.includes('tirupati') ||
    cleanId.includes('tirumala')
  ) {
    return tirupatiDestination;
  }
  const found = allDestinations.find((d) => d.id === cleanId || d.name.toLowerCase() === cleanId);
  if (found) return found;

  // Check catalog
  const catalogMatch = worldHiddenGemsCatalog.find(
    (c) => c.name.toLowerCase().includes(cleanId) || cleanId.includes(c.name.toLowerCase())
  );
  if (catalogMatch) {
    return createCustomDestination(catalogMatch.name);
  }

  return tirupatiDestination;
}

export function searchDestinations(query: string): Destination[] {
  if (!query.trim()) return allDestinations;
  const q = query.toLowerCase().trim();

  // If search involves Tirumala / Tirupati in any form, return Tirupati first
  const isTirupatiMatch =
    q.includes('tiru') ||
    q.includes('tirumala') ||
    q.includes('tirupati') ||
    q.includes('tirupathi') ||
    q.includes('balaji') ||
    q.includes('venkat') ||
    q.includes('seven hills') ||
    q.includes('seshachalam');

  if (isTirupatiMatch) {
    const others = allDestinations.filter((d) => d.id !== 'tirupati');
    return [tirupatiDestination, ...others];
  }

  // 1. Check allDestinations
  const primaryMatches = allDestinations.filter(
    (d) =>
      d.name.toLowerCase().includes(q) ||
      d.country.toLowerCase().includes(q) ||
      d.region.toLowerCase().includes(q) ||
      d.tagline.toLowerCase().includes(q)
  );

  // 2. Check catalog of small parts of the world / hidden gems
  const catalogMatches = worldHiddenGemsCatalog.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.region.toLowerCase().includes(q) ||
      c.country.toLowerCase().includes(q) ||
      c.tagline.toLowerCase().includes(q)
  );

  const catalogDestinations = catalogMatches.map((c) => {
    if (c.name.toLowerCase().includes('tirupati') || c.name.toLowerCase().includes('tirumala')) {
      return tirupatiDestination;
    }
    return createCustomDestination(c.name);
  });

  // Combine and deduplicate
  const combined = [...primaryMatches];
  catalogDestinations.forEach((catDest) => {
    if (!combined.some((item) => item.id === catDest.id || item.name.toLowerCase() === catDest.name.toLowerCase())) {
      combined.push(catDest);
    }
  });

  if (combined.length > 0) return combined;

  // If user searched for any custom small town or place, auto-synthesize
  return [createCustomDestination(query)];
}

// Dynamic generator for any small village, town, or custom destination anywhere in the world
export function createCustomDestination(name: string): Destination {
  const cleanName = name.trim();
  const slug = cleanName.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  // Check aliases for Tirupati / Tirumala
  if (
    slug.includes('tirupati') ||
    slug.includes('tirumala') ||
    slug.includes('balaji') ||
    slug.includes('venkateswara')
  ) {
    return tirupatiDestination;
  }

  // Check existing
  const existing = allDestinations.find(
    (d) => d.name.toLowerCase() === cleanName.toLowerCase() || d.id === slug
  );
  if (existing) return existing;

  // Check if matched in smaller parts of world catalog
  const catalogItem = worldHiddenGemsCatalog.find(
    (c) => c.name.toLowerCase().includes(cleanName.toLowerCase()) || cleanName.toLowerCase().includes(c.name.toLowerCase())
  );

  const isSpiritual =
    catalogItem?.type === 'spiritual' ||
    /temple|math|shrine|kashi|puri|shirdi|ramesh|varanasi|rishikesh|dham|tirupati|tirumala/i.test(cleanName);

  const isMountain =
    catalogItem?.type === 'mountain' ||
    /mount|hill|himalaya|alps|hallstatt|zermatt|leh|ladakh|ooty|munnar|manali/i.test(cleanName);

  const isCoastal =
    catalogItem?.type === 'coastal' ||
    /beach|coast|sea|island|gokarna|amalfi|santorini|bali/i.test(cleanName);

  const hero = catalogItem?.heroImage || (
    isSpiritual
      ? 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80'
      : isMountain
      ? 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80'
      : isCoastal
      ? 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=80'
      : 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80'
  );

  const tagline = catalogItem?.tagline || (
    isSpiritual
      ? `A Sacred Pilgrimage, Ancient Rituals, and Spiritual Rejuvenation in ${cleanName}`
      : isMountain
      ? `Crisp Mountain Air, Cloud-Dappled Ridges, and Highland Serenity in ${cleanName}`
      : `Your Beautiful Uncharted Chapter in ${cleanName}`
  );

  const keySpot = catalogItem?.keySpot || `${cleanName} Historic Sanctuary & Central Heritage District`;
  const signatureDish = catalogItem?.signatureDish || `${cleanName} Traditional Consecrated Delicacy`;

  return {
    id: slug,
    name: catalogItem?.name || cleanName,
    country: catalogItem?.country || 'Regional Gem',
    region: catalogItem?.region || 'Special Pilgrimage & Heritage District',
    tagline,
    heroImage: hero,
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    ],
    coordinates: [15.0, 77.0],
    intro: {
      whereItIs: `Located in an atmospheric region rich in community lore and geographical distinctiveness, ${cleanName} preserves centuries of tradition away from mainstream commercial bustle.`,
      whyPeopleVisit: `Pilgrims and discerning travelers journey to ${cleanName} to experience its authentic sanctity, historic architecture, local generosity, and intimate connection to cultural heritage.`,
      bestTimeToVisit: 'October through March offers pleasant morning breezes and ideal sightseeing conditions.',
      generalAtmosphere: isSpiritual
        ? 'Reverent, sacred, peaceful, and filled with devotional warmth.'
        : 'Tranquil, scenic, authentic, and rich in slow-travel discoveries.',
      approxCostLevel: 'Moderate to Very Accessible',
      recommendedDuration: '2 to 4 Days',
    },
    touristSpots: [
      {
        id: `${slug}-sanctuary`,
        name: keySpot,
        category: isSpiritual ? 'Culture' : 'History',
        isLesserKnown: false,
        image: hero,
        description: `The sacred heart of ${cleanName}, revered by generations for its architectural harmony and profound sense of peace.`,
        location: 'Central Sacred Quarter',
        estimatedDuration: '2 - 3 Hours',
        approxCost: 'Free / Nominal donation',
        openingHours: 'Dawn to dusk (early morning recommended)',
        distanceFromStay: 'Central location',
        whyWorthVisiting: 'Experience ancient spiritual rituals, flower offerings, and peaceful contemplation.',
        lat: 15.0,
        lng: 77.0,
      },
      {
        id: `${slug}-scenic-overlook`,
        name: `${cleanName} Hill Ridge & Panoramic Viewpoint`,
        category: 'Nature',
        isLesserKnown: true,
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        description: `A secluded natural vantage point offering expansive 360-degree views across the valleys and rooftops of ${cleanName}.`,
        location: 'Highland Trailhead',
        estimatedDuration: '1.5 Hours',
        approxCost: 'Free',
        openingHours: 'Best at dawn and sunset',
        distanceFromStay: '15 mins from center',
        whyWorthVisiting: 'Inhale fresh hill air and capture glowing golden-hour photography without tourist crowds.',
        lat: 15.01,
        lng: 77.01,
      }
    ],
    culture: {
      traditions: [
        `Welcoming guests with traditional hospitality and regional greetings`,
        `Preserving ancient artisanal crafts and temple music traditions`,
        `Community gatherings celebrating seasonal and spiritual festivals`
      ],
      festivals: [
        {
          name: `${cleanName} Annual Sacred Festival`,
          timing: 'Seasonal',
          description: `Vibrant regional celebration bringing together floral processions, traditional percussion, and community feasts.`
        }
      ],
      customs: [
        `Greeting locals with hands folded in respect`,
        `Removing footwear before stepping into homes and spiritual shrines`,
        `Supporting neighborhood artisans and family-run stalls`
      ],
      socialEtiquette: [
        `Dress respectfully covering shoulders and knees when visiting sacred shrines`,
        `Speak softly in contemplation zones and ask before taking close-up portraits`,
        `Patience in queue complexes and shared local transit`
      ],
      dressConsiderations: 'Modest, comfortable cotton attire suited for active walking and spiritual monuments.',
      thingsVisitorsShouldRespect: [
        `Preserve the tranquility of sacred shrines and keep mobile phones on silent`,
        `Respect local dietary and alcohol prohibitions in holy enclaves`
      ],
      culturalFacts: [
        `${cleanName} holds centuries of oral folklore and living customs that make it one of the region's hidden spiritual gems.`
      ]
    },
    languages: {
      officialLanguages: ['Regional Language'],
      commonlySpoken: ['Hindi', 'English', 'Local Dialects'],
      usefulPhrases: [
        { category: 'greeting', phrase: 'Namaskaram / Hello', translation: 'Greetings', pronunciation: 'nuh-muh-skaa-rum' },
        { category: 'thank_you', phrase: 'Dhanyavaadaalu / Shukriya', translation: 'Thank you', pronunciation: 'dhun-yuh-vaa-daa-loo' },
        { category: 'please', phrase: 'Dayachesi / Kripya', translation: 'Please', pronunciation: 'duh-yuh-chay-see' },
        { category: 'help', phrase: 'Sahayam cheyandi', translation: 'Please help me', pronunciation: 'suh-haa-yum chay-yun-dee' },
        { category: 'directions', phrase: 'Ikkada darshanam/mandir ekkada?', translation: 'Where is the shrine/center?', pronunciation: 'eek-kuh-duh mun-deer ek-kuh-duh' },
        { category: 'food', phrase: 'Prasadam / Bhojanam ekkada dorukuthundi?', translation: 'Where can I find local food/prasadam?', pronunciation: 'pruh-saa-dum ek-kuh-duh' }
      ]
    },
    food: {
      dishes: [
        {
          id: `${slug}-specialty-dish`,
          name: signatureDish,
          category: 'Vegetarian',
          description: `Consecrated regional recipe slow-cooked using traditional heirloom spices, pure ghee, and fresh seasonal ingredients.`,
          image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
          whereToTry: `Traditional temple mess halls and family kitchens in ${cleanName}`,
          approxPrice: '$1 - $5'
        }
      ],
      recommendedExperiences: [
        `Tasting freshly made morning tiffins and hot filter coffee at neighborhood stalls`,
        `Partaking in shared community meals prepared with devotion`
      ]
    },
    experiences: [
      {
        id: `${slug}-heritage-walk`,
        title: `${cleanName} Sacred Dawn Footpath & Storytelling Walk`,
        type: 'walking',
        description: `Explore ancient stone corridors, sacred tanks, and historic streets at sunrise with a knowledgeable local storyteller.`,
        duration: '2.5 Hours',
        cost: '$15',
        image: hero,
        highlight: 'Discover hidden folklore and architectural carvings not found in standard travel guides.'
      }
    ],
    chapterStyles: {
      'A peaceful chapter': {
        subtitle: `Sacred mornings, meditation by water tanks, and deep inner peace in ${cleanName}`,
        quote: '“In sacred stillness, the restless mind finds its home.”',
        highlights: ['Dawn temple tank contemplation', 'Quiet walks through ancient alleys', 'Evening hymn listening'],
        sampleDay: `Wake early for dawn temple bells, meditate beside ancient waters, walk softly past wooden verandas, and retire in peace.`
      },
      'An adventurous chapter': {
        subtitle: `Trekking stone footpaths, hill ridges, and exploring ancient caves in ${cleanName}`,
        quote: '“Every hill climbed reveals an ancient horizon.”',
        highlights: ['Pilgrim stone staircase trek', 'Valley ridge exploration', 'Cave shrines'],
        sampleDay: `Climb the hill path before sunrise, explore natural rock formations, and witness the valley awaken below.`
      },
      'A cultural chapter': {
        subtitle: `Living rituals, traditional crafts, and centuries of architectural devotion`,
        quote: '“Traditions are not relics of the past, but living lamps for the present.”',
        highlights: ['Temple architecture study', 'Artisan weaving workshops', 'Devotional music'],
        sampleDay: `Study stone pillars and inscriptions, converse with temple artisans, and listen to devotional evening ragas.`
      },
      'A food-filled chapter': {
        subtitle: `Blessed prasadam, wood-fired tiffins, and aromatic regional spices`,
        quote: '“Food prepared with heart is a blessing shared.”',
        highlights: ['Temple prasadam tasting', 'Fresh morning dosas and chutneys', 'Authentic regional thali'],
        sampleDay: `Sip hot coffee with fresh idlis, sample consecrated temple prasadam at noon, and savor an authentic evening meal on a banana leaf.`
      },
      'A romantic chapter': {
        subtitle: 'Blessings for a shared lifetime, quiet hill vistas, and starlight reflection',
        quote: '“Walking sacred grounds together unites two souls in grace.”',
        highlights: ['Joint prayers for health and happiness', 'Sunset over sacred hills', 'Candlelit quiet dinner'],
        sampleDay: `Visit the sacred shrine hand-in-hand, stroll the quiet hill viewpoints at golden hour, and share a quiet dinner.`
      },
      'A family chapter': {
        subtitle: 'Multi-generational blessings, safe comfortable walks, and timeless memories',
        quote: '“Generations gathered in gratitude create bonds that never fade.”',
        highlights: ['Family darshan guidance', 'Spotted deer or open park visits', 'Traditional sweets for kids'],
        sampleDay: `Avail family privilege temple queues, explore shaded garden groves, and share traditional sweets together.`
      },
      'A chapter of discovery': {
        subtitle: 'Hidden rock caves, forgotten inscriptions, and sacred forest springs',
        quote: '“Look beyond the main path to find the soul of the land.”',
        highlights: ['Ancient water theerthams', 'Prehistoric geological carvings', 'Old forest paths'],
        sampleDay: `Hike off the main highway to find ancient natural spring reservoirs, examine forgotten carved stone pillars, and listen to local elders tell folklore.`
      }
    },
    accommodations: [
      {
        id: `${slug}-heritage-stay`,
        name: `${cleanName} Heritage Pilgrim Retreat & Boutique Stay`,
        type: 'Hotel',
        priceRange: '$35 - $85 / night',
        location: 'Central Sacred Quarter',
        facilities: ['Pure Vegetarian Dining', 'High-Speed Wi-Fi', 'Temple Darshan Assistance', 'Air-Conditioned Suites'],
        rating: 4.8,
        reviewsCount: 650,
        distanceFromMajorAttractions: 'Walking distance to central shrine',
        suitableFor: ['Families', 'Solo Pilgrims', 'Couples'],
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
      }
    ],
    packages: [
      {
        id: `${slug}-2day-divine`,
        name: `2-Day ${cleanName} Sacred Discovery Chapter`,
        durationDays: 2,
        tagline: `Immerse in the spiritual rituals, pristine hill nature, and authentic heritage of ${cleanName}`,
        includedExperiences: ['Guided Shrine Visit', 'Authentic Prasadam Tasting', 'Hill Viewpoint Excursion'],
        accommodationCategory: 'Boutique Heritage Hotel',
        transportation: 'Local AC Chauffeur & Walking',
        estimatedBudget: 95,
        activities: ['Central shrine darshan', 'Historic step-walk', 'Sacred theertham visit', 'Local tiffin trail'],
        customizableOptions: ['Private priest guidance', 'Sunrise photography guide']
      }
    ],
    budgetBreakdown: {
      currencySymbol: '₹',
      currencyCode: 'INR',
      exchangeRateToUSD: 0.012,
      dailyCosts: {
        Budget: { stay: 10, food: 6, transport: 5, attractions: 3, activities: 5, misc: 4 },
        Moderate: { stay: 35, food: 15, transport: 12, attractions: 6, activities: 15, misc: 8 },
        Premium: { stay: 90, food: 35, transport: 25, attractions: 15, activities: 35, misc: 18 },
        Luxury: { stay: 200, food: 70, transport: 50, attractions: 25, activities: 65, misc: 35 }
      }
    },
    importantInfo: {
      transportation: {
        overview: `${cleanName} is accessed via regional express trains, state buses, and scenic mountain roads.`,
        options: [
          { name: 'Local Taxis & Autos', desc: 'Prepaid and metered rides connecting railway hubs with shrines.', tip: 'Agree on fare or use digital booking before boarding.' },
          { name: 'Pedestrian Pathways', desc: 'Stone stairways and shaded walking routes through the sacred precinct.', tip: 'Start walking at dawn for cool breezes and tranquil crowds.' }
        ]
      },
      weather: {
        currentOverview: 'Temperate and pleasant during winter months (Nov - Feb); warm in summer.',
        seasons: [
          { name: 'Winter (Best)', months: 'Nov - Feb', temp: '16°C - 28°C', note: 'Clear skies, pleasant breezes, best for walking.' },
          { name: 'Summer', months: 'Mar - Jun', temp: '25°C - 38°C', note: 'Warm; plan indoor or morning visits.' },
          { name: 'Monsoon', months: 'Jul - Oct', temp: '22°C - 32°C', note: 'Lush green foliage and active mountain streams.' }
        ]
      },
      currency: {
        name: 'Indian Rupee',
        symbol: '₹',
        code: 'INR',
        cardAcceptance: 'UPI QR codes and debit/credit cards widely accepted; keep small cash for street stalls.',
        tippingCulture: 'Voluntary donations in official hundi boxes at shrines.'
      },
      timeZone: 'IST (UTC+5:30)',
      emergency: {
        police: '100 / 112',
        ambulance: '108',
        touristHelpline: 'Available locally'
      },
      safetyTips: [
        'Keep identification and temple reservation tokens easily accessible.',
        'Drink filtered or bottled water and protect yourself from midday sun.'
      ],
      localEtiquette: [
        'Wear traditional modest attire (cover shoulders and knees).',
        'Remove footwear before entering shrines and private homes.'
      ],
      travelTips: [
        'Pre-book special entry darshan tickets online if visiting major shrines.',
        'Rise early at dawn to experience the most peaceful rituals.'
      ]
    },
    mapPoints: [
      { id: `${slug}-mp1`, title: keySpot, category: 'attraction', lat: 15.0, lng: 77.0, description: 'Central landmark and heritage sanctuary.', cost: 'Free / Nominal' }
    ]
  };
}
