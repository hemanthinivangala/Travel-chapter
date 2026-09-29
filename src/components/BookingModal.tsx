import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  Calendar,
  Users,
  ShieldCheck,
  CreditCard,
  QrCode,
  Printer,
  Download,
  Building,
  Plane,
  Sparkles,
  ArrowRight,
  Info,
  ExternalLink
} from 'lucide-react';
import { ConfirmedBooking, Destination } from '../types/travel';

export interface BookingTargetItem {
  id: string;
  title: string;
  type: 'accommodation' | 'transport' | 'experience' | 'package';
  location: string;
  priceUSD: number;
  originalPriceUSD?: number;
  provider?: string;
  perks?: string[];
  image?: string;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: BookingTargetItem | null;
  destination: Destination;
  onConfirmBooking: (booking: ConfirmedBooking) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  item,
  destination,
  onConfirmBooking,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form state
  const [travelerName, setTravelerName] = useState('Alex Mercer');
  const [travelerEmail, setTravelerEmail] = useState('alex.mercer@example.com');
  const [travelerPhone, setTravelerPhone] = useState('+1 (555) 234-5678');
  const [specialRequest, setSpecialRequest] = useState('');
  const [roomOrSeatClass, setRoomOrSeatClass] = useState('Standard Preferred Room');
  const [guestsCount, setGuestsCount] = useState(2);
  const [paymentMethod, setPaymentMethod] = useState<'Credit / Debit Card' | 'Pay at Property' | 'Apple Pay' | 'UPI Instant'>('Credit / Debit Card');
  const [confirmedBookingData, setConfirmedBookingData] = useState<ConfirmedBooking | null>(null);

  if (!isOpen || !item) return null;

  const taxesUSD = Math.round(item.priceUSD * 0.12);
  const totalAmountUSD = item.priceUSD + taxesUSD;

