import React from 'react';
import {
  Compass,
  Bus,
  CloudSun,
  Coins,
  Clock,
  PhoneCall,
  ShieldAlert,
  Info,
  CheckCircle2
} from 'lucide-react';
import { Destination } from '../types/travel';

interface ImportantInfoSectionProps {
  destination: Destination;
}

export const ImportantInfoSection: React.FC<ImportantInfoSectionProps> = ({ destination }) => {
  const { importantInfo } = destination;

  return (
    <section className="py-16 bg-stone-950 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
            <Compass className="w-4 h-4" />
            <span>Chapter XI · Traveler Essentials & Safety</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Important Information for {destination.name}
          </h2>
          <p className="text-sm text-stone-400 mt-2">
            Local transportation options, weather seasons, emergency lines, currency norms, and safety guidance.
          </p>
        </div>

        {/* 4 Primary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Weather */}
          <div className="bg-stone-900 border border-stone-800 p-6 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                <CloudSun className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">
                Weather & Seasons
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed mb-4">
                {importantInfo.weather.currentOverview}
              </p>
            </div>
            <div className="space-y-1.5 border-t border-stone-800 pt-3 text-[11px] text-stone-400">
              {importantInfo.weather.seasons.map((s, i) => (
                <div key={i} className="flex justify-between">
                  <span className="text-stone-300 font-medium">{s.name} ({s.months}):</span>
                  <span className="text-amber-300">{s.temp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Currency */}
          <div className="bg-stone-900 border border-stone-800 p-6 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                <Coins className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">
                Currency & Tipping
              </h3>
              <div className="text-xs text-stone-300 space-y-2 mb-4 leading-relaxed">
                <div>
                  <strong className="text-white">{importantInfo.currency.name}</strong> ({importantInfo.currency.symbol} · {importantInfo.currency.code})
                </div>
                <div>{importantInfo.currency.cardAcceptance}</div>
              </div>
            </div>
            <div className="border-t border-stone-800 pt-3 text-[11px] text-stone-400">
              <span className="text-stone-300 font-medium block mb-0.5">Tipping Norms:</span>
              <span>{importantInfo.currency.tippingCulture}</span>
            </div>
          </div>

          {/* Time Zone & Emergency */}
          <div className="bg-stone-900 border border-stone-800 p-6 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">
                Emergency & Time
              </h3>
              <div className="text-xs text-stone-300 space-y-2 mb-4">
                <div>
                  <span className="text-stone-500 block">Time Zone:</span>
                  <strong className="text-white font-mono">{importantInfo.timeZone}</strong>
                </div>
                <div className="pt-1">
                  <span className="text-stone-500 block">Police:</span>
                  <span className="text-amber-300 font-bold">{importantInfo.emergency.police}</span>
                </div>
                <div>
                  <span className="text-stone-500 block">Medical / Ambulance:</span>
                  <span className="text-amber-300 font-bold">{importantInfo.emergency.ambulance}</span>
                </div>
              </div>
            </div>
            <div className="border-t border-stone-800 pt-3 text-[11px] text-stone-400">
              <span className="text-stone-300 font-medium block">Tourist Helpline:</span>
              <span className="text-white">{importantInfo.emergency.touristHelpline}</span>
            </div>
          </div>

          {/* Transit overview */}
          <div className="bg-stone-900 border border-stone-800 p-6 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                <Bus className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">
                Transit Highlights
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed mb-4">
                {importantInfo.transportation.overview}
              </p>
            </div>
            <div className="space-y-1 border-t border-stone-800 pt-3 text-[11px] text-stone-400">
              {importantInfo.transportation.options.slice(0, 2).map((opt, i) => (
                <div key={i}>
                  <strong className="text-stone-200">{opt.name}: </strong>
                  <span>{opt.tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Safety & Travel Tips Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-stone-900/60 border border-stone-800 p-6 rounded-3xl">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4" />
              <span>Safety & Well-being Advice</span>
            </h4>
            <ul className="space-y-2.5">
              {importantInfo.safetyTips.map((tip, idx) => (
                <li key={idx} className="text-xs text-stone-300 flex items-start gap-2.5 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0"></span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-stone-900/60 border border-stone-800 p-6 rounded-3xl">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Insider Travel Tips</span>
            </h4>
            <ul className="space-y-2.5">
              {importantInfo.travelTips.map((tip, idx) => (
                <li key={idx} className="text-xs text-stone-300 flex items-start gap-2.5 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0"></span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
