import { staff } from "@/src/data/staff";


export default function Staff() {
return (
<section id="staff" className="py-20 border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="font-display text-3xl md:text-4xl font-extrabold">Meet the Staff</h2>
<p className="text-white/70 mt-2">Leaders, DJs, dancers, builders — the crew that keeps it 100.</p>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
{staff.map((s) => (
<article key={s.name} className="p-6 rounded-2xl bg-base-800/70 border border-white/10">
<div className="flex items-center gap-4">
{/* eslint-disable-next-line @next/next/no-img-element */}
<img src={s.avatar} alt={s.name} className="h-14 w-14 rounded-xl border border-white/10" />
<div>
<h3 className="font-bold">{s.name}</h3>
<p className="text-xs text-white/60">{s.role}</p>
</div>
</div>
<p className="text-sm text-white/70 mt-4">{s.bio}</p>
</article>
))}
</div>
</div>
</section>
);
}