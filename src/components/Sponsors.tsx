"use client";
import { sponsors } from "@/src/data/sponsors";
import Image from "next/image";
import { motion, fadeInUp, stagger } from "@/src/components/motion";

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold">Sponsors</h2>
            <p className="text-white/70 mt-3 text-lg">Fueling bigger events, better production, and community growth.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-accent-500/20 border border-accent-500/40 text-sm">
            Sponsor THE HUNDRED →
          </a>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {sponsors.map(s => (
            <motion.div key={s.name} variants={fadeInUp} whileHover={{ y: -6 }} className="p-8 rounded-3xl glossy hover-glow">
              <div className="h-24 rounded-2xl bg-white/5 border border-white/10 grid place-items-center overflow-hidden">
                <Image src={s.logo || "/placeholder.svg"} alt={`${s.name} logo`} width={360} height={96} className="max-h-20 w-auto object-contain opacity-95" unoptimized />
              </div>
              <p className="text-base text-white/70 mt-5">{s.blurb}</p>
              {s.url && (
                <a href={s.url} target="_blank" className="mt-5 inline-block text-sm px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10">
                  Visit {s.name.split(" ")[0]}
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
