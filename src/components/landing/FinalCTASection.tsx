import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FinalCTASection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.04] to-transparent" />
      <div className="container relative">
        <div ref={ref} className="section-reveal max-w-3xl mx-auto text-center space-y-8">
          <p className="text-primary font-mono text-sm tracking-widest uppercase">Ready?</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Ready to Level Up<br />Your <span className="text-gradient-primary">Fitness</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Join thousands of players transforming their workouts into a competitive, 
            game-like experience with AI-powered tracking and scoring.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button variant="hero" size="lg" className="text-base px-10 h-14">
              Start with Gymify
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
