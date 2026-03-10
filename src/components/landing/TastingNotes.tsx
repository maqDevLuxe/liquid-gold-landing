import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const profiles = [
  {
    name: "Koroneiki Reserve",
    type: "Extra Virgin Olive Oil",
    notes: ["Green Almond", "Artichoke", "Fresh Pepper"],
    intensity: 85,
    color: "var(--olive)",
  },
  {
    name: "Arbequina Gold",
    type: "Extra Virgin Olive Oil",
    notes: ["Ripe Tomato", "Apple", "Butter"],
    intensity: 60,
    color: "var(--olive-light)",
  },
  {
    name: "Wildflower Honey",
    type: "Raw Mountain Honey",
    notes: ["Lavender", "Thyme", "Citrus Blossom"],
    intensity: 70,
    color: "var(--honey)",
  },
];

const TastingNotes = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="section-narrow">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Flavor Profiles
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mb-4">
            Tasting <span className="italic text-gradient-gold">Notes</span>
          </h2>
          <div className="divider-gold" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card rounded p-8"
            >
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-honey mb-2">{p.type}</p>
              <h3 className="font-display text-3xl text-foreground mb-6">{p.name}</h3>

              <div className="space-y-2 mb-6">
                {p.notes.map((note) => (
                  <span
                    key={note}
                    className="inline-block mr-2 px-3 py-1 rounded-full font-body text-xs text-muted-foreground bg-muted"
                  >
                    {note}
                  </span>
                ))}
              </div>

              <div>
                <div className="flex justify-between font-body text-xs text-muted-foreground mb-2">
                  <span>Intensity</span>
                  <span>{p.intensity}%</span>
                </div>
                <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${p.intensity}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + i * 0.15 }}
                    className="h-full rounded-full"
                    style={{ background: `hsl(${p.color})` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TastingNotes;
