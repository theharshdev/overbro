import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { SearchOverlay } from '@/components/ui/SearchOverlay';
import { ToastContainer } from '@/components/ui/Toast';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'UBro — 250+ GSM Oversized T-Shirts',
  description:
    'Discover UBro — premium 250+ GSM oversized T-shirts built for everyday comfort, architectural drape, and modern Indian streetwear. 100% combed cotton with custom drop shoulders.',
  keywords: [
    'UBro',
    'oversized t-shirts',
    '250+ GSM t-shirts',
    'heavyweight t-shirts',
    '300 GSM t-shirt',
    '320 GSM t-shirt',
    'Indian streetwear',
    'drop shoulder tees',
    'streetwear India',
  ],
  authors: [{ name: 'UBro Streetwear' }],
  openGraph: {
    title: 'UBro — 250+ GSM Oversized T-Shirts',
    description:
      'Discover UBro — premium 250+ GSM oversized T-shirts built for everyday comfort, architectural drape, and modern streetwear.',
    url: 'https://ubro.in',
    siteName: 'UBro Streetwear',
    locale: 'en_IN',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="bg-neutral-950 text-neutral-100 min-h-screen flex flex-col font-sans antialiased selection:bg-neutral-200 selection:text-neutral-950">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <CartDrawer />
        <SearchOverlay />
        <ToastContainer />
      </body>
    </html>
  );
}
