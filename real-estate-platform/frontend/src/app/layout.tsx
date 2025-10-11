import type { Metadata, Viewport } from "next";
import { Heebo, Assistant, Rubik, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const heebo = Heebo({ 
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
});

const assistant = Assistant({ 
  subsets: ["hebrew", "latin"],
  variable: "--font-assistant",
  display: "swap",
});

const rubik = Rubik({ 
  subsets: ["hebrew", "latin"],
  variable: "--font-rubik",
  display: "swap",
});

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amido Group - קבוצת נדל״ן",
  description: "הצטרפו לקהילה סודית של משקיעים נבחרים. גישה לעסקאות יוקרה בלעדיות, תנאים מועדפים ומומחיות משותפת.",
  keywords: "השקעות נדלן, קבוצת רכישה, נדלן יוקרה, השקעות, נדלן",
  authors: [{ name: "Amido Group" }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${assistant.variable} ${rubik.variable} ${playfairDisplay.variable} ${cormorantGaramond.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" type="image/svg+xml" href="/favicon.svg" />
        {/* Preload critical images for instant loading */}
        <link rel="preload" as="image" href="/features/pexels-brett-sayles-2606383.jpg" />
        <link rel="preload" as="image" href="/features/pexels-pixabay-358530.jpg" />
        <link rel="preload" as="image" href="/features/pexels-sevenstormphotography-443383.jpg" />
      </head>
      <body className={`${heebo.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}