// add this import at top of file if you don’t have types:
import "./globals.css";
import { Suspense } from "react";
import ScrollProgress from "@/src/components/ScrollProgress";


export const metadata = {
title: "THE HUNDRED — VRChat Collective",
description: "Events, worlds, and partners of THE HUNDRED.",
openGraph: {
title: "THE HUNDRED — VRChat Collective",
description: "Join our Discord and tap into events, worlds, and collabs.",
images: ["/og.jpg"],
},
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en" className="bg-base-900 text-white font-body">
<head>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Orbitron:wght@500;800&display=swap" rel="stylesheet" />
</head>
<body><Suspense><ScrollProgress /></Suspense>{children}</body>
</html>
);
}