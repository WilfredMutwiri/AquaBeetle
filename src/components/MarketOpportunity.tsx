import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Target, TrendingUp, MapPin } from "lucide-react";

const marketStats = [
  {
    icon: Globe,
    number: "40M+",
    label: "People in East Africa's ASAL regions",
  },
  {
    icon: Target,
    number: "12M",
    label: "Initial target in Kenya's 9 ASAL counties",
  },
  {
    icon: TrendingUp,
    number: "$150M",
    label: "Annual water access market value",
  },
  {
    icon: MapPin,
    number: "9 Counties",
    label: "Priority deployment regions in Kenya",
  },
];

const MarketOpportunity = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Market Opportunity
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A vast, underserved market with urgent need and growing demand driven by climate change
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {marketStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-lg border border-border text-center hover:shadow-xl transition-shadow"
              >
                <div className="bg-secondary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-secondary" />
                </div>
                <div className="text-4xl font-bold text-secondary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card rounded-3xl p-8 shadow-lg border border-border"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Growing Demand Drivers
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Climate Change:</strong> Increasing frequency of droughts and unpredictable rainfall
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Population Growth:</strong> Rising demand for water in ASAL regions
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Infrastructure Gaps:</strong> Limited reach of traditional water systems
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Policy Support:</strong> Government initiatives for climate resilience
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-card rounded-3xl p-8 shadow-lg border border-border"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Expansion Potential
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Regional Scale:</strong> 15+ ASAL regions across East Africa
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Global Markets:</strong> Middle East, North Africa, Southwest US, Australia
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Multiple Sectors:</strong> Households, agriculture, schools, health facilities
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Data Services:</strong> Environmental monitoring and climate insights
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-3xl p-8 border border-secondary/20 text-center"
        >
          <p className="text-xl md:text-2xl font-semibold text-foreground">
            "Climate resilience is no longer optional—it's essential. AquaBeetle addresses a critical, growing need."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketOpportunity;
