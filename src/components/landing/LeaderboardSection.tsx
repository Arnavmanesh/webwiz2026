import { useScrollReveal } from "@/hooks/useScrollReveal";

const leaderboard = [
  { rank: 1, name: "Kai Mercer", level: 47, xp: "184,320", badge: "🥇" },
  { rank: 2, name: "Priya Vasquez", level: 44, xp: "171,050", badge: "🥈" },
  { rank: 3, name: "Tomás Lindgren", level: 42, xp: "162,800", badge: "🥉" },
  { rank: 4, name: "Aisha Okafor", level: 39, xp: "148,400", badge: "" },
  { rank: 5, name: "Renzo Bellucci", level: 37, xp: "139,720", badge: "" },
];

const LeaderboardSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-32">
      <div className="container">
        <div ref={ref} className="section-reveal">
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">Leaderboard</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Compete With <span className="text-gradient-primary">the Best</span>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto glass-card overflow-hidden">
            <div className="grid grid-cols-[3rem_1fr_4rem_6rem] gap-4 px-6 py-3 border-b border-border/50 text-xs font-mono uppercase tracking-wider text-muted-foreground">
              <span>#</span>
              <span>Player</span>
              <span className="text-center">LVL</span>
              <span className="text-right">XP</span>
            </div>
            {leaderboard.map((player, i) => (
              <div
                key={player.name}
                className={`grid grid-cols-[3rem_1fr_4rem_6rem] gap-4 px-6 py-4 items-center transition-colors hover:bg-primary/5 ${
                  i === 0 ? "bg-primary/[0.03]" : ""
                } ${i < leaderboard.length - 1 ? "border-b border-border/30" : ""}`}
              >
                <span className="font-mono font-bold text-lg">
                  {player.badge || player.rank}
                </span>
                <span className="font-medium">{player.name}</span>
                <span className="text-center font-mono text-primary font-semibold">{player.level}</span>
                <span className="text-right font-mono text-sm text-muted-foreground tabular-nums">{player.xp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardSection;
