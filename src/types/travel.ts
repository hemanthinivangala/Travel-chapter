export type GroupType = 'Solo' | 'Couple' | 'Family' | 'Friends';
export type BudgetLevel = 'Budget' | 'Moderate' | 'Premium' | 'Luxury';
export type AccommodationType = 'Hotel' | 'Hostel' | 'Resort' | 'Homestay' | 'Guesthouse' | 'Luxury stay';
export type TransportType = 'Public transport' | 'Taxi' | 'Rental vehicle' | 'Walking' | 'Mixed';

export type InterestType =
  | 'History'
  | 'Culture'
  | 'Nature'
  | 'Adventure'
  | 'Food'
  | 'Shopping'
  | 'Beaches'
  | 'Mountains'
  | 'Spirituality'
  | 'Architecture'
  | 'Photography'
  | 'Nightlife'
  | 'Relaxation'
  | 'Local experiences';

export interface UserPreferences {
  destinationId: string;
  customDestinationName?: string;
  days: number;
  season: 'Spring' | 'Summer' | 'Autumn' | 'Winter' | 'Monsoon' | 'Year-round';
  budget: BudgetLevel;
  groupType: GroupType;
  interests: InterestType[];
  accommodation: AccommodationType;
  transportation: TransportType;
  travelStyle: ChapterStyle;
}

export type ChapterStyle =
  | 'A peaceful chapter'
  | 'An adventurous chapter'
  | 'A cultural chapter'
  | 'A food-filled chapter'
  | 'A romantic chapter'
  | 'A family chapter'
  | 'A chapter of discovery';

export interface Spot {
  id: string;
  name: string;
  category: 'Nature' | 'History' | 'Culture' | 'Adventure' | 'Food' | 'Shopping' | 'Family' | 'Photography' | 'Architecture' | 'Mountains';
  isLesserKnown: boolean;
  image: string;
  description: string;
  location: string;
  estimatedDuration: string;
  approxCost: string;
  openingHours: string;
  distanceFromStay: string;
  whyWorthVisiting: string;
  lat: number;
  lng: number;
}

export interface Festival {
  name: string;
  timing: string;
  description: string;
}

export interface UsefulPhrase {
  category: 'greeting' | 'thank_you' | 'please' | 'help' | 'directions' | 'food';
  phrase: string;
  translation: string;
  pronunciation: string;
  audioLanguage?: string;
}

export interface FoodDish {
  id: string;
  name: string;
  category: 'Vegetarian' | 'Non-Vegetarian' | 'Street Food' | 'Dessert' | 'Drink';
  description: string;
  image: string;
  whereToTry: string;
  approxPrice: string;
}

export interface Experience {
  id: string;
  title: string;
  type: 'cooking' | 'cultural' | 'nature' | 'adventure' | 'walking' | 'photography' | 'market' | 'performance' | 'relaxation';
  description: string;
  duration: string;
  cost: string;
  image: string;
  highlight: string;
  lat?: number;
  lng?: number;
}

export interface AccommodationItem {
  id: string;
  name: string;
  type: AccommodationType;
  priceRange: string;
  location: string;
  facilities: string[];
  rating: number;
  reviewsCount: number;
  distanceFromMajorAttractions: string;
  suitableFor: string[];
  image: string;
}

export interface TourPackage {
  id: string;
  name: string;
  durationDays: number;
  tagline: string;
  includedExperiences: string[];
  accommodationCategory: string;
  transportation: string;
  estimatedBudget: number; // in USD
  activities: string[];
  customizableOptions: string[];
}

export interface ItineraryItem {
  time: string;
  title: string;
  description: string;
  cost: string;
  highlight: string;
  location?: string;
  category?: string;
}

export interface ItineraryDay {
  day: number;
  theme: string;
  morning: ItineraryItem;
  afternoon: ItineraryItem;
  evening: ItineraryItem;
  localFoodTip: string;
  culturalNote: string;
}

export interface MapPoint {
  id: string;
  title: string;
  category: 'attraction' | 'food' | 'accommodation' | 'experience' | 'transit';
  lat: number;
  lng: number;
  description: string;
  cost?: string;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  region: string;
  tagline: string;
  heroImage: string;
  gallery: string[];
  coordinates: [number, number];
  
  // Section 1: Intro
  intro: {
    whereItIs: string;
    whyPeopleVisit: string;
    bestTimeToVisit: string;
    generalAtmosphere: string;
    approxCostLevel: string;
    recommendedDuration: string;
  };

  // Section 2: Spots
  touristSpots: Spot[];

