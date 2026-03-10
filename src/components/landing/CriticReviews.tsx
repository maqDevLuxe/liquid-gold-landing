import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const reviews = [
  {
    quote: "A revelation in a bottle. The Koroneiki Reserve delivers an almost spiritual intensity that few oils in the world can match.",
    author: "Olivier Roellinger",
    role: "Michelin 3-Star Chef",
    rating: 98,
  },
  {
    quote: "This honey tastes like the Mediterranean sun distilled into pure gold. Absolutely extraordinary.",
    author: "The Guardian",
    role: "Food & Drink Review",
    rating: 96,
  },
  {
    quote: "Olea & Mel sets the benchmark for artisan producers worldwide. Impeccable quality, unmatched heritage.",
    author: "Decanter Magazine",
    role: "Annual Awards Review",
    rating: 97,
  },
];

const CriticReviews = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="section-narrow">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Critical Acclaim
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mb-4">
            What the <span className="italic text-gradient-gold">Critics</span> Say
          </h2>
          <div className="divider-gold" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={r.author}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card rounded p-8 flex flex-col"
            >
              <Quote className="w-6 h-6 text-honey/40 mb-4" strokeWidth={1.5} />
              <p className="font-display text-lg italic text-foreground leading-relaxed mb-6 flex-1">
                "{r.quote}"
              </p>
              <div>
                <div className="divider-gold !mx-0 mb-4" />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">{r.author}</p>
                    <p className="font-body text-xs text-muted-foreground">{r.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-2xl text-gradient-gold">{r.rating}</p>
                    <p className="font-body text-[10px] text-muted-foreground tracking-widest">/100</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CriticReviews;
