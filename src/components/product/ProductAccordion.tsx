'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Product } from '@/types/product';

interface ProductAccordionProps {
  product: Product;
}

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export const ProductAccordion: React.FC<ProductAccordionProps> = ({ product }) => {
  const [openSection, setOpenSection] = useState<string | null>('fabric');

  const toggleSection = (id: string) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  const sections: AccordionItem[] = [
    {
      id: 'description',
      title: 'DESCRIPTION & BRAND STORY',
      content: (
        <div className="space-y-3 text-neutral-300 text-xs leading-relaxed">
          <p>{product.description}</p>
          <div className="p-3 bg-neutral-900 border-l-2 border-white text-neutral-300 italic">
            "{product.story}"
          </div>
        </div>
      ),
    },
    {
      id: 'fabric',
      title: 'FABRIC & QUALITY STANDARDS',
      content: (
        <div className="space-y-2 text-neutral-300 text-xs leading-relaxed">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-neutral-900 font-mono text-[11px]">
            <div>
              <span className="text-neutral-500 block">FABRIC WEIGHT</span>
              <span className="text-white font-bold">{product.gsm} GSM HEAVYWEIGHT</span>
            </div>
            <div>
              <span className="text-neutral-500 block">COMPOSITION</span>
              <span className="text-white font-bold">{product.fabric}</span>
            </div>
          </div>
          <p>{product.details.fabricAndQuality}</p>
        </div>
      ),
    },
    {
      id: 'fit',
      title: 'FIT & SILHOUETTE GUIDE',
      content: (
        <div className="space-y-2 text-neutral-300 text-xs leading-relaxed">
          <div className="p-2.5 bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-white font-bold uppercase">
            {product.fit}
          </div>
          <p>{product.details.fitAndStyling}</p>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'SHIPPING & DOORSTEP DELIVERY',
      content: (
        <div className="space-y-2 text-neutral-300 text-xs leading-relaxed">
          <p>{product.details.shippingAndReturns}</p>
          <ul className="list-disc list-inside space-y-1 text-neutral-400">
            <li>Free standard express delivery on orders over ₹999</li>
            <li>Cash on delivery available across 19,000+ Indian pincodes</li>
            <li>Dispatched in tamper-proof custom matte packaging</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'returns',
      title: '7-DAY RETURNS & FREE EXCHANGES',
      content: (
        <div className="space-y-2 text-neutral-300 text-xs leading-relaxed">
          <p>
            Wrong size? No problem. We provide 100% free doorstep exchange for size swaps within 7 days of delivery.
          </p>
          <p className="text-neutral-400">
            Garments must be unworn, unwashed, with all original tags attached. Instant exchange dispatch upon pickup scan.
          </p>
        </div>
      ),
    },
    {
      id: 'care',
      title: 'WASH & CARE INSTRUCTIONS',
      content: (
        <div className="space-y-2 text-neutral-300 text-xs leading-relaxed">
          <p>{product.details.careInstructions}</p>
          <div className="flex gap-2 flex-wrap text-[10px] font-mono text-neutral-400 uppercase pt-2">
            <span className="border border-neutral-800 px-2 py-1">COLD WASH ONLY</span>
            <span className="border border-neutral-800 px-2 py-1">DO NOT BLEACH</span>
            <span className="border border-neutral-800 px-2 py-1">FLAT DRY</span>
            <span className="border border-neutral-800 px-2 py-1">IRON INSIDE OUT</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="border-t border-neutral-800 divide-y divide-neutral-800 select-none">
      {sections.map((section) => {
        const isOpen = openSection === section.id;
        return (
          <div key={section.id}>
            <button
              type="button"
              onClick={() => toggleSection(section.id)}
              className="w-full py-4 flex items-center justify-between text-left text-xs font-bold uppercase tracking-wider text-white hover:text-neutral-300 transition-colors"
              aria-expanded={isOpen}
            >
              <span>{section.title}</span>
              <ChevronDown
                className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-white' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="pb-5 pt-1 animate-in fade-in slide-in-from-top-1 duration-200">
                {section.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
