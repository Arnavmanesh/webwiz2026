import { useScrollReveal } from "@/hooks/useScrollReveal";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const status = [true, true, true, true, true, false, null]; // true=done, false=missed, null=today

const StreakSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />
      <div className="container relative">
        <div ref={ref} className="section-reveal max-w-3xl mx-auto text-center">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Consistency</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Stay Consistent or<br /><span className="glow-text-accent text-accent">Fall Behind</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            Daily streak bonuses reward consistency. Skip a day and lose XP. 
            Go the extra mile for bonus rewards.
          </p>

          <div className="glass-card p-8 inline-block">
            <div className="flex gap-4">
              {days.map((day, i) => (
                <div key={day} className="text-center space-y-3">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center text-xl font-bold transition-all ${
                      status[i] === true
                        ? "bg-primary/20 border-2 border-primary text-primary"
                        : status[i] === false
                        ? "bg-destructive/20 border-2 border-destructive text-destructive"
                        : "bg-muted border-2 border-border animate-pulse-glow"
                    }`}
                  >
                    {status[i] === true ? "✓" : status[i] === false ? "✗" : "?"}
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{day}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-between text-sm font-mono">
              <span className="text-primary">🔥 5 Day Streak</span>
              <span className="text-accent">+250 Bonus XP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StreakSection;
