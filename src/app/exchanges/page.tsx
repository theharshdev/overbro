'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { RefreshCw, ShieldAlert, CheckCircle2, XCircle, ArrowRight, MessageSquare, Clock } from 'lucide-react';

export default function ExchangesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <Breadcrumbs items={[{ label: '7-DAY EXCHANGES ONLY' }]} />

      {/* Header */}
      <div className="mt-6 mb-12 text-center max-w-4xl mx-auto space-y-4">
        <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-neutral-400 font-bold block">
          STORE POLICY & FIT ASSURANCE
        </span>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
          7-DAY EXCHANGES ONLY
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-normal pt-1 max-w-2xl mx-auto">
          Need a different size or fit? We provide 100% hassle-free doorstep size exchanges within 7 days of delivery.
        </p>
      </div>

      {/* Strict Policy Banner */}
      <div className="mb-16 p-8 bg-neutral-950 border border-neutral-800 rounded-3xl space-y-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-500/40 flex items-center justify-center text-amber-400 flex-shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold uppercase tracking-wider text-white">
              OUR POLICY: 100% EXCHANGES • NO CASH RETURNS
            </h2>
            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
              LIMITED EDITION DROP ARCHITECTURE
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-2">
          Overbro operates as a limited-edition drop house with numbered batch allocations. As each batch is produced in finite quantities, <strong className="text-white">we do not accept cancellations or cash/bank returns once delivered</strong>.
        </p>
        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
          However, our primary concern is that your oversized silhouette fits you to absolute perfection. Therefore, <strong className="text-white">we provide complimentary, zero-charge doorstep size and product exchanges within 7 days of delivery</strong> across India.
        </p>
      </div>

      {/* Step by Step Exchange Process */}
      <div className="mb-16 space-y-6">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
            HOW IT WORKS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            THE 4-STEP EXCHANGE PROCESS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-3xl space-y-3">
            <span className="text-xs font-mono font-bold text-white block">STEP 01</span>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              REQUEST AN EXCHANGE
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Message our support desk on WhatsApp or submit a ticket on our <Link href="/contact" className="text-white underline">Contact page</Link> with your Order ID and preferred replacement size.
            </p>
          </div>

          <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-3xl space-y-3">
            <span className="text-xs font-mono font-bold text-white block">STEP 02</span>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              INSTANT APPROVAL
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Our team verifies sizing availability and schedules a reverse pickup right from your doorstep via Bluedart or Delhivery within 24 hours.
            </p>
          </div>

          <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-3xl space-y-3">
            <span className="text-xs font-mono font-bold text-white block">STEP 03</span>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              DOORSTEP PICKUP
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Keep the garment packed in its original box with all tags attached. The courier agent will collect the item and provide a digital receipt.
            </p>
          </div>

          <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-3xl space-y-3">
            <span className="text-xs font-mono font-bold text-white block">STEP 04</span>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              NEW SIZE DISPATCHED
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              As soon as pickup is confirmed, your replacement size is dispatched via air priority with brand new live tracking details.
            </p>
          </div>
        </div>
      </div>

      {/* Conditions Table: Eligible vs Non-Eligible */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="p-8 bg-neutral-950 border border-neutral-800 rounded-3xl space-y-4">
          <div className="flex items-center gap-2 text-emerald-400">
            <CheckCircle2 className="w-5 h-5" />
            <h3 className="text-base font-bold uppercase tracking-wider text-white">
              ELIGIBLE FOR EXCHANGE
            </h3>
          </div>
          <ul className="space-y-3 text-xs text-neutral-300 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span>Exchange initiated within 7 calendar days of delivery.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span>Garment is unworn, unwashed, and in pristine original condition.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span>All original brand tags, neck labels, and dust packaging intact.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span>Different size swap or alternative in-stock colorway.</span>
            </li>
          </ul>
        </div>

        <div className="p-8 bg-neutral-950 border border-neutral-800 rounded-3xl space-y-4">
          <div className="flex items-center gap-2 text-rose-400">
            <XCircle className="w-5 h-5" />
            <h3 className="text-base font-bold uppercase tracking-wider text-white">
              INELIGIBLE FOR EXCHANGE / RETURN
            </h3>
          </div>
          <ul className="space-y-3 text-xs text-neutral-300 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-rose-400 font-bold">•</span>
              <span>Requests made after the 7-day delivery window has expired.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400 font-bold">•</span>
              <span>Garments showing signs of wear, body scent, deodorant, or washing.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400 font-bold">•</span>
              <span>Missing or severed brand swing tags.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400 font-bold">•</span>
              <span>Requests for monetary refunds or cash bank reversals.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Start Exchange CTA */}
      <div className="p-8 bg-neutral-900/40 border border-neutral-800 rounded-3xl text-center space-y-4 max-w-2xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
          NEED TO INITIATE AN EXCHANGE?
        </h3>
        <p className="text-xs text-neutral-400 leading-relaxed">
          Contact our support concierge directly with your Order ID. We'll have your exchange underway in minutes.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-neutral-950 text-xs font-black uppercase tracking-widest rounded-xl hover:bg-neutral-200 transition-colors shadow-md"
          >
            START AN EXCHANGE TICKET
          </Link>
          <a
            href="https://wa.me/919876543210?text=Hi%20Overbro%20Team%2C%20I%20would%20like%20to%20request%20a%20size%20exchange"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900 border border-neutral-700 text-xs font-black uppercase tracking-widest text-white rounded-xl hover:bg-neutral-800 transition-colors"
          >
            WHATSAPP CONCIERGE
          </a>
        </div>
      </div>
    </div>
  );
}
