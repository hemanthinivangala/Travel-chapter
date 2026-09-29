import React, { useState } from 'react';
import {
  Compass,
  ArrowRight,
  Sparkles,
  Check,
  Star,
  ExternalLink,
  ShieldCheck,
  Percent,
  SlidersHorizontal,
  Building,
  Plane,
  Ticket
} from 'lucide-react';
import { PriceComparisonItem, ProviderOffer, Destination } from '../types/travel';
import { getPriceComparisonsForDestination } from '../data/priceComparisons';
import { BookingTargetItem } from './BookingModal';

interface PriceComparisonSectionProps {
  destination: Destination;
  onInitiateBooking: (item: BookingTargetItem) => void;
}

type CategoryTab = 'all' | 'stay' | 'flight' | 'train' | 'experience';
type SortOption = 'best' | 'price-low' | 'savings';

export const PriceComparisonSection: React.FC<PriceComparisonSectionProps> = ({
  destination,
  onInitiateBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryTab>('all');
  const [sortBy, setSortBy] = useState<SortOption>('best');

  const comparisonItems = getPriceComparisonsForDestination(
    destination.id,
    destination.name
  );

  const filteredItems = comparisonItems.filter((item) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'flight' || activeCategory === 'train') {
      return item.category === 'flight' || item.category === 'train';
    }
    return item.category === activeCategory;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    const minPriceA = Math.min(...a.offers.map((o) => o.priceUSD));
    const minPriceB = Math.min(...b.offers.map((o) => o.priceUSD));

    if (sortBy === 'price-low') {
      return minPriceA - minPriceB;
    }
    if (sortBy === 'savings') {
      return b.savingsUSD - a.savingsUSD;
    }
    return b.rating - a.rating;
  });

  return (
    <section id="compare-section" className="py-16 bg-stone-900 text-stone-100 border-t border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
              <Percent className="w-4 h-4" />
              <span>Multi-Provider Price Comparison Engine</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Compare Real-Time Rates for {destination.name}
            </h2>
            <p className="text-sm text-stone-400 mt-2 max-w-2xl">
              Compare rates across Booking.com, Agoda, Expedia, Google Flights, Skyscanner, Viator, and Official Direct partners to lock in the lowest guaranteed price.
            </p>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-stone-400">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-amber-400"
            >
              <option value="best">Recommended & Best Value</option>
              <option value="price-low">Lowest Price First</option>
              <option value="savings">Highest Savings First</option>
            </select>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {[
            { id: 'all', label: 'All Comparisons' },
            { id: 'stay', label: '🏨 Stays & Hotels' },
            { id: 'flight', label: '✈️ Flights & Trains' },
            { id: 'experience', label: '🎟️ Tours & Experiences' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as CategoryTab)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                activeCategory === tab.id
                  ? 'bg-amber-400 text-stone-950 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-stone-950 text-stone-300 hover:bg-stone-800 hover:text-white border border-stone-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Comparison Cards List */}
        <div className="space-y-8">
          {sortedItems.map((item) => {
            const lowestOffer = item.offers.reduce((prev, curr) =>
              curr.priceUSD < prev.priceUSD ? curr : prev
            );

            return (
              <div
                key={item.id}
                className="bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-8 hover:border-stone-700 transition-all shadow-xl"
              >
                {/* Top Item Summary */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6 pb-6 border-b border-stone-800/80">
                  <div className="flex items-start gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shrink-0 border border-stone-800"
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-full bg-stone-900 text-amber-300 text-[11px] font-semibold uppercase tracking-wider border border-stone-800">
                          {item.category.toUpperCase()}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-stone-300">
                          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          <span className="font-semibold">{item.rating}</span>
                          <span className="text-stone-500 text-[11px]">({item.reviewsCount} reviews)</span>
                        </div>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-stone-400 mt-1 max-w-2xl leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Savings Badge */}
                  <div className="bg-emerald-500/10 border border-emerald-500/20 px-4 py-2.5 rounded-2xl text-right shrink-0">
                    <span className="text-[10px] text-emerald-400 uppercase tracking-wider font-bold block">
                      Guaranteed Best Price
                    </span>
                    <span className="text-sm font-bold text-white">
                      Save up to ${item.savingsUSD} USD
                    </span>
                    <span className="text-[11px] text-stone-400 block">
                      via {item.bestDealProvider}
                    </span>
                  </div>
                </div>

                {/* Side-by-Side Provider Table */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {item.offers.map((offer, idx) => {
                    const isLowest = offer.priceUSD === lowestOffer.priceUSD;
                    return (
                      <div
                        key={idx}
                        className={`rounded-2xl p-4 sm:p-5 flex flex-col justify-between border transition-all ${
                          isLowest
                            ? 'bg-stone-900 border-amber-400/60 shadow-lg shadow-amber-500/5'
                            : 'bg-stone-900/60 border-stone-800 hover:border-stone-700'
                        }`}
                      >
                        <div>
                          {/* Provider Header */}
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="font-semibold text-white text-xs sm:text-sm">
                              {offer.providerName}
                            </span>
                            {offer.dealTag && (
                              <span
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                  offer.dealTag === 'Best Value' || offer.dealTag === 'Cheapest'
                                    ? 'bg-amber-400 text-stone-950'
                                    : 'bg-stone-800 text-stone-300'
                                }`}
                              >
                                {offer.dealTag}
                              </span>
                            )}
                          </div>

                          {/* Price Tag */}
                          <div className="mb-4">
                            <div className="flex items-baseline gap-2">
                              <span className="text-2xl font-serif font-bold text-amber-300">
                                ${offer.priceUSD}
                              </span>
                              <span className="text-xs text-stone-400">USD</span>
                              {offer.originalPriceUSD && (
                                <span className="text-xs text-stone-500 line-through">
                                  ${offer.originalPriceUSD}
                                </span>
                              )}
                            </div>
                            <span className="text-[10px] text-stone-500">
                              Estimated all-inclusive rate
                            </span>
                          </div>

                          {/* Included Perks */}
                          <ul className="space-y-1.5 mb-5 text-[11px] text-stone-300">
                            {offer.perks.map((perk, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-1.5">
                                <Check className="w-3 h-3 text-amber-400 shrink-0 mt-0.5" />
                                <span>{perk}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Action buttons */}
                        <div className="space-y-2 pt-3 border-t border-stone-800">
                          <button
                            type="button"
                            onClick={() =>
                              onInitiateBooking({
                                id: `${item.id}-${offer.providerName}`,
                                title: item.title,
                                type: item.category === 'flight' || item.category === 'train' ? 'transport' : item.category === 'stay' ? 'accommodation' : 'experience',
                                location: destination.name,
                                priceUSD: offer.priceUSD,
                                originalPriceUSD: offer.originalPriceUSD,
                                provider: offer.providerName,
                                perks: offer.perks,
                                image: item.image,
                              })
                            }
                            className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                              isLowest
                                ? 'bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-md shadow-amber-500/20'
                                : 'bg-stone-800 hover:bg-stone-700 text-white'
                            }`}
                          >
                            <span>Book Deal (${offer.priceUSD})</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>

                          {offer.bookingUrl && (
                            <a
                              href={offer.bookingUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[10px] text-stone-400 hover:text-amber-300 flex items-center justify-center gap-1 transition-colors text-center w-full"
                            >
                              <span>Inspect on {offer.providerName}</span>
                              <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
