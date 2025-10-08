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
      <body className={`${heebo.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}