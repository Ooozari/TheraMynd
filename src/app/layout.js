import {
  Geist,
  Geist_Mono,
  Plus_Jakarta_Sans,
   Urbanist,
   Inter,
} from "next/font/google";
import "./globals.css";

// Font Imports
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Add more if needed
  variable: "--font-inter",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-urbanist",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // All supported weights
});

export const metadata = {
  title: "TheraMynd",
  description: "Developed by Uzair",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakarta.variable}`}>
      <body
        className={`${geistSans.variable} ${inter.variable} ${urbanist.variable} ${geistMono.variable}   antialiased font-sans`}
        style={{ fontFamily: "var(--font-plus-jakarta)" }} // globally apply Plus Jakarta Sans
      >
        {children}
      </body>
    </html>
  );
}
