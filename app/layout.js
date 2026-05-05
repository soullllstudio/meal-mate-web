import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://mealmatecal.tech"),
  title: {
    default: "MealMate | Smarter Calorie & Macro Tracking",
    template: "%s | MealMate",
  },
  description:
    "MealMate makes calorie and macro tracking simple, fast, and accurate with barcode scanning, nutrition label scanning, and AI-powered meal recognition.",
  icons: {
    icon: "/assets/app-icon.png",
    apple: "/assets/app-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable}`}>{children}</body>
    </html>
  );
}
