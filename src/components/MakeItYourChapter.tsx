import React from 'react';
import { Compass, Sparkles, Check, ArrowRight } from 'lucide-react';
import { Destination, ChapterStyle } from '../types/travel';

interface MakeItYourChapterProps {
  destination: Destination;
  selectedStyle: ChapterStyle;
  onSelectStyle: (style: ChapterStyle) => void;
  onApplyStyleToItinerary: (style: ChapterStyle) => void;
}

const STYLES_LIST: { id: ChapterStyle; icon: string; title: string }[] = [
  { id: 'A peaceful chapter', icon: '🌿', title: 'A Peaceful Chapter' },
  { id: 'An adventurous chapter', icon: '🧗', title: 'An Adventurous Chapter' },
  { id: 'A cultural chapter', icon: '🏛️', title: 'A Cultural Chapter' },
  { id: 'A food-filled chapter', icon: '🍜', title: 'A Food-Filled Chapter' },
  { id: 'A romantic chapter', icon: '🍷', title: 'A Romantic Chapter' },
  { id: 'A family chapter', icon: '👨‍👩‍👧', title: 'A Family Chapter' },
  { id: 'A chapter of discovery', icon: '🧭', title: 'A Chapter of Discovery' },
];

export const MakeItYourChapter: React.FC<MakeItYourChapterProps> = ({
  destination,
  selectedStyle,
  onSelectStyle,
  onApplyStyleToItinerary,
}) => {
  const currentChapter = destination.chapterStyles[selectedStyle] || {
    subtitle: 'Tailored specifically for your travel aspirations',
    quote: '“Every destination can become a beautiful chapter of your life.”',
    highlights: ['Signature landmarks', 'Scenic vistas', 'Local encounters'],
    sampleDay: 'Experience the magic of this destination aligned with your personal rhythm.',
  };

  return (
    <section className="py-20 bg-stone-900 text-stone-100 border-t border-b border-stone-800 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Make It Your Chapter</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            How will you spend your chapter here?
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-3 font-light leading-relaxed">
            The same destination becomes entirely different depending on how you choose to live it. Select your life chapter below:
          </p>
        </div>

        {/* Style Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-10">
          {STYLES_LIST.map((item) => {
            const isSelected = selectedStyle === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectStyle(item.id)}
                className={`p-3 rounded-2xl border transition-all text-center flex flex-col items-center justify-center gap-1.5 ${
                  isSelected
                    ? 'bg-amber-400 text-stone-950 border-amber-400 font-bold shadow-lg shadow-amber-500/20 scale-105'
                    : 'bg-stone-950/80 border-stone-800 text-stone-300 hover:border-stone-700 hover:text-white'
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xs tracking-tight line-clamp-1">{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Chapter Showcase Card */}
        <div className="bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Selected Theme
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
              “{selectedStyle}” in {destination.name}
            </h3>
            <p className="text-stone-400 text-sm mt-1">{currentChapter.subtitle}</p>
            <p className="text-amber-200/90 italic font-serif text-base sm:text-lg mt-4 px-4 py-2 border-y border-stone-800">
              {currentChapter.quote}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* Highlights */}
            <div className="bg-stone-900/80 border border-stone-800 p-6 rounded-2xl">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-4 flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400" />
                <span>Chapter Signature Highlights</span>
              </h4>
              <ul className="space-y-3">
                {currentChapter.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-stone-200 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sample Day Blueprint */}
            <div className="bg-stone-900/80 border border-stone-800 p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-4 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-amber-400" />
                  <span>A Day in this Chapter</span>
                </h4>
                <p className="text-sm text-stone-300 leading-relaxed italic">
                  “{currentChapter.sampleDay}”
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800">
                <button
                  type="button"
                  onClick={() => onApplyStyleToItinerary(selectedStyle)}
                  className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-2"
                >
                  <span>Apply This Chapter to My Itinerary</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
