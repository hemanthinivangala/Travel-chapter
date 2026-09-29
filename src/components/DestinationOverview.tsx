import React from 'react';
import { MapPin, Calendar, Clock, DollarSign, Wind, Compass, Sparkles } from 'lucide-react';
import { Destination } from '../types/travel';

interface DestinationOverviewProps {
  destination: Destination;
  onExploreSpots: () => void;
}

export const DestinationOverview: React.FC<DestinationOverviewProps> = ({
  destination,
  onExploreSpots,
}) => {
  const { intro } = destination;

  return (
    <section className="py-16 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
              <Compass className="w-4 h-4" />
              <span>Chapter I · Destination Essence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              Welcome to {destination.name}
            </h2>
            <p className="text-lg text-amber-200/90 font-serif italic mt-2">
              “{destination.tagline}”
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onExploreSpots}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-sm rounded-xl transition-all shadow-md shadow-amber-500/20"
            >
              Explore Attractions & Gems
            </button>
          </div>
        </div>

        {/* 6 Key Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Where it is */}
          <div className="bg-stone-800/60 border border-stone-700/60 rounded-2xl p-6 hover:border-stone-600 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-300 mb-2">
              Where It Is
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              {intro.whereItIs}
            </p>
          </div>

          {/* Why people visit */}
          <div className="bg-stone-800/60 border border-stone-700/60 rounded-2xl p-6 hover:border-stone-600 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-300 mb-2">
              Why People Visit
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              {intro.whyPeopleVisit}
            </p>
          </div>

          {/* General Atmosphere */}
          <div className="bg-stone-800/60 border border-stone-700/60 rounded-2xl p-6 hover:border-stone-600 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
              <Wind className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-300 mb-2">
              General Atmosphere
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              {intro.generalAtmosphere}
            </p>
          </div>

          {/* Best Time to Visit */}
          <div className="bg-stone-800/60 border border-stone-700/60 rounded-2xl p-6 hover:border-stone-600 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-300 mb-2">
              Best Time to Visit
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              {intro.bestTimeToVisit}
            </p>
          </div>

          {/* Recommended Duration */}
          <div className="bg-stone-800/60 border border-stone-700/60 rounded-2xl p-6 hover:border-stone-600 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-300 mb-2">
              Recommended Duration
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              {intro.recommendedDuration}
            </p>
          </div>

          {/* Approximate Cost Level */}
          <div className="bg-stone-800/60 border border-stone-700/60 rounded-2xl p-6 hover:border-stone-600 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-300 mb-2">
              Approximate Cost Level
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              {intro.approxCostLevel}
            </p>
          </div>
        </div>

        {/* Destination Imagery Showcase */}
        {destination.gallery && destination.gallery.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {destination.gallery.map((img, idx) => (
              <div
                key={idx}
                className="group relative h-64 rounded-2xl overflow-hidden border border-stone-800"
              >
                <img
                  src={img}
                  alt={`${destination.name} gallery ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs text-stone-300 font-medium tracking-wide">
                    {destination.name} Moments · {idx + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
