import React, { useState } from 'react';
import { Utensils, Compass, DollarSign, MapPin, Sparkles, Check } from 'lucide-react';
import { FoodDish, Destination } from '../types/travel';

interface LocalFoodSectionProps {
  destination: Destination;
}

type FoodFilter = 'All' | 'Vegetarian' | 'Non-Vegetarian' | 'Street Food' | 'Dessert' | 'Drink';

export const LocalFoodSection: React.FC<LocalFoodSectionProps> = ({ destination }) => {
  const [activeFilter, setActiveFilter] = useState<FoodFilter>('All');
  const { food } = destination;

  const filteredDishes = food.dishes.filter((dish) => {
    if (activeFilter === 'All') return true;
    return dish.category.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <section className="py-16 bg-stone-900 text-stone-100 border-t border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
            <Compass className="w-4 h-4" />
            <span>Chapter V · Culinary Soul & Signature Dishes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Local Food & Flavors in {destination.name}
          </h2>
          <p className="text-sm text-stone-400 mt-2">
            From smoky street grills and sweet artisanal pastries to generations-old family recipes, food is the fastest gateway to the heart of {destination.name}.
          </p>
        </div>

        {/* Dietary Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {(['All', 'Vegetarian', 'Non-Vegetarian', 'Street Food', 'Dessert', 'Drink'] as FoodFilter[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                activeFilter === cat
                  ? 'bg-amber-400 text-stone-950 font-bold shadow-sm'
                  : 'bg-stone-950 text-stone-300 hover:bg-stone-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-stone-950 border border-stone-800 rounded-3xl overflow-hidden hover:border-stone-700 transition-all flex flex-col group shadow-lg"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-stone-950/80 backdrop-blur-md text-amber-300 text-xs font-semibold border border-stone-700/60">
                    {dish.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed mb-4">
                    {dish.description}
                  </p>
                </div>

                <div className="space-y-2 text-xs text-stone-400 border-t border-stone-800/80 pt-3">
                  <div className="flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-stone-300">{dish.whereToTry}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-stone-400">Estimated Price</span>
                    <span className="text-amber-300 font-semibold">{dish.approxPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recommended Food Experiences Card */}
        {food.recommendedExperiences && food.recommendedExperiences.length > 0 && (
          <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Unmissable Culinary Rituals</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {food.recommendedExperiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-stone-950/80 border border-stone-800/80 p-4 rounded-2xl flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-xs text-stone-200 leading-relaxed">{exp}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
