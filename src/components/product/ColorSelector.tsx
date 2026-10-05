'use client';

import React from 'react';
import { ProductColor } from '@/types/product';

interface ColorSelectorProps {
  colors: ProductColor[];
  selectedColor: string;
  onSelectColor: (colorName: string) => void;
}

export const ColorSelector: React.FC<ColorSelectorProps> = ({
  colors,
  selectedColor,
  onSelectColor,
}) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs">
        <span className="font-bold text-neutral-400 uppercase tracking-wider">
          SHADE:
        </span>
        <span className="font-bold text-white uppercase tracking-wider">
          {selectedColor}
        </span>
      </div>

      <div className="flex items-center gap-3">
        {colors.map((color) => {
          const isSelected = color.name === selectedColor;
          return (
            <button
              key={color.name}
              type="button"
              onClick={() => onSelectColor(color.name)}
              className={`group relative p-1 transition-all ${
                isSelected ? 'ring-2 ring-white ring-offset-2 ring-offset-neutral-950' : 'hover:scale-105'
              }`}
              title={color.name}
              aria-label={`Select color ${color.name}`}
            >
              <span
                className="block w-7 h-7 rounded-none border border-neutral-700 shadow-inner"
                style={{ backgroundColor: color.hex }}
              />
              <span className="sr-only">{color.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
