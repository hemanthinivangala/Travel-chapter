import React, { useState } from 'react';
import { Compass, Check, Sliders, ArrowRight, ShieldCheck, Clock, DollarSign } from 'lucide-react';
import { Destination, TourPackage } from '../types/travel';

interface TourPackagesSectionProps {
  destination: Destination;
  onSelectPackage: (pkg: TourPackage) => void;
}

export const TourPackagesSection: React.FC<TourPackagesSectionProps> = ({
  destination,
  onSelectPackage,
}) => {
  const packages = destination.packages || [];
  const [selectedAddons, setSelectedAddons] = useState<{ [pkgId: string]: string[] }>({});

  const toggleAddon = (pkgId: string, addon: string) => {
    const current = selectedAddons[pkgId] || [];
    if (current.includes(addon)) {
      setSelectedAddons({
        ...selectedAddons,
        [pkgId]: current.filter((a) => a !== addon),
      });
    } else {
      setSelectedAddons({
        ...selectedAddons,
        [pkgId]: [...current, addon],
      });
    }
  };

  const calculateBudget = (pkg: TourPackage) => {
    const addons = selectedAddons[pkg.id] || [];
    const addonCost = addons.length * 45; // average addition cost
    return pkg.estimatedBudget + addonCost;
  };

  return (
    <section id="packages-section" className="py-16 bg-stone-950 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
            <Compass className="w-4 h-4" />
            <span>Chapter VIII · Curated & Customizable Packages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Curated Travel Packages for {destination.name}
          </h2>
          <p className="text-sm text-stone-400 mt-2">
            Pre-designed, fully adaptable chapter journeys. Toggle add-on experiences to tailor each itinerary to your desires.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => {
            const currentAddons = selectedAddons[pkg.id] || [];
            const totalBudget = calculateBudget(pkg);

            return (
              <div
                key={pkg.id}
                className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-stone-700 transition-all shadow-xl relative"
              >
                <div>
                  {/* Duration Tag & Title */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold border border-amber-500/30">
                      {pkg.durationDays} {pkg.durationDays === 1 ? 'Day' : 'Days'} Chapter
                    </span>
                    <span className="text-xs text-stone-400">Customizable</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-stone-300 italic mb-6">
                    “{pkg.tagline}”
                  </p>

                  {/* Included Specs */}
                  <div className="space-y-2.5 text-xs text-stone-300 bg-stone-950/70 border border-stone-800 p-4 rounded-2xl mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-stone-400">Stay Type</span>
                      <span className="font-medium text-white">{pkg.accommodationCategory}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-stone-400">Transit</span>
                      <span className="font-medium text-white">{pkg.transportation}</span>
                    </div>
                  </div>

                  {/* Included Experiences */}
                  <div className="mb-6">
                    <div className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold mb-2.5">
                      Included Highlights
                    </div>
                    <ul className="space-y-2">
                      {pkg.includedExperiences.map((exp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-stone-200">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Customization Addons */}
                  {pkg.customizableOptions && pkg.customizableOptions.length > 0 && (
                    <div className="mb-6 pt-4 border-t border-stone-800">
                      <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-stone-400 font-semibold mb-2.5">
                        <Sliders className="w-3.5 h-3.5 text-amber-400" />
                        <span>Optional Add-Ons</span>
                      </div>
                      <div className="space-y-1.5">
                        {pkg.customizableOptions.map((addon, idx) => {
                          const isSelected = currentAddons.includes(addon);
                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => toggleAddon(pkg.id, addon)}
                              className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center justify-between border transition-all ${
                                isSelected
                                  ? 'bg-amber-500/10 border-amber-400 text-amber-300 font-medium'
                                  : 'bg-stone-950/60 border-stone-800 text-stone-400 hover:text-stone-200'
                              }`}
                            >
                              <span>+ {addon}</span>
                              <span className="text-[10px] text-amber-400 font-semibold">
                                {isSelected ? 'Added' : '+$45'}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Price and CTA */}
                <div className="pt-6 border-t border-stone-800">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-xs text-stone-400">Estimated Total Plan</span>
                    <div>
                      <span className="text-2xl font-serif font-bold text-amber-300">
                        ${totalBudget}
                      </span>
                      <span className="text-[11px] text-stone-500 ml-1">USD</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectPackage(pkg)}
                    className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-2"
                  >
                    <span>Load This Chapter Plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