  // Section 3: Culture & Traditions
  culture: {
    traditions: string[];
    festivals: Festival[];
    customs: string[];
    socialEtiquette: string[];
    dressConsiderations: string;
    thingsVisitorsShouldRespect: string[];
    culturalFacts: string[];
  };

  // Section 4: Languages
  languages: {
    officialLanguages: string[];
    commonlySpoken: string[];
    usefulPhrases: UsefulPhrase[];
  };

  // Section 5: Local Food
  food: {
    dishes: FoodDish[];
    recommendedExperiences: string[];
  };

  // Section 6: Experiences
  experiences: Experience[];

  // Make It Your Chapter
  chapterStyles: Record<
    ChapterStyle,
    {
      subtitle: string;
      quote: string;
      highlights: string[];
      sampleDay: string;
    }
  >;

  // Accommodations
  accommodations: AccommodationItem[];

  // Tour Packages
  packages: TourPackage[];

  // Budget Planner daily baseline
  budgetBreakdown: {
    currencySymbol: string;
    currencyCode: string;
    exchangeRateToUSD: number;
    dailyCosts: {
      Budget: { stay: number; food: number; transport: number; attractions: number; activities: number; misc: number };
      Moderate: { stay: number; food: number; transport: number; attractions: number; activities: number; misc: number };
      Premium: { stay: number; food: number; transport: number; attractions: number; activities: number; misc: number };
      Luxury: { stay: number; food: number; transport: number; attractions: number; activities: number; misc: number };
    };
  };

  // Important Info
  importantInfo: {
    transportation: {
      overview: string;
      options: Array<{ name: string; desc: string; tip: string }>;
    };
    weather: {
      currentOverview: string;
      seasons: Array<{ name: string; months: string; temp: string; note: string }>;
    };
    currency: {
      name: string;
      symbol: string;
      code: string;
      cardAcceptance: string;
      tippingCulture: string;
    };
    timeZone: string;
    emergency: {
      police: string;
      ambulance: string;
      touristHelpline: string;
    };
    safetyTips: string[];
    localEtiquette: string[];
    travelTips: string[];
  };

  // Interactive Map Points
  mapPoints: MapPoint[];
}

export interface SavedTrip {
  id: string;
  savedAt: string;
  destinationName: string;
  destinationId: string;
  durationDays: number;
  chapterStyle: ChapterStyle;
  budget: BudgetLevel;
  itinerary: ItineraryDay[];
  notes: string;
  favoriteSpots: string[];
}

export interface ProviderOffer {
  providerName:
    | 'Official Hotel Direct'
    | 'Booking.com'
    | 'Agoda'
    | 'Expedia'
    | 'Airbnb'
    | 'Airline Direct'
    | 'Skyscanner'
    | 'Google Flights'
    | 'Viator'
    | 'GetYourGuide'
    | 'Klook'
    | 'MakeMyTrip Direct'
    | 'TTD Devasthanams Official Direct'
    | 'TTD Pilgrim Cottages (Srinivasam / Madhavam)'
    | 'IRCTC Balaji Darshan Package'
    | 'AP Tourism (APTDC) Daily Tour'
    | 'Vande Bharat Express (Secunderabad / Chennai)'
    | 'IndiGo / SpiceJet Flights to TIR'
    | 'KSRTC / APSRTC Amaravathi Electric AC'
    | string;
  priceUSD: number;
  originalPriceUSD?: number;
  perks: string[];
  dealTag?: 'Best Value' | 'Cheapest' | 'Fastest' | 'Free Breakfast' | 'Free Cancellation' | 'Price Match' | string;
  rating?: number;
  bookingUrl?: string;
}

export interface PriceComparisonItem {
  id: string;
  title: string;
  category: 'stay' | 'flight' | 'train' | 'experience' | 'transport';
  destinationId: string;
  description: string;
  image: string;
  rating: number;
  reviewsCount: number;
  offers: ProviderOffer[];
  bestDealProvider: string;
  savingsUSD: number;
}

export interface ConfirmedBooking {
  id: string;
  bookingReference: string;
  pnrCode?: string;
  type: 'accommodation' | 'transport' | 'experience' | 'package';
  title: string;
  destinationName: string;
  destinationId: string;
  dates: string;
  guestsCount: number;
  travelerName: string;
  travelerEmail: string;
  travelerPhone: string;
  totalPriceUSD: number;
  paymentMethod: 'Credit / Debit Card' | 'Pay at Property' | 'Apple Pay' | 'UPI Instant';
  paymentStatus: 'Confirmed & Guaranteed' | 'Pay at Arrival';
  bookedAt: string;
  perks: string[];
  roomOrSeatClass?: string;
}

