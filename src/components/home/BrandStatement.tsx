import React from 'react';
import Link from 'next/link';
import { ArrowRight, Layers, Feather, Sparkles } from 'lucide-react';

export const BrandStatement: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-900/40 border-b border-neutral-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span>THE SILHOUETTE MANIFESTO</span>
          </div>

          {/* Statement Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            COMFORT WITHOUT COMPROMISE.
          </h2>

          {/* Core Story Paragraph */}
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            Most brands make standard T-shirts and simply label them "oversized" by increasing the size tag. That results in awkward necklines, baggy midsections, and sloppy lengths. At <strong>UBro</strong>, we start from zero: bespoke drop-shoulder geometry, tightened rib collars that never stretch out, and dense 240 to 450 GSM cotton that drapes with architectural authority.
          </p>

          {/* Feature Grid / Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-left">
            <div className="p-6 bg-neutral-950 border border-neutral-800/80 space-y-3">
              <div className="w-10 h-10 bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                HEAVYWEIGHT GUAGE
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                240–300 GSM for T-shirts and 400–450 GSM for hoodies. Heavier fabric creates a clean sculptural silhouette that doesn't cling to your body.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-800/80 space-y-3">
              <div className="w-10 h-10 bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                <Feather className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                BIO-WASHED SOFTNESS
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Enzyme-treated 100% long-staple Indian combed cotton. Pre-shrunk twice to ensure zero unexpected shrinkage after household laundry.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-800/80 space-y-3">
              <div className="w-10 h-10 bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                CALCULATED DROP SHOULDER
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Extended shoulder seams create the relaxed, slouchy look synonymous with contemporary global street style, while maintaining a snug neck circumference.
              </p>
            </div>
          </div>

          {/* Link to About */}
          <div className="pt-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white border-b-2 border-white pb-1 hover:text-neutral-300 hover:border-neutral-300 transition-colors"
            >
              <span>READ THE COMPLETE UBRO STORY</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
