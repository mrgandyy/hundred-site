import "./globals.css";
import type { Metadata } from "next";
import { Suspense } from "react";

// keep your alias style "@/src/*"
import ScrollProgress from "@/src/components/ScrollProgress";
import BackgroundAurora from "@/src/components/BackgroundAurora";
import BackgroundCyber from "@/src/components/BackgroundCyber";

export const metadata: Metadata = {
  title: "THE HUNDRED — VRChat Collective",
  description: "Events, worlds, partners, and collabs.",
  openGraph: { title: "THE HUNDRED — VRChat Collective", description: "Join our Discord and tap into events, worlds, and collabs.", images: ["/og.jpg"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-base-900 text-white font-body">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Orbitron:wght@500;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-base-900 text-white antialiased">
        {/* Layer 0: cyber grid under everything */}
        <BackgroundCyber />
        {/* Layer 1: aurora above grid, below content */}
        <BackgroundAurora />

        <Suspense fallback={null}>
          <ScrollProgress />
        </Suspense>

        {/* Content sits above backgrounds */}
        <div className="relative z-[2]">{children}</div>
      </body>
    </html>
  );
}
