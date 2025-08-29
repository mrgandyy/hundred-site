export default function Hero() {
return (
<section id="home" className="relative overflow-hidden">
<div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
<div className="absolute -top-24 -right-24 h-[36rem] w-[36rem] rounded-full bg-accent-500 blur-3xl" />
<div className="absolute -bottom-24 -left-24 h-[36rem] w-[36rem] rounded-full bg-ice blur-3xl opacity-60" />
</div>
<div className="grid-bg">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 grid md:grid-cols-2 items-center gap-12">
<div>
<p className="text-sm uppercase tracking-widest text-white/60">VRChat Collective</p>
<h1 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl leading-tight font-extrabold">
We don't do 99. <span className="text-accent-400 drop-shadow">We keep it 100.</span>
</h1>
<p className="mt-5 text-white/80 max-w-xl">
Events. Worlds. Culture. THE HUNDRED is a collective of creators, performers, and pioneers shaping the future of virtual nightlife.
</p>
<div className="mt-8 flex flex-wrap gap-3">
<a href="https://discord.gg/thehundred" target="_blank" className="px-6 py-3 rounded-2xl bg-accent-500 text-black font-bold shadow-glow hover:-translate-y-0.5 transition">Join the Discord</a>
<a href="#events" className="px-6 py-3 rounded-2xl border border-white/10 hover:border-white/20">See Upcoming Events</a>
</div>
</div>
<div>
<div className="aspect-video rounded-2xl border border-white/10 bg-base-800/70 backdrop-blur-sm overflow-hidden shadow-xl">
<iframe className="w-full h-full" src="https://www.youtube.com/embed/LP_YGLhiT4o?rel=0&modestbranding=1" title="Promo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
</div>
<p className="mt-2 text-xs text-white/50">Replace with your trailer or event reel.</p>
</div>
</div>
</div>
</section>
);
}