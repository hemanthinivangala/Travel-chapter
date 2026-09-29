/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroLanding } from './components/HeroLanding';
import { DestinationOverview } from './components/DestinationOverview';
import { TouristSpotsSection } from './components/TouristSpotsSection';
import { CultureTraditionsSection } from './components/CultureTraditionsSection';
import { LanguageSection } from './components/LanguageSection';
import { LocalFoodSection } from './components/LocalFoodSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { MakeItYourChapter } from './components/MakeItYourChapter';
import { PersonalizedItinerary } from './components/PersonalizedItinerary';
import { AccommodationSection } from './components/AccommodationSection';
import { TourPackagesSection } from './components/TourPackagesSection';
import { BudgetPlanner } from './components/BudgetPlanner';
import { InteractiveMap } from './components/InteractiveMap';
import { SmartTravelAssistant } from './components/SmartTravelAssistant';
import { ImportantInfoSection } from './components/ImportantInfoSection';
import { MyTripView } from './components/MyTripView';
import { PriceComparisonSection } from './components/PriceComparisonSection';
import { BookingModal, BookingTargetItem } from './components/BookingModal';
import { FloatingChatbot } from './components/FloatingChatbot';
import { Footer } from './components/Footer';

import { Destination, UserPreferences, SavedTrip, Spot, Experience, MapPoint, TourPackage, ChapterStyle, AccommodationItem, ConfirmedBooking } from './types/travel';
import { mumbaiDestination } from './data/destinations/mumbai';
import { allDestinations, findDestinationById } from './data/destinations';
import { generatePersonalizedItinerary } from './utils/itineraryGenerator';

