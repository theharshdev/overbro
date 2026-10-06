import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Shield, Flame } from 'lucide-react';
import { SINGLE_TSHIRT_IMAGE } from '@/data/products';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-neutral-950 text-white overflow-hidden border-b border-neutral-800">
      {/* Background Streetwear Imagery with Cinematic Overlays */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/hero-bg.jpg"
          alt="Overbro Urban Streetwear Heritage"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark Vignette & Gradient Overlays for crisp readability */}
        <div className="absolute inset-0 bg-neutral-950/80 sm:bg-neutral-950/75" />
        <div className="absolute inset-0 bg-linear-to-r from-neutral-950 via-neutral-950/85 to-neutral-950/55" />
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-transparent to-neutral-950/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-950/80 backdrop-blur-md border border-neutral-700/80 text-neutral-300 text-[11px] font-bold uppercase tracking-widest rounded-full shadow-lg">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>INDIAN OVERSIZED STREETWEAR HOUSE</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-400 font-mono">EST. 2026</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.05]">
                OVERSIZED. <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-neutral-100 via-neutral-400 to-neutral-500">
                  BY DESIGN.
                </span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-neutral-300 font-normal max-w-xl leading-relaxed">
              India's dedicated oversized T-shirt house. Exclusively engineered with 250+ GSM luxury combed cotton, bespoke drop shoulders, and an unapologetic urban silhouette.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/t-shirts"
                className="bg-white text-neutral-950 px-8 py-4 text-xs font-black uppercase tracking-widest rounded-xl hover:bg-neutral-200 transition-all text-center flex items-center justify-center gap-2 group shadow-xl"
              >
                <span>SHOP OVERSIZED TEES</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/shop?collection=heavyweight"
                className="bg-neutral-900 border border-neutral-700 text-white px-8 py-4 text-xs font-black uppercase tracking-widest rounded-xl hover:bg-neutral-800 hover:border-neutral-500 transition-all text-center flex items-center justify-center gap-2 group"
              >
                <span>HEAVYWEIGHT 280–320 GSM</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-neutral-900 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <span className="text-xl sm:text-2xl font-black font-mono text-white block">
                  250-320
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
                  GSM Heavy Cotton
                </span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black font-mono text-white block">
                  100%
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
                  Drop-Shoulder Cut
                </span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black font-mono text-white block">
                  ₹999+
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
                  Free Shipping
                </span>
              </div>
            </div>
          </div>

          {/* Right Editorial Fashion Imagery Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-3/4 w-full max-w-md mx-auto bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl group overflow-hidden">
              <Image
                src={SINGLE_TSHIRT_IMAGE}
                alt="Overbro Heavyweight Oversized Streetwear Editorial"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-transparent to-transparent opacity-60" />

              {/* Floating Editorial Badge (Bottom Left) */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-neutral-950/90 backdrop-blur-md border border-neutral-800 rounded-2xl text-left space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    DROP // VOL. 04
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                    NOW LIVE
                  </span>
                </div>
                <h3 className="text-sm font-black uppercase tracking-wider text-white">
                  THE ARCHITECTURAL OVERSIZED CUT
                </h3>
                <p className="text-[11px] text-neutral-400">
                  Pre-shrunk, bio-washed heavy gauge combed cotton. Zero cling guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
