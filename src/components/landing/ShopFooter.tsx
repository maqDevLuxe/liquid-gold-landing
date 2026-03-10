import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import bottleOil from "@/assets/bottle-olive-oil.png";
import bottleHoney from "@/assets/bottle-honey.png";

const products = [
  { image: bottleOil, name: "Koroneiki Reserve", price: "€89", tag: "Olive Oil" },
  { image: bottleHoney, name: "Mountain Thyme Honey", price: "€64", tag: "Raw Honey" },
  { image: bottleOil, name: "Arbequina Gold", price: "€72", tag: "Olive Oil" },
];

const ShopFooter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section id="shop" ref={ref} className="section-padding bg-primary">
        <div className="section-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-honey/70 mb-4">
              The Collection
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-light text-primary-foreground mb-4">
              Taste the <span className="italic text-gradient-gold">Difference</span>
            </h2>
            <div className="divider-gold mb-12" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {products.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="group cursor-pointer"
              >
                <div className="mb-6 flex justify-center">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="hover-bottle h-56 md:h-72 object-contain"
                  />
                </div>
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-honey/60 mb-1">{p.tag}</p>
                <h3 className="font-display text-2xl text-primary-foreground mb-2">{p.name}</h3>
                <p className="font-display text-xl text-gradient-gold mb-4">{p.price}</p>
                <button className="btn-outline rounded border-honey/40 text-honey hover:bg-honey hover:text-olive-dark">
                  Add to Cart
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-olive-dark py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-display text-2xl text-cream mb-4">
                OLEA <span className="text-gradient-gold">&</span> MEL
              </h3>
              <p className="font-body text-sm text-cream/50 leading-relaxed">
                Artisan olive oil & wild honey from the heart of the Mediterranean. Since 1892.
              </p>
            </div>
            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-cream/40 mb-4">Navigate</p>
              <div className="space-y-2">
                {["Heritage", "Process", "Collection", "Story", "Shop"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block font-body text-sm text-cream/60 hover:text-honey transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-cream/40 mb-4">Contact</p>
              <p className="font-body text-sm text-cream/60 mb-2">hello@oleaandmel.com</p>
              <p className="font-body text-sm text-cream/60 mb-2">+30 210 123 4567</p>
              <p className="font-body text-sm text-cream/60">Kalamata, Greece</p>
            </div>
          </div>
          <div className="border-t border-cream/10 pt-8 text-center">
            <p className="font-body text-xs text-cream/30 tracking-widest">
              © 2026 OLEA & MEL. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ShopFooter;
