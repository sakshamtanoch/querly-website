import type { Metadata, Viewport } from "next";
import { Manrope, Dancing_Script } from "next/font/google";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_URL } from "@/config/site";
import { Blobs } from "@/components/Blobs";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });
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

export const viewport: Viewport = { themeColor: "#F8FAFF" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${script.variable}`}>
      <body className="min-h-screen">
        <Blobs />
        {children}
      </body>
    </html>
  );
}
