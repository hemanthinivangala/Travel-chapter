import React, { useState } from 'react';
import {
  Bookmark,
  Heart,
  Calendar,
  Trash2,
  Printer,
  Compass,
  ArrowRight,
  BookOpen,
  MapPin,
  Clock,
  Sparkles,
  Edit3
} from 'lucide-react';
import { SavedTrip, Destination, Spot, ConfirmedBooking } from '../types/travel';
import { Ticket, QrCode } from 'lucide-react';

interface MyTripViewProps {
  savedTrips: SavedTrip[];
  favorites: string[];
  destinations: Destination[];
  confirmedBookings?: ConfirmedBooking[];
  onSelectTrip: (trip: SavedTrip) => void;
  onDeleteTrip: (id: string) => void;
  onRemoveFavorite: (spotId: string) => void;
  onCancelBooking?: (id: string) => void;
  onStartNewPlan: () => void;
}

export const MyTripView: React.FC<MyTripViewProps> = ({
  savedTrips,
  favorites,
  destinations,
  confirmedBookings = [],
  onSelectTrip,
  onDeleteTrip,
  onRemoveFavorite,
  onCancelBooking,
  onStartNewPlan,
}) => {
  const [activeTab, setActiveTab] = useState<'itineraries' | 'bookings' | 'favorites' | 'journal'>('itineraries');
  const [journalNotes, setJournalNotes] = useState<string>(() => {
    return localStorage.getItem('travel_chapter_personal_journal') || '';
  });
  const [journalSaved, setJournalSaved] = useState(false);

  // Collect favorited spots objects across destinations
  const allSpots: Spot[] = [];
  destinations.forEach((d) => {
    if (d.touristSpots) {
      allSpots.push(...d.touristSpots);
    }
  });
  const favoritedSpots = allSpots.filter((s) => favorites.includes(s.id));

  const handleSaveJournal = () => {
    localStorage.setItem('travel_chapter_personal_journal', journalNotes);
    setJournalSaved(true);
    setTimeout(() => setJournalSaved(false), 2500);
  };

  return (
    <div className="py-16 bg-stone-950 text-stone-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
            <Bookmark className="w-4 h-4" />
            <span>My Travel Chapters & Saved Journeys</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Your Life Travel Journal
          </h1>
          <p className="text-base text-stone-400 mt-2 font-light">
            “Don’t just visit a place. Create a chapter worth remembering.”
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4 mb-8 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('itineraries')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'itineraries'
                ? 'bg-amber-400 text-stone-950 font-bold shadow-sm'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Saved Chapters ({savedTrips.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'bookings'
                ? 'bg-amber-400 text-stone-950 font-bold shadow-sm'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            <Ticket className="w-3.5 h-3.5 text-amber-400" />
            <span>Confirmed Bookings & Tickets ({confirmedBookings.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('favorites')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'favorites'
                ? 'bg-amber-400 text-stone-950 font-bold shadow-sm'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            <Heart className="w-3.5 h-3.5 text-rose-400" />
            <span>Favorited Spots ({favorites.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('journal')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'journal'
                ? 'bg-amber-400 text-stone-950 font-bold shadow-sm'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Personal Travel Reflections</span>
          </button>
        </div>

        {/* Tab: Confirmed Bookings */}
        {activeTab === 'bookings' && (
          <div>
            {confirmedBookings.length === 0 ? (
              <div className="text-center py-20 bg-stone-900/60 rounded-3xl border border-stone-800 p-8 max-w-xl mx-auto">
                <Ticket className="w-12 h-12 text-amber-400 mx-auto mb-4 stroke-[1.5]" />
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  No Active Bookings Yet
                </h3>
                <p className="text-sm text-stone-400 mb-6 leading-relaxed">
                  You haven't reserved any accommodations, transport tickets, or experiences yet. Browse our curated stays or multi-provider price comparison engine and click <strong>“Book”</strong> to confirm your reservation and receive an instant official ticket voucher.
                </p>
                <button
                  onClick={onStartNewPlan}
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-amber-500/20"
                >
                  Explore Stays & Deals
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {confirmedBookings.map((b) => (
                  <div
                    key={b.id}
                    className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-stone-700 transition-all shadow-xl"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold uppercase tracking-wider border border-amber-500/30">
                          {b.type}
                        </span>
                        <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                          {b.paymentStatus}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                        {b.title}
                      </h3>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-stone-300 pt-2">
                        <div>
                          <span className="text-stone-500 block">Booking Reference</span>
                          <span className="font-mono font-bold text-amber-300">{b.bookingReference}</span>
                        </div>
                        <div>
                          <span className="text-stone-500 block">Lead Traveler</span>
                          <span className="font-medium text-white">{b.travelerName}</span>
                        </div>
                        <div>
                          <span className="text-stone-500 block">Tier / Room Class</span>
                          <span className="font-medium text-white">{b.roomOrSeatClass}</span>
                        </div>
                        <div>
                          <span className="text-stone-500 block">Total Charged</span>
                          <span className="font-bold text-white">${b.totalPriceUSD} USD</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center gap-2.5 shrink-0">
                      <button
                        onClick={() => window.print()}
                        className="w-full py-2.5 px-4 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 border border-stone-700"
                      >
                        <Printer className="w-3.5 h-3.5 text-amber-400" />
                        <span>Print Ticket Voucher</span>
                      </button>

                      {onCancelBooking && (
                        <button
                          onClick={() => onCancelBooking(b.id)}
                          className="w-full py-2 px-3 text-stone-500 hover:text-rose-400 text-xs transition-colors"
                        >
                          Cancel Reservation
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 1: Itineraries */}
        {activeTab === 'itineraries' && (
          <div>
            {savedTrips.length === 0 ? (
              <div className="text-center py-20 bg-stone-900/60 rounded-3xl border border-stone-800 p-8 max-w-xl mx-auto">
                <Compass className="w-12 h-12 text-amber-400 mx-auto mb-4 stroke-[1.5]" />
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  No Saved Chapters Yet
                </h3>
                <p className="text-sm text-stone-400 mb-6 leading-relaxed">
                  Explore any destination, configure your travel preferences, and click <strong>“Save My Trip”</strong> on your personalized itinerary to save it here for offline access and printing.
                </p>
                <button
                  onClick={onStartNewPlan}
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-amber-500/20"
                >
                  Create Your First Chapter
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedTrips.map((trip) => (
                  <div
                    key={trip.id}
                    className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-stone-700 transition-all shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                          {trip.destinationName}
                        </span>
                        <span className="text-[11px] text-stone-500">{trip.savedAt}</span>
                      </div>

                      <h3 className="font-serif text-xl font-bold text-white mb-2">
                        {trip.durationDays}-Day {trip.chapterStyle}
                      </h3>

                      <div className="space-y-1.5 text-xs text-stone-300 mb-4 bg-stone-950/70 p-3 rounded-xl border border-stone-800">
                        <div>Tier: <strong className="text-white">{trip.budget}</strong></div>
                        <div>Days Generated: <strong className="text-white">{trip.itinerary.length} Days</strong></div>
                      </div>

                      {trip.notes && (
                        <p className="text-xs text-stone-400 italic mb-4">
                          Note: “{trip.notes}”
                        </p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-stone-800 flex items-center justify-between gap-2">
                      <button
                        onClick={() => onSelectTrip(trip)}
                        className="flex-1 py-2 px-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5"
                      >
                        <span>Open Itinerary</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => onDeleteTrip(trip.id)}
                        className="p-2.5 rounded-xl bg-stone-800 hover:bg-rose-500/20 hover:text-rose-400 text-stone-400 transition-colors"
                        title="Delete saved trip"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Favorites */}
        {activeTab === 'favorites' && (
          <div>
            {favoritedSpots.length === 0 ? (
              <div className="text-center py-16 bg-stone-900/60 rounded-3xl border border-stone-800 max-w-lg mx-auto p-6">
                <Heart className="w-10 h-10 text-stone-600 mx-auto mb-3" />
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  No Favorites Saved
                </h3>
                <p className="text-xs text-stone-400">
                  Tap the heart icon on any tourist spot or hidden sanctuary across destinations to bookmark them here.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoritedSpots.map((spot) => (
                  <div
                    key={spot.id}
                    className="bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden hover:border-stone-700 transition-all flex flex-col justify-between"
                  >
                    <div className="relative h-48">
                      <img src={spot.image} alt={spot.name} className="w-full h-full object-cover" />
                      <button
                        onClick={() => onRemoveFavorite(spot.id)}
                        className="absolute top-3 right-3 p-2 rounded-full bg-stone-950/80 text-rose-400 hover:scale-110 transition-transform"
                        title="Remove from favorites"
                      >
                        <Heart className="w-4 h-4 fill-rose-500" />
                      </button>
                      <div className="absolute bottom-2 left-3">
                        <span className="text-[11px] font-semibold text-amber-300 bg-stone-950/80 px-2 py-0.5 rounded-full">
                          {spot.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-serif text-base font-bold text-white mb-1">
                          {spot.name}
                        </h4>
                        <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed mb-3">
                          {spot.description}
                        </p>
                      </div>
                      <div className="text-[11px] text-stone-400 border-t border-stone-800 pt-2 flex items-center justify-between">
                        <span>Duration: {spot.estimatedDuration}</span>
                        <span className="text-amber-300">{spot.approxCost}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Personal Travel Journal */}
        {activeTab === 'journal' && (
          <div className="max-w-3xl mx-auto bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white">
                  My Chapter Journal
                </h3>
                <p className="text-xs text-stone-400">
                  Record your hopes, packing thoughts, favorite quotes, or reflections from your travels.
                </p>
              </div>
            </div>

            <textarea
              rows={12}
              value={journalNotes}
              onChange={(e) => setJournalNotes(e.target.value)}
              placeholder="What makes this upcoming chapter meaningful to you? What feelings or encounters are you seeking? Write your thoughts freely here..."
              className="w-full bg-stone-950 border border-stone-800 rounded-2xl p-4 text-sm text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-amber-400 leading-relaxed font-sans"
            />

            <div className="flex items-center justify-between mt-4">
              <span className="text-xs text-stone-500">
                Stored safely in your browser’s local journal.
              </span>
              <button
                type="button"
                onClick={handleSaveJournal}
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl transition-all shadow-md shadow-amber-500/20"
              >
                {journalSaved ? 'Saved to Journal!' : 'Save Journal Entry'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
