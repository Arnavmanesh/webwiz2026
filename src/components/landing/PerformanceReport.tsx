import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Target, Star, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

export const PerformanceReport = () => {
  const [xp, setXp] = useState(0);
  const [isClaimed, setIsClaimed] = useState(false);

  const handleClaim = () => {
    if (isClaimed) return;
    setIsClaimed(true);
    let count = 0;
    const interval = setInterval(() => {
      count += 25;
      setXp(count);
      if (count >= 1250) clearInterval(interval);
    }, 20);
  };

  return (
    <section className="py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl md:text-6xl font-headline font-black  ">Performance <span className="text-tertiary">Report</span></h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">AI-powered post-mission analysis. Review your metrics, perfect your form, and claim your spoils.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-2xl border border-white/5 space-y-6">
              <div className="flex justify-between items-center">
                <div className="font-headline font-bold uppercase tracking-widest text-sm text-primary">Form Integrity</div>
                <div className="text-2xl font-headline font-black text-primary">94%</div>
              </div>
              <div className="h-2 w-full bg-surface-bright rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '94%' }}
                  className="h-full kinetic-gradient relative"
                >
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/40 blur-sm" />
                </motion.div>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">System noted a slight drop in lumbar stability during rep 12. Haptic correction was successfully acknowledged.</p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-white/5 space-y-6">
              <div className="flex justify-between items-center">
                <div className="font-headline font-bold uppercase tracking-widest text-sm text-brand-secondary">Effort Index</div>
                <div className="text-2xl font-headline font-black text-brand-secondary">108%</div>
              </div>
              <div className="h-2 w-full bg-surface-bright rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  className="h-full pulse-gradient relative"
                >
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/40 blur-sm" />
                </motion.div>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">Limit-break detected in final set. Heart rate variability indicates peak physiological adaptation.</p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-white/5 md:col-span-2">
              <div className="font-headline font-bold uppercase tracking-widest text-sm text-tertiary mb-6">Volume Consistency</div>
              <div className="flex items-end justify-between h-40 gap-2">
                {[40, 60, 55, 80, 75, 95, 100].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    className={cn(
                      "flex-1 rounded-t-sm transition-all",
                      i < 5 ? "bg-tertiary/20" : "velocity-gradient"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-tertiary/5 border border-tertiary/20 rounded-2xl p-8 relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-tertiary/10 rounded-full blur-[80px]" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Target className="w-10 h-10 text-tertiary" />
                  <h3 className="text-2xl font-headline font-black uppercase italic">Loot Unlocked</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-surface-bright/50 rounded-lg border border-white/5">
                    <div className="w-12 h-12 glass-panel flex items-center justify-center rounded-lg text-tertiary">
                      <Star className="w-6 h-6 fill-tertiary" />
                    </div>
                    <div>
                      <div className="text-xs font-headline font-bold uppercase text-tertiary">XP Gain</div>
                      <div className="text-lg font-headline font-bold">+{xp || 1250} XP</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-surface-bright/50 rounded-lg border border-white/5">
                    <div className="w-12 h-12 glass-panel flex items-center justify-center rounded-lg text-brand-secondary">
                      <Shield className="w-6 h-6 fill-brand-secondary" />
                    </div>
                    <div>
                      <div className="text-xs font-headline font-bold uppercase text-brand-secondary">New Gear</div>
                      <div className="text-lg font-headline font-bold">Pulse-X Mk II Skin</div>
                    </div>
                  </div>
                </div>
              </div>
              <button 
                onClick={handleClaim}
                disabled={isClaimed}
                className={cn(
                  "w-full mt-8 py-4 rounded-lg font-headline font-black uppercase tracking-widest text-background transition-all",
                  isClaimed ? "bg-on-surface-variant cursor-not-allowed" : "velocity-gradient hover:scale-[1.02] neon-glow-tertiary"
                )}
              >
                {isClaimed ? "Rewards Claimed" : "Claim All Rewards"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
