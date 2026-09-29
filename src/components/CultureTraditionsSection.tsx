import React from 'react';
import {
  Compass,
  Calendar,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Shirt,
  Info
} from 'lucide-react';
import { Destination } from '../types/travel';

interface CultureTraditionsSectionProps {
  destination: Destination;
}

export const CultureTraditionsSection: React.FC<CultureTraditionsSectionProps> = ({
  destination,
}) => {
  const { culture } = destination;

  return (
    <section className="py-16 bg-stone-900 text-stone-100 border-t border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
            <Compass className="w-4 h-4" />
            <span>Chapter III · Heritage, Customs & Sacred Lore</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Local Culture & Traditions in {destination.name}
          </h2>
          <p className="text-sm text-stone-400 mt-2 leading-relaxed">
            Travel deepens when we understand the living stories, shared rituals, and etiquette that shape the daily lives of residents.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Traditions & Festivals (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Living Traditions */}
            <div className="bg-stone-950/70 border border-stone-800 rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Living Traditions & Way of Life
                </h3>
              </div>

              <ul className="space-y-3.5">
                {culture.traditions.map((trad, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-stone-300 leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                    <span>{trad}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Festivals */}
            <div className="bg-stone-950/70 border border-stone-800 rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Celebrated Festivals & Gatherings
                </h3>
              </div>

              <div className="space-y-4">
                {culture.festivals.map((fest, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-stone-900/90 border border-stone-800/80 hover:border-stone-700 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-semibold text-amber-300 text-sm">{fest.name}</span>
                      <span className="text-xs text-stone-400 font-medium px-2.5 py-0.5 rounded-full bg-stone-800">
                        {fest.timing}
                      </span>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      {fest.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cultural Facts */}
            <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-3">
                <Info className="w-4 h-4" />
                <span>Did You Know?</span>
              </div>
              <ul className="space-y-2.5">
                {culture.culturalFacts.map((fact, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-stone-200 italic leading-relaxed">
                    “{fact}”
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Etiquette, Respect & Dress (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Social Etiquette */}
            <div className="bg-stone-950/70 border border-stone-800 rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Social Etiquette
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-stone-300">
                {culture.socialEtiquette.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-stone-900/60 border border-stone-800/80">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Dress Considerations */}
            <div className="bg-stone-950/70 border border-stone-800 rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Shirt className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Dress Considerations
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed bg-stone-900/60 border border-stone-800/80 p-3.5 rounded-xl">
                {culture.dressConsiderations}
              </p>
            </div>

            {/* Things Visitors Should Respect */}
            <div className="bg-stone-950/70 border border-stone-800 rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Respectful Travel Practices
                </h3>
              </div>

              <ul className="space-y-2.5">
                {culture.thingsVisitorsShouldRespect.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
