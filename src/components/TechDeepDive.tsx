import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Droplet, Wind, Zap, Filter } from "lucide-react";

const stages = [
  {
    icon: Droplet,
    number: "01",
    title: "Fog/Dew Capture",
    description: "Hydrophilic micro-bumps on the surface attract and capture tiny water droplets from fog and morning dew, mimicking the Namib Desert beetle's natural water-harvesting ability.",
  },
  {
    icon: Wind,
    number: "02",
    title: "Flow Channeling",
    description: "Hydrophobic micro-grooves create water-repellent pathways that guide captured droplets toward the collection reservoir through gravity and surface tension.",
  },
  {
    icon: Zap,
    number: "03",
    title: "Airflow Boost",
    description: "Solar-powered micro-fans create gentle airflow across the condensation surface, accelerating moisture collection during optimal conditions predicted by AI.",
  },
  {
    icon: Filter,
    number: "04",
    title: "Smart Optimization & Storage",
    description: "AIoT sensors monitor humidity, temperature, and wind in real-time. Machine learning algorithms activate systems at peak efficiency times, then filter and store potable water.",
  },
];

const TechDeepDive = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How the Technology Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A sophisticated four-stage process that transforms atmospheric moisture into clean drinking water
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="relative">
                  {/* Connecting Line */}
                  {index < stages.length - 1 && (
                    <div className="absolute left-[52px] top-[80px] w-0.5 h-16 bg-gradient-to-b from-primary to-secondary hidden md:block" />
                  )}
                  
                  <div className={`flex flex-col md:flex-row gap-6 items-start ${isEven ? "" : "md:flex-row-reverse"}`}>
                    {/* Icon Circle */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-accent-foreground shadow-md">
                          {stage.number}
                        </div>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1">
                      <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border hover:border-primary/30 transition-all hover:shadow-xl">
                        <h3 className="text-2xl font-semibold text-foreground mb-3">
                          {stage.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 md:p-12 border border-primary/20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Science Meets Nature
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              By combining biomimicry with cutting-edge AIoT technology, AquaBeetle achieves water collection efficiency that outperforms traditional methods—especially in challenging low-humidity environments.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-primary mb-1">70%+</div>
                <p className="text-sm text-muted-foreground">Collection efficiency improvement</p>
              </div>
              <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-secondary mb-1">24/7</div>
                <p className="text-sm text-muted-foreground">Autonomous operation</p>
              </div>
              <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-accent mb-1">Zero</div>
                <p className="text-sm text-muted-foreground">Carbon emissions</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechDeepDive;
