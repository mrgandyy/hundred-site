import { worlds } from "@/src/data/worlds";


export default function Worlds() {
return (
<section id="worlds" className="py-20 border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="font-display text-3xl md:text-4xl font-extrabold">Worlds</h2>
<p className="text-white/70 mt-2">Our venues — from luxury clubs to cyberpunk afterparties.</p>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
{worlds.map((w) => (
<a key={w.name} href={w.link || "#"} className="group rounded-2xl overflow-hidden border border-white/10 bg-base-800/60 hover:bg-base-800 transition">
<div className="aspect-video" style={{ backgroundImage: `url(${w.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="font-bold">{w.name}</h3>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">{w.tag}</span>
</div>
<p className="text-sm text-white/70 mt-2">{w.desc}</p>
</div>
</a>
))}
</div>
</div>
</section>
);
}