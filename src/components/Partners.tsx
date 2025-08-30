import Image from "next/image";
import Link from "next/link";
import { partners } from "@/src/data/partners";

export default function Partners() {
  return (
    <section id="partners" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold">Partners</h2>
            <p className="text-white/70 mt-3 text-lg">
              We believe support and respect is a two-way street. We grow together.
            </p>
          </div>

          {/* Internal navigation → use Link */}
          <Link
            href={{ pathname: "/", query: { topic: "partner" }, hash: "contact" }}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm"
          >
            Become a partner →
          </Link>
        </div>

        {/* Bigger cards / fewer columns */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              className="h-32 rounded-3xl border border-white/10 bg-white/5 grid place-items-center overflow-hidden hover:bg-white/10 transition"
              title={p.name}
            >
              <Image
                src={p.logo || "/placeholder.svg"}
                alt={`${p.name} logo`}
                width={320}
                height={80}
                className="max-h-16 w-auto object-contain opacity-95"
                unoptimized
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
