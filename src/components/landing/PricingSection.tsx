import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: ["Basic workout plans", "Avatar creation", "Weekly challenges", "Community access"],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    features: ["AI workout scoring", "Advanced analytics", "All game modes", "Priority leaderboard", "Streak multipliers"],
    cta: "Go Pro",
    featured: true,
  },
  {
    name: "Device Bundle",
    price: "$89",
    period: "one-time + Pro",
    features: ["Companion device", "Everything in Pro", "Real-time tracking", "Hardware-boosted XP", "Early access features"],
    cta: "Get the Bundle",
    featured: false,
  },
];

const PricingSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-32">
      <div className="container">
        <div ref={ref} className="section-reveal">
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">Pricing</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Choose Your <span className="text-gradient-primary">Path</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto items-start">
            {plans.map((plan, i) => {
              const cardRef = useScrollReveal();
              return (
                <div
                  key={plan.name}
                  ref={cardRef}
                  className={`section-reveal glass-card p-8 flex flex-col ${
                    plan.featured ? "border-primary/40 glow-primary relative" : ""
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-mono font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  )}
                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground text-sm ml-1">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <span className="text-primary text-xs">✦</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.featured ? "hero" : "hero-outline"}
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
