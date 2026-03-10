import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import artisanImg from "@/assets/artisan-portrait.jpg";

const ArtisanStory = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" ref={ref} className="section-padding bg-card">
      <div className="section-narrow">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img
              src={artisanImg}
              alt="Master artisan in olive grove"
              className="rounded w-full object-cover aspect-[3/4]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              The Artisan
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
              "Every drop tells the story of this <span className="italic text-gradient-gold">land.</span>"
            </h2>
            <div className="divider-gold !mx-0 mb-6" />
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Master blender Dimitrios Karamanlis has tended these groves for over 50 years,
              continuing the tradition his great-grandfather began in 1892. His hands know
              every tree by touch, and his palate can detect flavors invisible to modern instruments.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              "The olive tree teaches patience," he says. "You cannot rush what nature
              intends to perfect. We simply guide what the sun and soil have already begun."
            </p>
            <p className="font-display text-xl italic text-foreground">
              — Dimitrios Karamanlis, 5th Generation
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ArtisanStory;
