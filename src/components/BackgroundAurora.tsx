export default function BackgroundAurora() {
  return (
    <div className="fixed inset-0 z-[1] pointer-events-none" aria-hidden>
      {/* Gold blob */}
      <div
        className="absolute -top-24 -left-24 h-[42rem] w-[42rem] rounded-full aurora"
        style={{ background: "radial-gradient(40% 40% at 50% 50%, #F4C542 0%, transparent 60%)" }}
      />
      {/* Ice blob */}
      <div
        className="absolute -bottom-32 -right-24 h-[38rem] w-[38rem] rounded-full aurora"
        style={{ background: "radial-gradient(40% 40% at 50% 50%, #B8E3FF 0%, transparent 60%)", animationDelay: "4s" }}
      />
      {/* Center glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[34rem] w-[34rem] rounded-full aurora"
        style={{ background: "radial-gradient(40% 40% at 50% 50%, #F4C542 0%, transparent 60%)", animationDelay: "8s" }}
      />
    </div>
  );
}
