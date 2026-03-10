import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Recycle, TreePine, Droplets } from "lucide-react";

const features = [
  { icon: Recycle, title: "100% Recyclable Glass", desc: "Hand-blown bottles crafted by local artisans, infinitely recyclable." },
  { icon: TreePine, title: "Carbon Negative", desc: "Our groves absorb more CO₂ than our entire production chain emits." },
  { icon: Droplets, title: "Zero Waste Process", desc: "Olive pomace becomes soap; beeswax seals every bottle naturally." },
];

const SustainablePackaging = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card">
      <div className="section-narrow">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Earth First
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4 leading-tight">
              Sustainable by <span className="italic text-gradient-olive">Nature</span>
            </h2>
            <div className="divider-gold !mx-0 mb-6" />
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              We believe luxury and sustainability are inseparable. Every element of our packaging
              honors the land that gives us these extraordinary flavors.
            </p>
          </div>

          <div className="space-y-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-5 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-honey/10 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-honey" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-1">{f.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainablePackaging;
