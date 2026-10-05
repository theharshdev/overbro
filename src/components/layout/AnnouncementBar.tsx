'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Truck } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-neutral-900 text-neutral-200 border-b border-neutral-800 text-xs tracking-wider uppercase select-none relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">
        {/* Left perk */}
        <div className="hidden lg:flex items-center gap-2 text-neutral-400">
          <Truck className="w-3.5 h-3.5 text-neutral-300" />
          <span>PAN-INDIA DISPATCH WITHIN 24 HOURS</span>
        </div>

        {/* Center Main Message */}
        <div className="w-full lg:w-auto text-center flex items-center justify-center gap-2 font-medium">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white font-semibold">FREE SHIPPING ON ORDERS ABOVE ₹999</span>
          <span className="hidden sm:inline text-neutral-500">•</span>
          <span className="hidden sm:inline text-neutral-400">USE CODE <strong className="text-white">OVERBRO10</strong> FOR 10% OFF</span>
        </div>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-2 text-neutral-400">
          <Sparkles className="w-3.5 h-3.5 text-neutral-300" />
          <Link href="/shop" className="hover:text-white underline underline-offset-4 transition-colors">
            SHOP NEW DROPS
          </Link>
        </div>
      </div>
    </div>
  );
};
