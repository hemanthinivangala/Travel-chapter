import React, { useState } from 'react';
import { Home, Star, MapPin, Check, Info, Compass } from 'lucide-react';
import { Destination, AccommodationItem, AccommodationType } from '../types/travel';

interface AccommodationSectionProps {
  destination: Destination;
  onBookStay?: (stay: AccommodationItem) => void;
  onComparePrices?: () => void;
}

export const AccommodationSection: React.FC<AccommodationSectionProps> = ({
  destination,
  onBookStay,
  onComparePrices,
}) => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const accommodations = destination.accommodations || [];

  const filtered = accommodations.filter((acc) => {
    if (selectedType === 'All') return true;
    return acc.type.toLowerCase() === selectedType.toLowerCase();
  });

  return (
    <section className="py-16 bg-stone-900 text-stone-100 border-t border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
            <Compass className="w-4 h-4" />
            <span>Chapter VII · Where to Rest & Recharge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Curated Stays in {destination.name}
          </h2>
          <p className="text-sm text-stone-400 mt-2">
            From historic heritage palazzos and boutique design hotels to tranquil eco-resorts and social hostels.
          </p>

          <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-stone-500 bg-stone-950 px-3 py-1 rounded-full border border-stone-800">
            <Info className="w-3.5 h-3.5 text-amber-400" />
            <span>Prices are representative seasonal averages and subject to date availability.</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {['All', 'Hotel', 'Hostel', 'Resort', 'Homestay', 'Luxury stay'].map((t) => (
            <button
              key={t}
              onClick={() => setSelectedType(t)}
              className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                selectedType === t
                  ? 'bg-amber-400 text-stone-950 font-bold shadow-sm'
                  : 'bg-stone-950 text-stone-300 hover:bg-stone-800 hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Accommodations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((stay) => (
            <div
              key={stay.id}
              className="bg-stone-950 border border-stone-800 rounded-3xl overflow-hidden hover:border-stone-700 transition-all flex flex-col group shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={stay.image}
                  alt={stay.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-stone-950/80 backdrop-blur-md text-amber-300 text-xs font-semibold border border-stone-700/60">
                    {stay.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-stone-950/80 backdrop-blur-md text-xs font-semibold text-white">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>{stay.rating}</span>
                  <span className="text-stone-400 text-[10px]">({stay.reviewsCount})</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-1.5">
                    {stay.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-stone-400 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{stay.location}</span>
                  </div>

                  {/* Facilities */}
                  <div className="mb-4">
                    <div className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold mb-2">
                      Key Amenities
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {stay.facilities.map((fac, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] text-stone-300 bg-stone-900 border border-stone-800 px-2 py-0.5 rounded-lg"
                        >
                          {fac}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Suitable For */}
                  <div className="mb-4 text-xs text-stone-400">
                    <span className="text-stone-500">Ideal for: </span>
                    <span className="text-stone-300">{stay.suitableFor.join(' · ')}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-800/80">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-[10px] text-stone-500 uppercase block">Est. Nightly Rate</span>
                      <span className="text-xs font-bold text-amber-300">{stay.priceRange}</span>
                    </div>
                    <span className="text-[11px] text-stone-400 max-w-[140px] text-right truncate">
                      {stay.distanceFromMajorAttractions}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    {onBookStay && (
                      <button
                        type="button"
                        onClick={() => onBookStay(stay)}
                        className="flex-1 py-2 px-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl transition-all shadow-md shadow-amber-500/20 text-center"
                      >
                        Book This Stay
                      </button>
                    )}
                    {onComparePrices && (
                      <button
                        type="button"
                        onClick={onComparePrices}
                        className="px-3 py-2 bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-700 font-semibold text-xs rounded-xl transition-colors"
                      >
                        Compare Rates
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
