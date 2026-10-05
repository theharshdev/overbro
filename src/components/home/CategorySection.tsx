import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '@/data/products';

export const CategorySection: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-neutral-900 gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400 font-bold block mb-1">
              250+ GSM ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              THE OVERSIZED EDITIONS
            </h2>
          </div>
          <p className="text-xs text-neutral-400 max-w-md">
            We don't dilute our focus with 50 apparel categories. We obsess over one single canvas: the ultimate 250+ GSM oversized T-shirt.
          </p>
        </div>

        {/* Categories Grid (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={category.slug}
              className="group relative h-[480px] sm:h-[560px] overflow-hidden bg-neutral-900 border border-neutral-800 block"
            >
              {/* Background Image */}
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

              {/* Top Tag */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                <span className="px-3 py-1 bg-neutral-950/90 backdrop-blur-md border border-neutral-800 text-[10px] font-mono uppercase tracking-widest text-neutral-300">
                  {category.gsmRange}
                </span>
                <span className="w-10 h-10 bg-white text-neutral-950 flex items-center justify-center group-hover:bg-neutral-200 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-6 left-6 right-6 z-10 space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                  {category.count} CURATED DROPS AVAILABLE
                </span>
                <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white group-hover:underline">
                  {category.name}
                </h3>
                <p className="text-xs text-neutral-300 font-medium">
                  {category.tagline}
                </p>
                <div className="pt-2">
                  <span className="inline-block bg-white text-neutral-950 text-xs font-bold uppercase tracking-wider px-5 py-2.5 group-hover:bg-neutral-200 transition-colors">
                    EXPLORE {category.name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
