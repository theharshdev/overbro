export type ProductCategory = 'oversized-t-shirts';

export type ProductSize = 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface ProductColor {
  name: string;
  hex: string;
  inStock: boolean;
}

export interface ProductSizeOption {
  size: ProductSize;
  inStock: boolean;
  stockCount: number;
}

export interface ProductDetails {
  fabricAndQuality: string;
  fitAndStyling: string;
  shippingAndReturns: string;
  careInstructions: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: ProductCategory;
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  gsm: number; // 250+ GSM
  fabric: string;
  fit: string;
  description: string;
  story: string;
  colors: ProductColor[];
  sizes: ProductSizeOption[];
  images: string[];
  rating: number;
  reviewCount: number;
  badge?: 'NEW DROP' | 'BESTSELLER' | 'LIMITED' | 'HEAVYWEIGHT' | 'STAFF PICK';
  collection: 'the-core' | 'heavyweight' | 'after-dark' | 'new-drop' | 'vintage-wash';
  collectionLabel: string;
  featured?: boolean;
  isNewDrop?: boolean;
  isBestseller?: boolean;
  inStock: boolean;
  details: ProductDetails;
}

export interface FilterState {
  category: string;
  sizes: ProductSize[];
  colors: string[];
  priceRange: [number, number];
  collections: string[];
  gsmRange: string;
  inStockOnly: boolean;
  sortBy: 'featured' | 'newest' | 'bestselling' | 'price-asc' | 'price-desc';
}

export interface CartItem {
  id: string; // composite: `${productId}-${size}-${color}`
  productId: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  categoryLabel: string;
  size: ProductSize;
  color: string;
  colorHex: string;
  quantity: number;
  maxStock: number;
}

export interface ShippingAddress {
  fullName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  landmark?: string;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  status: 'Processing' | 'Shipped' | 'Out for Delivery' | 'Delivered';
  paymentMethod: 'UPI' | 'Card' | 'NetBanking' | 'Cash on Delivery';
  shippingAddress: ShippingAddress;
  estimatedDelivery: string;
}
