import { Destination } from '../../types/travel';

export const mumbaiDestination: Destination = {
  id: 'mumbai',
  name: 'Mumbai',
  country: 'India',
  region: 'Maharashtra',
  tagline: 'The City of Dreams, Sea Breezes, and Soulful Stories',
  heroImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1600&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=800&q=80',
  ],
  coordinates: [18.922, 72.8347],
  intro: {
    whereItIs: 'Located on the western coast of India along the Arabian Sea, Mumbai is the financial, cinematic, and cultural heartbeat of India.',
    whyPeopleVisit: 'Famous for colonial Victorian architecture, Bollywood cinema, bustling bazaar streets, iconic street food, and the magnetic spirit of its people.',
    bestTimeToVisit: 'October to March when tropical winter breezes offer pleasant temperatures (20°C - 30°C).',
    generalAtmosphere: 'High energy, resilient, deeply warm, coastal, vibrant, and awake 24/7.',
    approxCostLevel: 'Moderate to Premium (accessible for budget backpackers to ultra-luxury travelers).',
    recommendedDuration: '3 to 5 Days',
  },
  touristSpots: [
    {
      id: 'gateway-of-india',
      name: 'Gateway of India & Apollo Bunder',
      category: 'History',
      isLesserKnown: false,
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80',
      description: 'An imposing 26m basalt arch facing Mumbai Harbor, built in 1924, overlooking boats to Elephanta Island and the historic Taj Mahal Palace Hotel.',
      location: 'Apollo Bunder, Colaba, South Mumbai',
      estimatedDuration: '1.5 - 2 Hours',
      approxCost: 'Free entry (ferries ₹150 - ₹250)',
      openingHours: 'Open 24 hours (best at sunrise & dusk)',
      distanceFromStay: 'Central South Mumbai location',
      whyWorthVisiting: 'The quintessential symbol of Mumbai where city history, ocean breezes, and street life meet.',
      lat: 18.922,
      lng: 72.8347,
    },
    {
      id: 'marine-drive',
      name: "Marine Drive (Queen's Necklace)",
      category: 'Photography',
      isLesserKnown: false,
      image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=800&q=80',
      description: 'A 3.6-kilometer curved C-shaped boulevard along Back Bay, lined with iconic Art Deco buildings and tetrahedral promenade seating.',
      location: 'Netaji Subhash Chandra Bose Road',
      estimatedDuration: '2 - 3 Hours',
      approxCost: 'Free',
      openingHours: 'Always accessible',
      distanceFromStay: '10 mins from Churchgate station',
      whyWorthVisiting: 'Experience the soul of Mumbai as sea mist sweeps in at twilight and street tea vendors offer steaming cutting chai.',
      lat: 18.943,
      lng: 72.823,
    },
    {
      id: 'elephanta-caves',
      name: 'Elephanta Caves (UNESCO Heritage)',
      category: 'Culture',
      isLesserKnown: false,
      image: 'https://images.unsplash.com/photo-1600100397608-f010f443b74f?auto=format&fit=crop&w=800&q=80',
      description: 'Rock-cut stone sculptures dating from the 5th to 7th centuries dedicated to Lord Shiva, located on Gharapuri Island accessible by a 1-hour bay ferry.',
      location: 'Elephanta Island, Mumbai Harbour',
      estimatedDuration: '4 - 5 Hours (including ferry)',
      approxCost: '₹40 (Indians) / ₹600 (Foreign travelers)',
      openingHours: '9:00 AM - 5:30 PM (Closed Mondays)',
      distanceFromStay: 'Ferry leaves from Gateway of India',
      whyWorthVisiting: 'The colossal 6-meter Trimurti sculpture represents one of ancient India’s masterpieces of rock architecture.',
      lat: 18.9633,
      lng: 72.9315,
    },
    {
      id: 'khotachiwadi',
      name: 'Khotachiwadi Heritage Village',
      category: 'Culture',
      isLesserKnown: true,
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
      description: 'A protected Portuguese-style East Indian enclave dating to the 18th century with wooden verandas, narrow cobblestone lanes, and colorful cottages.',
      location: 'Girgaon, South Mumbai',
      estimatedDuration: '1.5 Hours',
      approxCost: 'Free to walk',
      openingHours: 'Daylight hours',
      distanceFromStay: '15 mins north of Marine Drive',
      whyWorthVisiting: 'A peaceful, hidden sanctuary showing how Mumbai lived 150 years ago before skyscrapers took over.',
      lat: 18.9554,
      lng: 72.8188,
    },
    {
      id: 'sanjay-gandhi-national-park',
      name: 'Sanjay Gandhi National Park & Kanheri Caves',
      category: 'Nature',
      isLesserKnown: true,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      description: 'An immense 103 sq km tropical forest inside city limits containing 109 ancient Buddhist rock-cut caves spanning from 1st century BC.',
      location: 'Borivali East',
      estimatedDuration: '4 - 6 Hours',
      approxCost: '₹85 park entry + ₹25 Kanheri caves',
      openingHours: '7:30 AM - 5:30 PM (Closed Mondays)',
      distanceFromStay: '45 mins by local train from Bandra',
      whyWorthVisiting: 'Breathe crisp jungle air, rent bicycles under dense canopy, and meditate in 2,000-year-old viharas.',
      lat: 19.2288,
      lng: 72.9182,
    },
    {
      id: 'crawford-market',
      name: 'Crawford Market & Mangaldas Cloth Bazaar',
      category: 'Shopping',
      isLesserKnown: false,
      image: 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=800&q=80',
      description: 'Historic Victorian gothic market hall designed with reliefs by Lockwood Kipling, overflowing with spices, fruits, and handwoven textiles.',
      location: 'Fort / Dhobi Talao',
      estimatedDuration: '2 - 3 Hours',
      approxCost: 'Free entry (bring cash for spices/souvenirs)',
      openingHours: '10:00 AM - 8:00 PM (Closed Sundays)',
      distanceFromStay: 'Near CST Railway Terminus',
      whyWorthVisiting: 'Immerse your senses in cardamom, saffron, fresh Alphonso mangoes (in summer), and kaleidoscopic silks.',
      lat: 18.9474,
      lng: 72.8344,
    }
  ],
  culture: {
    traditions: [
      'The Dabbawala tiffin network delivering 200,000 lunches daily with Six Sigma precision',
      'Koli fisherfolk customs celebrating the bounty of the Arabian Sea',
      'Art Deco architectural legacy along Oval Maidan and Marine Drive'
    ],
    festivals: [
      {
        name: 'Ganesh Chaturthi',
        timing: 'August / September',
        description: 'The crowning 10-day celebration where gigantic clay idols of Lord Ganesha are welcomed into homes and immersed into the sea amid energetic dhol-tasha drumming.'
      },
      {
        name: 'Kala Ghoda Arts Festival',
        timing: 'February',
        description: 'A vibrant 9-day multicultural street art, theater, and literature celebration in South Mumbai’s heritage precinct.'
      }
    ],
    customs: [
      'Warmly greeting locals with "Namaste" or "Kem Cho"',
      'Taking off shoes before stepping into temples, mosques, gurdwaras, and private homes',
      'Enjoying "Cutting Chai" in small glasses during tea breaks at street nooks'
    ],
    socialEtiquette: [
      'Always ask politely before photographing artisans, sadhus, or street vendors',
      'Public displays of intense affection are generally discouraged in traditional neighborhoods',
      'Patience in crowded transit; people are helpful when asked for directions'
    ],
    dressConsiderations: 'Light breathable cottons; modest clothing covering shoulders and knees when visiting sacred monuments.',
    thingsVisitorsShouldRespect: [
      'Respect photography prohibitions inside sacred sanctums',
      'Support local family-run businesses and avoid excessive haggling over minor amounts with humble vendors',
      'Dispose of trash responsibly to maintain heritage areas and beaches'
    ],
    culturalFacts: [
      'Mumbai contains the second-largest concentration of Art Deco buildings in the world after Miami.',
      'The Chhatrapati Shivaji Maharaj Terminus (CST) was designed in High Victorian Gothic style and is a UNESCO World Heritage site.'
    ]
  },
  languages: {
    officialLanguages: ['Marathi'],
    commonlySpoken: ['Hindi', 'English', 'Gujarati', 'Bambaiya Hindi slang'],
    usefulPhrases: [
      { category: 'greeting', phrase: 'Namaskar / Namaste', translation: 'Hello / Greetings', pronunciation: 'nuh-muh-skaar' },
      { category: 'thank_you', phrase: 'Dhanyawad / Shukriya', translation: 'Thank you', pronunciation: 'dhun-yuh-vaad' },
      { category: 'please', phrase: 'Krupaya', translation: 'Please', pronunciation: 'kroo-puh-yaa' },
      { category: 'help', phrase: 'Maza madat kara / Kripya madad kijiye', translation: 'Please help me', pronunciation: 'muh-dut kuh-raa' },
      { category: 'directions', phrase: 'He rasta kuthe jato?', translation: 'Where does this road go?', pronunciation: 'hay rust-aa koo-thay jaa-toe' },
      { category: 'food', phrase: 'Ek cutting chai ani vada pav dya', translation: 'Please give me one cutting tea and vada pav', pronunciation: 'aik kut-ing chai aa-nee va-daa paav dyaa' }
    ]
  },
  food: {
    dishes: [
      {
        id: 'vada-pav',
        name: 'Vada Pav',
        category: 'Street Food',
        description: 'Spiced mashed potato fritter nestled inside a soft pav bun with garlic red chutney, green mint chili paste, and fried chili.',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
        whereToTry: 'Ashok Vada Pav (Kirti College) or Aram Vada Pav (CST)',
        approxPrice: '₹20 - ₹40 ($0.25 - $0.50)'
      },
      {
        id: 'pav-bhaji',
        name: 'Mumbai Pav Bhaji',
        category: 'Vegetarian',
        description: 'Rich, spiced mash of tomatoes, potatoes, peas, and butter simmered on a giant cast-iron tawa, served with butter-toasted buns and lemon wedges.',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80',
        whereToTry: 'Sardar Refreshments (Tardeo) or Cannon Pav Bhaji (CST)',
        approxPrice: '₹150 - ₹250 ($1.80 - $3.00)'
      },
      {
        id: 'bombay-duck-fry',
        name: 'Bombil (Bombay Duck) Fry',
        category: 'Non-Vegetarian',
        description: 'Fresh local coastal lizardfish marinated in red chili, turmeric, and kokum, coated in semolina (rava) and pan-crisped to golden perfection.',
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80',
        whereToTry: 'Gajalee (Vile Parle) or Trishna (Fort)',
        approxPrice: '₹350 - ₹600 ($4.20 - $7.20)'
      },
      {
        id: 'falooda',
        name: 'Kulfi Falooda',
        category: 'Dessert',
        description: 'Silky vermicelli, sweet basil seeds (sabja), rose syrup, and chilled dense malai kulfi topped with pistachios.',
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80',
        whereToTry: 'Badshah Cold Drinks (Crawford Market)',
        approxPrice: '₹120 - ₹200 ($1.50 - $2.40)'
      }
    ],
    recommendedExperiences: [
      'Early morning street food breakfast trail through Dadar flower market',
      'Irani cafe breakfast of bun maska and mawa cake at B. Merwan (grant road)',
      'Sunset seafood feast at Chowpatty beach under twinkling city lights'
    ]
  },
  experiences: [
    {
      id: 'heritage-art-deco-walk',
      title: 'South Mumbai Art Deco & Victorian Heritage Walk',
      type: 'walking',
      description: 'Stroll through the shaded avenues of Fort, Ballard Estate, and Oval Maidan with an architectural historian.',
      duration: '3 Hours',
      cost: '₹1,200 ($15)',
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80',
      highlight: 'Discover hidden Art Deco motifs on 1930s residential towers facing the sea.'
    },
    {
      id: 'dharavi-makers-tour',
      title: 'Dharavi Ethical Community & Artisans Experience',
      type: 'cultural',
      description: 'An inspiring, respectful walk witnessing pottery in Kumbharwada, leather crafting, and textile recycling industries.',
      duration: '2.5 Hours',
      cost: '₹1,500 ($18)',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80',
      highlight: 'See the true entrepreneurial grit and community harmony of Mumbai.'
    },
    {
      id: 'sailing-mumbai-harbour',
      title: 'Sunset Sailing in Mumbai Harbour on a Seabird Yacht',
      type: 'relaxation',
      description: 'Board a wooden sailboat from Gateway of India into open waters as the sun drops behind the city skyline.',
      duration: '2 Hours',
      cost: '₹2,500 ($30)',
      image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=600&q=80',
      highlight: 'Gentle sea breezes, seagulls, and historic lighthouses away from urban bustle.'
    }
  ],
  chapterStyles: {
    'A peaceful chapter': {
      subtitle: 'Gentle mornings by the sea, quiet heritage enclaves, and temple bells',
      quote: '“In the midst of movement and chaos, keep stillness inside of you.”',
      highlights: ['Sunrise at Banganga Tank', 'Meditation at Global Vipassana Pagoda', 'Evening breeze at Bandra Bandstand'],
      sampleDay: 'Begin with morning silence at Banganga sacred tank, walk past 18th-century stone steps, sip fresh tender coconut water, and spend late afternoon reading at David Sassoon Library.'
    },
    'An adventurous chapter': {
      subtitle: 'Fast-paced local trains, ferry voyages, and jungle trails',
      quote: '“Adventure is allowing the unexpected to happen.”',
      highlights: ['Cycling through Sanjay Gandhi National Park', 'Sea ferry to Elephanta Island', 'Midnight coastal bike tour'],
      sampleDay: 'Catch the harbor line train, board the early ferry to Elephanta rock caves, hike to the cannon hill viewpoint, and return for a late-night street food sprint.'
    },
    'A cultural chapter': {
      subtitle: 'Living heritage, theatrical magic, and multi-faith sanctuaries',
      quote: '“To know Mumbai is to listen to the tapestry of its hundred languages.”',
      highlights: ['Prithvi Theatre evening play in Juhu', 'Kala Ghoda art galleries', 'Haji Ali Dargah sea causeway at high tide'],
      sampleDay: 'Spend morning at Chhatrapati Shivaji Maharaj Vastu Sangrahalaya museum, visit Khotachiwadi heritage village, and attend an evening play at Prithvi Theatre.'
    },
    'A food-filled chapter': {
      subtitle: 'From coastal Malvani curries to Parsi berry pulao and street delicacies',
      quote: '“Food is our common ground, a universal experience.”',
      highlights: ['Irani cafe breakfast at Britannia & Co', 'Khau Galli street treats', 'Coastal crab dinner at Mahesh Lunch Home'],
      sampleDay: 'Bun maska and chai for breakfast, authentic thali lunch at Shree Thaker Bhojanalay, street chaat at Girgaon Chowpatty, and late night falooda.'
    },
    'A romantic chapter': {
      subtitle: 'Harbour sailing, coastal sunsets, and charming candlelit bistros',
      quote: '“Every sea breeze carries a whisper meant for two.”',
      highlights: ['Private yacht sail at Gateway', 'Stroll along Marine Drive Queen’s Necklace', 'Dinner at rooftop overlooking Arabian Sea'],
      sampleDay: 'Afternoon coffee in Colaba, sunset sail across the harbor with champagne colors in the sky, and intimate dinner at a Bandra Portuguese villa restaurant.'
    },
    'A family chapter': {
      subtitle: 'Engaging science, train museum wonders, and seaside gardens',
      quote: '“The greatest legacy we give our children is happy memories.”',
      highlights: ['Nehru Science Centre interactive exhibits', 'Open top heritage bus tour', 'Juhu Beach kite flying'],
      sampleDay: 'Explore interactive displays at Nehru Planetarium, ride the heritage double-decker bus through South Mumbai, and enjoy kulfi by the waves at Juhu beach.'
    },
    'A chapter of discovery': {
      subtitle: 'Hidden alleys, artisanal workshops, and untold city lore',
      quote: '“The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.”',
      highlights: ['Dhobi Ghat open-air laundry overlook', 'Sassoon Docks morning fish auction', 'Dabbawala sorting station at Churchgate'],
      sampleDay: 'Witness the dawn fish auctions at Sassoon Docks, follow the punctual dabbawalas at Churchgate at 11:30 AM, and explore rare books on Flora Fountain pavement.'
    }
  },
  accommodations: [
    {
      id: 'taj-mahal-palace',
      name: 'The Taj Mahal Palace & Tower',
      type: 'Luxury stay',
      priceRange: '₹22,000 - ₹45,000 / night ($260 - $540)',
      location: 'Colaba, facing Gateway of India',
      facilities: ['Heritage Architecture', 'Sea-view Pool', '9 Fine Dining Venues', 'Luxury Spa', 'Butler Service'],
      rating: 4.9,
      reviewsCount: 4200,
      distanceFromMajorAttractions: 'Directly in front of Gateway of India',
      suitableFor: ['Couples', 'Luxury Seekers', 'Heritage Lovers'],
      image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'abode-bombay',
      name: 'Abode Bombay Boutique Hotel',
      type: 'Hotel',
      priceRange: '₹5,500 - ₹9,000 / night ($65 - $110)',
      location: 'Colaba, South Mumbai',
      facilities: ['Artisan Interiors', 'Eco-friendly', 'Locally Sourced Breakfast', 'Free High-speed Wi-Fi', 'Library Lounge'],
      rating: 4.8,
      reviewsCount: 1120,
      distanceFromMajorAttractions: '2 mins walk to Colaba Causeway',
      suitableFor: ['Solo Travelers', 'Design Lovers', 'Couples'],
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'zostel-mumbai',
      name: 'Zostel Mumbai',
      type: 'Hostel',
      priceRange: '₹1,200 - ₹2,500 / night ($15 - $30)',
      location: 'Andheri East',
      facilities: ['Dorm & Private Rooms', 'Community Rooftop', 'Cafe', 'Walking Tours', 'Lockers'],
      rating: 4.6,
      reviewsCount: 1850,
      distanceFromMajorAttractions: 'Near metro station; 30 mins to South Mumbai',
      suitableFor: ['Backpackers', 'Budget Travelers', 'Digital Nomads'],
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80'
    }
  ],
  packages: [
    {
      id: 'mumbai-1day-explorer',
      name: '1-Day Mumbai Spirit Explorer',
      durationDays: 1,
      tagline: 'Colonial heritage, coastal breeze, and iconic street delicacies in 24 hours',
      includedExperiences: ['Heritage Walk', 'Gateway Ferry', 'Sunset Chai at Marine Drive', 'Street Food Tasting'],
      accommodationCategory: 'Boutique Hotel or Day Pass',
      transportation: 'Chauffeur / AC Taxi & Walking',
      estimatedBudget: 85,
      activities: ['Gateway of India', 'Taj Palace visit', 'Victoria Terminus photo stop', 'Marine Drive sunset', 'Khau Galli dinner'],
      customizableOptions: ['Private photography guide', 'Dabbawala sorting meet', 'Upgrade to vintage car']
    },
    {
      id: 'mumbai-3day-culture',
      name: '3-Day Culture & Soul Chapter',
      durationDays: 3,
      tagline: 'Deep dive into bazaars, Elephanta island, Bollywood heritage, and coastal villages',
      includedExperiences: ['Elephanta Island Ferry & Guide', 'Art Deco Walk', 'Khotachiwadi Tour', 'Bandra Village Walk'],
      accommodationCategory: '4-Star Boutique Heritage Stay',
      transportation: 'Mixed AC Taxi and local ferry',
      estimatedBudget: 240,
      activities: ['Caves exploration', 'Bandra street art', 'Dharavi artisanal tour', 'Chowpatty beach dinner'],
      customizableOptions: ['Cooking masterclass with local home chef', 'Private yacht harbor sail']
    },
    {
      id: 'mumbai-5day-complete',
      name: '5-Day Complete Mumbai Experience',
      durationDays: 5,
      tagline: 'The full cinematic, historical, coastal, and wilderness journey',
      includedExperiences: ['Sanjay Gandhi National Park', 'Kanheri Buddhist Caves', 'Bollywood Studio tour', 'South Mumbai deep walk'],
      accommodationCategory: '5-Star Sea-facing Hotel',
      transportation: 'Dedicated Private Car & Driver',
      estimatedBudget: 490,
      activities: ['All major heritage sites', 'National park cycling', 'Culinary food crawl', 'Modern art galleries'],
      customizableOptions: ['Customizable dietary food tour', 'Luxury spa day']
    }
  ],
  budgetBreakdown: {
    currencySymbol: '₹',
    currencyCode: 'INR',
    exchangeRateToUSD: 0.012,
    dailyCosts: {
      Budget: { stay: 18, food: 10, transport: 5, attractions: 6, activities: 8, misc: 5 },
      Moderate: { stay: 65, food: 25, transport: 15, attractions: 12, activities: 20, misc: 10 },
      Premium: { stay: 160, food: 60, transport: 35, attractions: 25, activities: 45, misc: 25 },
      Luxury: { stay: 350, food: 120, transport: 70, attractions: 40, activities: 90, misc: 50 }
    }
  },
  importantInfo: {
    transportation: {
      overview: 'Mumbai has one of the world’s most interconnected transit networks including local suburban trains, metro lines, black-and-yellow (Kaali Peeli) taxis, and auto-rickshaws.',
      options: [
        { name: 'Local Trains', desc: 'The city lifeline; avoid peak rush hours (8:30-10:30 AM & 6:00-8:30 PM)', tip: 'Purchase AC local tickets or first class for a relaxed journey.' },
        { name: 'Kaali Peeli Taxis', desc: 'Black and yellow metered cabs operating in South Mumbai; ride on meter without negotiation.', tip: 'Ride-hailing apps like Uber and Ola work seamlessly.' },
        { name: 'Metro', desc: 'Modern air-conditioned lines connecting western suburbs and airport.', tip: 'Download the Mumbai Metro 1 app for single-tap QR ticketing.' }
      ]
    },
    weather: {
      currentOverview: 'Pleasant and breezy during winter (Nov-Feb), warm during pre-monsoon (Mar-May), and lush romantic rains during monsoon (Jun-Sep).',
      seasons: [
        { name: 'Winter', months: 'Nov - Feb', temp: '19°C - 30°C', note: 'Ideal sightseeing season with dry sunny skies.' },
        { name: 'Summer', months: 'Mar - May', temp: '26°C - 35°C', note: 'Humid coastal heat; plan indoor visits during midday.' },
        { name: 'Monsoon', months: 'Jun - Sep', temp: '24°C - 29°C', note: 'Dramatic heavy rainfall; city looks emerald green.' }
      ]
    },
    currency: {
      name: 'Indian Rupee',
      symbol: '₹',
      code: 'INR',
      cardAcceptance: 'Cards and UPI digital payments accepted everywhere; keep small cash for street stalls.',
      tippingCulture: '7% - 10% is customary in sit-down restaurants if service charge is not included.'
    },
    timeZone: 'IST (UTC+5:30)',
    emergency: {
      police: '100 / 112',
      ambulance: '108',
      touristHelpline: '1363'
    },
    safetyTips: [
      'Mumbai is widely considered one of the safest metropolitan cities in India for solo and female travelers.',
      'Drink bottled or filtered water and choose freshly cooked piping hot street food from busy stalls.',
      'Keep personal belongings secure when boarding crowded local trains.'
    ],
    localEtiquette: [
      'Dress modestly at temples and shrines (cover shoulders and knees).',
      'Remove shoes at spiritual sites and private homes.',
      'Greet elders with respectful tone; locals love sharing city advice.'
    ],
    travelTips: [
      'Get up early at least once for a 6:30 AM sunrise stroll at Marine Drive.',
      'Carry small change (₹10, ₹20, ₹50 notes) for cutting chai and street snacks.'
    ]
  },
  mapPoints: [
    { id: 'm1', title: 'Gateway of India', category: 'attraction', lat: 18.922, lng: 72.8347, description: 'Iconic seaside basalt monument built in 1924.', cost: 'Free' },
    { id: 'm2', title: 'Marine Drive Promenade', category: 'attraction', lat: 18.943, lng: 72.823, description: 'Scenic 3.6 km coastal avenue facing the Arabian Sea.', cost: 'Free' },
    { id: 'm3', title: 'Elephanta Rock Caves', category: 'attraction', lat: 18.9633, lng: 72.9315, description: 'Ancient 5th century rock-cut Shiva sculptures.', cost: '₹600' },
    { id: 'm4', title: 'Britannia & Co. Restaurant', category: 'food', lat: 18.9388, lng: 72.837, description: 'Famous 1923 Parsi heritage café renowned for Berry Pulao.', cost: '$$' },
    { id: 'm5', title: 'Sardar Pav Bhaji', category: 'food', lat: 18.9712, lng: 72.8189, description: 'Legendary butter-drenched tawa pav bhaji.', cost: '$' },
    { id: 'm6', title: 'The Taj Mahal Palace', category: 'accommodation', lat: 18.9217, lng: 72.833, description: 'Iconic 5-star heritage hotel facing the harbor.', cost: '$$$$' },
    { id: 'm7', title: 'Abode Bombay', category: 'accommodation', lat: 18.924, lng: 72.832, description: 'Boutique colonial sanctuary in Colaba.', cost: '$$' },
    { id: 'm8', title: 'Gateway Harbour Sailing', category: 'experience', lat: 18.9225, lng: 72.8355, description: 'Sunset yacht sailing experience.', cost: '$$' },
    { id: 'm9', title: 'Chhatrapati Shivaji Maharaj Terminus (CST)', category: 'transit', lat: 18.94, lng: 72.8354, description: 'UNESCO High Victorian Gothic railway terminus.', cost: 'Free' }
  ]
};
