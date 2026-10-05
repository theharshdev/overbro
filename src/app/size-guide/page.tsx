'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Ruler, Check, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';

export default function SizeGuidePage() {
  const [unit, setUnit] = useState<'in' | 'cm'>('in');

  const measurements = [
    { size: 'XS', chestIn: '40', chestCm: '102', lengthIn: '27.5', lengthCm: '70', shoulderIn: '21', shoulderCm: '53', sleeveIn: '8.5', sleeveCm: '21.5' },
    { size: 'S',  chestIn: '42', chestCm: '107', lengthIn: '28.5', lengthCm: '72', shoulderIn: '22', shoulderCm: '56', sleeveIn: '9.0', sleeveCm: '23.0' },
    { size: 'M',  chestIn: '44', chestCm: '112', lengthIn: '29.5', lengthCm: '75', shoulderIn: '23', shoulderCm: '58', sleeveIn: '9.5', sleeveCm: '24.0' },
    { size: 'L',  chestIn: '46', chestCm: '117', lengthIn: '30.5', lengthCm: '77', shoulderIn: '24', shoulderCm: '61', sleeveIn: '10.0', sleeveCm: '25.5' },
    { size: 'XL', chestIn: '48', chestCm: '122', lengthIn: '31.5', lengthCm: '80', shoulderIn: '25', shoulderCm: '63', sleeveIn: '10.5', sleeveCm: '26.5' },
    { size: 'XXL', chestIn: '50', chestCm: '127', lengthIn: '32.5', lengthCm: '83', shoulderIn: '26', shoulderCm: '66', sleeveIn: '11.0', sleeveCm: '28.0' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <Breadcrumbs items={[{ label: 'SIZE GUIDE & FIT MANIFESTO' }]} />

      {/* Header */}
      <div className="mt-6 mb-12 text-center max-w-4xl mx-auto space-y-4">
        <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-neutral-400 font-bold block">
          ARCHITECTURAL SILHOUETTE
        </span>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
          SIZE GUIDE & FIT MANIFESTO
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-normal pt-1 max-w-2xl mx-auto">
          Every Overbro garment is drafted from scratch with exaggerated drop shoulders, widened chest circumferences, and calibrated boxy lengths.
        </p>
      </div>

      {/* Fit Philosophy Callouts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-3xl space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">PILLAR 01</span>
          <h3 className="text-base font-bold uppercase tracking-wider text-white">
            TRUE-TO-SIZE OVERSIZED
          </h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Order your normal T-shirt size. Our pattern blocks already incorporate the intended 3–4 inch relaxed drop shoulder and generous chest drape.
          </p>
        </div>

        <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-3xl space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">PILLAR 02</span>
          <h3 className="text-base font-bold uppercase tracking-wider text-white">
            ELBOW-LENGTH SLEEVES
          </h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Sleeves are extended and widened to break gracefully right at or just past the elbow crease, preventing the bunching seen in ordinary oversized tees.
          </p>
        </div>

        <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-3xl space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">PILLAR 03</span>
          <h3 className="text-base font-bold uppercase tracking-wider text-white">
            STAY-CRISP HIGH COLLAR
          </h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Engineered with a dense 1.25-inch 1x1 rib-knit collar and twin-needle reinforcement. It sits snug against the neckline and will never sag or flare out.
          </p>
        </div>
      </div>

      {/* Measurement Table */}
      <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-10 mb-12 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
              ACCURATE APPAREL MEASUREMENTS
            </span>
            <h2 className="text-2xl font-black uppercase tracking-tight text-white">
              GARMENT SPECIFICATION TABLE
            </h2>
          </div>

          {/* Unit Toggle */}
          <div className="inline-flex p-1 bg-neutral-900 border border-neutral-800 rounded-xl">
            <button
              type="button"
              onClick={() => setUnit('in')}
              className={`px-4 py-1.5 text-xs font-mono font-bold uppercase rounded-lg transition-colors ${
                unit === 'in' ? 'bg-white text-neutral-950 shadow-sm' : 'text-neutral-400 hover:text-white'
              }`}
            >
              INCHES (IN)
            </button>
            <button
              type="button"
              onClick={() => setUnit('cm')}
              className={`px-4 py-1.5 text-xs font-mono font-bold uppercase rounded-lg transition-colors ${
                unit === 'cm' ? 'bg-white text-neutral-950 shadow-sm' : 'text-neutral-400 hover:text-white'
              }`}
            >
              CENTIMETERS (CM)
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-neutral-800 text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                <th className="py-3.5 pr-4 font-bold text-white">SIZE</th>
                <th className="py-3.5 px-4 font-bold">CHEST CIRCUMFERENCE</th>
                <th className="py-3.5 px-4 font-bold">BODY LENGTH</th>
                <th className="py-3.5 px-4 font-bold">SHOULDER WIDTH</th>
                <th className="py-3.5 pl-4 font-bold">SLEEVE LENGTH</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-900 text-neutral-300">
              {measurements.map((row) => (
                <tr key={row.size} className="hover:bg-neutral-900/40 transition-colors">
                  <td className="py-4 pr-4 font-black font-mono text-white text-sm">
                    {row.size}
                  </td>
                  <td className="py-4 px-4 font-mono">
                    {unit === 'in' ? `${row.chestIn}"` : `${row.chestCm} cm`}
                  </td>
                  <td className="py-4 px-4 font-mono">
                    {unit === 'in' ? `${row.lengthIn}"` : `${row.lengthCm} cm`}
                  </td>
                  <td className="py-4 px-4 font-mono">
                    {unit === 'in' ? `${row.shoulderIn}"` : `${row.shoulderCm} cm`}
                  </td>
                  <td className="py-4 pl-4 font-mono">
                    {unit === 'in' ? `${row.sleeveIn}"` : `${row.sleeveCm} cm`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Measuring Instructions & Sizing Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="p-8 bg-neutral-900/50 border border-neutral-800 rounded-3xl space-y-4">
          <h3 className="text-lg font-bold uppercase tracking-wider text-white flex items-center gap-2">
            <Ruler className="w-5 h-5 text-neutral-400" />
            <span>HOW TO MEASURE</span>
          </h3>
          <ul className="space-y-3 text-xs text-neutral-300 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="font-mono font-bold text-white">01.</span>
              <span><strong>Chest:</strong> Measure across the fullest part of your chest, keeping the tape level under your arms.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono font-bold text-white">02.</span>
              <span><strong>Length:</strong> Measure straight down from the highest point of the shoulder collar to the bottom hem.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono font-bold text-white">03.</span>
              <span><strong>Shoulder:</strong> Measure straight across the back from shoulder seam tip to shoulder seam tip.</span>
            </li>
          </ul>
        </div>

        <div className="p-8 bg-neutral-900/50 border border-neutral-800 rounded-3xl space-y-4">
          <h3 className="text-lg font-bold uppercase tracking-wider text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-neutral-400" />
            <span>FIT RECOMMENDATION</span>
          </h3>
          <div className="space-y-3 text-xs text-neutral-300 leading-relaxed">
            <p>
              <strong>Standard Loose Drape:</strong> Stick to your standard everyday size for our signature architectural drop shoulder aesthetic.
            </p>
            <p>
              <strong>Extreme Street Baggy:</strong> Size up by one full tier for an ultra-voluminous silhouette favored in Tokyo/Harajuku subcultures.
            </p>
            <p className="text-neutral-400 pt-2 border-t border-neutral-800">
              Not sure? Remember that we offer <strong>100% free 7-day doorstep size exchanges</strong> on every order.
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
          <span>EXPLORE SIZES IN SHOP</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
