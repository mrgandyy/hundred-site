"use client";
import { useState } from "react";


export default function Contact() {
const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
const [error, setError] = useState<string>("");


async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
e.preventDefault();
setStatus("loading");
setError("");


const form = e.currentTarget;
const data = Object.fromEntries(new FormData(form).entries());


try {
const res = await fetch("/api/contact", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(data),
});
if (!res.ok) throw new Error(await res.text());
setStatus("ok");
form.reset();
} catch (err: any) {
setError(err?.message || "Something went wrong.");
setStatus("error");
}
}


return (
<section id="contact" className="py-20 border-t border-white/5">
<div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="font-display text-3xl md:text-4xl font-extrabold">Contact Us</h2>
<p className="text-white/70 mt-2">Booking, partnerships, sponsors, or press.</p>
<div className="mt-8 p-6 rounded-2xl bg-base-800/70 border border-white/10 text-left">
<form onSubmit={onSubmit} className="grid gap-4">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="text-sm text-white/60">Your Name</label>
<input required name="name" className="mt-1 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-accent-500" placeholder="Jane Doe" />
</div>
<div>
<label className="text-sm text-white/60">Discord Handle</label>
<input name="discord" className="mt-1 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-accent-500" placeholder="@yourname" />
</div>
</div>
<div>
<label className="text-sm text-white/60">Email</label>
<input required type="email" name="email" className="mt-1 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-accent-500" placeholder="you@example.com" />
</div>
<div>
<label className="text-sm text-white/60">Message</label>
<textarea required name="message" rows={5} className="mt-1 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-accent-500" placeholder="Tell us what you have in mind…" />
</div>
{/* Honeypot */}
<input type="text" name="hp" tabIndex={-1} autoComplete="off" className="hidden" />
<div className="flex flex-wrap items-center gap-3">
<button disabled={status==="loading"} className="px-6 py-3 rounded-2xl bg-accent-500 text-black font-bold disabled:opacity-60">{status === "loading" ? "Sending…" : "Send"}</button>
<a href="https://discord.gg/thehundred" target="_blank" className="text-sm text-white/70 underline">Or DM us on Discord →</a>
</div>
{status === "ok" && <p className="text-sm text-green-400">Sent! We'll get back to you soon.</p>}
{status === "error" && <p className="text-sm text-red-400">{error}</p>}
</form>
</div>
</div>
</section>
);
}