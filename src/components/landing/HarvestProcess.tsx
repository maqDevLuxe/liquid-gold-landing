import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Hand Harvest", desc: "Olives picked at peak ripeness from century-old trees, each one inspected by hand." },
  { num: "02", title: "Cold Press", desc: "Stone-milled within 4 hours of harvest at temperatures below 27°C for maximum flavor." },
  { num: "03", title: "Natural Settling", desc: "Unfiltered oil rests in terracotta vessels for 60 days, developing complex character." },
  { num: "04", title: "Hand Bottled", desc: "Each bottle is numbered, sealed with beeswax, and signed by the master blender." },
];

const HarvestProcess = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="section-padding bg-card">
      <div className="section-narrow">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            From Grove to Table
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mb-4">
            The <span className="italic text-gradient-olive">Process</span>
          </h2>
          <div className="divider-gold" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative"
            >
              <span className="font-display text-7xl font-light text-honey/20 leading-none">
                {step.num}
              </span>
              <h3 className="font-display text-2xl text-foreground mt-2 mb-3">{step.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 right-0 w-12 h-px bg-border translate-x-6" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HarvestProcess;
