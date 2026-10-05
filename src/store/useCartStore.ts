import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product, ProductSize } from '@/types/product';

export const FREE_SHIPPING_THRESHOLD = 999;

export interface Coupon {
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  description: string;
}

export const VALID_COUPONS: Record<string, Coupon> = {
  OVERBRO10: {
    code: 'OVERBRO10',
    type: 'percentage',
    value: 10,
    description: '10% OFF on all oversized drops',
  },
  UBRO10: {
    code: 'OVERBRO10',
    type: 'percentage',
    value: 10,
    description: '10% OFF on all oversized drops',
  },
  FIRSTDROP: {
    code: 'FIRSTDROP',
    type: 'fixed',
    value: 200,
    description: '₹200 instant off on your first order',
  },
  OVERSIZED: {
    code: 'OVERSIZED',
    type: 'fixed',
    value: 150,
    description: '₹150 off on orders above ₹1,499',
  },
};

interface CartState {
  items: CartItem[];
  isDrawerOpen: boolean;
  coupon: Coupon | null;
  couponError: string | null;
  // Actions
  addItem: (product: Product, size: ProductSize, colorName: string, colorHex: string, quantity?: number) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  // Computed values
  getItemCount: () => number;
  getSubtotal: () => number;
  getDiscount: () => number;
  getShippingFee: () => number;
  getFinalTotal: () => number;
  getFreeShippingRemaining: () => number;
  isFreeShippingUnlocked: () => boolean;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isDrawerOpen: false,
      coupon: null,
      couponError: null,

      addItem: (product, size, colorName, colorHex, quantity = 1) => {
        const itemId = `${product.id}-${size}-${colorName.toLowerCase().replace(/\s+/g, '-')}`;
        const currentItems = get().items;
        const existingIndex = currentItems.findIndex((item) => item.id === itemId);

        const sizeOption = product.sizes.find((s) => s.size === size);
        const maxStock = sizeOption ? sizeOption.stockCount : 10;

        if (existingIndex > -1) {
          const updatedItems = [...currentItems];
          const newQty = Math.min(updatedItems[existingIndex].quantity + quantity, maxStock);
          updatedItems[existingIndex] = {
            ...updatedItems[existingIndex],
            quantity: newQty,
          };
          set({ items: updatedItems, isDrawerOpen: true });
        } else {
          const newItem: CartItem = {
            id: itemId,
            productId: product.id,
            slug: product.slug,
            name: product.name,
            price: product.price,
            originalPrice: product.originalPrice,
            image: product.images[0],
            categoryLabel: product.categoryLabel,
            size,
            color: colorName,
            colorHex,
            quantity: Math.min(quantity, maxStock),
            maxStock,
          };
          set({ items: [...currentItems, newItem], isDrawerOpen: true });
        }
      },

      removeItem: (itemId) => {
        set({ items: get().items.filter((item) => item.id !== itemId) });
      },

      updateQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(itemId);
          return;
        }
        set({
          items: get().items.map((item) =>
            item.id === itemId
              ? { ...item, quantity: Math.min(quantity, item.maxStock) }
              : item
          ),
        });
      },

      clearCart: () => {
        set({ items: [], coupon: null, couponError: null });
      },

      openDrawer: () => set({ isDrawerOpen: true }),
      closeDrawer: () => set({ isDrawerOpen: false }),
      toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),

      applyCoupon: (code: string) => {
        const normalized = code.trim().toUpperCase();
        const validCoupon = VALID_COUPONS[normalized];

        if (!validCoupon) {
          set({ couponError: 'Invalid promo code. Try "OVERBRO10" or "FIRSTDROP"' });
          return false;
        }

        const subtotal = get().getSubtotal();
        if (normalized === 'OVERSIZED' && subtotal < 1499) {
          set({ couponError: 'Code "OVERSIZED" is valid only for orders above ₹1,499' });
          return false;
        }

        set({ coupon: validCoupon, couponError: null });
        return true;
      },

      removeCoupon: () => {
        set({ coupon: null, couponError: null });
      },

      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getSubtotal: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
      },

      getDiscount: () => {
        const { coupon } = get();
        if (!coupon) return 0;
        const subtotal = get().getSubtotal();
        if (coupon.type === 'percentage') {
          return Math.round((subtotal * coupon.value) / 100);
        }
        return Math.min(coupon.value, subtotal);
      },

      getShippingFee: () => {
        const subtotal = get().getSubtotal();
        if (subtotal === 0) return 0;
        return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 99;
      },

      getFinalTotal: () => {
        const subtotal = get().getSubtotal();
        if (subtotal === 0) return 0;
        const discount = get().getDiscount();
        const shipping = get().getShippingFee();
        return Math.max(0, subtotal - discount + shipping);
      },

      getFreeShippingRemaining: () => {
        const subtotal = get().getSubtotal();
        return Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
      },

      isFreeShippingUnlocked: () => {
        return get().getSubtotal() >= FREE_SHIPPING_THRESHOLD;
      },
    }),
    {
      name: 'overbro-cart-storage',
      partialize: (state) => ({ items: state.items, coupon: state.coupon }),
    }
  )
);
