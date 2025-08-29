export default function PartnerCTA() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold">Become a Partner</h2>
          <p className="text-white/70 mt-3 text-lg">
            Crews, DJs, artists, builders, and brands — let’s collab. We promote quality,
            uplift community, and keep it 100.
          </p>

          <ul className="mt-6 space-y-3 text-white/80">
            <li>• Homepage logo + link on 100vr.club</li>
            <li>• Collab slots & co-hosted events</li>
            <li>• Social promo & announcement support</li>
            <li>• Partner Discord role + private channel</li>
            <li>• Priority booking + featured placement</li>
            <li>• Early access/test nights in our worlds</li>
          </ul>

          <div className="mt-8 flex gap-3">
            <a href="/?topic=partner#contact"
              className="px-6 py-3 rounded-2xl bg-accent-500 text-black font-bold shadow-glow hover:-translate-y-0.5 transition"
            >
              Apply to Partner
            </a>
            <a
              href="https://discord.gg/thehundred"
              target="_blank"
              className="px-6 py-3 rounded-2xl border border-white/10 hover:border-white/20 bg-white/5"
            >
              Talk to us on Discord
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-bold text-xl">Who we’re looking for</h3>
          <p className="text-white/70 mt-2">
            Active communities, consistent DJs, world creators, photographers,
            media teams, and brands that align with our vibe.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm text-white/70">
            <div className="p-4 rounded-2xl bg-base-800/70 border border-white/10">⏱ Consistent presence</div>
            <div className="p-4 rounded-2xl bg-base-800/70 border border-white/10">🎧 Events / content output</div>
            <div className="p-4 rounded-2xl bg-base-800/70 border border-white/10">🤝 Community-first attitude</div>
            <div className="p-4 rounded-2xl bg-base-800/70 border border-white/10">💡 Creative collab ideas</div>
          </div>
        </div>
      </div>
    </section>
  );
}
