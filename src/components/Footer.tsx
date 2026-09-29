import React from 'react';
import { Compass, Heart, Sparkles, MapPin } from 'lucide-react';
import { allDestinations } from '../data/destinations';
import { Destination } from '../types/travel';

interface FooterProps {
  onSelectDestination: (dest: Destination) => void;
  onNavigateTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectDestination, onNavigateTab }) => {
  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-stone-950 font-serif font-bold text-xl shadow-lg shadow-amber-500/20">
                TC
              </div>
              <span className="font-serif text-2xl font-semibold tracking-tight text-white">
                Travel Chapter
              </span>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed font-serif italic max-w-sm">
              “Every destination can become a beautiful chapter of your life.”
            </p>

            <p className="text-xs text-stone-500 leading-relaxed max-w-sm">
              An AI-powered discovery and personalized travel planning platform helping travelers understand local culture, explore hidden gems, and design authentic life experiences.
            </p>
          </div>

          {/* Featured Chapters */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Featured Chapters
            </h4>
            <ul className="space-y-2 text-xs">
              {allDestinations.map((d) => (
                <li key={d.id}>
                  <button
                    onClick={() => {
                      onSelectDestination(d);
                      onNavigateTab('destination');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-amber-300 transition-colors text-left flex items-center gap-1.5"
                  >
                    <span>{d.name}</span>
                    <span className="text-stone-600">· {d.country}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'explore', label: 'Trip Discovery' },
                { id: 'destination', label: 'Destination Overview' },
                { id: 'itinerary', label: 'Personalized Itinerary' },
                { id: 'experiences', label: 'Curated Experiences' },
                { id: 'packages', label: 'Custom Tour Packages' },
                { id: 'assistant', label: 'AI Smart Travel Assistant' },
                { id: 'mytrip', label: 'My Trip & Journal' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onNavigateTab(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-amber-300 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Philosophy */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Philosophy
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed mb-3">
              Don’t just tick boxes on a sightseeing checklist. Walk quietly through morning alleys, taste local recipes, and honor traditions.
            </p>
            <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 text-[11px] text-amber-300/90 italic">
              “To travel is to live a thousand lifetimes in one.”
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-stone-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Travel Chapter. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Crafted for mindful discovery across the globe</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
