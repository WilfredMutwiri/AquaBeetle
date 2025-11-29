import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Heart } from "lucide-react";

const values = [
  "Community-first innovation",
  "Climate resilience",
  "Local manufacturing & empowerment",
  "Scientific excellence",
  "Ethical and sustainable design",
  "Equity in water access",
];

const MissionVision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Purpose
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driven by a commitment to dignity, sustainability, and community empowerment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-3xl p-8 md:p-10 shadow-lg border border-border"
          >
            <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To empower climate-vulnerable communities with sustainable, bio-inspired water access technologies that reduce water scarcity and restore dignity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card rounded-3xl p-8 md:p-10 shadow-lg border border-border"
          >
            <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">Vision</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A future where every household in arid regions can generate clean water from the air—reliably, affordably, and sustainably.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-accent/20 to-primary/10 rounded-3xl p-8 md:p-10 border border-accent/30"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-accent/20 w-14 h-14 rounded-xl flex items-center justify-center">
              <Heart className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-3xl font-bold text-foreground">Core Values</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="bg-card/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-border hover:border-primary/30 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground font-medium">{value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-6 md:p-8 border border-primary/20">
            <p className="text-xl md:text-2xl font-semibold text-foreground italic">
              "Water is a human right. Technology should serve humanity's most vulnerable first."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
