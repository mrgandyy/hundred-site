"use client";
import { useState } from "react";


export default function Header() {
const [open, setOpen] = useState(false);
return (
<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-base-900/70 bg-base-900/95 border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<a href="#home" className="flex items-center gap-3 group">
<div className="h-8 w-8 rounded-lg bg-accent-500/20 border border-accent-500/30 shadow-glow grid place-items-center">
<span className="text-accent-400 font-extrabold">100</span>
</div>
<span className="font-display tracking-widest font-extrabold text-lg">THE HUNDRED</span>
</a>
<nav className="hidden md:flex items-center gap-6 text-sm">
<a href="#events" className="hover:text-accent-400">Events</a>
<a href="#staff" className="hover:text-accent-400">Meet the Staff</a>
<a href="#worlds" className="hover:text-accent-400">Worlds</a>
<a href="#partners" className="hover:text-accent-400">Partners</a>
<a href="#sponsors" className="hover:text-accent-400">Sponsors</a>
<a href="#contact" className="hover:text-accent-400">Contact</a>
<a href="https://discord.gg/thehundred" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-500/20 border border-accent-500/40 hover:bg-accent-500/30 hover:shadow-glow transition">Join Discord</a>
</nav>
<button onClick={() => setOpen(v => !v)} className="md:hidden p-2 rounded-lg border border-white/10">☰</button>
</div>
{open && (
<div className="md:hidden pb-4">
<div className="grid gap-2 text-sm">
<a href="#events" className="py-2" onClick={()=>setOpen(false)}>Events</a>
<a href="#staff" className="py-2" onClick={()=>setOpen(false)}>Meet the Staff</a>
<a href="#worlds" className="py-2" onClick={()=>setOpen(false)}>Worlds</a>
<a href="#partners" className="py-2" onClick={()=>setOpen(false)}>Partners</a>
<a href="#sponsors" className="py-2" onClick={()=>setOpen(false)}>Sponsors</a>
<a href="#contact" className="py-2" onClick={()=>setOpen(false)}>Contact</a>
<a href="https://discord.gg/thehundred" target="_blank" className="py-2 text-accent-400">Join Discord →</a>
</div>
</div>
)}
</div>
</header>
);
}