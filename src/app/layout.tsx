import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
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
      "Free tech learning roadmaps and custom website development.",
    url: "https://techturi.org",
    siteName: "Techturi",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
