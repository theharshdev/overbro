'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
  productName: string;
  badge?: string;
  gsm: number;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  productName,
  badge,
  gsm,
}) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4">
      {/* Thumbnails Sidebar - only if multiple images */}
      {images.length > 1 && (
        <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto pb-2 lg:pb-0 scrollbar-none">
          {images.map((imgUrl, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              className={`relative w-16 h-20 sm:w-20 sm:h-24 shrink-0 bg-neutral-900 rounded-xl overflow-hidden border transition-all ${
                selectedIdx === idx
                  ? 'border-white ring-1 ring-white'
                  : 'border-neutral-800 opacity-60 hover:opacity-100'
              }`}
              aria-label={`View photo ${idx + 1} of ${productName}`}
            >
              <Image
                src={imgUrl}
                alt={`${productName} thumbnail ${idx + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Main Large Image */}
      <div className="relative aspect-3/4 w-full bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden group select-none shadow-xl">
        <Image
          src={images[selectedIdx] || images[0]}
          alt={productName}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* SALE Tag (Top Left) */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <span
            data-badge="sale"
            className="sale-badge px-3 py-1 text-[10px] sm:text-xs font-black uppercase tracking-widest bg-red-600 shadow-md rounded-full text-[#ffffff]"
            style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff' }}
          >
            SALE
          </span>
        </div>

        {/* Image index indicator - only if multiple images */}
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-neutral-950/80 backdrop-blur-md border border-neutral-800 px-3 py-1 text-[11px] font-mono text-neutral-400 rounded-full">
            {selectedIdx + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
};
