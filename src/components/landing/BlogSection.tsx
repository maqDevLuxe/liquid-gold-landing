import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    tag: "Recipe",
    title: "Grilled Sea Bass with Koroneiki Drizzle",
    excerpt: "A simple Mediterranean preparation that lets the oil's peppery character shine.",
    date: "Mar 2026",
  },
  {
    tag: "Lifestyle",
    title: "Morning Rituals: Honey & Olive Oil Elixir",
    excerpt: "Discover the ancient wellness practice that starts every day in our village.",
    date: "Feb 2026",
  },
  {
    tag: "Harvest",
    title: "The November Press: A Photographic Journey",
    excerpt: "Behind the scenes of our annual cold-pressing ceremony under autumn skies.",
    date: "Jan 2026",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="section-narrow">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Mediterranean Journal
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mb-4">
            From the <span className="italic text-gradient-gold">Grove</span>
          </h2>
          <div className="divider-gold" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card rounded p-8 group cursor-pointer hover:shadow-[var(--shadow-gold)] transition-all duration-500"
            >
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-honey mb-3">
                {post.tag} · {post.date}
              </p>
              <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-gradient-gold transition-colors">
                {post.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase text-olive-light group-hover:text-honey transition-colors">
                Read More <ArrowRight size={14} />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
