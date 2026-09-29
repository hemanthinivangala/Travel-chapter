import { PriceComparisonItem } from '../types/travel';

export const samplePriceComparisons: PriceComparisonItem[] = [
  // Mumbai Comparisons
  {
    id: 'comp-taj-mahal-mumbai',
    title: 'The Taj Mahal Palace & Tower (Mumbai)',
    category: 'stay',
    destinationId: 'mumbai',
    description: 'Iconic 5-star seaside heritage hotel overlooking the Gateway of India and Arabian Sea.',
    image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    reviewsCount: 4200,
    bestDealProvider: 'Official Hotel Direct',
    savingsUSD: 65,
    offers: [
      {
        providerName: 'Official Hotel Direct',
        priceUSD: 295,
        originalPriceUSD: 360,
        perks: ['Free Breakfast', 'Sea View Upgrade upon availability', 'Flexible 24h Cancellation', 'Complimentary High Tea'],
        dealTag: 'Best Value',
        rating: 4.9,
        bookingUrl: 'https://www.tajhotels.com'
      },
      {
        providerName: 'Booking.com',
        priceUSD: 315,
        originalPriceUSD: 350,
        perks: ['Free Cancellation before 48h', 'Genius Loyalty Perks', 'Pay at Hotel'],
        dealTag: 'Price Match',
        rating: 4.8,
        bookingUrl: 'https://www.booking.com'
      },
      {
        providerName: 'Agoda',
        priceUSD: 310,
        originalPriceUSD: 360,
        perks: ['Instant Confirmation', 'AgodaCash Earned'],
        rating: 4.7,
        bookingUrl: 'https://www.agoda.com'
      },
      {
        providerName: 'Expedia',
        priceUSD: 330,
        originalPriceUSD: 365,
        perks: ['OneKey Cash eligible', 'VIP Access property'],
        rating: 4.6,
        bookingUrl: 'https://www.expedia.com'
      }
    ]
  },
  {
    id: 'comp-flight-mumbai',
    title: 'Roundtrip Flight to Mumbai (BOM)',
    category: 'flight',
    destinationId: 'mumbai',
    description: 'Direct & 1-stop scheduled international & domestic connections with baggage allowance.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    reviewsCount: 1890,
    bestDealProvider: 'Google Flights',
    savingsUSD: 78,
    offers: [
      {
        providerName: 'Google Flights',
        priceUSD: 410,
        originalPriceUSD: 488,
        perks: ['Price Tracking Alert', 'Carbon Emissions Transparency', 'No Hidden Booking Fees'],
        dealTag: 'Cheapest',
        bookingUrl: 'https://www.google.com/travel/flights'
      },
      {
        providerName: 'Airline Direct',
        priceUSD: 425,
        originalPriceUSD: 475,
        perks: ['Free Seat Selection on select rows', 'Direct Airline Miles', 'Priority Customer Rebooking'],
        dealTag: 'Best Value',
        bookingUrl: 'https://www.airindia.com'
      },
      {
        providerName: 'Skyscanner',
        priceUSD: 418,
        originalPriceUSD: 480,
        perks: ['Multi-City Aggregation', 'Flexible Dates Grid'],
        rating: 4.7,
        bookingUrl: 'https://www.skyscanner.com'
      }
    ]
  },

  // Paris Comparisons
  {
    id: 'comp-paris-marais-stay',
    title: 'Hôtel Caron de Beaumarchais (Le Marais, Paris)',
    category: 'stay',
    destinationId: 'paris',
    description: 'Charming 18th-century antique boutique hotel in the heart of the historic Marais quarter.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    reviewsCount: 940,
    bestDealProvider: 'Booking.com',
    savingsUSD: 45,
    offers: [
      {
        providerName: 'Booking.com',
        priceUSD: 198,
        originalPriceUSD: 243,
        perks: ['Free Cancellation until 3 days prior', 'Genius 10% Discount', 'No Advance Deposit Required'],
        dealTag: 'Best Value',
        rating: 4.9,
        bookingUrl: 'https://www.booking.com'
      },
      {
        providerName: 'Official Hotel Direct',
        priceUSD: 215,
        originalPriceUSD: 240,
        perks: ['Welcome French Pastry & Wine', 'Direct room preference request'],
        rating: 4.8,
        bookingUrl: 'https://www.carondebeaumarchais.com'
      },
      {
        providerName: 'Expedia',
        priceUSD: 228,
        originalPriceUSD: 250,
        perks: ['OneKey Rewards', 'Member Only Pricing'],
        rating: 4.7,
        bookingUrl: 'https://www.expedia.com'
      }
    ]
  },
  {
    id: 'comp-paris-seine-tour',
    title: 'River Seine Illuminated Cruise & Champagne',
    category: 'experience',
    destinationId: 'paris',
    description: 'Evening glass canopy boat sailing beneath 22 illuminated Parisian bridges.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    reviewsCount: 3100,
    bestDealProvider: 'GetYourGuide',
    savingsUSD: 8,
    offers: [
      {
        providerName: 'GetYourGuide',
        priceUSD: 19,
        originalPriceUSD: 27,
        perks: ['Instant Mobile Ticket Barcode', 'Full Refund up to 24h before', 'Audio Guide in 14 Languages'],
        dealTag: 'Cheapest',
        rating: 4.8,
        bookingUrl: 'https://www.getyourguide.com'
      },
      {
        providerName: 'Viator',
        priceUSD: 22,
        originalPriceUSD: 28,
        perks: ['Tripadvisor Excellence Badge', 'Reserve Now & Pay Later'],
        rating: 4.7,
        bookingUrl: 'https://www.viator.com'
      },
      {
        providerName: 'Klook',
        priceUSD: 21,
        originalPriceUSD: 27,
        perks: ['Klook Points Bonus', 'Direct Turnstile Skip'],
        rating: 4.6,
        bookingUrl: 'https://www.klook.com'
      }
    ]
  },

  // Tokyo Comparisons
  {
    id: 'comp-tokyo-mimaru-stay',
    title: 'Mimaru Tokyo Station East (Chuo City)',
    category: 'stay',
    destinationId: 'tokyo',
    description: 'Modern Japanese family apartment suites with kitchenette, dining table, and proximity to Tokyo station.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    reviewsCount: 1250,
    bestDealProvider: 'Agoda',
    savingsUSD: 52,
    offers: [
      {
        providerName: 'Agoda',
        priceUSD: 168,
        originalPriceUSD: 220,
        perks: ['Agoda Special Tokyo Deal', 'Free High-Speed Wi-Fi Router', 'Easy Cancellation'],
        dealTag: 'Cheapest',
        rating: 4.8,
        bookingUrl: 'https://www.agoda.com'
      },
      {
        providerName: 'Booking.com',
        priceUSD: 182,
        originalPriceUSD: 225,
        perks: ['Genius Level Perks', 'Free Cancellation until 48h', 'English Support Desk'],
        dealTag: 'Best Value',
        rating: 4.8,
        bookingUrl: 'https://www.booking.com'
      },
      {
        providerName: 'Official Hotel Direct',
        priceUSD: 195,
        originalPriceUSD: 230,
        perks: ['Complimentary luggage forwarding assistance', 'Direct floor allocation'],
        rating: 4.9,
        bookingUrl: 'https://mimaruhotels.com'
      }
    ]
  },
  {
    id: 'comp-tokyo-shinkansen',
    title: 'Tokyo to Kyoto Shinkansen Bullet Train (Nozomi)',
    category: 'train',
    destinationId: 'tokyo',
    description: 'High-speed 285 km/h bullet train traversing Tokyo to Kyoto in just 2 hours 15 minutes with Mount Fuji views.',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    reviewsCount: 5200,
    bestDealProvider: 'Klook',
    savingsUSD: 14,
    offers: [
      {
        providerName: 'Klook',
        priceUSD: 98,
        originalPriceUSD: 112,
        perks: ['Instant QR Code Station Pickup', 'Select Reserved Window Seat for Mt. Fuji view', 'Free Cancellation up to 72h'],
        dealTag: 'Best Value',
        rating: 4.9,
        bookingUrl: 'https://www.klook.com'
      },
      {
        providerName: 'Airline Direct',
        priceUSD: 106,
        originalPriceUSD: 112,
        perks: ['Official JR Station Smart EX Direct Ticketing', 'Instant gate tap via Suica IC'],
        rating: 4.9,
        bookingUrl: 'https://smart-ex.jp'
      }
    ]
  },

  // Tirupati & Tirumala Sacred Comparisons
  {
    id: 'comp-tirupati-stay-grand-ridge',
    title: 'Fortune Select Grand Ridge & Marasa Sarovar (Tirupati Foothills)',
    category: 'stay',
    destinationId: 'tirupati',
    description: 'Premier 5-star & luxury pilgrim resorts at the foot of Seshachalam Hills with temple shuttle services.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    reviewsCount: 3800,
    bestDealProvider: 'MakeMyTrip / Direct',
    savingsUSD: 32,
    offers: [
      {
        providerName: 'MakeMyTrip Direct',
        priceUSD: 68,
        originalPriceUSD: 95,
        perks: ['Free Pure-Veg Breakfast Buffet', 'Complimentary Alipiri Ghat Shuttle', 'Flexible 24h Check-in/out'],
        dealTag: 'Best Value',
        rating: 4.8,
        bookingUrl: 'https://www.makemytrip.com'
      },
      {
        providerName: 'Booking.com',
        priceUSD: 74,
        originalPriceUSD: 98,
        perks: ['Genius Member 10% Off', 'Free Cancellation before 48h', 'No Prepayment Required'],
        dealTag: 'Price Match',
        rating: 4.8,
        bookingUrl: 'https://www.booking.com'
      },
      {
        providerName: 'Agoda',
        priceUSD: 72,
        originalPriceUSD: 95,
        perks: ['Instant E-Voucher Confirmation', 'AgodaCash Earned'],
        rating: 4.7,
        bookingUrl: 'https://www.agoda.com'
      },
      {
        providerName: 'TTD Pilgrim Cottages (Srinivasam / Madhavam)',
        priceUSD: 18,
        originalPriceUSD: 25,
        perks: ['Government Pilgrimage Rate', 'Directly opposite Tirupati Railway Station', 'Clean & Secure'],
        dealTag: 'Cheapest',
        rating: 4.4,
        bookingUrl: 'https://ttdevasthanams.ap.gov.in'
      }
    ]
  },
  {
    id: 'comp-tirupati-darshan-tickets',
    title: 'Sri Venkateswara Temple Special Entry Darshan & IRCTC Package',
    category: 'experience',
    destinationId: 'tirupati',
    description: 'Official TTD Special Entry ₹300 Darshan token with Srivari Laddu Prasadam vs IRCTC VIP Tour Escort package.',
    image: 'https://images.unsplash.com/photo-1621644827827-0c6114e9f74a?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    reviewsCount: 15400,
    bestDealProvider: 'TTD Devasthanams Official',
    savingsUSD: 40,
    offers: [
      {
        providerName: 'TTD Devasthanams Official Direct',
        priceUSD: 4, // ₹300 INR is ~ $3.60 USD
        originalPriceUSD: 6,
        perks: ['Official ₹300 SED Token', 'Includes 1 Free Srivari Laddu Prasadam', 'Fast-Track Queue Entry'],
        dealTag: 'Cheapest',
        rating: 4.9,
        bookingUrl: 'https://ttdevasthanams.ap.gov.in'
      },
      {
        providerName: 'IRCTC Balaji Darshan Package',
        priceUSD: 45,
        originalPriceUSD: 65,
        perks: ['Includes Confirmed Darshan Token', 'AC Road Transport Alipiri to Tirumala', 'Dedicated Temple Tour Guide & Fresh Up Room'],
        dealTag: 'Best Value',
        rating: 4.8,
        bookingUrl: 'https://www.irctctourism.com'
      },
      {
        providerName: 'AP Tourism (APTDC) Daily Tour',
        priceUSD: 38,
        originalPriceUSD: 55,
        perks: ['State Tourism Deluxe Coach', 'Confirmed Special Darshan Slot', 'Padmavathi Temple Visit Included'],
        rating: 4.7,
        bookingUrl: 'https://tourism.ap.gov.in'
      }
    ]
  },
  {
    id: 'comp-tirupati-transit-travel',
    title: 'Travel to Tirupati: Flights (TIR), Vande Bharat Train & AC Sleeper',
    category: 'transport',
    destinationId: 'tirupati',
    description: 'Compare non-stop flights to Tirupati Airport (Renigunta) vs High-Speed Vande Bharat Express vs AC Volvo bus.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    reviewsCount: 4200,
    bestDealProvider: 'IRCTC / Google Flights',
    savingsUSD: 45,
    offers: [
      {
        providerName: 'Vande Bharat Express (Secunderabad / Chennai)',
        priceUSD: 24,
        originalPriceUSD: 32,
        perks: ['High-Speed 130 km/h Chair Car / Executive', 'Hot Gourmet Meals Included', 'Arrives at Tirupati Main Station'],
        dealTag: 'Best Value',
        rating: 4.9,
        bookingUrl: 'https://www.irctc.co.in'
      },
      {
        providerName: 'IndiGo / SpiceJet Flights to TIR',
        priceUSD: 58,
        originalPriceUSD: 85,
        perks: ['Direct 1-hour flight from Hyderabad / Bangalore', '15kg Checked Baggage Included', 'Instant E-ticket PNR'],
        dealTag: 'Fastest',
        rating: 4.7,
        bookingUrl: 'https://www.goindigo.in'
      },
      {
        providerName: 'KSRTC / APSRTC Amaravathi Electric AC',
        priceUSD: 14,
        originalPriceUSD: 20,
        perks: ['Eco-friendly Electric Multi-axle', 'Reclining Sleeper Berth', 'Direct drop at Alipiri / Tirumala'],
        dealTag: 'Cheapest',
        rating: 4.6,
        bookingUrl: 'https://www.apsrtconline.in'
      }
    ]
  }
];

