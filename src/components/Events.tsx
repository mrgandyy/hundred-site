import { events } from "@/src/data/events";


export default function Events() {
return (
<section id="events" className="py-20 border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="font-display text-3xl md:text-4xl font-extrabold">Events</h2>
<p className="text-white/70 mt-2">Pull up to our next pop-ups, takeovers, and stress tests.</p>
</div>
<a href="https://discord.gg/thehundred" target="_blank" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10">Full calendar on Discord →</a>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
{events.map((e) => (
<a key={e.name} href={e.link} target="_blank" className="group rounded-2xl overflow-hidden border border-white/10 bg-base-800/60 hover:bg-base-800 transition">
<div className="aspect-[16/10]" style={{ backgroundImage: `url(${e.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="font-bold">{e.name}</h3>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">{e.tag}</span>
</div>
<p className="text-xs text-white/50 mt-1">{e.date}</p>
<p className="text-sm text-white/70 mt-2">{e.desc}</p>
</div>
</a>
))}
</div>
</div>
</section>
);
}