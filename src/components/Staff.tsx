"use client";
import { staff } from "@/src/data/staff";
import { motion, fadeInUp, stagger } from "@/src/components/motion";

export default function Staff() {
  return (
    <section id="staff" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl md:text-5xl font-extrabold">Meet the Staff</h2>
        <p className="text-white/70 mt-3 text-lg">Leaders, DJs, dancers, builders — the crew that keeps it 100.</p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {staff.map((s) => (
            <motion.article
              key={s.name}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="p-7 rounded-3xl glossy hover-glow"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.avatar} alt={s.name} className="h-16 w-16 rounded-2xl border border-white/10 float-soft" />
              <div className="mt-4">
                <h3 className="font-bold text-lg">{s.name}</h3>
                <p className="text-xs text-white/60">{s.role}</p>
                <p className="text-sm text-white/70 mt-3">{s.bio}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
