import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: {
    default: "Techturi — Learn. Build. Launch.",
    template: "%s | Techturi",
  },
  description:
    "Free tech learning roadmaps and custom website development. Break into tech or get a website built to last.",
  metadataBase: new URL("https://techturi.org"),
  openGraph: {
    title: "Techturi — Learn. Build. Launch.",
    description:
      "Free tech roadmaps for data, security & AI — plus custom websites and iOS apps built to last. Based in Houston, TX.",
    url: "https://techturi.org",
    siteName: "Techturi",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Techturi — Learn. Build. Launch.",
    description:
      "Free tech roadmaps for data, security & AI — plus custom websites and iOS apps built to last.",
  },
  keywords: [
    "tech education", "data analytics", "cybersecurity", "generative AI",
    "web development Houston", "custom website", "Wix studio", "iOS app development",
    "free tech courses", "cert roadmap",
  ],
  verification: {
    google: "W5hfg9y5Mb0tKkFm1DUj63qtTUOxyJ92Jf9ls1tzY8A",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}<Analytics /></body>
    </html>
  );
}
