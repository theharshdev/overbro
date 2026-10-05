'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 select-none">
      {/* Trust & Guarantee Strip */}
      <div className="border-b border-neutral-800/80 bg-neutral-900/40 py-5 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-white">
            MADE IN INDIA
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black tracking-tight text-white uppercase">
                OVERBRO
              </span>
              <span className="block text-[9px] uppercase tracking-[0.35em] text-neutral-400 font-medium">
                OVERSIZED. BY DESIGN.
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-neutral-400 max-w-sm">
              Overbro is an Indian oversized streetwear house specializing exclusively in heavyweight drop-shoulder T-shirts (250–320 GSM). Engineered for everyday durability, architectural drape, and modern street presence.
            </p>

            {/* Newsletter in Brand Col */}
            <div className="pt-4">
              <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">
                JOIN THE DROP LIST
              </span>
              <p className="text-[11px] text-neutral-400 mb-3">
                Unlock secret drop links and 10% off your first order.
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-900/60 p-3 rounded-xl">
                  <Check className="w-4 h-4" />
                  <span>You're on the list! Welcome to the Overbro community.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-sm gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 bg-neutral-900 border border-neutral-800 px-4 py-2.5 text-xs text-white placeholder-neutral-500 rounded-xl focus:outline-none focus:border-white transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-white text-neutral-950 font-bold px-4 py-2.5 text-xs tracking-wider uppercase rounded-xl hover:bg-neutral-200 transition-colors flex items-center gap-1"
                  >
                    <span>JOIN</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Nav Col 1: Help & Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              HELP & SUPPORT
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/track-order" className="hover:text-white transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="hover:text-white transition-colors">
                  Size Guide & Fit Manifesto
                </Link>
              </li>
              <li>
                <Link href="/fabric-standards" className="hover:text-white transition-colors">
                  Fabric & Quality Standards
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white transition-colors">
                  Shipping & Delivery Info
                </Link>
              </li>
              <li>
                <Link href="/exchanges" className="hover:text-white transition-colors">
                  7-Day Exchanges Only
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Col 2: Socials Only */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              COMMUNITY
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span>Instagram</span>
                  <span className="text-[10px] text-neutral-500 group-hover:text-neutral-300 transition-colors">#OVERBROSTREET</span>
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  YouTube / Lookbooks
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Payment, Legal & Copyright */}
        <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            <p>© {new Date().getFullYear()} Overbro Apparel Pvt. Ltd. All rights reserved.</p>
            <p className="text-[11px] text-neutral-400 mt-0.5">
              Engineered for the Indian oversized streetwear movement.
            </p>
          </div>

          {/* Payment Badges */}
          <div className="flex items-center gap-2 flex-wrap text-[10px] tracking-wider font-mono text-neutral-400 uppercase">
            <span className="border border-neutral-800 bg-neutral-900 px-3 py-1 rounded-full">UPI</span>
            <span className="border border-neutral-800 bg-neutral-900 px-3 py-1 rounded-full">PhonePe</span>
            <span className="border border-neutral-800 bg-neutral-900 px-3 py-1 rounded-full">GPay</span>
            <span className="border border-neutral-800 bg-neutral-900 px-3 py-1 rounded-full">RuPay</span>
            <span className="border border-neutral-800 bg-neutral-900 px-3 py-1 rounded-full">Cards</span>
            <span className="border border-neutral-800 bg-neutral-900 px-3 py-1 rounded-full">NetBanking</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
