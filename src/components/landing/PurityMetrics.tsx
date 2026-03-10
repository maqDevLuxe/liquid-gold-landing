import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck } from "lucide-react";

const metrics = [
  { label: "Acidity", value: "0.18%", standard: "< 0.8%", note: "Far exceeds extra virgin standard" },
  { label: "Peroxide Value", value: "4.2 meq/kg", standard: "< 20 meq/kg", note: "Exceptional freshness" },
  { label: "Polyphenols", value: "482 mg/kg", standard: "> 250 mg/kg", note: "Powerful antioxidants" },
  { label: "Oleic Acid", value: "78.3%", standard: "> 55%", note: "Heart-healthy monounsaturated fats" },
];

const PurityMetrics = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card">
      <div className="section-narrow">
        <div className="text-center mb-16">
          <ShieldCheck className="w-8 h-8 text-honey mx-auto mb-4" strokeWidth={1.5} />
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Lab Certified
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mb-4">
            Purity <span className="italic text-gradient-gold">Metrics</span>
          </h2>
          <div className="divider-gold" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded p-6 text-center"
            >
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                {m.label}
              </p>
              <p className="font-display text-4xl font-semibold text-gradient-gold mb-1">{m.value}</p>
              <p className="font-body text-xs text-muted-foreground mb-3">
                Standard: {m.standard}
              </p>
              <p className="font-body text-xs text-olive-light">{m.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PurityMetrics;
