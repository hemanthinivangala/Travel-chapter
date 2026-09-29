import React, { useState } from 'react';
import {
  Search,
  Calendar,
  Users,
  Wallet,
  Sparkles,
  Compass,
  ArrowRight,
  Check,
  MapPin,
  Clock,
  Car,
  Home
} from 'lucide-react';
import {
  Destination,
  UserPreferences,
  GroupType,
  BudgetLevel,
  AccommodationType,
  TransportType,
  InterestType,
  ChapterStyle
} from '../types/travel';
import {
  allDestinations,
  createCustomDestination,
  searchDestinations,
  worldHiddenGemsCatalog,
  tirupatiDestination
} from '../data/destinations';

interface HeroLandingProps {
  currentDestination: Destination;
  onSelectDestination: (dest: Destination) => void;
  preferences: UserPreferences;
  onUpdatePreferences: (prefs: Partial<UserPreferences>) => void;
  onCreateChapter: () => void;
}

const INTEREST_LIST: { id: InterestType; label: string; icon: string }[] = [
  { id: 'History', label: 'History', icon: '🏛️' },
  { id: 'Culture', label: 'Culture', icon: '🎭' },
  { id: 'Nature', label: 'Nature', icon: '🌿' },
  { id: 'Adventure', label: 'Adventure', icon: '🧗' },
  { id: 'Food', label: 'Food & Culinary', icon: '🍲' },
  { id: 'Shopping', label: 'Shopping', icon: '🛍️' },
  { id: 'Beaches', label: 'Beaches', icon: '🏖️' },
  { id: 'Mountains', label: 'Mountains', icon: '⛰️' },
  { id: 'Spirituality', label: 'Spirituality', icon: '✨' },
  { id: 'Architecture', label: 'Architecture', icon: '🏛️' },
  { id: 'Photography', label: 'Photography', icon: '📷' },
  { id: 'Nightlife', label: 'Nightlife', icon: '🌃' },
  { id: 'Relaxation', label: 'Relaxation', icon: '🧘' },
  { id: 'Local experiences', label: 'Local Encounters', icon: '🤝' },
];

const CHAPTER_STYLES: { id: ChapterStyle; label: string; desc: string; icon: string }[] = [
  { id: 'A cultural chapter', label: 'Cultural', desc: 'Museums, ancient lore & artisans', icon: '🏛️' },
  { id: 'A peaceful chapter', label: 'Peaceful', desc: 'Quiet gardens, wellness & ocean breeze', icon: '🌿' },
  { id: 'A food-filled chapter', label: 'Food-Filled', desc: 'Bazaars, street food & fine dining', icon: '🍜' },
  { id: 'An adventurous chapter', label: 'Adventurous', desc: 'Mountain trails, safaris & thrills', icon: '🧗' },
  { id: 'A romantic chapter', label: 'Romantic', desc: 'Golden sunsets & intimate dinners', icon: '🍷' },
  { id: 'A family chapter', label: 'Family', desc: 'Playful parks & multi-gen wonders', icon: '👨‍👩‍👧' },
  { id: 'A chapter of discovery', label: 'Discovery', desc: 'Untold secrets & hidden doors', icon: '🧭' }
];

