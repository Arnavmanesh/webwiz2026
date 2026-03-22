import { useScrollReveal } from "@/hooks/useScrollReveal";
import companionDevice from "@/assets/companion-device.png";

const specs = [
  { label: "Motion Tracking", value: "6-axis IMU" },
  { label: "Battery Life", value: "72 hours" },
  { label: "Sync", value: "Bluetooth 5.3" },
  { label: "Weight", value: "28g" },
];

const CompanionDeviceSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-32">
      <div className="container">
        <div ref={ref} className="section-reveal grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-accent/5 rounded-3xl blur-3xl" />
            <img 
              src={companionDevice} 
              alt="Gymify companion wearable device" 
              className="relative w-full max-w-sm animate-float"
              loading="lazy"
            />
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Hardware</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Meet the Gymify<br /><span className="text-gradient-primary">Companion</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A tiny, powerful device that tracks every rep, every motion. 
                It syncs with the app to enable accurate AI scoring.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {specs.map((s) => (
                <div key={s.label} className="glass-card p-4">
                  <p className="text-muted-foreground text-xs font-mono uppercase tracking-wider">{s.label}</p>
                  <p className="text-lg font-semibold mt-1">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanionDeviceSection;