  const handleConfirmReservation = () => {
    const bookingRef = `TC-${destination.name.substring(0, 3).toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`;
    const pnr = `PNR-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    const newBooking: ConfirmedBooking = {
      id: `booking-${Date.now()}`,
      bookingReference: bookingRef,
      pnrCode: pnr,
      type: item.type,
      title: item.title,
      destinationName: destination.name,
      destinationId: destination.id,
      dates: 'Flexible dates (Spring / Autumn Season)',
      guestsCount,
      travelerName,
      travelerEmail,
      travelerPhone,
      totalPriceUSD: totalAmountUSD,
      paymentMethod,
      paymentStatus: paymentMethod === 'Pay at Property' ? 'Pay at Arrival' : 'Confirmed & Guaranteed',
      bookedAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      perks: item.perks || ['Free Cancellation up to 48 hours', 'Instant Confirmation', '24/7 Concierge Support'],
      roomOrSeatClass,
    };

    setConfirmedBookingData(newBooking);
    onConfirmBooking(newBooking);
    setStep(4);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-stone-900 border border-stone-800 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative text-stone-100 animate-in fade-in zoom-in-95">
        {/* Header Bar */}
        <div className="p-6 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
              TC
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                Direct Travel Chapter Booking
              </div>
              <h3 className="font-serif text-lg font-bold text-white leading-tight">
                {step === 4 ? 'Booking Confirmed & Guaranteed' : `Reserve: ${item.title}`}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Steps */}
        <div className="p-6 sm:p-8">
          {step === 1 && (
            <div className="space-y-6">
              {/* Item Card */}
              <div className="bg-stone-950 p-4 rounded-2xl border border-stone-800 flex items-start gap-4">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 rounded-xl object-cover shrink-0"
                  />
                )}
                <div className="flex-1">
                  <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                    {item.type}
                  </span>
                  <h4 className="font-serif font-bold text-white text-base">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-400 mt-0.5">{item.location}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs font-bold text-amber-300">
                      ${item.priceUSD} USD
                    </span>
                    {item.originalPriceUSD && (
                      <span className="text-xs text-stone-500 line-through">
                        ${item.originalPriceUSD} USD
                      </span>
                    )}
                    {item.provider && (
                      <span className="text-[10px] bg-stone-800 text-stone-300 px-2 py-0.5 rounded-full">
                        Fulfilled via {item.provider}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Class / Room Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
                  {item.type === 'transport' ? 'Seat / Travel Class' : 'Room Category / Ticket Tier'}
                </label>
                <select
                  value={roomOrSeatClass}
                  onChange={(e) => setRoomOrSeatClass(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-sm text-stone-200 focus:outline-none focus:border-amber-400"
                >
                  <option value="Standard Preferred Room">Standard Preferred Category (Included)</option>
                  <option value="Deluxe Heritage View">Deluxe Heritage View (+$35/night)</option>
                  <option value="Executive Club Suite">Executive Club Suite (+$75/night)</option>
                </select>
              </div>

              {/* Number of Guests */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
                    Number of Guests
                  </label>
                  <div className="flex items-center bg-stone-950 border border-stone-800 rounded-xl p-2.5">
                    <Users className="w-4 h-4 text-amber-400 mr-2" />
                    <select
                      value={guestsCount}
                      onChange={(e) => setGuestsCount(Number(e.target.value))}
                      className="bg-transparent text-sm text-stone-200 w-full focus:outline-none"
                    >
                      <option value={1} className="bg-stone-900">1 Traveler</option>
                      <option value={2} className="bg-stone-900">2 Travelers</option>
                      <option value={3} className="bg-stone-900">3 Travelers</option>
                      <option value={4} className="bg-stone-900">4+ Travelers</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
                    Cancellation Guarantee
                  </label>
                  <div className="bg-stone-950 border border-stone-800 rounded-xl p-2.5 flex items-center gap-2 text-xs text-emerald-400">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>Free cancellation before 48h</span>
                  </div>
                </div>
              </div>

              {/* Next Step */}
              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl text-sm transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                <span>Continue to Traveler Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                  Lead Traveler Full Name
                </label>
                <input
                  type="text"
                  value={travelerName}
                  onChange={(e) => setTravelerName(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-amber-400"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                    Email for Confirmation Voucher
                  </label>
                  <input
                    type="email"
                    value={travelerEmail}
                    onChange={(e) => setTravelerEmail(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-amber-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                    Phone Number (SMS Alert)
                  </label>
                  <input
                    type="tel"
                    value={travelerPhone}
                    onChange={(e) => setTravelerPhone(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                  Special Requests (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Quiet room, late check-in, dietary preferences, high floor..."
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="flex items-center gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-3 rounded-xl bg-stone-800 text-stone-300 text-xs font-semibold"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl text-sm transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-2"
                >
                  <span>Review & Payment Method</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              {/* Price Breakdown */}
              <div className="bg-stone-950 p-4 rounded-2xl border border-stone-800 text-xs space-y-2">
                <div className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold mb-2">
                  Final Price Summary
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>Base Rate ({guestsCount} Travelers)</span>
                  <span className="font-medium text-white">${item.priceUSD} USD</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>Local Municipal Taxes & Resort / Service Surcharge</span>
                  <span className="font-medium text-white">${taxesUSD} USD</span>
                </div>
                <div className="border-t border-stone-800 pt-2 flex justify-between text-sm font-bold text-amber-300">
                  <span>Total Amount Due</span>
                  <span>${totalAmountUSD} USD</span>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2.5">
                  Select Payment Option
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { id: 'Credit / Debit Card', label: 'Credit / Debit Card', icon: CreditCard },
                    { id: 'Pay at Property', label: 'Pay at Arrival (No prepay)', icon: Building },
                    { id: 'Apple Pay', label: 'Apple Pay / Digital Wallet', icon: ShieldCheck },
                    { id: 'UPI Instant', label: 'Instant UPI / QR Code', icon: QrCode },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setPaymentMethod(opt.id as any)}
                      className={`p-3 rounded-xl border text-left text-xs font-medium flex items-center gap-2.5 transition-all ${
                        paymentMethod === opt.id
                          ? 'bg-amber-500/10 border-amber-400 text-amber-300'
                          : 'bg-stone-950 border-stone-800 text-stone-400 hover:text-white'
                      }`}
                    >
                      <opt.icon className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="line-clamp-1">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-3 rounded-xl bg-stone-800 text-stone-300 text-xs font-semibold"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleConfirmReservation}
                  className="flex-1 py-3.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-stone-950 font-bold rounded-xl text-sm transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Confirm Reservation & Issue Ticket Voucher</span>
                </button>
              </div>
            </div>
          )}

          {step === 4 && confirmedBookingData && (
            <div className="space-y-6 print:text-black">
              {/* Success Badge */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white print:text-black">
                  Reservation Confirmed!
                </h3>
                <p className="text-xs text-stone-400 print:text-stone-700">
                  Confirmation voucher has been issued for <strong>{confirmedBookingData.travelerName}</strong>.
                </p>
              </div>

              {/* Printable Official Voucher Box */}
              <div className="bg-stone-950 border-2 border-amber-500/40 rounded-3xl p-6 relative overflow-hidden print:bg-white print:border-black">
                <div className="flex items-start justify-between border-b border-stone-800 pb-4 mb-4 print:border-stone-300">
                  <div>
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                      TRAVEL CHAPTER OFFICIAL TICKET VOUCHER
                    </span>
                    <h4 className="font-serif text-xl font-bold text-white print:text-black">
                      {confirmedBookingData.title}
                    </h4>
                    <span className="text-xs text-stone-400">{confirmedBookingData.destinationName}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-stone-500 block uppercase">Booking Reference</span>
                    <span className="font-mono text-base font-bold text-amber-300 print:text-black">
                      {confirmedBookingData.bookingReference}
                    </span>
                    {confirmedBookingData.pnrCode && (
                      <span className="text-[10px] text-stone-400 block font-mono">
                        {confirmedBookingData.pnrCode}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs mb-4">
                  <div>
                    <span className="text-stone-500 block">Lead Traveler</span>
                    <span className="font-semibold text-white print:text-black">{confirmedBookingData.travelerName}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Guests</span>
                    <span className="font-semibold text-white print:text-black">{confirmedBookingData.guestsCount} Travelers</span>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Tier / Room Class</span>
                    <span className="font-semibold text-white print:text-black">{confirmedBookingData.roomOrSeatClass}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Payment Status</span>
                    <span className="font-semibold text-emerald-400 print:text-emerald-700">{confirmedBookingData.paymentStatus}</span>
                  </div>
                </div>

                {/* Barcode / QR Simulation */}
                <div className="bg-stone-900 border border-stone-800 p-3 rounded-xl flex items-center justify-between print:border-stone-300 print:bg-stone-50">
                  <div className="flex items-center gap-2 text-xs text-stone-300 print:text-black">
                    <QrCode className="w-6 h-6 text-amber-400" />
                    <span>Scan at check-in or transit turnstile</span>
                  </div>
                  <span className="text-xs font-bold text-white print:text-black">
                    ${confirmedBookingData.totalPriceUSD} USD Total
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 print:hidden">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="flex-1 py-3 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold rounded-xl flex items-center justify-center gap-2"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print / Save Voucher PDF</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold rounded-xl shadow-md shadow-amber-500/20"
                >
                  View in My Trip Dashboard
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
