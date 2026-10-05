import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ArrowRight, Feather, Layers, Sparkles, Ruler, Check, X } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <Breadcrumbs items={[{ label: 'ABOUT OVERBRO' }]} />

      {/* Main Editorial Hero */}
      <div className="mt-6 mb-16 text-center max-w-4xl mx-auto space-y-4">
        <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-neutral-400 font-bold block">
          THE OVERSIZED MANIFESTO
        </span>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white">
          THIS IS OVERBRO.
        </h1>
        <p className="text-base sm:text-xl text-neutral-300 leading-relaxed font-normal pt-2">
          We exist for one uncompromising mission: to engineer the most comfortable, structurally flawless 250+ GSM oversized T-shirts in Indian streetwear.
        </p>
      </div>

      {/* Information Grid: Architectural Cut vs Standard Up-Sizing */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
        <div className="lg:col-span-6 p-8 bg-neutral-900/60 border border-neutral-800 rounded-3xl space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold block">
              THE PROBLEM WITH STANDARD SIZING
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight">
              WHY OVERSIZED CANNOT SIMPLY BE "SIZED UP".
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
              <p>
                In conventional retail, fast-fashion labels produce standard slim garments. When streetwear emerged into the mainstream, brands took their regular patterns and simply graded up the dimensions. The result? Necklines that sag loosely over collarbones, hems that reach knees, and arms that feel like tubes.
              </p>
              <p>
                At <strong className="text-white">Overbro</strong>, every single pattern block is drafted from scratch. Our crewneck circumference is deliberately snug and double-reinforced so it stays crisp. Our shoulder seams drop 4 inches down the arm to create intentional volume without excess torso length.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-800 grid grid-cols-2 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">TORSO RATIO</span>
              <span className="text-sm font-bold text-white">Boxy & Wide</span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">SLEEVE DROP</span>
              <span className="text-sm font-bold text-white">Elbow Reach</span>
            </div>
          </div>
        </div>

        {/* Comparison Table / Architectural Specs */}
        <div className="lg:col-span-6 p-8 bg-neutral-950 border border-neutral-800 rounded-3xl space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold block">
            ANATOMY OF THE OVERBRO SILHOUETTE
          </span>
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
            ORDINARY TEES VS. OVERBRO ARCHITECTURE
          </h3>

          <div className="space-y-3 pt-2">
            <div className="p-4 bg-neutral-900/80 border border-neutral-800/80 rounded-2xl flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold uppercase text-white block">250–320 GSM Structural Cotton</span>
                <p className="text-xs text-neutral-400 mt-0.5">Heavy gauge zero-cling fabric that holds a rigid, sculptural silhouette all day.</p>
              </div>
            </div>

            <div className="p-4 bg-neutral-900/80 border border-neutral-800/80 rounded-2xl flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold uppercase text-white block">High-Density 1.25" Ribbed Collar</span>
                <p className="text-xs text-neutral-400 mt-0.5">Twin-needle bound ribbed neck that never bacon-curls or loosens through washes.</p>
              </div>
            </div>

            <div className="p-4 bg-neutral-900/80 border border-neutral-800/80 rounded-2xl flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold uppercase text-white block">4-Inch Drop Shoulder Geometry</span>
                <p className="text-xs text-neutral-400 mt-0.5">Engineered broad shoulders that taper cleanly into loose, elbow-grazing sleeves.</p>
              </div>
            </div>

            <div className="p-4 bg-neutral-900/80 border border-neutral-800/80 rounded-2xl flex items-start gap-3">
              <X className="w-5 h-5 text-neutral-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold uppercase text-neutral-400 line-through block">Flawed Fast-Fashion Sizing</span>
                <p className="text-xs text-neutral-500 mt-0.5">No 160 GSM sheer fabrics, no clinging polyester blends, and no stretched out necklines.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The 3 Pillars of UBro Engineering */}
      <div className="py-16 border-y border-neutral-800 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-bold block mb-1">
            CORE PHILOSOPHY
          </span>
          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            THE THREE LAWS OF OVERBRO
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-neutral-950 border border-neutral-800 rounded-3xl space-y-4 shadow-sm">
            <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 rounded-2xl flex items-center justify-center text-white">
              <Layers className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold uppercase tracking-wider text-white">
              1. 250+ GSM OR NOTHING
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We never use lightweight 160–180 GSM cotton. Every Overbro T-shirt begins at 250 GSM and scales to 320 GSM heavy armor cotton. Weight gives the silhouette its architectural drape and zero cling.
            </p>
          </div>

          <div className="p-8 bg-neutral-950 border border-neutral-800 rounded-3xl space-y-4 shadow-sm">
            <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 rounded-2xl flex items-center justify-center text-white">
              <Feather className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold uppercase tracking-wider text-white">
              2. 100% COMBED LUXURY
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Zero polyester fillers. We source long-staple Indian cotton, comb out all short fibers, and bio-wash with natural enzymes. The fabric feels like velvet on your skin while remaining virtually indestructible.
            </p>
          </div>

          <div className="p-8 bg-neutral-950 border border-neutral-800 rounded-3xl space-y-4 shadow-sm">
            <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 rounded-2xl flex items-center justify-center text-white">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold uppercase tracking-wider text-white">
              3. ONE CANVAS. TOTAL MASTERY.
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We don't dilute our focus with 50 apparel categories. By focusing exclusively on oversized T-shirts crafted from 250+ GSM fabrics, every millimeter of thread, collar ribbing, and drop-shoulder drape receives our undivided attention.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA Strip */}
      <div className="text-center space-y-4 py-8">
        <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
          EXPERIENCE THE FIT.
        </h3>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto">
          Explore our limited drops of 250–320 GSM heavyweight oversized tees today.
        </p>
        <div className="pt-2">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-white text-neutral-950 px-8 py-4 text-xs font-black uppercase tracking-widest rounded-xl hover:bg-neutral-200 transition-colors shadow-lg"
          >
            <span>DISCOVER THE CATALOGUE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
