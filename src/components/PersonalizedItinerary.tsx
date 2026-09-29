import React, { useState } from 'react';
import {
  Compass,
  Clock,
  Sparkles,
  Bookmark,
  Share2,
  Printer,
  ChevronDown,
  ChevronUp,
  MapPin,
  Utensils,
  BookOpen,
  DollarSign,
  RefreshCw,
  Check,
  Plus
} from 'lucide-react';
import { Destination, UserPreferences, ItineraryDay } from '../types/travel';

interface PersonalizedItineraryProps {
  destination: Destination;
  preferences: UserPreferences;
  itinerary: ItineraryDay[];
  onRegenerateItinerary: () => void;
  onSaveTrip: () => void;
  isSaving?: boolean;
}

export const PersonalizedItinerary: React.FC<PersonalizedItineraryProps> = ({
  destination,
  preferences,
  itinerary,
  onRegenerateItinerary,
  onSaveTrip,
  isSaving = false,
}) => {
  const [expandedDays, setExpandedDays] = useState<number[]>([1]);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [customNotes, setCustomNotes] = useState<{ [day: number]: string }>({});
  const [editingDayNote, setEditingDayNote] = useState<number | null>(null);
  const [noteInput, setNoteInput] = useState('');

  const toggleDay = (dayNum: number) => {
    if (expandedDays.includes(dayNum)) {
      setExpandedDays(expandedDays.filter((d) => d !== dayNum));
    } else {
      setExpandedDays([...expandedDays, dayNum]);
    }
  };

  const expandAll = () => {
    setExpandedDays(itinerary.map((d) => d.day));
  };

  const collapseAll = () => {
    setExpandedDays([]);
  };

  const handleSave = () => {
    onSaveTrip();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  const saveNoteForDay = (dayNum: number) => {
    if (noteInput.trim()) {
      setCustomNotes((prev) => ({ ...prev, [dayNum]: noteInput.trim() }));
    }
    setEditingDayNote(null);
    setNoteInput('');
  };

  return (
    <section id="itinerary-section" className="py-16 bg-stone-950 text-stone-100 print:bg-white print:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2 print:text-amber-800">
              <Sparkles className="w-4 h-4" />
              <span>Personalized Itinerary Generator</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight print:text-black">
              Your {preferences.days}-Day {destination.name} Chapter
            </h2>
            <p className="text-sm text-stone-400 mt-2 print:text-stone-700">
              Tailored for a <strong>{preferences.budget}</strong> journey as a{' '}
              <strong>{preferences.groupType}</strong> traveler · Theme: <em>{preferences.travelStyle}</em>
            </p>
          </div>

          {/* Action buttons bar */}
          <div className="flex flex-wrap items-center gap-2.5 print:hidden">
            <button
              onClick={expandAll}
              className="px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:text-white text-xs"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:text-white text-xs"
            >
              Collapse All
            </button>
            <button
              onClick={onRegenerateItinerary}
              className="px-3.5 py-1.5 rounded-lg bg-stone-800 border border-stone-700 hover:bg-stone-700 text-stone-200 text-xs font-medium flex items-center gap-1.5 transition-colors"
              title="Regenerate Itinerary with AI"
            >
              <RefreshCw className="w-3.5 h-3.5 text-amber-400" />
              <span>Regenerate</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-stone-800 border border-stone-700 hover:bg-stone-700 text-stone-200 text-xs font-medium flex items-center gap-1.5 transition-colors"
              title="Print or Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={handleSave}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md ${
                saveSuccess
                  ? 'bg-emerald-500 text-stone-950'
                  : 'bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-amber-500/20'
              }`}
            >
              {saveSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Saved to My Trip!</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-4 h-4" />
                  <span>Save My Trip</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Days Timeline Container */}
        <div className="space-y-6">
          {itinerary.map((day) => {
            const isExpanded = expandedDays.includes(day.day);
            const userNote = customNotes[day.day];

            return (
              <div
                key={day.day}
                className="bg-stone-900/90 border border-stone-800 rounded-3xl overflow-hidden shadow-xl transition-all print:border-stone-300 print:bg-white"
              >
                {/* Day Header Trigger */}
                <button
                  type="button"
                  onClick={() => toggleDay(day.day)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 hover:bg-stone-800/40 transition-colors focus:outline-none"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500 text-stone-950 font-serif font-bold text-lg flex items-center justify-center shrink-0 shadow-md shadow-amber-500/20 print:border">
                      D{day.day}
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 print:text-amber-800">
                        Day {day.day} of {preferences.days}
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5 print:text-black">
                        {day.theme}
                      </h3>
                    </div>
                  </div>

                  <div className="p-2 rounded-xl bg-stone-800 text-stone-300 shrink-0 print:hidden">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Day Expanded Body */}
                {isExpanded && (
                  <div className="px-6 pb-8 sm:px-8 border-t border-stone-800/80 pt-6 space-y-6 print:border-stone-200">
                    {/* Morning / Afternoon / Evening Timeline */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {/* Morning */}
                      <div className="bg-stone-950/80 border border-stone-800/80 p-5 rounded-2xl flex flex-col justify-between print:border-stone-300 print:bg-stone-50">
                        <div>
                          <div className="flex items-center justify-between text-xs text-amber-400 font-semibold mb-2">
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5" />
                              <span>Morning · {day.morning.time}</span>
                            </span>
                            <span className="text-stone-400 font-normal">{day.morning.cost}</span>
                          </div>
                          <h4 className="font-serif font-bold text-base text-white mb-2 print:text-black">
                            {day.morning.title}
                          </h4>
                          <p className="text-xs text-stone-300 leading-relaxed print:text-stone-700">
                            {day.morning.description}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-stone-800/80 text-[11px] text-amber-300/90 italic">
                          💡 {day.morning.highlight}
                        </div>
                      </div>

                      {/* Afternoon */}
                      <div className="bg-stone-950/80 border border-stone-800/80 p-5 rounded-2xl flex flex-col justify-between print:border-stone-300 print:bg-stone-50">
                        <div>
                          <div className="flex items-center justify-between text-xs text-amber-400 font-semibold mb-2">
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5" />
                              <span>Afternoon · {day.afternoon.time}</span>
                            </span>
                            <span className="text-stone-400 font-normal">{day.afternoon.cost}</span>
                          </div>
                          <h4 className="font-serif font-bold text-base text-white mb-2 print:text-black">
                            {day.afternoon.title}
                          </h4>
                          <p className="text-xs text-stone-300 leading-relaxed print:text-stone-700">
                            {day.afternoon.description}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-stone-800/80 text-[11px] text-amber-300/90 italic">
                          💡 {day.afternoon.highlight}
                        </div>
                      </div>

                      {/* Evening */}
                      <div className="bg-stone-950/80 border border-stone-800/80 p-5 rounded-2xl flex flex-col justify-between print:border-stone-300 print:bg-stone-50">
                        <div>
                          <div className="flex items-center justify-between text-xs text-amber-400 font-semibold mb-2">
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5" />
                              <span>Evening · {day.evening.time}</span>
                            </span>
                            <span className="text-stone-400 font-normal">{day.evening.cost}</span>
                          </div>
                          <h4 className="font-serif font-bold text-base text-white mb-2 print:text-black">
                            {day.evening.title}
                          </h4>
                          <p className="text-xs text-stone-300 leading-relaxed print:text-stone-700">
                            {day.evening.description}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-stone-800/80 text-[11px] text-amber-300/90 italic">
                          💡 {day.evening.highlight}
                        </div>
                      </div>
                    </div>

                    {/* Daily Food & Culture Pairing */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
                        <Utensils className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-0.5">
                            Local Food Pairing
                          </div>
                          <p className="text-xs text-stone-300 leading-relaxed">
                            {day.localFoodTip}
                          </p>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-stone-950/60 border border-stone-800 flex items-start gap-3">
                        <BookOpen className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-semibold text-stone-300 uppercase tracking-wider mb-0.5">
                            Cultural Insight / Lore
                          </div>
                          <p className="text-xs text-stone-300 leading-relaxed">
                            {day.culturalNote}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Traveler Custom Journal / Note for this day */}
                    <div className="pt-2 print:hidden">
                      {userNote ? (
                        <div className="p-3.5 rounded-xl bg-stone-950 border border-amber-500/30 flex items-start justify-between gap-3">
                          <div>
                            <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                              Your Personal Chapter Note:
                            </span>
                            <p className="text-xs text-stone-200 mt-0.5 italic">“{userNote}”</p>
                          </div>
                          <button
                            onClick={() => {
                              setEditingDayNote(day.day);
                              setNoteInput(userNote);
                            }}
                            className="text-xs text-stone-400 hover:text-amber-300"
                          >
                            Edit
                          </button>
                        </div>
                      ) : editingDayNote === day.day ? (
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={noteInput}
                            onChange={(e) => setNoteInput(e.target.value)}
                            placeholder="Add a custom activity or personal note for this day..."
                            className="flex-1 bg-stone-950 border border-stone-700 rounded-xl px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-amber-400"
                            autoFocus
                          />
                          <button
                            onClick={() => saveNoteForDay(day.day)}
                            className="px-3 py-2 bg-amber-500 text-stone-950 text-xs font-bold rounded-xl"
                          >
                            Save Note
                          </button>
                          <button
                            onClick={() => setEditingDayNote(null)}
                            className="px-2 text-xs text-stone-400 hover:text-white"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => {
                            setEditingDayNote(day.day);
                            setNoteInput('');
                          }}
                          className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-amber-300 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5 text-amber-400" />
                          <span>Add custom note or activity to Day {day.day}</span>
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
