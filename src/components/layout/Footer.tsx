'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Check,
} from 'lucide-react';

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
      <div className="border-b border-neutral-800/80 bg-neutral-900/40 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-neutral-300 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  FREE SHIPPING
                </h4>
                <p className="text-[11px] text-neutral-400">On all orders above ₹999</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-neutral-300 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  280–450 GSM COTTON
                </h4>
                <p className="text-[11px] text-neutral-400">Pre-shrunk, bio-washed heavy gauge</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw className="w-5 h-5 text-neutral-300 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  7-DAY EASY EXCHANGES
                </h4>
                <p className="text-[11px] text-neutral-400">Doorstep pickup & quick swaps</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-neutral-300 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  MADE IN INDIA
                </h4>
                <p className="text-[11px] text-neutral-400">Crafted in Mumbai & Tirupur</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black tracking-tight text-white uppercase">
                UBRO
              </span>
              <span className="block text-[9px] uppercase tracking-[0.35em] text-neutral-400 font-medium">
                OVERSIZED. BY DESIGN.
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-neutral-400 max-w-sm">
              UBro is an Indian oversized streetwear house specializing exclusively in heavyweight drop-shoulder T-shirts (240–300 GSM) and structured luxury hoodies (400–450 GSM). Engineered for everyday durability and modern street presence.
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
                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-900/60 p-3">
                  <Check className="w-4 h-4" />
                  <span>You're on the list! Welcome to the UBro community.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-sm">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 bg-neutral-900 border border-neutral-800 px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-white text-neutral-950 font-bold px-4 py-2.5 text-xs tracking-wider uppercase hover:bg-neutral-200 transition-colors flex items-center gap-1"
                  >
                    <span>JOIN</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Nav Col 1: Shop */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              SHOP
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/shop" className="hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/t-shirts" className="hover:text-white transition-colors">
                  Oversized T-Shirts
                </Link>
              </li>
              <li>
                <Link href="/hoodies" className="hover:text-white transition-colors">
                  Oversized Hoodies
                </Link>
              </li>
              <li>
                <Link href="/shop?collection=the-core" className="hover:text-white transition-colors">
                  The Core Collection
                </Link>
              </li>
              <li>
                <Link href="/shop?collection=heavyweight" className="hover:text-white transition-colors">
                  Heavyweight Armor
                </Link>
              </li>
              <li>
                <Link href="/shop?collection=after-dark" className="hover:text-white transition-colors">
                  After Dark Nocturnal
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Col 2: Help & Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              HELP & SUPPORT
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/account" className="hover:text-white transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Size Guide & Fit Manifesto
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Fabric & Quality Standards
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Shipping & Delivery Info
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  7-Day Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Col 3: Brand & Culture */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              COMMUNITY
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  This is UBro
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-white transition-colors">
                  Drop Archives
                </Link>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Instagram</span>
                  <span className="text-[10px] text-neutral-500">#UBROSTREET</span>
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
              <li>
                <span className="text-neutral-500 text-[11px] block mt-2">
                  Customer Desk: care@ubro.in
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Payment, Legal & Copyright */}
        <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            <p>© {new Date().getFullYear()} UBro Apparel Pvt. Ltd. All rights reserved.</p>
            <p className="text-[11px] text-neutral-400 mt-0.5">
              Engineered for the Indian oversized streetwear movement.
            </p>
          </div>

          {/* Payment Badges */}
          <div className="flex items-center gap-2 flex-wrap text-[10px] tracking-wider font-mono text-neutral-400 uppercase">
            <span className="border border-neutral-800 bg-neutral-900 px-2 py-1">UPI</span>
            <span className="border border-neutral-800 bg-neutral-900 px-2 py-1">PhonePe</span>
            <span className="border border-neutral-800 bg-neutral-900 px-2 py-1">GPay</span>
            <span className="border border-neutral-800 bg-neutral-900 px-2 py-1">RuPay</span>
            <span className="border border-neutral-800 bg-neutral-900 px-2 py-1">Cards</span>
            <span className="border border-neutral-800 bg-neutral-900 px-2 py-1">COD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
