"use client";
import { worlds } from "@/src/data/worlds";
import { motion, fadeInUp, stagger } from "@/src/components/motion";

export default function Worlds() {
  return (
    <section id="worlds" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl md:text-5xl font-extrabold">Worlds</h2>
        <p className="text-white/70 mt-3 text-lg">Our venues — from luxury clubs to cyberpunk afterparties.</p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {worlds.map((w) => (
            <motion.a
              key={w.name}
              href={w.link || "#"}
              variants={fadeInUp}
              whileHover={{ y: -6, rotateX: 1.5, rotateY: -1.5 }}
              className="group rounded-3xl overflow-hidden glossy hover-glow perspective"
            >
              <div
                className="aspect-video bg-center bg-cover"
                style={{ backgroundImage: `url(${w.img})` }}
              />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg">{w.name}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">{w.tag}</span>
                </div>
                <p className="text-sm text-white/70 mt-2">{w.desc}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
