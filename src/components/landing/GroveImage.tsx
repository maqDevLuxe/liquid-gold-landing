import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import groveImg from "@/assets/grove-panorama.jpg";

const GroveImage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 -top-[10%] -bottom-[10%]"
      >
        <img
          src={groveImg}
          alt="Sun-drenched Mediterranean olive grove"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-foreground/20" />
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div>
          <p className="font-body text-xs tracking-[0.4em] uppercase text-cream/80 mb-4">
            Our Estate
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-cream">
            Where the <span className="italic">Sun</span> Meets the <span className="italic">Sea</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default GroveImage;
