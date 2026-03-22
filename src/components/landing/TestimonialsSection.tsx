import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote: "Gymify made me consistent for the first time in my life. I haven't missed a day in 43 days.",
    name: "Marcus Tran",
    detail: "Level 31 · Strength Mode",
  },
  {
    quote: "The AI scoring changed everything. I finally know when I'm actually improving vs just going through the motions.",
    name: "Elena Kowalski",
    detail: "Level 28 · Fat Loss Mode",
  },
  {
    quote: "I bought it for the gamification, stayed for the real results. Down 14kg in 4 months.",
    name: "Jordan Whitfield",
    detail: "Level 35 · Athlete Mode",
  },
];

const TestimonialsSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-32">
      <div className="container">
        <div ref={ref} className="section-reveal">
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Real Players, <span className="text-gradient-primary">Real Results</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => {
              const cardRef = useScrollReveal();
              return (
                <div
                  key={t.name}
                  ref={cardRef}
                  className="section-reveal glass-card p-8 flex flex-col"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <p className="text-foreground/90 leading-relaxed flex-1 text-sm italic">
                    "{t.quote}"
                  </p>
                  <div className="mt-6 pt-4 border-t border-border/30">
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-primary text-xs font-mono mt-1">{t.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