export function getPriceComparisonsForDestination(destinationId: string, destinationName: string): PriceComparisonItem[] {
  const matching = samplePriceComparisons.filter(
    (c) => c.destinationId.toLowerCase() === destinationId.toLowerCase()
  );

  if (matching.length > 0) return matching;

  // Generate dynamic comparison items for custom destinations
  return [
    {
      id: `comp-custom-stay-${destinationId}`,
      title: `${destinationName} Boutique Heritage & City Center Stays`,
      category: 'stay',
      destinationId,
      description: `Compare prices across top verified booking platforms for verified 4-star and boutique hotels in ${destinationName}.`,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      rating: 4.8,
      reviewsCount: 840,
      bestDealProvider: 'Booking.com',
      savingsUSD: 38,
      offers: [
        {
          providerName: 'Booking.com',
          priceUSD: 115,
          originalPriceUSD: 153,
          perks: ['Free Cancellation before 48h', 'No Upfront Booking Deposit', 'Price Match Guarantee'],
          dealTag: 'Best Value',
          rating: 4.8,
          bookingUrl: 'https://www.booking.com'
        },
        {
          providerName: 'Agoda',
          priceUSD: 122,
          originalPriceUSD: 155,
          perks: ['Instant Confirmation', 'Agoda Member Discount'],
          dealTag: 'Cheapest',
          rating: 4.7,
          bookingUrl: 'https://www.agoda.com'
        },
        {
          providerName: 'Expedia',
          priceUSD: 135,
          originalPriceUSD: 160,
          perks: ['Member Reward Points', 'Package Bundle Savings'],
          rating: 4.6,
          bookingUrl: 'https://www.expedia.com'
        }
      ]
    },
    {
      id: `comp-custom-flight-${destinationId}`,
      title: `Roundtrip Airfare & Transit to ${destinationName}`,
      category: 'flight',
      destinationId,
      description: `Compare scheduled flights, baggage rules, and airfare trends for ${destinationName}.`,
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80',
      rating: 4.7,
      reviewsCount: 1200,
      bestDealProvider: 'Google Flights',
      savingsUSD: 55,
      offers: [
        {
          providerName: 'Google Flights',
          priceUSD: 340,
          originalPriceUSD: 395,
          perks: ['Real-time Price History Chart', 'Direct Airline Checkout', 'No Extra Booking Fees'],
          dealTag: 'Best Value',
          bookingUrl: 'https://www.google.com/travel/flights'
        },
        {
          providerName: 'Skyscanner',
          priceUSD: 348,
          originalPriceUSD: 400,
          perks: ['Compare 1,200+ Airlines & OTAs', 'Cheapest Month Explorer'],
          dealTag: 'Cheapest',
          rating: 4.7,
          bookingUrl: 'https://www.skyscanner.com'
        }
      ]
    },
    {
      id: `comp-custom-exp-${destinationId}`,
      title: `${destinationName} Historic Guided Walking & Cultural Tour`,
      category: 'experience',
      destinationId,
      description: `Top-rated immersive storytelling tour with certified local expert guides in ${destinationName}.`,
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80',
      rating: 4.9,
      reviewsCount: 650,
      bestDealProvider: 'GetYourGuide',
      savingsUSD: 12,
      offers: [
        {
          providerName: 'GetYourGuide',
          priceUSD: 28,
          originalPriceUSD: 40,
          perks: ['Free Cancellation up to 24h prior', 'Mobile Ticket Voucher', 'Small Group Guarantee'],
          dealTag: 'Best Value',
          rating: 4.9,
          bookingUrl: 'https://www.getyourguide.com'
        },
        {
          providerName: 'Viator',
          priceUSD: 34,
          originalPriceUSD: 42,
          perks: ['Tripadvisor Travelers Choice', 'Reserve Now & Pay Later'],
          rating: 4.8,
          bookingUrl: 'https://www.viator.com'
        }
      ]
    }
  ];
}
