import React, { useState } from 'react';
import { Compass, Clock, DollarSign, Sparkles, Plus, Check, Ticket } from 'lucide-react';
import { Destination, Experience } from '../types/travel';

interface ExperiencesSectionProps {
  destination: Destination;
  onAddExperience?: (exp: Experience) => void;
  onBookExperience?: (exp: Experience) => void;
}

type ExperienceTypeFilter =
  | 'all'
  | 'cooking'
  | 'cultural'
  | 'nature'
  | 'adventure'
  | 'walking'
  | 'photography'
  | 'relaxation';

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({
  destination,
  onAddExperience,
  onBookExperience,
}) => {
  const [activeFilter, setActiveFilter] = useState<ExperienceTypeFilter>('all');
  const [addedIds, setAddedIds] = useState<string[]>([]);

  const experiences = destination.experiences || [];
  const filtered = experiences.filter((exp) => {
    if (activeFilter === 'all') return true;
    return exp.type === activeFilter;
  });

  const handleAdd = (exp: Experience) => {
    if (onAddExperience) {
      onAddExperience(exp);
      setAddedIds((prev) => [...prev, exp.id]);
      setTimeout(() => {
        setAddedIds((prev) => prev.filter((id) => id !== exp.id));
      }, 2500);
    }
  };

  return (
    <section id="experiences-section" className="py-16 bg-stone-950 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
            <Compass className="w-4 h-4" />
            <span>Chapter VI · Transformative Living Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Curated Experiences in {destination.name}
          </h2>
          <p className="text-sm text-stone-400 mt-2">
            Instead of merely sightseeing, immerse yourself through walking tours, culinary workshops, sunrise sails, and community encounters.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {[
            { id: 'all', label: 'All Experiences' },
            { id: 'walking', label: '🚶 Walking Tours' },
            { id: 'cultural', label: '🎭 Cultural & Artisans' },
            { id: 'cooking', label: '🍳 Cooking Classes' },
            { id: 'nature', label: '🌿 Nature & Wildlife' },
            { id: 'adventure', label: '🧗 Adventure' },
            { id: 'photography', label: '📷 Photography' },
            { id: 'relaxation', label: '🧘 Relaxation & Sailing' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id as ExperienceTypeFilter)}
              className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                activeFilter === cat.id
                  ? 'bg-amber-400 text-stone-950 font-bold shadow-sm'
                  : 'bg-stone-900 text-stone-300 hover:bg-stone-800 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((exp) => {
            const isAdded = addedIds.includes(exp.id);
            return (
              <div
                key={exp.id}
                className="bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden hover:border-stone-700 transition-all flex flex-col group shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-stone-950/80 backdrop-blur-md text-amber-300 text-xs font-semibold border border-stone-700/60 uppercase">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-xs text-stone-300 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="p-3 rounded-2xl bg-stone-950 border border-stone-800/80 mb-5">
                      <div className="text-[10px] uppercase tracking-wider text-amber-400 font-semibold mb-0.5">
                        Experience Highlight
                      </div>
                      <p className="text-xs text-stone-300 italic">
                        “{exp.highlight}”
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs text-stone-400 border-t border-stone-800 pt-3 mb-4">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        <span>{exp.duration}</span>
                      </span>
                      <span className="flex items-center gap-1 text-amber-300 font-semibold">
                        <DollarSign className="w-3.5 h-3.5" />
                        <span>{exp.cost}</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {onAddExperience && (
                        <button
                          type="button"
                          onClick={() => handleAdd(exp)}
                          className={`flex-1 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                            isAdded
                              ? 'bg-emerald-500 text-stone-950'
                              : 'bg-stone-800 hover:bg-stone-700 text-stone-100 border border-stone-700 hover:text-white'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Added to Plan</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5 text-amber-400" />
                              <span>Add to Plan</span>
                            </>
                          )}
                        </button>
                      )}

                      {onBookExperience && (
                        <button
                          type="button"
                          onClick={() => onBookExperience(exp)}
                          className="py-2.5 px-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20 shrink-0"
                          title="Instant Confirmation Booking"
                        >
                          <Ticket className="w-3.5 h-3.5" />
                          <span>Book Pass</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
