import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const counters = [
  { target: 132, label: "Years of Heritage", suffix: "" },
  { target: 47, label: "Current Batch Number", suffix: "" },
  { target: 500, label: "Bottles This Season", suffix: "" },
  { target: 12000, label: "Olive Trees Tended", suffix: "+" },
];

const AnimatedCounter = ({ target, inView, suffix }: { target: number; inView: boolean; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const BottleCounters = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-primary">
      <div className="section-narrow">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {counters.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="font-display text-4xl md:text-5xl font-light text-honey mb-2">
                <AnimatedCounter target={c.target} inView={inView} suffix={c.suffix} />
              </p>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-primary-foreground/60">
                {c.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BottleCounters;
