import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { num: "01", icon: "🧬", title: "Create Your Avatar", desc: "Your digital identity in the fitness world" },
  { num: "02", icon: "🧠", title: "Get a Smart Plan", desc: "AI recommends workouts based on your goals" },
  { num: "03", icon: "🏋️", title: "Train Daily", desc: "Guided sessions keep you on track" },
  { num: "04", icon: "📡", title: "Track with Device", desc: "Real-time motion tracking via companion" },
  { num: "05", icon: "🤖", title: "AI Evaluation", desc: "Performance-based scoring after each set" },
  { num: "06", icon: "🚀", title: "Level Up", desc: "Earn XP, unlock rewards, climb ranks" },
];

const HowItWorksSection = () => {
  const headerRef = useScrollReveal();

  return (
    <section className="py-32">
      <div className="container">
        <div ref={headerRef} className="section-reveal text-center mb-20">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Six Steps to<br /><span className="text-gradient-primary">Fitness Evolution</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const ref = useScrollReveal();
            return (
              <div
                key={step.num}
                ref={ref}
                className="section-reveal group relative"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="glass-card p-8 h-full hover:border-primary/30 transition-all duration-300">
                  <span className="text-primary/30 font-mono text-5xl font-bold absolute top-4 right-6 group-hover:text-primary/50 transition-colors">
                    {step.num}
                  </span>
                  <span className="text-3xl block mb-4">{step.icon}</span>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
