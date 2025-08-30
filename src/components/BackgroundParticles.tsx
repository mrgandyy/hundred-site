"use client";
import { useEffect, useRef } from "react";

export default function BackgroundParticles() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * DPR;
    canvas.height = height * DPR;
    ctx.scale(DPR, DPR);

    const ACCENT = "#F4C542";
    const ICE = "#B8E3FF";
    const N = Math.min(140, Math.floor((width * height) / 24000)); // scale with screen

    type P = { x: number; y: number; vx: number; vy: number; r: number; c: string };
    const pts: P[] = Array.from({ length: N }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: 1 + Math.random() * 1.5,
      c: Math.random() < 0.5 ? ACCENT : ICE,
    }));

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // dots
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        ctx.globalAlpha = 0.7;
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // links
      ctx.lineWidth = 1;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 130 * 130) {
            const alpha = 0.06 * (1 - Math.sqrt(d2) / 130);
            ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      raf.current = requestAnimationFrame(draw);
    }

    if (!prefersReduced) raf.current = requestAnimationFrame(draw);

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      ctx.scale(DPR, DPR);
    };
    window.addEventListener("resize", onResize);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden
    />
  );
}
