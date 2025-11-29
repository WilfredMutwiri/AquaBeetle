import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Droplets, Sun, Zap } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Dual-Surface Biomimicry",
    description: "Hydrophilic bumps capture moisture while hydrophobic channels guide water flow—inspired by the Namib Desert beetle.",
  },
  {
    icon: Brain,
    title: "AIoT Smart Control",
    description: "Microcontroller predicts optimal harvesting times using real-time weather data and machine learning algorithms.",
  },
  {
    icon: Sun,
    title: "Solar-Powered Operation",
    description: "Micro-fans accelerate condensation using clean energy, ensuring off-grid functionality in remote areas.",
  },
  {
    icon: Zap,
    title: "2-6 Liters Daily",
    description: "Consistent water output every night, even in low-humidity environments—locally manufacturable and serviceable.",
  },
];

const Solution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-semibold">Our Innovation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The AquaBeetle Solution
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-secondary mb-4">
            A Bio-Inspired Dew & Fog Harvester
          </p>
          <p className="text-xl text-muted-foreground">
            Powered by AIoT Technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card rounded-3xl p-8 h-full shadow-lg hover:shadow-xl transition-all border border-border hover:border-primary/30">
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 md:p-12 border border-primary/20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              How It Works
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-md">
                <div className="text-3xl font-bold text-primary mb-2">01</div>
                <h4 className="font-semibold text-foreground mb-2">Capture</h4>
                <p className="text-sm text-muted-foreground">
                  Hydrophilic micro-bumps attract and capture water droplets from fog and dew
                </p>
              </div>
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-md">
                <div className="text-3xl font-bold text-secondary mb-2">02</div>
                <h4 className="font-semibold text-foreground mb-2">Channel</h4>
                <p className="text-sm text-muted-foreground">
                  Hydrophobic grooves guide water flow toward collection reservoir
                </p>
              </div>
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-md">
                <div className="text-3xl font-bold text-accent mb-2">03</div>
                <h4 className="font-semibold text-foreground mb-2">Optimize</h4>
                <p className="text-sm text-muted-foreground">
                  AI predicts conditions, activates fans, and maximizes water yield
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
