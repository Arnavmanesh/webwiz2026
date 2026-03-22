import { useScrollReveal } from "@/hooks/useScrollReveal";

const SolutionSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent" />
      <div className="container relative">
        <div ref={ref} className="section-reveal max-w-3xl mx-auto text-center space-y-6">
          <p className="text-primary font-mono text-sm tracking-widest uppercase">The Solution</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Meet <span className="text-gradient-primary">Gymify</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Gymify combines AI, hardware, and gamification to create a fitness system 
            that keeps you engaged, accountable, and constantly improving.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
