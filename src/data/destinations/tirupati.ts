import { Destination } from '../../types/travel';

export const tirupatiDestination: Destination = {
  id: 'tirupati',
  name: 'Tirupati & Tirumala',
  country: 'India',
  region: 'Andhra Pradesh (Seshachalam Hills)',
  tagline: 'The Sacred Seven Hills, Spiritual Majesty, and Eternal Divine Grace',
  heroImage: 'https://images.unsplash.com/photo-1621644827827-0c6114e9f74a?auto=format&fit=crop&w=1600&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
  ],
  coordinates: [13.6288, 79.4192],
  intro: {
    whereItIs: 'Nestled in the sacred Seshachalam range of the Eastern Ghats in southern Andhra Pradesh, comprising the foothill city of Tirupati and the holy hill town of Tirumala atop the seventh peak (Venkatadri).',
    whyPeopleVisit: 'Home to the Sri Venkateswara Swamy Temple—one of the most venerated and visited sacred pilgrimage destinations on Earth—famed for its spiritual aura, 2.5-billion-year-old rock arches, ancient footpaths, and the divine Srivari Laddu Prasadam.',
    bestTimeToVisit: 'September to February when hill breezes are cool and refreshing (18°C - 28°C); festival season during annual Brahmotsavam is breathtaking.',
    generalAtmosphere: 'Deeply spiritual, devotional, reverent, tranquil on the hills, and filled with the continuous chanting of “Govinda Govinda”.',
    approxCostLevel: 'Accessible to all (from free temple pilgrim cottages and free Annaprasadam to 5-star luxury spiritual retreats).',
    recommendedDuration: '2 to 3 Days',
  },
  touristSpots: [
    {
      id: 'sri-venkateswara-temple',
      name: 'Sri Venkateswara Swamy Temple (Tirumala)',
      category: 'Culture',
      isLesserKnown: false,
      image: 'https://images.unsplash.com/photo-1621644827827-0c6114e9f74a?auto=format&fit=crop&w=800&q=80',
      description: 'The world-famous Dravidian masterpiece temple crowned with the golden Ananda Nilayam tower, enshrining the self-manifested (Swayambhu) deity of Lord Venkateswara (Balaji).',
      location: 'Tirumala Hills (Peak 7, Venkatadri)',
      estimatedDuration: '3 - 6 Hours (Darshan line depending on booking token)',
      approxCost: 'Free (Sarva Darshan) or ₹300 (Special Entry Darshan ticket pre-booked via TTD)',
      openingHours: 'Open nearly 22 hours daily except during brief sacred Kainkaryam rituals',
      distanceFromStay: 'Top of Tirumala hill (22 km scenic ghat road from Tirupati)',
      whyWorthVisiting: 'Experience the electric, life-altering spiritual peace as thousands of voices chant Govinda upon stepping before the diamond-crowned deity.',
      lat: 13.6833,
      lng: 79.3472,
    },
    {
      id: 'silathoranam',
      name: 'Silathoranam & Chakra Theertham',
      category: 'Nature',
      isLesserKnown: true,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      description: 'A miraculous natural geological rock arch formed 2.5 billion years ago—one of only three such Precambrian formations known in the entire world.',
      location: '1 km north of Tirumala Temple',
      estimatedDuration: '1.5 Hours',
      approxCost: 'Free entry',
      openingHours: '6:00 AM - 6:30 PM',
      distanceFromStay: '5 mins drive from Tirumala bus station',
      whyWorthVisiting: 'A tranquil geological wonder intertwined with legends of Lord Venkateswara’s arrival on Earth, surrounded by lush hill gardens.',
      lat: 13.693,
      lng: 79.345,
    },
    {
      id: 'srivari-mettu',
      name: 'Srivari Mettu & Alipiri Footpath Pilgrimage Trails',
      category: 'Adventure',
      isLesserKnown: false,
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      description: 'Ancient stone stairways traversed for millennia by saints like Ramanuja and Annamacharya. Srivari Mettu has 2,388 steps (2-3 hrs), while Alipiri has 3,550 steps (4-5 hrs) with sheltered walkways and deer parks.',
      location: 'Srivari Mettu (Srinivasa Mangapuram) & Alipiri (Tirupati city edge)',
      estimatedDuration: '2.5 - 4.5 Hours hike',
      approxCost: 'Free (free luggage transfer service to the hilltop provided by TTD)',
      openingHours: 'Alipiri open 24/7; Srivari Mettu open 6:00 AM - 5:00 PM',
      distanceFromStay: 'Starts at the base of the hills',
      whyWorthVisiting: 'A deeply meditative walking pilgrimage through misty forests, singing devotional hymns with pilgrims of all ages.',
      lat: 13.655,
      lng: 79.362,
    },
    {
      id: 'chandragiri-fort',
      name: 'Chandragiri Imperial Fort & Raja Mahal',
      category: 'History',
      isLesserKnown: false,
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
      description: 'A magnificent 11th-century fort that served as the final capital of the Vijayanagara Empire, built without wood using stone, brick, and lime mortar.',
      location: 'Chandragiri (14 km west of Tirupati)',
      estimatedDuration: '2.5 Hours',
      approxCost: '₹25 entry + ₹50 Sound & Light show',
      openingHours: '9:00 AM - 5:30 PM (Museum); Light Show at 7:00 PM',
      distanceFromStay: '20 mins drive from Tirupati central',
      whyWorthVisiting: 'Walk through royal halls where King Sri Krishnadevaraya held council, explore ancient moats, and witness the evening sound and light presentation.',
      lat: 13.5833,
      lng: 79.3167,
    },
    {
      id: 'padmavathi-temple',
      name: 'Sri Padmavathi Ammavari Temple (Tiruchanur)',
      category: 'Culture',
      isLesserKnown: false,
      image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80',
      description: 'Dedicated to Goddess Padmavathi (incarnation of Lakshmi), consort of Lord Venkateswara. Tradition dictates visiting here to complete the divine pilgrimage.',
      location: 'Tiruchanur (5 km from Tirupati city)',
      estimatedDuration: '1.5 - 2 Hours',
      approxCost: 'Free / ₹100 special queue',
      openingHours: '5:00 AM - 9:00 PM',
      distanceFromStay: '10 mins auto-rickshaw from Tirupati station',
      whyWorthVisiting: 'Absorb the serene, motherly grace and witness the sacred Padma Sarovaram pond where Goddess Lakshmi manifested on a golden lotus.',
      lat: 13.6144,
      lng: 79.4475,
    },
    {
      id: 'kapila-theertham',
      name: 'Kapila Theertham & Sacred Cascade',
      category: 'Nature',
      isLesserKnown: true,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      description: 'An ancient cave temple dedicated to Lord Shiva situated directly at the foothills of Tirumala, where a natural mountain cascade plunges into a sacred tank.',
      location: 'Foot of Tirumala Hills, Alipiri bypass road',
      estimatedDuration: '1 Hour',
      approxCost: 'Free entry',
      openingHours: '5:30 AM - 8:30 PM',
      distanceFromStay: '5 mins from Tirupati town center',
      whyWorthVisiting: 'The only major Shiva shrine in Tirupati, named after sage Kapila Maharishi, where cool mountain springs flow between carved granite pillars.',
      lat: 13.6558,
      lng: 79.4239,
    }
  ],
  culture: {
    traditions: [
      'The sacred utterance of “Govinda! Srinivasa! Venkataramana!” greeting fellow travelers and pilgrims',
      'Kalyanakatta: The timeless custom of tonsuring (hair offering) symbolizing shedding ego and surrendering pride to the Divine',
      'Angapradakshinam: Devotees performing full-body prostrations rolling around the inner sanctum before dawn'
    ],
    festivals: [
      {
        name: 'Srivari Salakatla Brahmotsavam',
        timing: 'September / October (Navaratri)',
        description: 'The monumental 9-day annual festival where Lord Malayappa Swamy is carried in procession on majestic celestial mounts (Garuda, Hanuman, Sesha, Gaja, and Ratham) witnessed by hundreds of thousands of pilgrims.'
      },
      {
        name: 'Vaikunta Ekadasi',
        timing: 'December / January (Margashirsha)',
        description: 'The auspicious day when the divine northern door (Vaikunta Dwaram) of the sanctum opens, granting passage into heavenly grace.'
      }
    ],
    customs: [
      'Dressing strictly in traditional attire: Dhoti with shirt/angavastram for men; Saris or half-saris or churidar with dupatta for women',
      'Walking barefoot inside the inner sacred streets of Tirumala (Mada Veedhis)',
      'Receiving the sacred Teertham (holy water) and Satari (Lord’s lotus feet blessing) upon darshan'
    ],
    socialEtiquette: [
      'Strict traditional dress code is enforced at temple entry gates; western jeans, shorts, and t-shirts without sleeves are prohibited',
      'Patience in queue complexes; elders and families with infants under 1 year have dedicated privileged queues (Supadam)',
      'Remove footwear at designated free shoe-counter cloakrooms before approaching temple enclosures'
    ],
    dressConsiderations: 'Strictly traditional Indian attire: Men: Dhoti with angavastram or traditional kurta-pyjama; Women: Saree, pavada, or salwar-kameez with dupatta pinned over shoulders.',
    thingsVisitorsShouldRespect: [
      'Tirumala is a strictly sacred vegetarian and non-alcoholic holy hill; consumption of alcohol, non-vegetarian food, and smoking are legal offenses on the entire hill range',
      'Mobile phones, cameras, leather accessories, and electronic items must be deposited in electronic lockers before entering the temple queue lines',
      'Respect the sanctity of the Seshachalam biosphere reserve; do not feed wild monkeys along the ghat roads or litter plastics'
    ],
    culturalFacts: [
      'The eternal oil lamp (Nanda Deepam) burning inside the Garbha Griha has remained illuminated uninterrupted for centuries.',
      'The Sri Venkateswara temple kitchen (Potu) prepares over 300,000 sacred laddus daily using a historic recipe called "Dittam".',
      'The temple is mentioned in ancient Sangam Tamil literature (Silappadikaram) and the 12 Alvars’ sacred hymns composed between the 6th and 9th centuries.'
    ]
  },
  languages: {
    officialLanguages: ['Telugu'],
    commonlySpoken: ['Tamil', 'Kannada', 'Hindi', 'English'],
    usefulPhrases: [
      { category: 'greeting', phrase: 'Govinda! / Namaskaram', translation: 'Hello / Lord’s greeting', pronunciation: 'goh-vin-daa / nuh-muh-skaa-rum' },
      { category: 'thank_you', phrase: 'Chala Dhanyavaadaalu', translation: 'Thank you very much', pronunciation: 'chuh-laa dhun-yuh-vaa-daa-loo' },
      { category: 'please', phrase: 'Dayachesi', translation: 'Please', pronunciation: 'duh-yuh-chay-see' },
      { category: 'help', phrase: 'Dayachesi sahayapadandi', translation: 'Please help me', pronunciation: 'duh-yuh-chay-see suh-haa-yuh-puh-dun-dee' },
      { category: 'directions', phrase: 'Tirumala darshanam line ekkada?', translation: 'Where is the Tirumala darshan queue?', pronunciation: 'tee-roo-muh-luh dur-shuh-num line ek-kuh-duh' },
      { category: 'food', phrase: 'Srivari Laddu Prasadam ekkada istaru?', translation: 'Where do they distribute the Srivari Laddu prasadam?', pronunciation: 'sree-vaa-ree lud-doo pruh-saa-dum ek-kuh-duh ees-taa-roo' }
    ]
  },
  food: {
    dishes: [
      {
        id: 'tirupati-laddu',
        name: 'Srivari Tirupati Laddu Prasadam',
        category: 'Dessert',
        description: 'The world-famous sacred consecrated sweet made with gram flour, clarified pure cow ghee, sugar crystals, cashews, golden raisins, and cardamom (awarded GI status).',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
        whereToTry: 'Official TTD Laddu distribution counters (inside Tirumala temple complex)',
        approxPrice: 'Free with Darshan ticket (extra laddus ₹50 / $0.60 each)'
      },
      {
        id: 'annaprasadam',
        name: 'Tarigonda Vengamamba Nitya Annaprasadam',
        category: 'Vegetarian',
        description: 'Wholesome, hot divine meal served freely to over 100,000 devotees daily, featuring steaming Sona Masoori rice, fragrant sambar, rasam, spiced vegetable kootu, and sweet payasam.',
        image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80',
        whereToTry: 'Matrusri Tarigonda Vengamamba Annaprasadam Complex, Tirumala',
        approxPrice: 'Completely free (holy blessing for all)'
      },
      {
        id: 'andhra-tamarind-pulihora',
        name: 'Temple Pulihora (Tamarind Rice)',
        category: 'Vegetarian',
        description: 'Traditional spiced rice tempered with mustard seeds, roasted peanuts, curry leaves, green chillies, turmeric, and tart reduced tamarind paste.',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
        whereToTry: 'TTD Prasadam outlets and traditional Andhra mess halls in Tirupati',
        approxPrice: '₹30 - ₹60 ($0.35 - $0.75)'
      },
      {
        id: 'ghee-karam-dosa',
        name: 'Rayalaseema Neyyi Karam Dosa',
        category: 'Street Food',
        description: 'Crisp golden rice-lentil crepe smeared with spicy red onion-chilli paste (erra karam), roasted gram powder, and a generous pour of aromatic desi ghee.',
        image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80',
        whereToTry: 'Madhu Dosa Corner or Maurya Tiffin Center (Tirupati city center)',
        approxPrice: '₹50 - ₹90 ($0.60 - $1.10)'
      }
    ],
    recommendedExperiences: [
      'Partaking in the divine afternoon Annaprasadam seated with pilgrims from every walk of life',
      'Early morning hot filter coffee paired with steaming idlis and podi at Tirupati railway circle',
      'Carrying home the aromatic, warm Tirupati laddus in traditional jute bags for family and neighbors'
    ]
  },
  experiences: [
    {
      id: 'footpath-pilgrim-hike',
      title: 'Dawn Srivari Mettu Mountain Footpath Pilgrimage',
      type: 'walking',
      description: 'Climb the historic 2,388 steps from Srinivasa Mangapuram at 5:00 AM amid cool morning mountain fog, singing hymns alongside thousands of walking devotees.',
      duration: '3 Hours',
      cost: 'Free',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80',
      highlight: 'Walking the ancient steps tread by Sri Krishnadevaraya and hearing chants echo across the hills.'
    },
    {
      id: 'sacred-waterfalls-circuit',
      title: 'Papavinasanam & Akasa Ganga Sacred Springs Exploration',
      type: 'nature',
      description: 'Journey to the pristine high reservoirs of Tirumala where crystal-clear mountain streams flow through dense sandalwood and teak forests.',
      duration: '2.5 Hours',
      cost: '₹300 (jeep/shared transit)',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      highlight: 'The sacred Akasa Ganga spring that supplies water for the Lord’s daily holy bath (Abhishekam).'
    },
    {
      id: 'vedic-hymn-evening',
      title: 'Annamacharya Sankeerthana & Classical Carnatic Evening',
      type: 'cultural',
      description: 'Attend an open-air classical Carnatic music performance at the Annamacharya Kalamandiram celebrating the 15th-century saint’s 32,000 devotional compositions.',
      duration: '2 Hours',
      cost: 'Free entry',
      image: 'https://images.unsplash.com/photo-1621644827827-0c6114e9f74a?auto=format&fit=crop&w=600&q=80',
      highlight: 'Soulful flute, veena, and mridangam rhythms beneath the twinkling evening stars on Tirumala.'
    }
  ],
  chapterStyles: {
    'A peaceful chapter': {
      subtitle: 'Serene morning temple bells, sacred springs, and inner spiritual quietude',
      quote: '“In surrender of the self, boundless peace is found.”',
      highlights: ['Dawn meditation by Swami Pushkarini sacred tank', 'Silent prayer at Kapila Theertham waterfall', 'Quiet contemplation at Silathoranam rock garden'],
      sampleDay: 'Wake at 4:30 AM to the morning Suprabhatam chant, sit peacefully beside the sacred temple tank, hike gently to Silathoranam, and partake in silent Annaprasadam.'
    },
    'An adventurous chapter': {
      subtitle: 'Ascending the Seven Hills on foot, jungle gorges, and fort ramparts',
      quote: '“Every step climbed is a prayer made physical.”',
      highlights: ['Alipiri 3,550-step night climb with headlamps', 'Exploring Chandragiri fort hill watchtowers', 'Trekking through Seshachalam forest trails'],
      sampleDay: 'Begin the 3,550-step climb from Alipiri at 4:00 AM, cross Gali Gopuram with panoramic sunrise views of Tirupati, and explore medieval secret tunnels in Chandragiri.'
    },
    'A cultural chapter': {
      subtitle: 'Living Vedic traditions, ancient stone inscriptions, and Carnatic music',
      quote: '“Living faith connects centuries into a single unbroken melody.”',
      highlights: ['1,000-year-old Chola and Pallava stone inscriptions', 'Annamacharya devotional sankeerthana', 'Heritage bronze sculptures at Sri Venkateswara Dhyana Vignan Mandiram'],
      sampleDay: 'Study 9th-century temple inscriptions, visit the rare spiritual museum, witness traditional temple artisans weaving flower garlands, and attend evening Carnatic music.'
    },
    'A food-filled chapter': {
      subtitle: 'Srivari Laddu Prasadam, spicy Rayalaseema karam dosas, and banana-leaf feasts',
      quote: '“Food prepared with pure devotion nourishes both body and soul.”',
      highlights: ['Freshly rolled hot Tirupati laddu prasadam', 'Temple pulihora and chakkara pongal', 'Crisp ghee karam dosa trail'],
      sampleDay: 'Taste piping hot ghee dosa for breakfast, receive blessed Srivari laddu prasadam after morning darshan, and enjoy traditional Andhra vegetarian lunch on a banana leaf.'
    },
    'A romantic chapter': {
      subtitle: 'Quiet hill views, blessings for life journeys, and twilight sunsets',
      quote: '“Walking sacred paths together weaves two souls for lifetimes to come.”',
      highlights: ['Joint prayers at Sri Padmavathi & Venkateswara shrines', 'Sunset from Chandragiri Palace lawns', 'Quiet evening walk along the hill ridges'],
      sampleDay: 'Visit Padmavathi temple together in the morning, ascend the scenic ghat road, and watch the sun set over the Seshachalam valley from a quiet hill vantage point.'
    },
    'A family chapter': {
      subtitle: 'Blessed pilgrimage memories, deer sanctuary visits, and safe comfortable queues',
      quote: '“A family that prays together remains anchored in grace.”',
      highlights: ['Special privilege queues for infants and elders (Supadam)', 'Alipiri deer park feeding', 'Chandragiri sound and light show'],
      sampleDay: 'Avail the family privilege darshan queue, feed spotted deer along the scenic hill route, enjoy warm laddus together, and watch the history sound-and-light show.'
    },
    'A chapter of discovery': {
      subtitle: 'Precambrian geological arches, hidden hill theerthams, and Vijayanagara royal ruins',
      quote: '“Sacred geography reveals secrets older than civilization itself.”',
      highlights: ['2.5-billion-year-old Silathoranam rock arch', 'Vaikunta Theertham hidden forest pond', 'Ancient Vijayanagara water conservation aqueducts'],
      sampleDay: 'Examine geological wonders at Silathoranam, hike off-trail to hidden natural springs in the hills, and explore neglected royal pavilions of the Chandragiri citadel.'
    }
  },
  accommodations: [
    {
      id: 'taj-tirupati',
      name: 'Taj Tirupati',
      type: 'Luxury stay',
      priceRange: '₹8,500 - ₹16,000 / night ($105 - $195)',
      location: 'Tirupati City (facing the Seven Hills)',
      facilities: ['Panoramic Hill-View Pool', 'Pure Vegetarian Multi-Cuisine Fine Dining', 'TTD Darshan Concierge', 'Luxury Spa'],
      rating: 4.9,
      reviewsCount: 2850,
      distanceFromMajorAttractions: '10 mins to Alipiri Ghat road entrance',
      suitableFor: ['Families', 'Couples', 'Luxury Pilgrims'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'marasa-sarovar-premiere',
      name: 'Marasa Sarovar Premiere',
      type: 'Hotel',
      priceRange: '₹4,500 - ₹8,000 / night ($55 - $95)',
      location: 'Upadhyayanagar, Tirupati',
      facilities: ['Unique Dasavatara Theme Architecture', 'Pure Veg Dining', 'Outdoor Pool', '24/7 Travel Desk'],
      rating: 4.8,
      reviewsCount: 3100,
      distanceFromMajorAttractions: 'Close to Padmavathi temple & railway hub',
      suitableFor: ['Families', 'Solo Pilgrims', 'Groups'],
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'ttd-srinivasam-complex',
      name: 'TTD Srinivasam & Madhavam Pilgrim Complexes',
      type: 'Guesthouse',
      priceRange: '₹400 - ₹1,200 / night ($5 - $15)',
      location: 'Opposite Tirupati Central Bus Station',
      facilities: ['AC & Non-AC Rooms', 'Locker Facilities', 'Direct TTD Bus Shuttle to Hills', 'Pure Veg Canteen'],
      rating: 4.6,
      reviewsCount: 6500,
      distanceFromMajorAttractions: 'Direct connection to Tirumala ghat buses',
      suitableFor: ['Budget Pilgrims', 'Solo Travelers', 'Families'],
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80'
    }
  ],
  packages: [
    {
      id: 'tirupati-1day-divine-darshan',
      name: '1-Day Sacred Divine Darshan Chapter',
      durationDays: 1,
      tagline: 'Scenic ghat ascent, blessed darshan of Lord Venkateswara, and authentic Laddu prasadam',
      includedExperiences: ['Ghat Road Transport Pass', 'Special Entry Darshan Assistance', 'Srivari Laddu Prasadam (2 Laddus)', 'Silathoranam Visit'],
      accommodationCategory: 'Pilgrim Guesthouse or Express Day Transit',
      transportation: 'Dedicated AC Car / TTD Electric Bus',
      estimatedBudget: 45,
      activities: ['Tirumala ascent', 'Srivari temple darshan', 'Swami Pushkarini sacred tank', 'Silathoranam geological arch', 'Laddu collection'],
      customizableOptions: ['Kalyanakatta tonsure assistance', 'Padmavathi temple evening stop']
    },
    {
      id: 'tirupati-3day-complete-pilgrimage',
      name: '3-Day Complete Spiritual & Heritage Chapter',
      durationDays: 3,
      tagline: 'Deep dive: Srivari Mettu holy hike, Tirumala Darshan, Padmavathi shrine, and Chandragiri Fort',
      includedExperiences: ['Srivari Mettu Guided Footpath Hike', 'Special Entry Darshan Ticket', 'Chandragiri Fort Tour', 'Padmavathi Ammavari Temple Visit', 'Annaprasadam Experience'],
      accommodationCategory: '4-Star Premium Hotel in Tirupati',
      transportation: 'Chauffeur Driven AC Cab for 3 Days',
      estimatedBudget: 140,
      activities: ['Alipiri & Srivari Mettu', 'Tirumala Darshan', 'Papavinasanam spring', 'Chandragiri sound & light show', 'Kapila Theertham'],
      customizableOptions: ['Golden Temple Sripuram day excursion', 'Private priest guidance']
    }
  ],
  budgetBreakdown: {
    currencySymbol: '₹',
    currencyCode: 'INR',
    exchangeRateToUSD: 0.012,
    dailyCosts: {
      Budget: { stay: 8, food: 5, transport: 4, attractions: 3, activities: 5, misc: 4 },
      Moderate: { stay: 35, food: 15, transport: 12, attractions: 6, activities: 15, misc: 8 },
      Premium: { stay: 95, food: 40, transport: 25, attractions: 12, activities: 35, misc: 18 },
      Luxury: { stay: 210, food: 80, transport: 50, attractions: 25, activities: 70, misc: 35 }
    }
  },
  importantInfo: {
    transportation: {
      overview: 'Tirupati is exceptionally connected via rail, road, and international airport (TIR). Two separate one-way mountain ghat roads (Up-ghat: 18 km, Down-ghat: 28 km) link Tirupati with Tirumala.',
      options: [
        { name: 'APSRTC Saptagiri Hill Buses', desc: 'Frequent electric and AC buses running every 2 minutes between Tirupati and Tirumala 24/7.', tip: 'Safe, punctual, and operated by veteran mountain drivers.' },
        { name: 'Footpath Pilgrimage (Pedestrian)', desc: 'Trekking up via Alipiri (3,550 steps) or Srivari Mettu (2,388 steps) with free luggage transfer to the hilltop.', tip: 'Carry water and start at dawn to avoid midday heat.' },
        { name: 'Private Taxis & Cabs', desc: 'Metered and fixed prepaid taxis available at airport, railway station, and bus stands.', tip: 'Speed limit on ghat roads is strictly monitored by automated speed radar gates.' }
      ]
    },
    weather: {
      currentOverview: 'Tropical climate with cooler, breezy temperatures on the Tirumala hill station compared to the plains below.',
      seasons: [
        { name: 'Winter (Peak Season)', months: 'Nov - Feb', temp: '16°C - 28°C', note: 'Pleasant, cool hill breeze; ideal for hiking and long queues.' },
        { name: 'Summer', months: 'Mar - Jun', temp: '26°C - 40°C', note: 'Hot on the plains; cooler atop Tirumala hills.' },
        { name: 'Monsoon', months: 'Jul - Oct', temp: '22°C - 32°C', note: 'Lush greenery, active waterfalls, and annual Brahmotsavam.' }
      ]
    },
    currency: {
      name: 'Indian Rupee',
      symbol: '₹',
      code: 'INR',
      cardAcceptance: 'UPI QR payments and debit/credit cards widely accepted at all TTD counters and hotels.',
      tippingCulture: 'Hundi donations are made voluntarily in temple donation collection boxes; no tipping inside sanctums.'
    },
    timeZone: 'IST (UTC+5:30)',
    emergency: {
      police: '100 / 112',
      ambulance: '108 (Ashwini Hospital on Tirumala hill)',
      touristHelpline: '155257 / 0877-2277777 (TTD 24x7 Help Desk)'
    },
    safetyTips: [
      'Tirumala is under 24/7 surveillance by temple vigilantes and police; crime rates are exceptionally low.',
      'Strict prohibition of alcohol, tobacco, non-vegetarian food, and weapons across the entire sacred hill.',
      'Keep track of children in crowded queue lines; ID bands with contact numbers are available at entry gates.'
    ],
    localEtiquette: [
      'Strict traditional dress code: Men must wear dhoti/kurta; women must wear saree or salwar-kameez with dupatta.',
      'Photography and electronic devices are strictly prohibited within inner temple compounds.',
      'Always enter temple lines with peaceful patience; respect fellow pilgrims from all corners of India.'
    ],
    travelTips: [
      'Pre-book your ₹300 Special Entry Darshan (SED) ticket on the official TTD portal (tirupatibalaji.ap.gov.in) 2-3 months in advance.',
      'Don’t miss taking home the iconic GI-tagged Srivari Laddu Prasadam.'
    ]
  },
  mapPoints: [
    { id: 'tir1', title: 'Sri Venkateswara Swamy Temple', category: 'attraction', lat: 13.6833, lng: 79.3472, description: 'Sacred Seven Hills sanctum of Lord Balaji.', cost: 'Free / ₹300' },
    { id: 'tir2', title: 'Silathoranam Natural Rock Arch', category: 'attraction', lat: 13.693, lng: 79.345, description: '2.5-billion-year-old Precambrian geological arch.', cost: 'Free' },
    { id: 'tir3', title: 'Sri Padmavathi Ammavari Temple', category: 'attraction', lat: 13.6144, lng: 79.4475, description: 'Goddess Lakshmi’s shrine in Tiruchanur.', cost: 'Free' },
    { id: 'tir4', title: 'Tarigonda Vengamamba Annaprasadam', category: 'food', lat: 13.681, lng: 79.346, description: 'Free sacred multi-course vegetarian meals.', cost: 'Free' },
    { id: 'tir5', title: 'Taj Tirupati', category: 'accommodation', lat: 13.635, lng: 79.42, description: '5-star luxury hotel facing the hills.', cost: '$$$' },
    { id: 'tir6', title: 'Srivari Mettu Footpath Trailhead', category: 'experience', lat: 13.655, lng: 79.362, description: 'Ancient 2,388-step stone pilgrimage trail.', cost: 'Free' },
    { id: 'tir7', title: 'Alipiri Toll Gate & Bus Hub', category: 'transit', lat: 13.652, lng: 79.408, description: 'Primary entry gate for vehicles ascending the hill.', cost: 'Transit' }
  ]
};
