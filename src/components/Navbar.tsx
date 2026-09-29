import React, { useState } from 'react';
import { Compass, Heart, Bookmark, Bot, Search, Menu, X, Sparkles, MapPin, Percent, Ticket } from 'lucide-react';
import { Destination } from '../types/travel';
import { allDestinations, searchDestinations, tirupatiDestination } from '../data/destinations';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  favoritesCount: number;
  savedTripsCount: number;
  bookingsCount?: number;
  currentDestination: Destination;
  onSelectDestination: (dest: Destination) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  favoritesCount,
  savedTripsCount,
  bookingsCount = 0,
  currentDestination,
  onSelectDestination,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = searchDestinations(searchQuery);

  return (
    <header className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur-md text-stone-100 border-b border-stone-800 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => setActiveTab('explore')}
          className="text-left flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-stone-950 font-serif font-bold text-xl shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            TC
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-semibold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                Travel Chapter
              </span>
            </div>
            <p className="text-xs text-stone-400 hidden sm:block tracking-wide">
              Every destination is a life chapter
            </p>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {[
            { id: 'explore', label: 'Explore' },
            { id: 'destination', label: 'Destinations' },
            { id: 'experiences', label: 'Experiences' },
            { id: 'packages', label: 'Packages' },
            { id: 'compare', label: 'Compare & Book', icon: Percent },
            { id: 'itinerary', label: 'Itinerary' },
            { id: 'assistant', label: 'AI Assistant', icon: Bot, isSpecial: true },
            { id: 'mytrip', label: 'My Trip', icon: Bookmark, badge: savedTripsCount + bookingsCount }
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                  isActive
                    ? 'text-amber-300 bg-stone-800/80'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800/40'
                } ${item.isSpecial ? 'text-amber-400 font-semibold' : ''}`}
              >
                {Icon && <Icon className={`w-4 h-4 ${item.isSpecial ? 'animate-pulse' : ''}`} />}
                <span>{item.label}</span>
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="ml-1 w-5 h-5 rounded-full bg-amber-500 text-stone-950 text-xs font-bold flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Quick Actions */}
        <div className="flex items-center gap-2">
          {/* Quick Search Dropdown Toggle */}
          <div className="relative">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 rounded-lg bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 transition-colors flex items-center gap-2 text-xs font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              title="Search destinations"
            >
              <Search className="w-4 h-4 text-amber-400" />
              <span className="hidden xl:inline text-stone-300">
                {currentDestination ? currentDestination.name : 'Search'}
              </span>
            </button>

            {searchOpen && (
              <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-stone-900 border border-stone-700 rounded-xl shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="relative mb-2">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-stone-400" />
                  <input
                    type="text"
                    placeholder="Search Tirumala, Tirupati, Varanasi, Paris..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-stone-800 text-stone-100 text-sm rounded-lg pl-9 pr-3 py-2 border border-stone-700 focus:outline-none focus:border-amber-400 placeholder:text-stone-500"
                    autoFocus
                  />
                </div>
                <div className="max-h-64 overflow-y-auto space-y-1">
                  {filtered.slice(0, 10).map((d) => {
                    const isTirupati = d.id === 'tirupati' || d.name.toLowerCase().includes('tirupati') || d.name.toLowerCase().includes('tirumala');
                    return (
                      <button
                        key={d.id}
                        onClick={() => {
                          onSelectDestination(d);
                          setActiveTab('destination');
                          setSearchOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-colors ${
                          isTirupati
                            ? 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-300'
                            : 'hover:bg-stone-800 text-stone-300 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <div>
                            <div className="font-medium text-stone-100 flex items-center gap-1.5">
                              <span>{d.name}</span>
                              {isTirupati && (
                                <span className="text-[9px] bg-amber-400 text-stone-950 font-bold px-1 rounded">
                                  Sacred
                                </span>
                              )}
                            </div>
                            <div className="text-[11px] text-stone-400">{d.country} · {d.region}</div>
                          </div>
                        </div>
                        <span className="text-[10px] text-stone-500 uppercase">{d.intro.recommendedDuration}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Favorites Heart */}
          <button
            onClick={() => setActiveTab('mytrip')}
            className="relative p-2.5 rounded-lg bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            title="Saved favorites"
          >
            <Heart className={`w-4 h-4 ${favoritesCount > 0 ? 'text-rose-400 fill-rose-400' : 'text-stone-300'}`} />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg bg-stone-800 text-stone-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-900 border-b border-stone-800 px-4 pt-2 pb-6 space-y-1">
          {[
            { id: 'explore', label: 'Explore & Plan' },
            { id: 'destination', label: 'Destination Overview' },
            { id: 'compare', label: 'Compare Prices & Book Deals' },
            { id: 'itinerary', label: 'Personalized Itinerary' },
            { id: 'experiences', label: 'Curated Experiences' },
            { id: 'packages', label: 'Tour Packages' },
            { id: 'assistant', label: 'AI Smart Assistant' },
            { id: 'mytrip', label: `My Trip & Bookings (${savedTripsCount + bookingsCount})` }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium ${
                activeTab === item.id
                  ? 'bg-amber-500/10 text-amber-400'
                  : 'text-stone-300 hover:bg-stone-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
