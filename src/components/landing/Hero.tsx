import { motion } from "framer-motion";
import heroImg from "@/assets/hero-liquid-gold.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-gold/30"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="glass-hero rounded px-8 md:px-16 py-12 md:py-16 max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-body text-xs tracking-[0.35em] uppercase text-cream/70 mb-6"
          >
            Since 1892 · Mediterranean Heritage
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-cream leading-[0.95] mb-6"
          >
            Liquid
            <br />
            <span className="text-gradient-gold font-medium italic">Gold</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="font-body text-sm md:text-base text-cream/60 max-w-md mx-auto mb-8 leading-relaxed"
          >
            Artisan olive oil & wild honey, cold-pressed from ancient Mediterranean groves.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#shop" className="btn-primary rounded bg-honey text-olive-dark hover:bg-gold">
              Explore Collection
            </a>
            <a href="#story" className="btn-outline rounded border-cream/40 text-cream hover:bg-cream/10 hover:border-cream/60">
              Our Story
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-12 bg-cream/30 mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
