import type { Metadata, Viewport } from "next";
import { Geist, Dancing_Script, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_URL } from "@/config/site";
import { RevealRoot } from "@/components/RevealRoot";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], display: "swap" });
const deva = Noto_Sans_Devanagari({ variable: "--font-deva", subsets: ["devanagari"], weight: ["400", "500"], display: "swap", preload: false });
const script = Dancing_Script({ variable: "--font-script", subsets: ["latin"], weight: ["500", "600"], display: "swap" });

const title = "QUERLY — Real-time conversation intelligence that stays out of sight";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description: SITE_DESCRIPTION,
  openGraph: { title, description: SITE_DESCRIPTION, url: "/", siteName: "QUERLY", type: "website", locale: "en_IN" },
  twitter: { card: "summary_large_image", title, description: SITE_DESCRIPTION },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = { themeColor: "#F8F9FB" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${script.variable} ${deva.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-screen">
        <RevealRoot />
        {children}
      </body>
    </html>
  );
}
