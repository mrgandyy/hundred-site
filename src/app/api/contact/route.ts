import { NextResponse } from "next/server";


export async function POST(req: Request) {
try {
const { name = "", email = "", discord = "", message = "", hp = "" } = await req.json().catch(() => ({}));


// honeypot
if (hp) return NextResponse.json({ ok: true });


if (!name || !email || !message) {
return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
}


const webhook = process.env.DISCORD_WEBHOOK_URL;
if (!webhook) return NextResponse.json({ error: "Missing DISCORD_WEBHOOK_URL" }, { status: 500 });


const content = `**THE HUNDRED — Contact**\n**Name:** ${name}\n**Email:** ${email}\n**Discord:** ${discord}\n\n**Message:**\n${message}`;


const res = await fetch(webhook, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ content }),
});


if (!res.ok) {
const txt = await res.text();
return NextResponse.json({ error: `Discord error: ${txt}` }, { status: 500 });
}


return NextResponse.json({ ok: true });
} catch (e: any) {
return NextResponse.json({ error: e?.message || "Unknown error" }, { status: 500 });
}
}