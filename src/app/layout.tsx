import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GateWay — Adetunji Timothy Ojo | Freelance Full-Stack Engineer",
    template: "%s — GateWay",
  },
  description:
    "Adetunji Timothy Ojo — freelance full-stack engineer and 300-level Software Engineering student at Nile University of Nigeria, building systems that hold weight.",
  keywords: [
    "Adetunji Timothy Ojo",
    "freelance full-stack engineer",
    "software engineering student",
    "Nile University Nigeria",
    "React developer",
    "Node.js",
    "Express",
    "Python",
    "portfolio",
    "Abuja developer",
  ],
  authors: [{ name: "Adetunji Timothy Ojo" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SITE_URL,
    siteName: "GateWay",
    title: "GateWay — Adetunji Timothy Ojo | Freelance Full-Stack Engineer",
    description:
      "I build systems that hold weight. From the interface to the database, every layer is crafted with precision.",
    images: [{ url: "/opengraph.png", width: 1200, height: 630, alt: "GateWay — I build systems that hold weight" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GateWay — Adetunji Timothy Ojo | Freelance Full-Stack Engineer",
    description:
      "I build systems that hold weight. From the interface to the database, every layer is crafted with precision.",
    images: ["/opengraph.png"],
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Adetunji Timothy Ojo",
  jobTitle: "Freelance Full-Stack Engineer",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Nile University of Nigeria",
  },
  url: SITE_URL,
  email: "mailto:adetunji.timothy@gmail.com",
  sameAs: [
    "https://github.com/TaigaRaider",
    "https://www.linkedin.com/in/adetunjiojo",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
