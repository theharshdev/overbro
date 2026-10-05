# UBro — 250+ GSM Oversized Streetwear

> **"OVERSIZED. BY DESIGN."**  
> Indian streetwear house focused exclusively on **Heavyweight 250+ GSM Oversized T-Shirts**. We do not sell hoodies or light fast-fashion tees. Every piece is engineered with drop shoulders, high-density cotton, and architectural drape.

---

## ⚡ Tech Stack

- **Framework**: [Next.js 15+ (v16 App Router)](https://nextjs.org/)
- **UI & Runtime**: React 19, TypeScript
- **Styling**: 100% [Tailwind CSS v4](https://tailwindcss.com/) utility classes (Zero custom CSS, zero styled-components)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) with `localStorage` persistence
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) via `next/font/google`
- **Images**: `next/image` with optimized remote patterns

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 💎 Features & Architecture

### 1. Sticky Announcement Bar
- Dynamic banner: `"FREE SHIPPING ON ORDERS ABOVE ₹999"`
- Secondary brand assurances: Pan-India dispatch within 24 hours, Code `UBRO10` promo alert.

### 2. Modern Responsive Navbar
- Bold typographic **UBro** logo with `"OVERSIZED. BY DESIGN."` subtitle
- Category links: Shop All, Oversized Tees, Heavyweight (280+ GSM), Graphic Drops, New Drops, Collections, About
- Actions: Live Search, Account, Wishlist (with dynamic count badge), Cart Drawer (with dynamic count badge)
- Responsive mobile drawer with quick category shortcuts and search

### 3. Slide-Over Cart Drawer & Free Shipping Progress Bar
- Opens automatically when an item is added to the bag
- Free shipping progress bar dynamically tracking subtotal against ₹999 threshold:
  - *"ADD ₹320 MORE FOR FREE SHIPPING"*
  - *"YOU'VE UNLOCKED FREE SHIPPING! 🎉"*
- Product line items with image, size, shade, quantity stepper, and remove action
- Promo code application (`UBRO10`, `FIRSTDROP`, `OVERSIZED`)
- One-click checkout CTA

### 4. Interactive Live Search Overlay
- Instant modal overlay with backdrop blur
- Popular search suggestions: "250 GSM Drop Shoulder", "300 GSM Heavyweight", "Acid Reign Graphic", "Vintage Mineral Washed"
- Live search filtering across all 16 mock products with thumbnail previews

### 5. Product Catalog & Filtering (Shop, T-Shirts)
- Desktop sidebar filter + Mobile drawer filter
- Filters by **Size** (`S`, `M`, `L`, `XL`, `XXL`), **Color Palette**, **GSM Weight** (250–270 GSM, 280+ GSM), **Price Range**, and **In Stock Only**
- Active filter pill badges with one-click clear
- Sort dropdown: *Featured Drops, Newest First, Best Selling, Price: Low to High, Price: High to Low*
- Responsive product grid: 2 columns on mobile, 3-4 columns on desktop

### 6. Premium Product Detail Page (`/products/[slug]`)
- Multi-angle high-resolution image gallery with thumbnail switcher
- Real-time Color and Size selection with stock status
- Interactive **Size Guide Modal** with detailed garment measurements table (Chest, Length, Shoulder Drop, Sleeve)
- Collapsible Accordions:
  - Description & Story
  - Fabric & Quality Standards (250+ GSM, 100% combed cotton, bio-wash, anti-pilling)
  - Fit & Silhouette Guide (Drop shoulder, boxy silhouette)
  - Shipping & Doorstep Delivery (Dispatched in 24h)
  - 7-Day Free Exchanges & Returns
  - Wash & Care Instructions
- "Complete the Drip // You May Also Like" cross-sell grid

### 7. Wishlist & Cart Persistence
- Zustand stores persisted to `localStorage` with SSR hydration protection
- Bookmark products with instant toast feedback
- Complete cart page with coupon discounts, shipping fee calculations, and price breakdown

### 8. Checkout & Order Success Flow
- Address form with Indian state dropdown and pincode validation
- Multiple payment options: **UPI** (PhonePe / GPay), **Credit/Debit Card**, and **Cash on Delivery (COD)**
- Mocked transaction simulation leading to `/order-success` with unique Order ID and receipt overview

### 9. Account Dashboard (`/account`)
- Tabbed interface: Orders history, Wishlist, Saved addresses, Profile settings
- Live order status badges (e.g. *Delivered*, *Processing Dispatch*)

---

## 📦 Mock Streetwear Catalog (16 Distinct 250+ GSM Oversized T-Shirts)

1. **UBro Essential Oversized Tee** — ₹799 (250 GSM Combed Cotton, Pitch Black)
2. **UBro Heavyweight Obsidian Tee** — ₹899 (280 GSM Structured Cotton)
3. **UBro Core Bone White Tee** — ₹799 (250 GSM Unbleached Finish)
4. **UBro 'ACID REIGN' Graphic Tee** — ₹999 (260 GSM High-Density Screenprint)
5. **UBro Vintage Charcoal Washed Tee** — ₹949 (270 GSM Mineral Washed)
6. **UBro 'OVERSIZED' Typographic Boxy Tee** — ₹899 (250 GSM Pure Cotton)
7. **UBro Raw Hem Sage Green Tee** — ₹849 (260 GSM Bio-Washed)
8. **UBro Tokyo Mirage Heavyweight Tee** — ₹1,099 (300 GSM Heavy Armor Cotton)
9. **UBro 'MONOLITH' 320 GSM Ultra-Heavy Tee** — ₹1,199 (320 GSM Max-Density Interlock Cotton)
10. **UBro Washed Mocha Drop-Shoulder Tee** — ₹949 (270 GSM Pigment Washed)
11. **UBro Minimalist Slate Boxy Tee** — ₹899 (280 GSM Structured Cotton)
12. **UBro Sand Dune Oversized Pocket Tee** — ₹849 (250 GSM Combed Cotton)
13. **UBro 'DYSTOPIA 2099' Backprint Tee** — ₹1,049 (260 GSM Screenprinted)
14. **UBro Deep Forest Heavyweight Tee** — ₹929 (280 GSM Bio-Silicon Washed)
15. **UBro Midnight Cobalt Raw Boxy Tee** — ₹899 (270 GSM Heavyweight Cotton)
16. **UBro Sun-Faded Ochre Vintage Tee** — ₹999 (290 GSM Distressed Mineral Wash)

---

## 🎨 Design System

- **Palette**: Deep Black (`#0a0a0a`), Rich Charcoal (`#171717`, `#262626`), Off-White / Bone (`#f5f5f7`, `#ebe7de`), Subtle Gray (`#737373`, `#a3a3a3`)
- **Typography**: Geometric Grotesque via *Plus Jakarta Sans*
- **Grid Layout**: 2-column mobile layout (`grid-cols-2`), 3–4 columns desktop (`lg:grid-cols-4`)
- **Aesthetic**: Bold, Minimal, Architectural, Urban, Streetwear D2C
