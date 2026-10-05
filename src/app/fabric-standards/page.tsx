'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ShieldCheck, Layers, Feather, Sparkles, Droplets, Scissors, ArrowRight } from 'lucide-react';

export default function FabricStandardsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <Breadcrumbs items={[{ label: 'FABRIC & QUALITY STANDARDS' }]} />

      {/* Header */}
      <div className="mt-6 mb-12 text-center max-w-4xl mx-auto space-y-4">
        <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-neutral-400 font-bold block">
          MATERIAL SCIENCE & MILL ARCHITECTURE
        </span>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
          FABRIC & QUALITY STANDARDS
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-normal pt-1 max-w-2xl mx-auto">
          We reject thin 160–180 GSM cotton blends. Every Overbro oversized T-shirt is milled in Southern India using 100% luxury long-staple combed cotton engineered for decades of wear.
        </p>
      </div>

      {/* The GSM Spectrum Cards */}
      <div className="mb-16 space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
            WEIGHT CLASSES
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            THE OVERBRO GSM SPECTRUM
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 250 GSM */}
          <div className="p-8 bg-neutral-950 border border-neutral-800 rounded-3xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl sm:text-3xl font-black font-mono text-white">250 GSM</span>
              <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300 rounded-full uppercase">THE CORE</span>
            </div>
            <h3 className="text-base font-bold uppercase tracking-wider text-white">
              DAILY BOX-CUT LUXURY
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Substantial yet breathable single-jersey knit. Ideal for 365-day everyday Indian climates. Natural bio-wash finish gives it a buttery suede handfeel without losing crisp structural drape.
            </p>
            <div className="pt-3 border-t border-neutral-900 text-[11px] font-mono text-neutral-500 space-y-1">
              <div>Yarn: 20s Compact Combed Cotton</div>
              <div>Weave: Single Jersey Circular Knit</div>
              <div>Finish: Enzyme Bio-Wash + Silicon</div>
            </div>
          </div>

          {/* 270 GSM */}
          <div className="p-8 bg-neutral-950 border border-neutral-800 rounded-3xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl sm:text-3xl font-black font-mono text-white">270 GSM</span>
              <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300 rounded-full uppercase">AFTER DARK</span>
            </div>
            <h3 className="text-base font-bold uppercase tracking-wider text-white">
              GRAPHIC ARCHIVAL WEIGHT
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Engineered with extra yarn density to support multi-layered high-density 3D puff prints and mineral distress washes. Will never stretch or distort around heavy screenprints.
            </p>
            <div className="pt-3 border-t border-neutral-900 text-[11px] font-mono text-neutral-500 space-y-1">
              <div>Yarn: 18s Ring-Spun Combed Cotton</div>
              <div>Weave: High-Gauge Dense Jersey</div>
              <div>Finish: Mineral Wash & Preshrunk</div>
            </div>
          </div>

          {/* 300-320 GSM */}
          <div className="p-8 bg-neutral-950 border border-neutral-800 rounded-3xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl sm:text-3xl font-black font-mono text-white">300–320 GSM</span>
              <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-emerald-400 rounded-full uppercase">HEAVYWEIGHT ARMOR</span>
            </div>
            <h3 className="text-base font-bold uppercase tracking-wider text-white">
              MONOLITHIC COTTON ARMOR
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Our heaviest, most sculptural garment. Thick monolithic cotton drape that stands entirely away from the body with zero cling. Built for genuine oversized connoisseurs.
            </p>
            <div className="pt-3 border-t border-neutral-900 text-[11px] font-mono text-neutral-500 space-y-1">
              <div>Yarn: 16s Heavy Ring-Spun Combed</div>
              <div>Weave: Heavy Gauge French Jersey</div>
              <div>Finish: Zero-Shrink Thermal Wash</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mill & Production Rigor (4 Columns) */}
      <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-8 sm:p-12 mb-16 shadow-xl space-y-8">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
            LAB SPECIFICATIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            LABORATORY STANDARDS & RIGOR
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-3 p-5 bg-neutral-900/60 border border-neutral-800 rounded-2xl">
            <div className="w-10 h-10 bg-neutral-950 border border-neutral-800 rounded-xl flex items-center justify-center text-white">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              PRE-SHRUNK FABRIC
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Thermal relaxation wash ensures dimensional shrinkage remains under 1.8% after dozens of home washes.
            </p>
          </div>

          <div className="space-y-3 p-5 bg-neutral-900/60 border border-neutral-800 rounded-2xl">
            <div className="w-10 h-10 bg-neutral-950 border border-neutral-800 rounded-xl flex items-center justify-center text-white">
              <Droplets className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              COLORFAST GRADE 4+
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Dye-bonded using low-impact reactive dyestuffs. Our jet black stays midnight deep wash after wash without grey fade.
            </p>
          </div>

          <div className="space-y-3 p-5 bg-neutral-900/60 border border-neutral-800 rounded-2xl">
            <div className="w-10 h-10 bg-neutral-950 border border-neutral-800 rounded-xl flex items-center justify-center text-white">
              <Scissors className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              TWIN-NEEDLE FLATLOCK
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Shoulder seams, armholes, and bottom hems are stitched with industrial twin-needle thread locks to prevent tearing under tension.
            </p>
          </div>

          <div className="space-y-3 p-5 bg-neutral-900/60 border border-neutral-800 rounded-2xl">
            <div className="w-10 h-10 bg-neutral-950 border border-neutral-800 rounded-xl flex items-center justify-center text-white">
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              ANTI-PILL GUARANTEE
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Natural bio-enzymes dissolve micro-fibrils on the yarn surface, permanently eliminating fuzzy fabric balls or pilling.
            </p>
          </div>
        </div>
      </div>

      {/* Care Protocols */}
      <div className="p-8 bg-neutral-900/40 border border-neutral-800 rounded-3xl space-y-4 mb-12">
        <h3 className="text-lg font-bold uppercase tracking-wider text-white">
          WASH & CARE PROTOCOL
        </h3>
        <p className="text-xs text-neutral-400 leading-relaxed">
          To maintain the pristine structural drape and texture of your 250+ GSM heavyweight cotton:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-xl text-center space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-white font-bold block">COLD WATER ONLY</span>
            <span className="text-[11px] text-neutral-500">Wash inside-out below 30°C</span>
          </div>
          <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-xl text-center space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-white font-bold block">DO NOT BLEACH</span>
            <span className="text-[11px] text-neutral-500">Use mild liquid detergents</span>
          </div>
          <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-xl text-center space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-white font-bold block">FLAT DRY IN SHADE</span>
            <span className="text-[11px] text-neutral-500">Avoid direct hot sunlight</span>
          </div>
          <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-xl text-center space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-white font-bold block">COOL REVERSE IRON</span>
            <span className="text-[11px] text-neutral-500">Never iron directly over prints</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pt-4">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 bg-white text-neutral-950 px-8 py-4 text-xs font-black uppercase tracking-widest rounded-xl hover:bg-neutral-200 transition-colors shadow-lg"
        >
          <span>SHOP 250+ GSM TEES</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
