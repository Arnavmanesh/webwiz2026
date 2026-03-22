import { Button } from "@/components/ui/button";
import heroAvatar from "@/assets/hero-avatar.png";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [xpWidth, setXpWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setXpWidth(73), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      
      {/* Glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
      
      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-24 lg:py-0">
        <div className="space-y-8" style={{ animation: "slide-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            Next-Gen Fitness Matrix
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
            Turn Your{" "}
            <span className="text-gradient-primary">Workout</span>{" "}
            Into a Game
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            AI-powered fitness with real-time tracking, scoring, and competition. 
            Every rep counts. Every session matters.
          </p>

          {/* XP Bar Preview */}
          <div className="max-w-sm space-y-2">
            <div className="flex justify-between text-sm font-mono">
              <span className="text-muted-foreground">LEVEL 14</span>
              <span className="text-primary">{xpWidth > 0 ? "2,847" : "0"} / 3,900 XP</span>
            </div>
            <div className="xp-bar">
              <div 
                className="xp-bar-fill" 
                style={{ width: `${xpWidth}%`, transition: "width 1.5s cubic-bezier(0.16, 1, 0.3, 1)" }} 
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button variant="hero" size="lg" className="text-base px-8 h-13">
              Start Your Journey
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base px-8 h-13">
              Watch Demo
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center" style={{ animation: "slide-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl" />
            <img 
              src={heroAvatar} 
              alt="Gymify fitness avatar with glowing XP indicators" 
              className="relative w-full max-w-md rounded-3xl"
              loading="eager"
            />
            {/* Floating stat cards */}
            <div className="absolute -left-4 top-1/4 glass-card p-3 animate-float">
              <div className="flex items-center gap-2 text-sm font-mono">
                <span className="text-primary">⚡</span>
                <span>+125 XP</span>
              </div>
            </div>
            <div className="absolute -right-4 top-2/3 glass-card p-3" style={{ animation: "float 3s ease-in-out 0.5s infinite" }}>
              <div className="flex items-center gap-2 text-sm font-mono">
                <span className="text-accent">🔥</span>
                <span>7-Day Streak</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
