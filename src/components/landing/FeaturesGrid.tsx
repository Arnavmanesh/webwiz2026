import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  { icon: "🧬", title: "Avatar Evolution", desc: "Watch your avatar transform as you level up" },
  { icon: "🤖", title: "AI Workout Scoring", desc: "Every rep rated for form and intensity" },
  { icon: "📡", title: "Smart Device Tracking", desc: "Companion device captures every movement" },
  { icon: "🎯", title: "Daily Challenges", desc: "Fresh challenges to push your limits" },
  { icon: "🔥", title: "Streak System", desc: "Build consistency with streak rewards" },
  { icon: "🏆", title: "Leaderboards", desc: "Compete globally or with friends" },
];

const FeaturesGrid = () => {
  const headerRef = useScrollReveal();

  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="container relative">
        <div ref={headerRef} className="section-reveal text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">Core Features</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Everything You Need to<br /><span className="text-gradient-primary">Dominate</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const ref = useScrollReveal();
            return (
              <div
                key={f.title}
                ref={ref}
                className="section-reveal glass-card p-8 group hover:border-primary/30 transition-all duration-300 cursor-default"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-200">{f.icon}</span>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
