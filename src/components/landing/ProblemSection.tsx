import { useScrollReveal } from "@/hooks/useScrollReveal";

const problems = [
  { icon: "😴", title: "No Motivation", desc: "Workouts feel repetitive and pointless without visible progress." },
  { icon: "🔇", title: "No Feedback", desc: "You never know if your form is right or if you're actually improving." },
  { icon: "🎭", title: "No Accountability", desc: "It's too easy to skip a day when no one's watching." },
  { icon: "📉", title: "No Engagement", desc: "Fitness apps feel like spreadsheets. Where's the excitement?" },
];

const ProblemSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-32 relative">
      <div className="container">
        <div ref={ref} className="section-reveal text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">The Problem</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Why Fitness Fails<br />for Most People
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => {
            const cardRef = useScrollReveal();
            return (
              <div
                key={p.title}
                ref={cardRef}
                className="section-reveal glass-card p-6 hover:border-primary/30 transition-all duration-300 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="text-3xl block mb-4 group-hover:scale-110 transition-transform duration-200">{p.icon}</span>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
