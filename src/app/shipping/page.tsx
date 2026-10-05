'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Truck, Clock, ShieldCheck, MapPin, PackageCheck, AlertCircle, ArrowRight } from 'lucide-react';

export default function ShippingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <Breadcrumbs items={[{ label: 'SHIPPING & DELIVERY INFO' }]} />

      {/* Header */}
      <div className="mt-6 mb-12 text-center max-w-4xl mx-auto space-y-4">
        <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-neutral-400 font-bold block">
          LOGISTICS & FULFILLMENT
        </span>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
          SHIPPING & DELIVERY
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-normal pt-1 max-w-2xl mx-auto">
          Every Overbro order is packed with surgical care and dispatched directly from our central Delhi fulfillment hub with priority air express courier partners.
        </p>
      </div>

      {/* 4 Feature Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-3xl space-y-3">
          <Truck className="w-6 h-6 text-white" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            FREE SHIPPING OVER ₹999
          </h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            All orders above ₹999 qualify for 100% complimentary air express shipping anywhere in India.
          </p>
        </div>

        <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-3xl space-y-3">
          <Clock className="w-6 h-6 text-white" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            24-HOUR DISPATCH
          </h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            In-stock orders placed Monday through Saturday are packed and handed to courier networks within 24 hours.
          </p>
        </div>

        <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-3xl space-y-3">
          <PackageCheck className="w-6 h-6 text-white" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            TAMPER-PROOF PACKAGING
          </h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Every garment is individually dust-bagged and boxed in our custom matte black heavy shipping cartons.
          </p>
        </div>

        <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-3xl space-y-3">
          <MapPin className="w-6 h-6 text-white" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            19,000+ PINCODES
          </h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Complete doorstep coverage across metros, tier-2, tier-3 cities, and regional territories nationwide.
          </p>
        </div>
      </div>

      {/* Delivery Schedule Table */}
      <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-8 sm:p-10 mb-16 shadow-xl space-y-6">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
            ESTIMATED TIMELINES
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            TRANSIT TIMES BY REGION
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-neutral-800 text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                <th className="py-3.5 pr-4 font-bold text-white">LOCATION REGION</th>
                <th className="py-3.5 px-4 font-bold">DISPATCH CARRIER</th>
                <th className="py-3.5 px-4 font-bold">ESTIMATED TRANSIT</th>
                <th className="py-3.5 pl-4 font-bold">SHIPPING CHARGE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-900 text-neutral-300">
              <tr>
                <td className="py-4 pr-4 font-bold text-white">Delhi NCR (Delhi, Gurugram, Noida, Faridabad, Ghaziabad)</td>
                <td className="py-4 px-4 font-mono text-neutral-400">Bluedart Local Air / Surface Priority</td>
                <td className="py-4 px-4 font-mono text-emerald-400 font-bold">24 – 36 Hours</td>
                <td className="py-4 pl-4 font-mono text-white">FREE (Orders ₹999+)</td>
              </tr>
              <tr>
                <td className="py-4 pr-4 font-bold text-white">Metros (Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Pune)</td>
                <td className="py-4 px-4 font-mono text-neutral-400">Delhivery Air / Bluedart Air Cargo</td>
                <td className="py-4 px-4 font-mono text-emerald-400 font-bold">2 – 3 Business Days</td>
                <td className="py-4 pl-4 font-mono text-white">FREE (Orders ₹999+)</td>
              </tr>
              <tr>
                <td className="py-4 pr-4 font-bold text-white">State Capitals & Tier 2 / 3 Cities</td>
                <td className="py-4 px-4 font-mono text-neutral-400">Xpressbees / Delhivery Express</td>
                <td className="py-4 px-4 font-mono text-neutral-300">3 – 5 Business Days</td>
                <td className="py-4 pl-4 font-mono text-white">FREE (Orders ₹999+)</td>
              </tr>
              <tr>
                <td className="py-4 pr-4 font-bold text-white">North-Eastern States, J&K, Remote Pincodes</td>
                <td className="py-4 px-4 font-mono text-neutral-400">Speed Post Air / Delhivery Special</td>
                <td className="py-4 px-4 font-mono text-neutral-300">5 – 7 Business Days</td>
                <td className="py-4 pl-4 font-mono text-white">FREE (Orders ₹999+)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Frequently Asked Shipping Questions */}
      <div className="space-y-6 mb-16">
        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
          SHIPPING FAQs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-3xl space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              How do I track my package?
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              As soon as your parcel is scanned by our carrier, you will receive an automated WhatsApp and SMS containing your live tracking URL and Airway Bill (AWB) number. You can also track anytime on our <Link href="/track-order" className="text-white underline">Track Order</Link> page.
            </p>
          </div>

          <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-3xl space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              What are the charges for orders below ₹999?
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Orders below ₹999 incur a flat nominal shipping fee of ₹99 to cover high-speed air cargo logistics.
            </p>
          </div>

          <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-3xl space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Do you offer Cash on Delivery (COD)?
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Yes, Cash on Delivery is available across 17,000+ serviceable pincodes with a zero COD surcharge.
            </p>
          </div>

          <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-3xl space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              What if my parcel arrives damaged?
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              If the outer box seal appears tampered with upon delivery, please refuse the delivery and contact our support desk immediately at <Link href="/contact" className="text-white underline">support@overbro.in</Link>.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pt-4">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 bg-white text-neutral-950 px-8 py-4 text-xs font-black uppercase tracking-widest rounded-xl hover:bg-neutral-200 transition-colors shadow-lg"
        >
          <span>CONTINUE SHOPPING</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
