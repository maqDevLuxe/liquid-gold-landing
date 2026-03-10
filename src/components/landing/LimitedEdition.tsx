import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import bottleOil from "@/assets/bottle-olive-oil.png";
import bottleHoney from "@/assets/bottle-honey.png";

const editions = [
  {
    image: bottleOil,
    name: "Harvest MMXXIV",
    type: "Single Estate Koroneiki",
    batch: "Batch No. 047",
    bottles: "Only 500 bottles",
    price: "€89",
  },
  {
    image: bottleHoney,
    name: "Mountain Thyme",
    type: "Wild Mountain Honey",
    batch: "Batch No. 012",
    bottles: "Only 300 jars",
    price: "€64",
  },
];

const LimitedEdition = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="collection" ref={ref} className="section-padding bg-background">
      <div className="section-narrow">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Rare & Numbered
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mb-4">
            Limited <span className="italic text-gradient-gold">Editions</span>
          </h2>
          <div className="divider-gold" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {editions.map((ed, i) => (
            <motion.div
              key={ed.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="text-center"
            >
              <div className="mb-8 flex justify-center">
                <img
                  src={ed.image}
                  alt={ed.name}
                  className="hover-bottle h-72 md:h-96 object-contain"
                />
              </div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-honey mb-2">{ed.type}</p>
              <h3 className="font-display text-3xl md:text-4xl text-foreground mb-2">{ed.name}</h3>
              <p className="font-body text-sm text-muted-foreground mb-1">{ed.batch}</p>
              <p className="font-body text-xs text-muted-foreground mb-4">{ed.bottles}</p>
              <p className="font-display text-2xl text-gradient-gold mb-4">{ed.price}</p>
              <button className="btn-primary rounded">Reserve Now</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LimitedEdition;
