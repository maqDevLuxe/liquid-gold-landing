import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Star, Leaf } from "lucide-react";

const awards = [
  { icon: Award, title: "Gold Medal", subtitle: "International Olive Oil Competition 2024", year: "2024" },
  { icon: Star, title: "Best in Class", subtitle: "Mediterranean Food Awards", year: "2023" },
  { icon: Leaf, title: "Organic Certified", subtitle: "EU & USDA Organic Standards", year: "Since 2010" },
];

const Heritage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="heritage" ref={ref} className="section-padding bg-background">
      <div className="section-narrow text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
        >
          Award-Winning Heritage
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl font-light text-foreground mb-4"
        >
          Five Generations of <span className="italic text-gradient-gold">Excellence</span>
        </motion.h2>
        <div className="divider-gold mb-8" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Our family has cultivated the finest Koroneiki olives and tended wild beehives across sun-drenched
          groves since 1892—an unbroken legacy of taste and tradition.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="glass-card rounded p-8 text-center hover:shadow-[var(--shadow-gold)] transition-shadow duration-500"
            >
              <award.icon className="w-8 h-8 text-honey mx-auto mb-4" strokeWidth={1.5} />
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-honey mb-2">{award.year}</p>
              <h3 className="font-display text-2xl text-foreground mb-2">{award.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{award.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Heritage;
