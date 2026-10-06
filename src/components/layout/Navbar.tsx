'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ArrowRight,
  Flame,
  Sparkles,
} from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';
import { useSearchStore } from '@/store/useSearchStore';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { getItemCount, openDrawer } = useCartStore();
  const { getWishlistCount } = useWishlistStore();
  const { openSearch } = useSearchStore();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const cartCount = mounted ? getItemCount() : 0;
  const wishlistCount = mounted ? getWishlistCount() : 0;

  const navLinks = [
    { name: 'New Drop', href: '/shop?collection=new-drop', isNew: true },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-2xl'
            : 'bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-800/50 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Mobile hamburger & Desktop Nav */}
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-neutral-300 hover:text-white transition-colors"
                aria-label="Open mobile navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>

              <nav className="hidden lg:flex items-center space-x-7">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-xs uppercase tracking-widest font-semibold transition-colors flex items-center gap-1.5 ${
                        isActive
                          ? 'text-white border-b-2 border-white pb-0.5'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      {link.name}
                      {link.isNew && (
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping inline-block" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Center: Brand Logo */}
            <div className="flex flex-col items-center">
              <Link href="/" className="group flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-white uppercase select-none group-hover:opacity-90 transition-opacity">
                  OVERBRO
                </span>
                <span className="text-[9px] uppercase tracking-[0.35em] text-neutral-400 font-medium select-none -mt-1 group-hover:text-neutral-300 transition-colors">
                  OVERSIZED
                </span>
              </Link>
            </div>

            {/* Right: Actions (Theme, Search, Account, Wishlist, Cart) */}
            <div className="flex items-center space-x-1 sm:space-x-3">
              {/* Theme Toggle (Light / Dark) */}
              <ThemeToggle />

              {/* Search Button */}
              <button
                type="button"
                onClick={openSearch}
                className="p-2 text-neutral-300 hover:text-white transition-colors relative"
                aria-label="Search oversized products"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Account Link */}
              <Link
                href="/account"
                className="p-2 text-neutral-300 hover:text-white transition-colors hidden sm:flex"
                aria-label="Account profile and orders"
              >
                <User className="w-5 h-5" />
              </Link>

              {/* Wishlist Link */}
              <Link
                href="/wishlist"
                className="p-2 text-neutral-300 hover:text-white transition-colors relative"
                aria-label="Saved wishlist items"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 bg-white text-neutral-950 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-neutral-950 animate-in fade-in">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart Drawer Trigger */}
              <button
                type="button"
                onClick={openDrawer}
                className="p-2 text-neutral-300 hover:text-white transition-colors relative flex items-center gap-1.5 group"
                aria-label="Open shopping bag"
              >
                <div className="relative">
                  <ShoppingBag className="w-5 h-5 group-hover:scale-105 transition-transform" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-2 bg-white text-neutral-950 text-[10px] font-bold min-w-4 h-4 px-1 rounded-full flex items-center justify-center ring-2 ring-neutral-950">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="hidden xl:inline text-xs font-semibold tracking-wider text-neutral-300 uppercase">
                  BAG {cartCount > 0 ? `(${cartCount})` : ''}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-neutral-950 border-r border-neutral-800 rounded-r-3xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex flex-col"
                >
                  <span className="text-2xl font-black tracking-tight text-white uppercase">
                    OVERBRO
                  </span>
                  <span className="text-[8px] tracking-[0.3em] text-neutral-400 uppercase -mt-0.5">
                    OVERSIZED. BY DESIGN.
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-neutral-400 hover:text-white rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Quick Search Action */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openSearch();
                }}
                className="w-full mt-6 py-3 px-4 bg-neutral-900 border border-neutral-800 rounded-xl text-left flex items-center gap-3 text-neutral-400 hover:text-white text-xs uppercase tracking-wider transition-colors"
              >
                <Search className="w-4 h-4 text-neutral-400" />
                <span>Search oversized items...</span>
              </button>

              {/* Category Quick Badges */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                <Link
                  href="/shop?collection=new-drop"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl text-center hover:border-neutral-700 transition-colors"
                >
                  <span className="block text-xs font-bold text-white uppercase tracking-wider">
                    NEW DROP
                  </span>
                  <span className="block text-[10px] text-neutral-400 mt-0.5">
                    LIMITED RELEASE
                  </span>
                </Link>
                <Link
                  href="/shop"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl text-center hover:border-neutral-700 transition-colors"
                >
                  <span className="block text-xs font-bold text-white uppercase tracking-wider">
                    SHOP
                  </span>
                  <span className="block text-[10px] text-neutral-400 mt-0.5">
                    ALL PRODUCTS
                  </span>
                </Link>
              </div>

              {/* Main Nav Links */}
              <div className="mt-8 space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-3.5 px-3 border-b border-neutral-900 text-sm font-semibold tracking-wider uppercase transition-colors rounded-xl ${
                        isActive
                          ? 'text-white bg-neutral-900/50 pl-4 border-l-2 border-l-white'
                          : 'text-neutral-300 hover:text-white hover:bg-neutral-900/30'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {link.name}
                        {link.isNew && (
                          <span
                            className="text-[9px] bg-red-600 text-white! px-2 py-0.5 font-bold uppercase tracking-wider rounded-full"
                            style={{ color: '#ffffff' }}
                          >
                            HOT
                          </span>
                        )}
                      </span>
                      <ArrowRight className="w-4 h-4 text-neutral-500" />
                    </Link>
                  );
                })}
              </div>

              {/* Account & Wishlist shortcut */}
              <div className="mt-6 pt-6 border-t border-neutral-900 space-y-2">
                <Link
                  href="/account"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 py-2 px-3 text-xs uppercase tracking-wider text-neutral-400 hover:text-white rounded-xl"
                >
                  <User className="w-4 h-4" />
                  <span>My Account & Orders</span>
                </Link>
                <Link
                  href="/wishlist"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 py-2 px-3 text-xs uppercase tracking-wider text-neutral-400 hover:text-white rounded-xl"
                >
                  <Heart className="w-4 h-4" />
                  <span>Wishlist ({wishlistCount})</span>
                </Link>

                {/* Mobile Theme Toggle */}
                <div className="flex items-center justify-between py-2 px-3 bg-neutral-900 border border-neutral-800 rounded-xl">
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                    THEME
                  </span>
                  <ThemeToggle showLabel={true} />
                </div>
              </div>
            </div>

            {/* Bottom Promo */}
            <div className="mt-8 pt-6 border-t border-neutral-900">
              <div className="bg-neutral-900/80 p-4 border border-neutral-800 rounded-2xl">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                  <span>DROP PASS OFFER</span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-1">
                  Use code <span className="text-white font-mono font-bold">OVERBRO10</span> at checkout for 10% off.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
