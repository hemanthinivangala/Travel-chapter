import React, { useState } from 'react';
import {
  Clock,
  MapPin,
  DollarSign,
  Heart,
  Plus,
  Check,
  Sparkles,
  ExternalLink,
  Compass,
  Ticket
} from 'lucide-react';
import { Spot, Destination } from '../types/travel';

interface TouristSpotsSectionProps {
  destination: Destination;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onAddToItinerary?: (spot: Spot) => void;
  onViewOnMap?: (spot: Spot) => void;
  onBookTicket?: (spot: Spot) => void;
}

type CategoryFilter =
  | 'All'
  | 'Nature'
  | 'History'
  | 'Culture'
  | 'Adventure'
  | 'Food'
  | 'Shopping'
  | 'Family'
  | 'Photography'
  | 'Architecture'
  | 'Mountains';

const CATEGORIES: CategoryFilter[] = [
  'All',
  'History',
  'Culture',
  'Nature',
  'Adventure',
  'Architecture',
  'Mountains',
  'Food',
  'Shopping',
  'Family',
  'Photography',
];

export const TouristSpotsSection: React.FC<TouristSpotsSectionProps> = ({
  destination,
  favorites,
  onToggleFavorite,
  onAddToItinerary,
  onViewOnMap,
  onBookTicket,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [showOnlyHiddenGems, setShowOnlyHiddenGems] = useState(false);
  const [addedSpotIds, setAddedSpotIds] = useState<string[]>([]);

  const filteredSpots = destination.touristSpots.filter((spot) => {
    const matchesCategory =
      activeCategory === 'All' || spot.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesGems = !showOnlyHiddenGems || spot.isLesserKnown;
    return matchesCategory && matchesGems;
  });

  const handleAdd = (spot: Spot) => {
    if (onAddToItinerary) {
      onAddToItinerary(spot);
      setAddedSpotIds((prev) => [...prev, spot.id]);
      setTimeout(() => {
        setAddedSpotIds((prev) => prev.filter((id) => id !== spot.id));
      }, 2500);
    }
  };

  return (
    <section id="spots-section" className="py-16 bg-stone-950 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
              <Compass className="w-4 h-4" />
              <span>Chapter II · Must-See Icons & Hidden Sanctuaries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Tourist Spots & Uncharted Paths in {destination.name}
            </h2>
            <p className="text-sm text-stone-400 mt-2 max-w-2xl">
              Curated blend of legendary world-heritage monuments and quiet, atmospheric enclaves beloved by residents.
            </p>
          </div>

          {/* Hidden Gems Toggle */}
          <button
            type="button"
            onClick={() => setShowOnlyHiddenGems(!showOnlyHiddenGems)}
            className={`px-4 py-2 rounded-xl text-xs font-medium border flex items-center gap-2 transition-all ${
              showOnlyHiddenGems
                ? 'bg-amber-500 text-stone-950 border-amber-500 font-bold'
                : 'bg-stone-900 border-stone-800 text-stone-300 hover:border-stone-700'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Show Only Lesser-Known Hidden Gems</span>
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-amber-400 text-stone-950 font-bold shadow-sm'
                  : 'bg-stone-900 text-stone-300 hover:bg-stone-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Spot Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSpots.map((spot) => {
            const isFav = favorites.includes(spot.id);
            const isRecentlyAdded = addedSpotIds.includes(spot.id);

            return (
              <div
                key={spot.id}
                className="bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-xl hover:border-stone-700 transition-all flex flex-col group"
              >
                {/* Image & Badges */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={spot.image}
                    alt={spot.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>

                  {/* Category & Status */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-stone-950/80 backdrop-blur-md text-amber-300 text-xs font-semibold border border-stone-700/60">
                      {spot.category}
                    </span>
                    {spot.isLesserKnown && (
                      <span className="px-2.5 py-1 rounded-full bg-amber-500/90 text-stone-950 text-[11px] font-bold shadow-sm">
                        Hidden Gem
                      </span>
                    )}
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={() => onToggleFavorite(spot.id)}
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-stone-950/80 backdrop-blur-md text-stone-200 hover:text-rose-400 hover:scale-110 transition-all"
                    title={isFav ? 'Remove from favorites' : 'Save to favorites'}
                  >
                    <Heart
                      className={`w-4 h-4 ${isFav ? 'text-rose-500 fill-rose-500' : 'text-stone-300'}`}
                    />
                  </button>

                  {/* Location subtitle on image */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="flex items-center gap-1.5 text-xs text-stone-300 font-medium drop-shadow-sm">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{spot.location}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-2.5">
                      {spot.name}
                    </h3>
                    <p className="text-xs text-stone-300 line-clamp-3 leading-relaxed mb-4">
                      {spot.description}
                    </p>

                    {/* Why worth visiting quote card */}
                    <div className="p-3.5 rounded-2xl bg-stone-950/80 border border-stone-800/80 mb-5">
                      <div className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold mb-1">
                        Why It’s Worth Visiting
                      </div>
                      <p className="text-xs text-stone-300 italic">
                        “{spot.whyWorthVisiting}”
                      </p>
                    </div>

                    {/* Metadata Specs (Zero-pill clean discipline) */}
                    <div className="space-y-2 text-xs text-stone-400 border-t border-stone-800/80 pt-4 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-stone-400">
                          <Clock className="w-3.5 h-3.5 text-amber-400" />
                          <span>Visit Duration</span>
                        </span>
                        <span className="text-stone-200 font-medium">{spot.estimatedDuration}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-stone-400">
                          <DollarSign className="w-3.5 h-3.5 text-amber-400" />
                          <span>Approx. Cost</span>
                        </span>
                        <span className="text-stone-200 font-medium">{spot.approxCost}</span>
                      </div>

                      {spot.openingHours && (
                        <div className="flex items-center justify-between">
                          <span className="text-stone-400">Opening Hours</span>
                          <span className="text-stone-300">{spot.openingHours}</span>
                        </div>
                      )}

                      {spot.distanceFromStay && (
                        <div className="flex items-center justify-between">
                          <span className="text-stone-400">Distance from Stay</span>
                          <span className="text-stone-300">{spot.distanceFromStay}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-2">
                    {onAddToItinerary && (
                      <button
                        onClick={() => handleAdd(spot)}
                        className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                          isRecentlyAdded
                            ? 'bg-emerald-500 text-stone-950'
                            : 'bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-md shadow-amber-500/20'
                        }`}
                      >
                        {isRecentlyAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added to Itinerary!</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add to Itinerary</span>
                          </>
                        )}
                      </button>
                    )}

                    {onBookTicket && (
                      <button
                        type="button"
                        onClick={() => onBookTicket(spot)}
                        className="py-2.5 px-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-amber-300 transition-colors border border-stone-700 text-xs font-semibold flex items-center gap-1.5 shrink-0"
                        title="Book Official Entry / Darshan Pass"
                      >
                        <Ticket className="w-3.5 h-3.5 text-amber-400" />
                        <span className="hidden sm:inline">Book Pass</span>
                      </button>
                    )}

                    {onViewOnMap && (
                      <button
                        onClick={() => onViewOnMap(spot)}
                        className="p-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors border border-stone-700"
                        title="View on Interactive Map"
                      >
                        <MapPin className="w-4 h-4 text-amber-400" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredSpots.length === 0 && (
          <div className="text-center py-16 bg-stone-900/40 rounded-3xl border border-stone-800">
            <p className="text-stone-400 text-sm">No spots found in this category.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setShowOnlyHiddenGems(false);
              }}
              className="mt-3 text-xs text-amber-400 hover:underline font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
