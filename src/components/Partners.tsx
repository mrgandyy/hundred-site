"use client";
import Image from "next/image";
import { partners } from "@/src/data/partners";
import { motion, pop } from "@/src/components/motion";

export default function Partners() {
  // duplicate list for seamless marquee
  const items = [...partners, ...partners];
  return (
    <section id="partners" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold">Partners</h2>
            <p className="text-white/70 mt-3 text-lg">We believe support and respect is a two-way street. We grow together.</p>
          </div>
          <a href="/?topic=partner#contact" className="hidden sm:inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm">
            Become a partner →
          </a>
        </div>

        <motion.div variants={pop} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }} className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div className="flex whitespace-nowrap">
            <div className="marquee-track flex gap-8 px-8 py-6">
              {items.map((p, i) => (
                <a key={p.name + i} href={p.url} target="_blank" className="h-16 w-44 rounded-2xl bg-white/5 border border-white/10 grid place-items-center hover:bg-white/10 transition">
                  <Image src={p.logo || "/placeholder.svg"} alt={`${p.name} logo`} width={176} height={64} className="max-h-12 w-auto object-contain opacity-95" unoptimized />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
