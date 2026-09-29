import React, { useState } from 'react';
import { Volume2, Languages, MessageCircle, Compass } from 'lucide-react';
import { Destination, UsefulPhrase } from '../types/travel';

interface LanguageSectionProps {
  destination: Destination;
}

export const LanguageSection: React.FC<LanguageSectionProps> = ({ destination }) => {
  const { languages } = destination;
  const [playingPhrase, setPlayingPhrase] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const speakPhrase = (phraseText: string, phraseObj: UsefulPhrase) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(phraseText);
      utterance.rate = 0.85;
      utterance.pitch = 1.0;

      // Assign language if available
      if (phraseObj.audioLanguage) {
        utterance.lang = phraseObj.audioLanguage;
      }

      setPlayingPhrase(phraseText);
      utterance.onend = () => setPlayingPhrase(null);
      utterance.onerror = () => setPlayingPhrase(null);

      window.speechSynthesis.speak(utterance);
    }
  };

  const phrases = languages.usefulPhrases || [];
  const filteredPhrases =
    selectedCategory === 'all'
      ? phrases
      : phrases.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-16 bg-stone-950 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
            <Compass className="w-4 h-4" />
            <span>Chapter IV · Voices & Helpful Phrases</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Languages & Essential Words in {destination.name}
          </h2>
          <p className="text-sm text-stone-400 mt-2">
            Speaking even two or three local words with a smile transforms you from a spectator into a welcomed guest.
          </p>
        </div>

        {/* Languages Overview Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-stone-900 border border-stone-800 p-5 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Languages className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-stone-400 uppercase tracking-wider font-semibold">
                Official Language(s)
              </div>
              <div className="text-base font-semibold text-white mt-0.5">
                {languages.officialLanguages.join(', ')}
              </div>
            </div>
          </div>

          <div className="bg-stone-900 border border-stone-800 p-5 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-stone-400 uppercase tracking-wider font-semibold">
                Commonly Spoken
              </div>
              <div className="text-base font-semibold text-white mt-0.5">
                {languages.commonlySpoken.join(', ')}
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {[
            { id: 'all', label: 'All Phrases' },
            { id: 'greeting', label: '👋 Greetings' },
            { id: 'thank_you', label: '🙏 Thank You' },
            { id: 'please', label: '✨ Please' },
            { id: 'directions', label: '🧭 Directions' },
            { id: 'food', label: '🍲 Food & Dining' },
            { id: 'help', label: '🆘 Emergency / Help' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-amber-400 text-stone-950 font-bold shadow-sm'
                  : 'bg-stone-900 text-stone-400 hover:text-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Phrase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPhrases.map((phrase, idx) => {
            const isPlaying = playingPhrase === phrase.phrase;
            return (
              <div
                key={idx}
                className="bg-stone-900 border border-stone-800 rounded-2xl p-5 hover:border-stone-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                      {phrase.translation}
                    </span>
                    <button
                      onClick={() => speakPhrase(phrase.phrase, phrase)}
                      className={`p-2 rounded-xl transition-all ${
                        isPlaying
                          ? 'bg-amber-500 text-stone-950 scale-110'
                          : 'bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700'
                      }`}
                      title="Listen to pronunciation"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="font-serif text-lg font-bold text-white mb-1">
                    {phrase.phrase}
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400">
                  <span>Pronounce:</span>
                  <span className="font-mono text-amber-200/90 text-[11px] bg-stone-950 px-2 py-0.5 rounded-md">
                    {phrase.pronunciation}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
