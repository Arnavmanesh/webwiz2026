import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const InteractiveDemoSection = () => {
  const [xp, setXp] = useState(2420);
  const [level, setLevel] = useState(12);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const maxXp = 3000;
  const ref = useScrollReveal();

  const completeWorkout = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const gained = Math.floor(Math.random() * 200) + 150;
    const newXp = xp + gained;

    if (newXp >= maxXp) {
      setXp(newXp - maxXp);
      setTimeout(() => {
        setLevel((l) => l + 1);
        setShowLevelUp(true);
        setTimeout(() => setShowLevelUp(false), 2000);
      }, 800);
    } else {
      setXp(newXp);
    }

    setTimeout(() => setIsAnimating(false), 1200);
  };

  const pct = Math.min((xp / maxXp) * 100, 100);

  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
      <div className="container relative">
        <div ref={ref} className="section-reveal max-w-lg mx-auto text-center">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">Try It</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
            See It in <span className="text-gradient-primary">Action</span>
          </h2>

          <div className="glass-card p-8 space-y-8 relative overflow-hidden">
            {/* Level Up Overlay */}
            {showLevelUp && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/80 backdrop-blur-sm">
                <div className="text-center animate-level-up">
                  <p className="text-6xl font-bold text-gradient-primary glow-text-primary">
                    LEVEL UP!
                  </p>
                  <p className="text-xl text-accent mt-2 font-mono">Level {level}</p>
                </div>
              </div>
            )}

            {/* Stats */}
            <div className="flex justify-between items-end">
              <div className="text-left">
                <p className="text-muted-foreground text-xs font-mono uppercase tracking-wider">Level</p>
                <p className="text-4xl font-bold text-gradient-primary font-mono">{level}</p>
              </div>
              <div className="text-right">
                <p className="text-muted-foreground text-xs font-mono uppercase tracking-wider">XP</p>
                <p className="text-2xl font-bold font-mono tabular-nums">
                  {xp.toLocaleString()} <span className="text-muted-foreground text-sm">/ {maxXp.toLocaleString()}</span>
                </p>
              </div>
            </div>

            {/* XP Bar */}
            <div className="xp-bar h-4">
              <div
                className="xp-bar-fill h-full"
                style={{ width: `${pct}%` }}
              />
            </div>

            {/* Action */}
            <Button
              variant="hero"
              size="lg"
              className="w-full text-base h-14"
              onClick={completeWorkout}
              disabled={isAnimating}
            >
              {isAnimating ? "Processing..." : "⚡ Complete Workout"}
            </Button>

            <p className="text-muted-foreground text-xs font-mono">
              Click to simulate completing a workout session
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemoSection;