export default function App() {
  const [currentDestination, setCurrentDestination] = useState<Destination>(mumbaiDestination);
  const [activeTab, setActiveTab] = useState<string>('explore');
  const [selectedSpotCoords, setSelectedSpotCoords] = useState<[number, number] | null>(null);

  // User preferences
  const [preferences, setPreferences] = useState<UserPreferences>({
    destinationId: mumbaiDestination.id,
    days: 3,
    season: 'Winter',
    budget: 'Moderate',
    groupType: 'Solo',
    interests: ['Culture', 'Food', 'History', 'Local experiences', 'Nature'],
    accommodation: 'Hotel',
    transportation: 'Mixed',
    travelStyle: 'A cultural chapter',
  });

  // Local storage for Favorites and Saved Trips
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('travel_chapter_favorites');
      return saved ? JSON.parse(saved) : ['gateway-of-india', 'marine-drive'];
    } catch {
      return ['gateway-of-india', 'marine-drive'];
    }
  });

  const [savedTrips, setSavedTrips] = useState<SavedTrip[]>(() => {
    try {
      const saved = localStorage.getItem('travel_chapter_saved_trips');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [confirmedBookings, setConfirmedBookings] = useState<ConfirmedBooking[]>(() => {
    try {
      const saved = localStorage.getItem('travel_chapter_confirmed_bookings');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [targetBookingItem, setTargetBookingItem] = useState<BookingTargetItem | null>(null);

  // Generated day-by-day Itinerary
  const [itinerary, setItinerary] = useState(() => {
    return generatePersonalizedItinerary(mumbaiDestination, {
      destinationId: mumbaiDestination.id,
      days: 3,
      season: 'Winter',
      budget: 'Moderate',
      groupType: 'Solo',
      interests: ['Culture', 'Food', 'History'],
      accommodation: 'Hotel',
      transportation: 'Mixed',
      travelStyle: 'A cultural chapter',
    });
  });

  // Save favorites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('travel_chapter_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  // Save trips to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('travel_chapter_saved_trips', JSON.stringify(savedTrips));
    } catch (e) {
      console.error(e);
    }
  }, [savedTrips]);

  // Save confirmed bookings to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('travel_chapter_confirmed_bookings', JSON.stringify(confirmedBookings));
    } catch (e) {
      console.error(e);
    }
  }, [confirmedBookings]);

  const handleInitiateBooking = (item: BookingTargetItem) => {
    setTargetBookingItem(item);
    setIsBookingModalOpen(true);
  };

  const handleBookAccommodation = (stay: AccommodationItem) => {
    const matchUSD = stay.priceRange.match(/\$(\d+)/);
    const parsedPrice = matchUSD ? Number(matchUSD[1]) : 120;

    handleInitiateBooking({
      id: stay.id,
      title: stay.name,
      type: 'accommodation',
      location: stay.location,
      priceUSD: parsedPrice,
      originalPriceUSD: Math.round(parsedPrice * 1.2),
      perks: stay.facilities.slice(0, 3),
      image: stay.image,
    });
  };

  const handleBookSpot = (spot: Spot) => {
    const matchDigits = spot.approxCost.match(/(\d+)/);
    const parsedPrice = matchDigits ? Math.max(4, Number(matchDigits[1])) : 15;

    handleInitiateBooking({
      id: `spot-${spot.id}`,
      title: `${spot.name} Entry & Darshan Pass`,
      type: 'experience',
      location: spot.location,
      priceUSD: parsedPrice,
      originalPriceUSD: Math.round(parsedPrice * 1.3),
      perks: ['Instant digital voucher', 'Priority admission pass', 'Official reservation code'],
      image: spot.image,
    });
  };

  const handleBookExperience = (exp: Experience) => {
    const matchDigits = exp.cost.match(/(\d+)/);
    const parsedPrice = matchDigits ? Math.max(10, Number(matchDigits[1])) : 28;

    handleInitiateBooking({
      id: `exp-${exp.id}`,
      title: exp.title,
      type: 'experience',
      location: currentDestination.name,
      priceUSD: parsedPrice,
      originalPriceUSD: Math.round(parsedPrice * 1.25),
      perks: [exp.highlight || 'Expert local guide', 'Instant confirmation pass', 'Mobile voucher accepted'],
      image: exp.image,
    });
  };

  const handleConfirmBooking = (booking: ConfirmedBooking) => {
    setConfirmedBookings((prev) => [booking, ...prev]);
  };

  const handleCancelBooking = (id: string) => {
    setConfirmedBookings((prev) => prev.filter((b) => b.id !== id));
  };

  // Recalculate itinerary on destination or preference change
  const handleUpdatePreferences = (newPrefs: Partial<UserPreferences>) => {
    const updated = { ...preferences, ...newPrefs };
    setPreferences(updated);
    setItinerary(generatePersonalizedItinerary(currentDestination, updated));
  };

  const handleSelectDestination = (dest: Destination) => {
    setCurrentDestination(dest);
    const updated: UserPreferences = {
      ...preferences,
      destinationId: dest.id,
    };
    setPreferences(updated);
    setItinerary(generatePersonalizedItinerary(dest, updated));
  };

  const handleCreateChapter = () => {
    const newItinerary = generatePersonalizedItinerary(currentDestination, preferences);
    setItinerary(newItinerary);

    // Scroll smoothly down to the itinerary or destination section
    const elem = document.getElementById('itinerary-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActiveTab('itinerary');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleToggleFavorite = (spotId: string) => {
    setFavorites((prev) =>
      prev.includes(spotId) ? prev.filter((id) => id !== spotId) : [...prev, spotId]
    );
  };

  const handleAddSpotToItinerary = (spot: Spot) => {
    // Inject spot into Day 1 or Day 2 morning
    setItinerary((prev) => {
      if (prev.length === 0) return prev;
      const copy = [...prev];
      copy[0] = {
        ...copy[0],
        morning: {
          ...copy[0].morning,
          title: `Visit: ${spot.name}`,
          description: spot.description,
          cost: spot.approxCost,
          highlight: spot.whyWorthVisiting,
          location: spot.location,
        },
      };
      return copy;
    });
  };

  const handleAddPointToItinerary = (point: MapPoint) => {
    setItinerary((prev) => {
      if (prev.length === 0) return prev;
      const copy = [...prev];
      copy[0] = {
        ...copy[0],
        afternoon: {
          ...copy[0].afternoon,
          title: `Explore: ${point.title}`,
          description: point.description,
          cost: point.cost || 'Nominal',
        },
      };
      return copy;
    });
  };

  const handleAddExperience = (exp: Experience) => {
    setItinerary((prev) => {
      if (prev.length === 0) return prev;
      const copy = [...prev];
      copy[0] = {
        ...copy[0],
        afternoon: {
          ...copy[0].afternoon,
          title: exp.title,
          description: exp.description,
          cost: exp.cost,
          highlight: exp.highlight,
        },
      };
      return copy;
    });
  };

  const handleSelectPackage = (pkg: TourPackage) => {
    const updated: UserPreferences = {
      ...preferences,
      days: pkg.durationDays,
    };
    setPreferences(updated);
    setItinerary(generatePersonalizedItinerary(currentDestination, updated));
    const elem = document.getElementById('itinerary-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyStyleToItinerary = (style: ChapterStyle) => {
    handleUpdatePreferences({ travelStyle: style });
    const elem = document.getElementById('itinerary-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewSpotOnMap = (spot: Spot) => {
    setSelectedSpotCoords([spot.lat, spot.lng]);
    const mapElem = document.getElementById('map-section');
    if (mapElem) {
      mapElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSaveTrip = () => {
    const newTrip: SavedTrip = {
      id: `trip-${Date.now()}`,
      savedAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      destinationName: currentDestination.name,
      destinationId: currentDestination.id,
      durationDays: preferences.days,
      chapterStyle: preferences.travelStyle,
      budget: preferences.budget,
      itinerary,
      notes: `${preferences.groupType} trip focused on ${preferences.interests.slice(0, 3).join(', ')}`,
      favoriteSpots: favorites,
    };

    setSavedTrips((prev) => [newTrip, ...prev]);
  };

  const handleSelectTrip = (trip: SavedTrip) => {
    const dest = findDestinationById(trip.destinationId);
    setCurrentDestination(dest);
    setPreferences({
      ...preferences,
      destinationId: trip.destinationId,
      days: trip.durationDays,
      budget: trip.budget,
      travelStyle: trip.chapterStyle,
    });
    setItinerary(trip.itinerary);
    setActiveTab('itinerary');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteTrip = (id: string) => {
    setSavedTrips((prev) => prev.filter((t) => t.id !== id));
  };

  const handleRemoveFavorite = (spotId: string) => {
    setFavorites((prev) => prev.filter((id) => id !== spotId));
  };

  // Asynchronously request AI regeneration if server is available
  const handleRegenerateItinerary = async () => {
    try {
      const res = await fetch('/api/generate-itinerary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          destination: { name: currentDestination.name },
          days: preferences.days,
          budget: preferences.budget,
          interests: preferences.interests,
          groupType: preferences.groupType,
          travelStyle: preferences.travelStyle,
          accommodation: preferences.accommodation,
          transport: preferences.transportation,
        }),
      });
      const data = await res.json();
      if (data.itinerary && Array.isArray(data.itinerary) && data.itinerary.length > 0) {
        setItinerary(data.itinerary);
        return;
      }
    } catch (e) {
      console.log('Using local generator fallback');
    }

    // Fallback local generator with slight randomized time shifts for freshness
    setItinerary(generatePersonalizedItinerary(currentDestination, preferences));
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col selection:bg-amber-400 selection:text-stone-950 font-sans antialiased">
      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        favoritesCount={favorites.length}
        savedTripsCount={savedTrips.length}
        bookingsCount={confirmedBookings.length}
        currentDestination={currentDestination}
        onSelectDestination={handleSelectDestination}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {activeTab === 'mytrip' ? (
          <MyTripView
            savedTrips={savedTrips}
            favorites={favorites}
            destinations={allDestinations}
            confirmedBookings={confirmedBookings}
            onSelectTrip={handleSelectTrip}
            onDeleteTrip={handleDeleteTrip}
            onRemoveFavorite={handleRemoveFavorite}
            onCancelBooking={handleCancelBooking}
            onStartNewPlan={() => {
              setActiveTab('explore');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : activeTab === 'compare' ? (
          <div className="pt-6">
            <PriceComparisonSection
              destination={currentDestination}
              onInitiateBooking={handleInitiateBooking}
            />
          </div>
        ) : activeTab === 'assistant' ? (
          <div className="pt-6">
            <SmartTravelAssistant
              destination={currentDestination}
              preferences={preferences}
            />
          </div>
        ) : activeTab === 'packages' ? (
          <div className="pt-6">
            <TourPackagesSection
              destination={currentDestination}
              onSelectPackage={handleSelectPackage}
            />
          </div>
        ) : activeTab === 'experiences' ? (
          <div className="pt-6">
            <ExperiencesSection
              destination={currentDestination}
              onAddExperience={handleAddExperience}
              onBookExperience={handleBookExperience}
            />
          </div>
        ) : activeTab === 'destination' ? (
          <div>
            <DestinationOverview
              destination={currentDestination}
              onExploreSpots={() => {
                const elem = document.getElementById('spots-section');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
            />
            <TouristSpotsSection
              destination={currentDestination}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
              onAddToItinerary={handleAddSpotToItinerary}
              onViewOnMap={handleViewSpotOnMap}
              onBookTicket={handleBookSpot}
            />
            <CultureTraditionsSection destination={currentDestination} />
            <LanguageSection destination={currentDestination} />
            <LocalFoodSection destination={currentDestination} />
            <ExperiencesSection
              destination={currentDestination}
              onAddExperience={handleAddExperience}
              onBookExperience={handleBookExperience}
            />
          </div>
        ) : activeTab === 'itinerary' ? (
          <div className="pt-6">
            <MakeItYourChapter
              destination={currentDestination}
              selectedStyle={preferences.travelStyle}
              onSelectStyle={(s) => handleUpdatePreferences({ travelStyle: s })}
              onApplyStyleToItinerary={handleApplyStyleToItinerary}
            />
            <PersonalizedItinerary
              destination={currentDestination}
              preferences={preferences}
              itinerary={itinerary}
              onRegenerateItinerary={handleRegenerateItinerary}
              onSaveTrip={handleSaveTrip}
            />
            <BudgetPlanner
              destination={currentDestination}
              preferences={preferences}
              onUpdatePreferences={handleUpdatePreferences}
            />
            <InteractiveMap
              destination={currentDestination}
              onAddPointToItinerary={handleAddPointToItinerary}
              selectedSpotCoords={selectedSpotCoords}
            />
          </div>
        ) : (
          /* Comprehensive Explore Flow: Landing -> Overview -> Spots -> Culture -> Languages -> Food -> Experiences -> Make It Your Chapter -> Personalized Itinerary -> Stays -> Packages -> Budget -> Map -> Assistant -> Info */
          <div>
            {/* 1. Hero Landing with Multi-Selector */}
            <HeroLanding
              currentDestination={currentDestination}
              onSelectDestination={handleSelectDestination}
              preferences={preferences}
              onUpdatePreferences={handleUpdatePreferences}
              onCreateChapter={handleCreateChapter}
            />

            {/* 2. Destination Introduction */}
            <DestinationOverview
              destination={currentDestination}
              onExploreSpots={() => {
                const elem = document.getElementById('spots-section');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* 3. Tourist Spots & Hidden Gems */}
            <TouristSpotsSection
              destination={currentDestination}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
              onAddToItinerary={handleAddSpotToItinerary}
              onViewOnMap={handleViewSpotOnMap}
              onBookTicket={handleBookSpot}
            />

            {/* 4. Local Culture & Traditions */}
            <CultureTraditionsSection destination={currentDestination} />

            {/* 5. Languages & Pronunciation */}
            <LanguageSection destination={currentDestination} />

            {/* 6. Local Food & Signature Flavors */}
            <LocalFoodSection destination={currentDestination} />

            {/* 7. Curated Experiences */}
            <ExperiencesSection
              destination={currentDestination}
              onAddExperience={handleAddExperience}
              onBookExperience={handleBookExperience}
            />

            {/* 8. Make It Your Chapter (Theme Selector) */}
            <MakeItYourChapter
              destination={currentDestination}
              selectedStyle={preferences.travelStyle}
              onSelectStyle={(s) => handleUpdatePreferences({ travelStyle: s })}
              onApplyStyleToItinerary={handleApplyStyleToItinerary}
            />

            {/* 9. Personalized Day-by-Day Itinerary */}
            <PersonalizedItinerary
              destination={currentDestination}
              preferences={preferences}
              itinerary={itinerary}
              onRegenerateItinerary={handleRegenerateItinerary}
              onSaveTrip={handleSaveTrip}
            />

            {/* 10. Curated Accommodations */}
            <AccommodationSection
              destination={currentDestination}
              onBookStay={handleBookAccommodation}
              onComparePrices={() => {
                setActiveTab('compare');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 11. Multi-Provider Price Comparison Engine */}
            <PriceComparisonSection
              destination={currentDestination}
              onInitiateBooking={handleInitiateBooking}
            />

            {/* 12. Customizable Tour Packages */}
            <TourPackagesSection
              destination={currentDestination}
              onSelectPackage={handleSelectPackage}
            />

            {/* 13. Trip Budget Planner */}
            <BudgetPlanner
              destination={currentDestination}
              preferences={preferences}
              onUpdatePreferences={handleUpdatePreferences}
            />

            {/* 14. Interactive Map */}
            <InteractiveMap
              destination={currentDestination}
              onAddPointToItinerary={handleAddPointToItinerary}
              selectedSpotCoords={selectedSpotCoords}
            />

            {/* 15. AI Smart Travel Assistant */}
            <SmartTravelAssistant
              destination={currentDestination}
              preferences={preferences}
            />

            {/* 16. Important Information & Safety */}
            <ImportantInfoSection destination={currentDestination} />
          </div>
        )}
      </main>

      {/* Direct Booking & Ticketing Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        item={targetBookingItem}
        destination={currentDestination}
        onConfirmBooking={handleConfirmBooking}
      />

      {/* Floating Personalized AI Chatbot Assistant */}
      <FloatingChatbot
        destination={currentDestination}
        preferences={preferences}
      />

      {/* Editorial Footer */}
      <Footer
        onSelectDestination={handleSelectDestination}
        onNavigateTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
