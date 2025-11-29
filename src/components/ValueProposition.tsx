import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Brain, Sun, Shield, Wrench, DollarSign, Leaf } from "lucide-react";

const values = [
  {
    icon: Droplets,
    title: "Bio-Inspired Design",
    description: "Dual hydrophilic–hydrophobic condensation surface mimics nature's most efficient water harvesters",
  },
  {
    icon: Brain,
    title: "AIoT Optimization",
    description: "Smart sensors and machine learning maximize water yield based on real-time environmental conditions",
  },
  {
    icon: Sun,
    title: "Solar-Powered & Off-Grid",
    description: "Completely energy-independent operation perfect for remote ASAL communities",
  },
  {
    icon: Shield,
    title: "Climate Resilient",
    description: "Works reliably in low-humidity environments where traditional methods fail",
  },
  {
    icon: Wrench,
    title: "Locally Serviceable",
    description: "Simple maintenance and locally manufacturable components ensure long-term sustainability",
  },
  {
    icon: DollarSign,
    title: "Affordable Access",
    description: "Designed for affordability with micro-franchise model enabling community ownership",
  },
  {
    icon: Leaf,
    title: "Sustainable Impact",
    description: "Zero carbon emissions, minimal environmental footprint, and scalable deployment",
  },
];

const ValueProposition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why AquaBeetle?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seven core advantages that make AquaBeetle the leading water harvesting solution for arid regions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group"
              >
                <div className="bg-card rounded-2xl p-6 h-full shadow-md hover:shadow-xl transition-all border border-border hover:border-primary/40 hover:-translate-y-1">
                  <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Designed for Impact, Built for Scale
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every design decision prioritizes the communities we serve—from affordability and durability to ease of maintenance and local manufacturing capacity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
