"use client";
import { events } from "@/src/data/events";
import { motion, fadeInUp, stagger } from "@/src/components/motion";

export default function Events() {
  return (
    <section id="events" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold">Events</h2>
            <p className="text-white/70 mt-3 text-lg">Pull up to our next pop-ups, takeovers, and stress tests.</p>
          </div>
          <a href="https://discord.gg/thehundred" target="_blank" className="hidden sm:inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm">
            Full calendar on Discord →
          </a>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {events.map((e) => (
            <motion.a
              key={e.name}
              href={e.link}
              target="_blank"
              variants={fadeInUp}
              className="group rounded-3xl overflow-hidden glossy hover-glow transition-transform will-change-transform"
              whileHover={{ y: -6 }}
            >
              <div
                className="aspect-[16/10] bg-center bg-cover"
                style={{ backgroundImage: `url(${e.img})` }}
              />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg">{e.name}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">{e.tag}</span>
                </div>
                <p className="text-xs text-white/50 mt-1">{e.date}</p>
                <p className="text-sm text-white/70 mt-2">{e.desc}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
