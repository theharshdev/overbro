'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Search, Package, Truck, CheckCircle2, Clock, MapPin, ArrowRight, AlertCircle } from 'lucide-react';

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState('');
  const [contact, setContact] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId.trim()) {
      setHasSearched(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <Breadcrumbs items={[{ label: 'TRACK YOUR ORDER' }]} />

      {/* Header */}
      <div className="mt-6 mb-12 text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-neutral-400 font-bold block">
          LIVE LOGISTICS & DISPATCH
        </span>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
          TRACK YOUR ORDER
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-normal pt-1">
          Enter your 6-digit Overbro Order ID and registered phone number or email to view real-time transit telemetry.
        </p>
      </div>

      {/* Tracking Search Card */}
      <div className="max-w-2xl mx-auto bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-10 mb-16 shadow-xl">
        <form onSubmit={handleTrack} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5 font-bold">
                ORDER ID *
              </label>
              <input
                type="text"
                required
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="e.g. OB-782914"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 font-mono focus:outline-none focus:border-white transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5 font-bold">
                PHONE NUMBER OR EMAIL *
              </label>
              <input
                type="text"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="e.g. 9876543210 or email"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-white text-neutral-950 font-black uppercase text-xs tracking-widest rounded-xl hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            <Search className="w-4 h-4" />
            <span>TRACK SHIPMENT</span>
          </button>
        </form>

        {hasSearched && (
          <div className="mt-8 pt-8 border-t border-neutral-800 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-neutral-900 gap-2">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">ORDER REFERENCE</span>
                <span className="text-base font-black font-mono text-white">{orderId.toUpperCase()}</span>
              </div>
              <div className="sm:text-right">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">ESTIMATED ARRIVAL</span>
                <span className="text-xs font-bold text-emerald-400 font-mono">IN TRANSIT • 2-3 BUSINESS DAYS</span>
              </div>
            </div>

            {/* Timeline Milestones */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-950 border border-emerald-500/60 flex items-center justify-center text-emerald-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Order Confirmed & Payment Verified</span>
                  <span className="text-[11px] text-neutral-400">Order placed and assigned to Delhi fulfillment hub.</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-950 border border-emerald-500/60 flex items-center justify-center text-emerald-400 shrink-0">
                  <Package className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Packed in Matte Heavy Box</span>
                  <span className="text-[11px] text-neutral-400">Garment inspected, bio-fresh sealed, and boxed with collectable cards.</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-950 border border-blue-500/60 flex items-center justify-center text-blue-400 shrink-0">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Dispatched via Bluedart Air Priority</span>
                  <span className="text-[11px] text-neutral-400">Airway Bill generated. In transit to destination hub.</span>
                </div>
              </div>

              <div className="flex items-start gap-4 opacity-50">
                <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-500 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-neutral-300 block">Out for Delivery</span>
                  <span className="text-[11px] text-neutral-500">Courier agent assigned with delivery OTP to your phone.</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Information Grid: Logistics Architecture */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-3xl space-y-3">
          <Clock className="w-6 h-6 text-neutral-400" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            24-HOUR DISPATCH
          </h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            All in-stock drop orders are processed, hand-inspected, and dispatched within 24 hours from our Delhi atelier.
          </p>
        </div>

        <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-3xl space-y-3">
          <Truck className="w-6 h-6 text-neutral-400" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            AIR EXPRESS COURIERS
          </h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            We partner exclusively with Tier-1 logistics networks: Bluedart Express, Delhivery Air, and Xpressbees for guaranteed tracking.
          </p>
        </div>

        <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-3xl space-y-3">
          <AlertCircle className="w-6 h-6 text-neutral-400" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            SMS & WHATSAPP UPDATES
          </h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Automated alerts with direct live tracking links are broadcast to your registered mobile at every checkpoint.
          </p>
        </div>
      </div>

      {/* Delivery Schedule Table */}
      <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
            TRANSIT TELEMETRY
          </span>
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
            NATIONWIDE DELIVERY SCHEDULES
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-neutral-800 text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                <th className="py-3 pr-4">DESTINATION ZONE</th>
                <th className="py-3 px-4">CARRIER SERVICE</th>
                <th className="py-3 px-4">ESTIMATED TRANSIT TIME</th>
                <th className="py-3 pl-4">SHIPPING COST</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-900 text-neutral-300">
              <tr>
                <td className="py-3.5 pr-4 font-bold text-white">Delhi NCR Region (Delhi, Gurugram, Noida)</td>
                <td className="py-3.5 px-4 font-mono text-neutral-400">Same-Day / Next-Day Express</td>
                <td className="py-3.5 px-4 font-mono text-emerald-400 font-bold">24 – 36 Hours</td>
                <td className="py-3.5 pl-4 font-mono text-white">FREE above ₹999</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 font-bold text-white">Tier-1 Metros (Mumbai, BLR, HYD, MAA, CCU)</td>
                <td className="py-3.5 px-4 font-mono text-neutral-400">Air Cargo Priority</td>
                <td className="py-3.5 px-4 font-mono text-emerald-400 font-bold">2 – 3 Business Days</td>
                <td className="py-3.5 pl-4 font-mono text-white">FREE above ₹999</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 font-bold text-white">Tier-2 & Tier-3 Cities across India</td>
                <td className="py-3.5 px-4 font-mono text-neutral-400">Surface Express Tracked</td>
                <td className="py-3.5 px-4 font-mono text-neutral-400">3 – 5 Business Days</td>
                <td className="py-3.5 pl-4 font-mono text-white">FREE above ₹999</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 font-bold text-white">North East, J&K, Island Territories</td>
                <td className="py-3.5 px-4 font-mono text-neutral-400">Special Route Air Priority</td>
                <td className="py-3.5 px-4 font-mono text-neutral-400">5 – 7 Business Days</td>
                <td className="py-3.5 pl-4 font-mono text-white">FREE above ₹999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Need Help CTA */}
      <div className="mt-12 text-center">
        <p className="text-xs text-neutral-400 mb-3">
          Unable to locate your order or tracking number?
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:underline"
        >
          <span>CONTACT SUPPORT DESK</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