export const HeroLanding: React.FC<HeroLandingProps> = ({
  currentDestination,
  onSelectDestination,
  preferences,
  onUpdatePreferences,
  onCreateChapter,
}) => {
  const [searchInput, setSearchInput] = useState(currentDestination.name);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [customDays, setCustomDays] = useState(false);

  // Search across major destinations, catalog hidden gems, and custom spots
  const searchResults = searchDestinations(searchInput);

  const toggleInterest = (interest: InterestType) => {
    const exists = preferences.interests.includes(interest);
    if (exists) {
      onUpdatePreferences({
        interests: preferences.interests.filter((i) => i !== interest),
      });
    } else {
      onUpdatePreferences({
        interests: [...preferences.interests, interest],
      });
    }
  };

  const handleDestinationSubmit = (name: string) => {
    const clean = name.trim().toLowerCase();
    if (
      clean.includes('tiru') ||
      clean.includes('tirupati') ||
      clean.includes('tirumala') ||
      clean.includes('tirupathi') ||
      clean.includes('balaji') ||
      clean.includes('venkat') ||
      clean.includes('seven hills') ||
      clean.includes('seshachalam')
    ) {
      onSelectDestination(tirupatiDestination);
      setSearchInput(tirupatiDestination.name);
      setShowSuggestions(false);
      return;
    }

    const found = allDestinations.find(
      (d) => d.name.toLowerCase() === clean || d.id === clean
    );
    if (found) {
      onSelectDestination(found);
      setSearchInput(found.name);
    } else {
      // Check catalog
      const catalogItem = worldHiddenGemsCatalog.find(
        (c) => c.name.toLowerCase().includes(clean) || clean.includes(c.name.toLowerCase())
      );
      if (catalogItem) {
        if (catalogItem.name.toLowerCase().includes('tirupati') || catalogItem.name.toLowerCase().includes('tirumala')) {
          onSelectDestination(tirupatiDestination);
          setSearchInput(tirupatiDestination.name);
        } else {
          const custom = createCustomDestination(catalogItem.name);
          onSelectDestination(custom);
          setSearchInput(custom.name);
        }
      } else {
        const custom = createCustomDestination(name);
        onSelectDestination(custom);
        setSearchInput(custom.name);
      }
    }
    setShowSuggestions(false);
  };

  return (
    <div className="relative overflow-hidden bg-stone-900 text-stone-100">
      {/* Background Hero Image with refined gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={currentDestination.heroImage}
          alt={currentDestination.name}
          className="w-full h-full object-cover object-center brightness-50 transition-all duration-1000 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-900/60 to-stone-950"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-28">
        {/* Core Philosophy Banner */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-medium tracking-wide mb-6 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>AI-Powered Travel Discovery & Personalized Itinerary Engine</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            “Every destination can become a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 italic">
              beautiful chapter
            </span>{' '}
            of your life.”
          </h1>

          <p className="mt-5 text-base sm:text-lg text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
            Don’t just visit a place. Understand its culture, discover hidden sanctuaries, and create a personalized journey tailored to your soul.
          </p>
        </div>

        {/* Master Trip Planner Card */}
        <div className="bg-stone-900/90 backdrop-blur-xl border border-stone-700/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/60 max-w-5xl mx-auto">
          {/* Main Search Bar */}
          <div className="mb-8">
            <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
              Where do you want your next chapter to begin?
            </label>
            <div className="relative">
              <div className="flex items-center bg-stone-950/90 border border-stone-700 rounded-2xl p-2 sm:p-2.5 focus-within:border-amber-400 transition-colors">
                <Search className="w-6 h-6 text-amber-400 ml-3 shrink-0" />
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleDestinationSubmit(searchInput);
                    }
                  }}
                  placeholder="Enter any destination in the world (e.g. Tirumala, Tirupati, Varanasi, Hampi, Paris, Tokyo, Hallstatt...)"
                  className="w-full bg-transparent text-white px-3 py-2 text-base sm:text-lg placeholder:text-stone-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => handleDestinationSubmit(searchInput)}
                  className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-semibold text-sm rounded-xl transition-all shrink-0 flex items-center gap-1.5 shadow-md shadow-amber-500/20"
                >
                  <span>Select</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Suggestions Flyout */}
              {showSuggestions && (
                <div className="absolute left-0 right-0 mt-2 bg-stone-900/98 border border-stone-700 rounded-2xl shadow-2xl p-3 z-50 max-h-80 overflow-y-auto">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-amber-400 font-semibold px-2 py-1 border-b border-stone-800 pb-1.5 mb-1.5">
                    <span>Matching Destinations & Sacred Sanctuaries</span>
                    <span className="text-[10px] text-stone-400 font-normal lowercase">click to load</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {searchResults.slice(0, 10).map((d) => {
                      const isTirupati = d.id === 'tirupati' || d.name.toLowerCase().includes('tirupati') || d.name.toLowerCase().includes('tirumala');
                      return (
                        <button
                          key={d.id}
                          type="button"
                          onClick={() => handleDestinationSubmit(d.name)}
                          className={`text-left p-2.5 rounded-xl transition-all flex items-center gap-3 group border ${
                            isTirupati
                              ? 'bg-amber-500/10 border-amber-400/50 hover:bg-amber-500/20'
                              : 'bg-stone-950/60 border-stone-800 hover:bg-stone-800/80 hover:border-stone-700'
                          }`}
                        >
                          <img
                            src={d.heroImage}
                            alt={d.name}
                            className="w-12 h-12 rounded-lg object-cover group-hover:scale-105 transition-transform shrink-0"
                          />
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="text-sm font-semibold text-white group-hover:text-amber-300 truncate">
                                {d.name}
                              </span>
                              {isTirupati && (
                                <span className="text-[9px] bg-amber-400 text-stone-950 font-bold px-1.5 py-0.5 rounded shrink-0">
                                  Sacred
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-stone-400 truncate">{d.country} · {d.region}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {searchResults.length === 0 && searchInput.trim() && (
                    <div className="p-3 text-center">
                      <p className="text-xs text-stone-300">
                        Create custom chapter for <strong className="text-amber-300">“{searchInput}”</strong>
                      </p>
                      <button
                        type="button"
                        onClick={() => handleDestinationSubmit(searchInput)}
                        className="mt-2 text-xs bg-amber-500 text-stone-950 px-4 py-2 rounded-lg font-semibold hover:bg-amber-400 transition-colors"
                      >
                        Explore Any Place in the World: {searchInput}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Quick destination chips with Tirumala & Tirupati and Sacred / Hidden gems highlighted */}
            <div className="mt-3.5 space-y-2">
              <div className="flex items-center gap-2 flex-wrap text-xs text-stone-400">
                <span className="font-semibold text-amber-300 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Sacred & Small Wonders:
                </span>
                {[
                  { name: 'Tirupati & Tirumala', label: '✨ Tirupati & Tirumala (Balaji)', highlight: true },
                  { name: 'Varanasi (Kashi)', label: '🕉️ Varanasi (Kashi)', highlight: false },
                  { name: 'Hampi', label: '🏛️ Hampi Ruins', highlight: false },
                  { name: 'Rishikesh & Haridwar', label: '⛰️ Rishikesh (Ganga)', highlight: false },
                  { name: 'Shirdi', label: '🌸 Shirdi Sai Sanctuary', highlight: false },
                  { name: 'Hallstatt', label: '🏰 Hallstatt (Alps)', highlight: false },
                  { name: 'Amalfi Coast & Positano', label: '🍋 Amalfi Coast', highlight: false },
                  { name: 'Ubud & Sidemen', label: '🌾 Ubud (Bali)', highlight: false },
                ].map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => handleDestinationSubmit(item.name)}
                    className={`px-3 py-1 rounded-full border text-xs transition-all flex items-center gap-1 ${
                      currentDestination.name.toLowerCase().includes(item.name.toLowerCase()) ||
                      (item.name.includes('Tirupati') && currentDestination.id === 'tirupati')
                        ? 'bg-amber-400 border-amber-400 text-stone-950 font-bold shadow-md shadow-amber-500/20'
                        : item.highlight
                        ? 'bg-amber-500/20 border-amber-400/60 text-amber-300 font-semibold hover:bg-amber-500/30'
                        : 'bg-stone-800/80 border-stone-700 text-stone-300 hover:border-stone-500 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 flex-wrap text-xs text-stone-400">
                <span className="font-medium text-stone-400">Popular Hubs:</span>
                {allDestinations
                  .filter((d) => d.id !== 'tirupati')
                  .map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => handleDestinationSubmit(d.name)}
                      className={`px-2.5 py-1 rounded-full border text-xs transition-all ${
                        currentDestination.id === d.id
                          ? 'bg-amber-400/20 border-amber-400 text-amber-300 font-medium'
                          : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:border-stone-600 hover:text-stone-200'
                      }`}
                    >
                      {d.name}
                    </button>
                  ))}
              </div>
            </div>
          </div>

          {/* Row 1: Duration, Season, Budget, Group */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Days Selector */}
            <div className="bg-stone-950/60 border border-stone-800 p-4 rounded-2xl">
              <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Trip Duration</span>
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {[1, 3, 5, 7, 10].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => {
                      onUpdatePreferences({ days: d });
                      setCustomDays(false);
                    }}
                    className={`py-1.5 text-xs font-medium rounded-lg transition-all ${
                      preferences.days === d && !customDays
                        ? 'bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-500/20'
                        : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700'
                    }`}
                  >
                    {d} {d === 1 ? 'Day' : 'Days'}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setCustomDays(true)}
                  className={`py-1.5 text-xs font-medium rounded-lg transition-all ${
                    customDays
                      ? 'bg-amber-500 text-stone-950 font-bold'
                      : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  Custom
                </button>
              </div>
              {customDays && (
                <div className="mt-2.5 flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={preferences.days}
                    onChange={(e) => onUpdatePreferences({ days: Number(e.target.value) || 1 })}
                    className="w-full bg-stone-900 border border-stone-700 rounded-lg px-2 py-1 text-xs text-white text-center focus:outline-none focus:border-amber-400"
                  />
                  <span className="text-xs text-stone-400">days</span>
                </div>
              )}
            </div>

            {/* Travel Date / Season */}
            <div className="bg-stone-950/60 border border-stone-800 p-4 rounded-2xl">
              <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2.5">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>Travel Season</span>
              </label>
              <select
                value={preferences.season}
                onChange={(e) => onUpdatePreferences({ season: e.target.value as any })}
                className="w-full bg-stone-800/80 text-stone-200 border border-stone-700 rounded-xl px-3 py-2 text-xs font-medium focus:outline-none focus:border-amber-400"
              >
                <option value="Spring">🌸 Spring (Mild & Floral)</option>
                <option value="Summer">☀️ Summer (Vibrant & Warm)</option>
                <option value="Autumn">🍂 Autumn (Crisp & Golden)</option>
                <option value="Winter">❄️ Winter (Breezy / Festive)</option>
                <option value="Monsoon">🌧️ Monsoon (Lush & Romantic)</option>
                <option value="Year-round">✨ Any Time / Year-round</option>
              </select>
              <p className="text-[11px] text-stone-500 mt-2">
                Best in {currentDestination.intro.bestTimeToVisit.split(' ')[0]}
              </p>
            </div>

            {/* Budget Selector */}
            <div className="bg-stone-950/60 border border-stone-800 p-4 rounded-2xl">
              <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2.5">
                <Wallet className="w-3.5 h-3.5 text-amber-400" />
                <span>Budget Level</span>
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {(['Budget', 'Moderate', 'Premium', 'Luxury'] as BudgetLevel[]).map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => onUpdatePreferences({ budget: b })}
                    className={`py-1.5 text-xs font-medium rounded-lg transition-all ${
                      preferences.budget === b
                        ? 'bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-500/20'
                        : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Travel Group */}
            <div className="bg-stone-950/60 border border-stone-800 p-4 rounded-2xl">
              <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2.5">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                <span>Travel Group</span>
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {(['Solo', 'Couple', 'Family', 'Friends'] as GroupType[]).map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => onUpdatePreferences({ groupType: g })}
                    className={`py-1.5 text-xs font-medium rounded-lg transition-all ${
                      preferences.groupType === g
                        ? 'bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-500/20'
                        : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Accommodation & Transport */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-stone-950/60 border border-stone-800 p-4 rounded-2xl">
              <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2.5">
                <Home className="w-3.5 h-3.5 text-amber-400" />
                <span>Preferred Accommodation</span>
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {(['Hotel', 'Hostel', 'Resort', 'Homestay', 'Guesthouse', 'Luxury stay'] as AccommodationType[]).map((stay) => (
                  <button
                    key={stay}
                    type="button"
                    onClick={() => onUpdatePreferences({ accommodation: stay })}
                    className={`py-1.5 text-xs rounded-lg transition-all ${
                      preferences.accommodation === stay
                        ? 'bg-amber-500/20 border border-amber-400 text-amber-300 font-semibold'
                        : 'bg-stone-800/60 border border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    {stay}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-stone-950/60 border border-stone-800 p-4 rounded-2xl">
              <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2.5">
                <Car className="w-3.5 h-3.5 text-amber-400" />
                <span>Transportation Preference</span>
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {(['Public transport', 'Taxi', 'Rental vehicle', 'Walking', 'Mixed'] as TransportType[]).map((transit) => (
                  <button
                    key={transit}
                    type="button"
                    onClick={() => onUpdatePreferences({ transportation: transit })}
                    className={`py-1.5 text-xs rounded-lg transition-all ${
                      preferences.transportation === transit
                        ? 'bg-amber-500/20 border border-amber-400 text-amber-300 font-semibold'
                        : 'bg-stone-800/60 border border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    {transit}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Row 3: Chapter Style / Theme */}
          <div className="mb-6">
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3">
              How will you spend your chapter here?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
              {CHAPTER_STYLES.map((style) => (
                <button
                  key={style.id}
                  type="button"
                  onClick={() => onUpdatePreferences({ travelStyle: style.id })}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    preferences.travelStyle === style.id
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-md shadow-amber-500/10'
                      : 'bg-stone-950/60 border-stone-800 text-stone-400 hover:border-stone-700 hover:text-stone-200'
                  }`}
                >
                  <div className="text-xl mb-1">{style.icon}</div>
                  <div className="text-xs font-semibold text-white leading-tight">{style.label}</div>
                  <div className="text-[10px] text-stone-500 line-clamp-1 mt-0.5">{style.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Row 4: Interests Filter Multi-select */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                Tailor by Your Interests ({preferences.interests.length} selected)
              </label>
              <button
                type="button"
                onClick={() =>
                  onUpdatePreferences({
                    interests: ['History', 'Culture', 'Nature', 'Food', 'Local experiences'],
                  })
                }
                className="text-[11px] text-amber-400 hover:underline"
              >
                Reset to Highlights
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {INTEREST_LIST.map((item) => {
                const isSelected = preferences.interests.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleInterest(item.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium border flex items-center gap-1.5 transition-all ${
                      isSelected
                        ? 'bg-amber-400 text-stone-950 border-amber-400 font-semibold shadow-sm'
                        : 'bg-stone-950/60 border-stone-800 text-stone-300 hover:border-stone-600 hover:text-white'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                    {isSelected && <Check className="w-3 h-3 text-stone-950 ml-0.5" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Prominent CTA */}
          <div className="text-center pt-2">
            <button
              type="button"
              onClick={onCreateChapter}
              className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-stone-950 font-serif font-bold text-lg sm:text-xl rounded-2xl shadow-xl shadow-amber-500/30 transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3 mx-auto"
            >
              <Compass className="w-6 h-6 text-stone-950" />
              <span>Create My {currentDestination.name} Chapter</span>
              <ArrowRight className="w-5 h-5 text-stone-950" />
            </button>
            <p className="text-xs text-stone-400 mt-3">
              Generates personalized day-by-day itinerary, local cultural guide, budget breakdown & interactive map.
            </p>
          </div>
        </div>

        {/* Dedicated Showcase: Sacred Pilgrimages & Smaller Parts of the World */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b border-stone-800 pb-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Small Towns & Sacred Sanctuaries Worldwide</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                Not Just Famous Metropolises — Every Sacred Town & Hidden Gem
              </h2>
              <p className="text-sm text-stone-400 mt-1 max-w-2xl">
                Explore deeply revered pilgrimage destinations like <strong>Tirumala & Tirupati</strong>, sacred river sanctuaries, ancient ruins, and quiet fairytale alpine hamlets.
              </p>
            </div>
            <div className="text-xs text-stone-400 shrink-0">
              One-click chapter activation
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                id: 'tirupati-card',
                name: 'Tirupati & Tirumala',
                region: 'Andhra Pradesh, India',
                tag: 'Sacred Seven Hills',
                isHighlighted: true,
                desc: 'Home of Sri Venkateswara Swamy Temple atop Venkatadri, Srivari Laddu Prasadam, and 2.5-billion-year-old rock arches.',
                image: 'https://images.unsplash.com/photo-1621644827827-0c6114e9f74a?auto=format&fit=crop&w=800&q=80',
              },
              {
                id: 'varanasi-card',
                name: 'Varanasi (Kashi)',
                region: 'Uttar Pradesh, India',
                tag: 'Eternal Holy City',
                desc: 'Ancient Ghats of the sacred Ganga, evening Maha Aarti at Dashashwamedh, and spiritual liberation.',
                image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80',
              },
              {
                id: 'hampi-card',
                name: 'Hampi',
                region: 'Karnataka, India',
                tag: 'UNESCO Stone Chariot',
                desc: 'Bouldered capital of the Vijayanagara Empire, Virupaksha temple, and mystical Tungabhadra sunsets.',
                image: 'https://images.unsplash.com/photo-1600100397608-f010f443b74f?auto=format&fit=crop&w=800&q=80',
              },
              {
                id: 'rishikesh-card',
                name: 'Rishikesh & Haridwar',
                region: 'Uttarakhand, Himalayas',
                tag: 'Yoga & Ganga Aarti',
                desc: 'Emerald Himalayan waters, Beatles ashram heritage, hanging bridges, and tranquil meditation.',
                image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
              },
              {
                id: 'shirdi-card',
                name: 'Shirdi',
                region: 'Maharashtra, India',
                tag: 'Sai Baba Sanctuary',
                desc: 'Venerated shrine of Shri Sai Baba, Dwarkamai, peaceful contemplation, and continuous community meals.',
                image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
              },
              {
                id: 'hallstatt-card',
                name: 'Hallstatt',
                region: 'Salzkammergut, Austria',
                tag: 'Alpine Fairytale Village',
                desc: '16th-century Alpine wooden cottages reflected on a mirrored lake, salt mines, and skywalk vistas.',
                image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
              },
              {
                id: 'amalfi-card',
                name: 'Amalfi Coast & Positano',
                region: 'Campania, Italy',
                tag: 'Pastel Cliffside Haven',
                desc: 'Terraced lemon orchards hanging over turquoise Tyrrhenian waters, Path of the Gods, and fresh seafood.',
                image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
              },
              {
                id: 'ubud-card',
                name: 'Ubud & Sidemen',
                region: 'Bali, Indonesia',
                tag: 'Sacred Water Shrines',
                desc: 'Emerald rice terraces, ancient water purification temples, artisanal woodcrafts, and holistic retreats.',
                image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
              }
            ].map((place) => {
              const isCurrent = currentDestination.name.toLowerCase().includes(place.name.toLowerCase()) ||
                (place.name.includes('Tirupati') && currentDestination.id === 'tirupati');

              return (
                <div
                  key={place.id}
                  className={`rounded-2xl overflow-hidden border transition-all flex flex-col group ${
                    place.isHighlighted
                      ? 'bg-gradient-to-b from-amber-950/40 via-stone-900 to-stone-900 border-amber-500/40 shadow-lg shadow-amber-500/10'
                      : 'bg-stone-900/80 border-stone-800 hover:border-stone-700'
                  }`}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent"></div>
                    <span className={`absolute top-2.5 right-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      place.isHighlighted
                        ? 'bg-amber-400 text-stone-950'
                        : 'bg-stone-900/80 text-amber-300 border border-stone-700'
                    }`}>
                      {place.tag}
                    </span>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] text-stone-400">{place.region}</div>
                      <h4 className="font-serif font-bold text-base text-white group-hover:text-amber-300 transition-colors">
                        {place.name}
                      </h4>
                      <p className="text-xs text-stone-300 mt-1 line-clamp-3 leading-relaxed">
                        {place.desc}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleDestinationSubmit(place.name)}
                      className={`mt-4 w-full py-2 px-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                        isCurrent
                          ? 'bg-amber-400 text-stone-950 font-bold'
                          : 'bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-stone-200'
                      }`}
                    >
                      <span>{isCurrent ? 'Current Chapter' : 'Explore This Chapter'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
