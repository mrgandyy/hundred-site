import { Suspense } from "react";

import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import Events from "@/src/components/Events";
import Staff from "@/src/components/Staff";
import Worlds from "@/src/components/Worlds";
import Partners from "@/src/components/Partners";
import Sponsors from "@/src/components/Sponsors";
import Contact from "@/src/components/Contact";
import PartnerCTA from "@/src/components/PartnerCTA";

export default function Page() {
return (
<>
<Header />
<main>
<Hero />
<Events />
<Staff />
<Worlds />
<Partners />
<PartnerCTA />
<Sponsors />
<Suspense fallback={null}>
<Contact />
</Suspense>
</main>
<footer className="py-10 border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-white/50 text-sm">© {new Date().getFullYear()} THE HUNDRED. All rights reserved.</p>
<div className="flex items-center gap-4 text-sm">
<a href="https://discord.gg/thehundred" target="_blank" className="hover:text-accent-400">Discord</a>
<a href="https://twitch.tv/twerktacotv" className="hover:text-accent-400">Twitch</a>
<a href="https://patreon.com/TwerkTaco" className="hover:text-accent-400">Patreon</a>
</div>
</div>
</footer>
</>
);
}