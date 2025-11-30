import { motion } from "framer-motion";
import { Droplets, Cpu, Wind, Sun } from "lucide-react";
import howItWorks1 from "@/assets/hero3.png";
import howItWorks2 from "@/assets/hero4.png";
import womenUsing1 from "@/assets/hero2.png";
import womenUsing2 from "@/assets/hero5.jpg";

const HowItWorks = () => {
  const steps = [
    {
      title: "Moisture Capture",
      icon: <Droplets className="w-10 h-10 text-primary" />, 
      description:
        "AquaBeetle’s bio-inspired surface captures fog and dew droplets overnight, even in low-humidity areas.",
    },
    {
      title: "AI Optimization",
      icon: <Cpu className="w-10 h-10 text-secondary" />, 
      description:
        "IoT sensors track humidity and temperature while AI predicts water yield and adjusts performance.",
    },
    {
      title: "Micro-Fan Assist",
      icon: <Wind className="w-10 h-10 text-blue-500" />, 
      description:
        "A solar-powered micro-fan boosts airflow across surfaces to increase condensation efficiency.",
    },
    {
      title: "Clean Water Output",
      icon: <Sun className="w-10 h-10 text-yellow-500" />, 
      description:
        "Collected droplets flow into a storage chamber, delivering 2–6 liters of clean water every night.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            How AquaBeetle Works
          </h2>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            A fusion of nature-inspired engineering and intelligent AI systems — designed to make clean water accessible in arid regions.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl shadow-md bg-card border border-border"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Images Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {[howItWorks1, howItWorks2].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-xl shadow-sm"
            >
              <img src={img} alt="AquaBeetle device" className="w-full h-56 object-contain" />
            </motion.div>
          ))}
        </div>

        {/* Women Using AquaBeetle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-5xl font-bold mb-4 text-primary">
            Empowering Women & Communities
          </h3>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            AquaBeetle reduces long walking distances for water, improves household well-being, and frees women and children to focus on education, farming, and economic activities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[womenUsing1, womenUsing2].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-sm shadow-sm"
            >
              <img src={img} alt="Women using AquaBeetle" className="w-full h-56 object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

// Additional Content Integrated Into the Component
<section className="py-20 bg-background">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Advanced AIoT Integration</h2>
    <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto text-center mb-16">
      AquaBeetle intelligently monitors humidity, dew point, temperature, and airflow using embedded IoT sensors. Machine learning models continuously analyze environmental conditions to optimize water harvesting cycles, ensuring maximum extraction even in low-moisture environments.
    </p>

    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Materials & Engineering</h2>
    <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto text-center mb-16">
      Crafted from durable, locally sourced materials, AquaBeetle is engineered to withstand harsh climates. Its dual-surface condensation design increases dew capture efficiency while requiring minimal maintenance, making it ideal for remote communities.
    </p>

    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Community Impact</h2>
    <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto text-center mb-16">
      AquaBeetle reduces the burden of long-distance water collection in ASAL regions. By providing clean water closer to homes, it empowers women, supports agriculture, improves school attendance, and strengthens community resilience.
    </p>

    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Future Expansion</h2>
    <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto text-center">
      With a scalable design and locally supported manufacturing model, AquaBeetle aims to expand across East Africa. Partnerships with counties, NGOs, and climate-focused organizations will help deploy thousands of units in regions most affected by drought.
    </p>
  </div>
</section>
