import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { COLLECTIONS } from '@/data/products';
import { ArrowUpRight } from 'lucide-react';

export default function CollectionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: 'COLLECTIONS' }]} />

      <div className="mt-4 mb-12 pb-6 border-b border-neutral-800">
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400 font-bold block mb-1">
          CURATED CAPSULES
        </span>
        <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
          THE COLLECTIONS
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mt-2">
          From everyday monochrome staples in The Core to high-density 450 GSM winter armor in the Heavyweight Capsule.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {COLLECTIONS.map((col) => (
          <Link
            key={col.id}
            href={col.slug}
            className="group relative h-[420px] sm:h-[480px] bg-neutral-900 border border-neutral-800 overflow-hidden block"
          >
            <Image
              src={col.image}
              alt={col.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

            <div className="absolute top-6 right-6 z-10">
              <span className="w-10 h-10 bg-white text-neutral-950 flex items-center justify-center group-hover:bg-neutral-200 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 z-10 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                {col.count} SILHOUETTES
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white group-hover:underline">
                {col.name}
              </h2>
              <p className="text-xs text-neutral-300 font-medium max-w-md">
                {col.description}
              </p>
              <div className="pt-2">
                <span className="inline-block bg-white text-neutral-950 text-xs font-bold uppercase tracking-wider px-5 py-2.5 group-hover:bg-neutral-200 transition-colors">
                  EXPLORE CAPSULE
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
