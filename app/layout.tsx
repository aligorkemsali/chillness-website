import type { Metadata } from "next";
import { Fraunces, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const body = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/img/photos/ChillNessColoured.png",
  },
  title: "Chill'Ness: The Tenth Wave | ESN Türkiye",
  description:
    "Chill'Ness: The Tenth Wave — the legendary ESN Türkiye summer event returns. Live DJ sets, and unforgettable nights.",
  openGraph: {
    title: "Chill'Ness: The Tenth Wave",
    description:
      "Ten years. Ten waves. One unforgettable summer with ESN Türkiye.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="bg-[#166954] text-sand font-body antialiased">
        {children}
      </body>
    </html>
  );
}
