import React, { useState } from 'react';
import { Wallet, Compass, DollarSign, Calculator, HelpCircle, ArrowRight } from 'lucide-react';
import { Destination, UserPreferences, BudgetLevel } from '../types/travel';

interface BudgetPlannerProps {
  destination: Destination;
  preferences: UserPreferences;
  onUpdatePreferences: (prefs: Partial<UserPreferences>) => void;
}

export const BudgetPlanner: React.FC<BudgetPlannerProps> = ({
  destination,
  preferences,
  onUpdatePreferences,
}) => {
  const { budgetBreakdown } = destination;
  const currentLevel = preferences.budget || 'Moderate';
  const baseline = budgetBreakdown.dailyCosts[currentLevel] || {
    stay: 50,
    food: 25,
    transport: 15,
    attractions: 10,
    activities: 20,
    misc: 10,
  };

  const [days, setDays] = useState(preferences.days || 3);
  const [stayCost, setStayCost] = useState(baseline.stay);
  const [foodCost, setFoodCost] = useState(baseline.food);
  const [transportCost, setTransportCost] = useState(baseline.transport);
  const [attractionsCost, setAttractionsCost] = useState(baseline.attractions);
  const [activitiesCost, setActivitiesCost] = useState(baseline.activities);
  const [miscCost, setMiscCost] = useState(baseline.misc);

  // Update when level changes
  const applyPreset = (lvl: BudgetLevel) => {
    onUpdatePreferences({ budget: lvl });
    const cost = budgetBreakdown.dailyCosts[lvl];
    if (cost) {
      setStayCost(cost.stay);
      setFoodCost(cost.food);
      setTransportCost(cost.transport);
      setAttractionsCost(cost.attractions);
      setActivitiesCost(cost.activities);
      setMiscCost(cost.misc);
    }
  };

  const dailyTotalUSD =
    stayCost + foodCost + transportCost + attractionsCost + activitiesCost + miscCost;
  const grandTotalUSD = dailyTotalUSD * days;
  const grandTotalLocal = Math.round(
    grandTotalUSD / (budgetBreakdown.exchangeRateToUSD || 1)
  );

  return (
    <section className="py-16 bg-stone-900 text-stone-100 border-t border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
            <Compass className="w-4 h-4" />
            <span>Chapter IX · Transparent Trip Budget Planner</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Estimated Trip Budget for {destination.name}
          </h2>
          <p className="text-sm text-stone-400 mt-2">
            Clear, honest estimates for your trip. Adjust the sliders below to calculate custom totals for accommodation, food, transit, and experiences.
          </p>
        </div>

        {/* 2-Column Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls & Sliders (7 cols) */}
          <div className="lg:col-span-7 bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6">
            {/* Presets */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2.5">
                Select Budget Tier Preset
              </label>
              <div className="grid grid-cols-4 gap-2">
                {(['Budget', 'Moderate', 'Premium', 'Luxury'] as BudgetLevel[]).map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => applyPreset(lvl)}
                    className={`py-2 rounded-xl text-xs font-semibold transition-all ${
                      preferences.budget === lvl
                        ? 'bg-amber-400 text-stone-950 font-bold shadow-md'
                        : 'bg-stone-900 border border-stone-800 text-stone-300 hover:bg-stone-800'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Days slider */}
            <div>
              <div className="flex items-center justify-between text-xs text-stone-300 mb-1.5 font-medium">
                <span>Trip Duration:</span>
                <span className="text-amber-300 font-bold text-sm">{days} Days</span>
              </div>
              <input
                type="range"
                min="1"
                max="21"
                value={days}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setDays(val);
                  onUpdatePreferences({ days: val });
                }}
                className="w-full accent-amber-400 cursor-pointer"
              />
            </div>

            {/* Itemized Sliders */}
            <div className="space-y-4 pt-4 border-t border-stone-800">
              <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                Daily Expenses (USD per person / day)
              </div>

              {[
                { label: 'Accommodation', value: stayCost, setter: setStayCost, max: 800 },
                { label: 'Food & Dining', value: foodCost, setter: setFoodCost, max: 250 },
                { label: 'Transportation', value: transportCost, setter: setTransportCost, max: 120 },
                { label: 'Attractions & Entry', value: attractionsCost, setter: setAttractionsCost, max: 100 },
                { label: 'Experiences & Activities', value: activitiesCost, setter: setActivitiesCost, max: 200 },
                { label: 'Miscellaneous & Souvenirs', value: miscCost, setter: setMiscCost, max: 100 },
              ].map((item, idx) => (
                <div key={idx} className="bg-stone-900/60 p-3.5 rounded-2xl border border-stone-800/80">
                  <div className="flex items-center justify-between text-xs text-stone-300 mb-2">
                    <span>{item.label}</span>
                    <span className="font-semibold text-white">${item.value} / day</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={item.max}
                    step="5"
                    value={item.value}
                    onChange={(e) => item.setter(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Budget Summary Card (5 cols) */}
          <div className="lg:col-span-5 bg-stone-950 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
              <Calculator className="w-4 h-4" />
              <span>Projected Chapter Investment</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-white mb-6">
              Total Budget Breakdown
            </h3>

            {/* Total figures */}
            <div className="bg-stone-900/90 border border-stone-800 p-5 rounded-2xl mb-6">
              <div className="text-xs text-stone-400 mb-1">Estimated Total ({days} Days)</div>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-300">
                ${grandTotalUSD.toLocaleString()} <span className="text-sm font-sans font-normal text-stone-400">USD</span>
              </div>
              <div className="text-xs text-stone-400 mt-1">
                ≈ {budgetBreakdown.currencySymbol}
                {grandTotalLocal.toLocaleString()} {budgetBreakdown.currencyCode}
              </div>
            </div>

            {/* Itemized Total breakdown */}
            <div className="space-y-2 text-xs text-stone-300 mb-6">
              <div className="flex justify-between py-1.5 border-b border-stone-800/80">
                <span className="text-stone-400">Accommodation ({days} nights)</span>
                <span className="font-medium text-white">${stayCost * days}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-stone-800/80">
                <span className="text-stone-400">Food & Dining</span>
                <span className="font-medium text-white">${foodCost * days}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-stone-800/80">
                <span className="text-stone-400">Transportation</span>
                <span className="font-medium text-white">${transportCost * days}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-stone-800/80">
                <span className="text-stone-400">Attractions & Monuments</span>
                <span className="font-medium text-white">${attractionsCost * days}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-stone-800/80">
                <span className="text-stone-400">Experiences & Tours</span>
                <span className="font-medium text-white">${activitiesCost * days}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-stone-800/80">
                <span className="text-stone-400">Miscellaneous & Buffer</span>
                <span className="font-medium text-white">${miscCost * days}</span>
              </div>
            </div>

            {/* Money-saving advice */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-stone-300 leading-relaxed">
              <span className="text-amber-400 font-semibold block mb-1">
                💡 Local Budget Chapter Tip
              </span>
              Eating where residents eat and utilizing transit day passes typically reduces dining and transit expenses by 40-50% while offering far deeper cultural intimacy.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
