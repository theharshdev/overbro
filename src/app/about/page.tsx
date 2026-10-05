import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ArrowRight, ShieldCheck, Feather, Layers, Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <Breadcrumbs items={[{ label: 'ABOUT UBRO' }]} />

      {/* Main Editorial Hero */}
      <div className="mt-6 mb-16 text-center max-w-4xl mx-auto space-y-4">
        <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-neutral-400 font-bold block">
          THE OVERSIZED MANIFESTO
        </span>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white">
          THIS IS UBro.
        </h1>
        <p className="text-base sm:text-xl text-neutral-300 leading-relaxed font-normal pt-2">
          We exist for one uncompromising mission: to engineer the most comfortable, structurally flawless oversized T-shirts and hoodies in Indian streetwear.
        </p>
      </div>

      {/* Large Visual Feature Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-20">
        <div className="relative aspect-[4/3] bg-neutral-900 border border-neutral-800 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop"
            alt="UBro Workshop Streetwear Editorial"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="space-y-6 lg:pl-6">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold block">
            THE PROBLEM WITH "STANDARD" SIZING
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
            WHY OVERSIZED CANNOT SIMPLY BE "SIZED UP".
          </h2>
          <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
            <p>
              In conventional retail, fast-fashion labels produce standard slim garments. When streetwear emerged into the mainstream, brands took their regular patterns and simply graded up the dimensions. The result? Necklines that sag loosely over collarbones, hems that reach knees, and arms that feel like tubes.
            </p>
            <p>
              At <strong>UBro</strong>, every single block is drafted from scratch. Our crewneck circumference is deliberately snug and double-reinforced so it stays crisp. Our shoulder seams drop 4 inches down the arm to create volume without excess torso length.
            </p>
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
            THE THREE LAWS OF UBro
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-neutral-950 border border-neutral-800 space-y-4">
            <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
              <Layers className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold uppercase tracking-wider text-white">
              1. HEAVYWEIGHT OR NOTHING
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We never use lightweight 160–180 GSM cotton. Our T-shirts begin at 240 GSM and scale to 300 GSM armor. Our hoodies are 400 to 450 GSM French loopback fleece. Weight gives the silhouette its architectural drape.
            </p>
          </div>

          <div className="p-8 bg-neutral-950 border border-neutral-800 space-y-4">
            <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
              <Feather className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold uppercase tracking-wider text-white">
              2. 100% COMBED LUXURY
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Zero polyester fillers. We source long-staple Indian cotton, comb out all short fibers, and bio-wash with natural enzymes. The fabric feels like velvet on your skin while remaining virtually indestructible.
            </p>
          </div>

          <div className="p-8 bg-neutral-950 border border-neutral-800 space-y-4">
            <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold uppercase tracking-wider text-white">
              3. TWO CATEGORIES. TOTAL MASTERY.
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We don't sell jeans, shirts, or accessories. By focusing exclusively on oversized T-shirts and hoodies, every millimeter of thread, stitching density, and dye formula receives our undivided attention.
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
          Explore our limited drops of 240–300 GSM tees and 400–450 GSM hoodies today.
        </p>
        <div className="pt-2">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-white text-neutral-950 px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-neutral-200 transition-colors"
          >
            <span>DISCOVER THE CATALOGUE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
