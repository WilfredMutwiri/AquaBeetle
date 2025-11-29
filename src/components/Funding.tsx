import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Wrench, Map, Users, Target } from "lucide-react";

const budgetItems = [
  {
    icon: Wrench,
    percentage: "35%",
    title: "Material & Technical Development",
    description: "Surface refinement, AIoT integration, pilot manufacturing of 100 prototype units",
    color: "primary",
  },
  {
    icon: Map,
    percentage: "25%",
    title: "Field Deployment & Testing",
    description: "Deploy in 3 counties, gather user feedback, track performance data",
    color: "secondary",
  },
  {
    icon: Users,
    percentage: "40%",
    title: "Team & Certification",
    description: "Team support, KEBS/ISO certification, distribution infrastructure setup",
    color: "accent",
  },
];

const Funding = () => {
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
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-semibold">Investment Opportunity</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Help Us Scale AquaBeetle
          </h2>
          <p className="text-2xl text-muted-foreground mb-4">
            From Prototype to Community Impact
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Your investment will directly enable field deployment, technical refinement, and the infrastructure needed to bring water independence to thousands of households.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {budgetItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                <div className="bg-card rounded-3xl p-8 h-full shadow-lg hover:shadow-xl transition-all border border-border hover:border-primary/40">
                  <div className={`bg-${item.color}/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 text-${item.color}`} />
                  </div>
                  <div className={`text-4xl font-bold text-${item.color} mb-3`}>
                    {item.percentage}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 md:p-12 border border-primary/20"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Why Invest in AquaBeetle?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Proven Need</p>
                  <p className="text-sm text-muted-foreground">Millions face water scarcity daily—demand is immediate and growing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Scalable Technology</p>
                  <p className="text-sm text-muted-foreground">Locally manufacturable with clear path to regional expansion</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Multiple Revenue Streams</p>
                  <p className="text-sm text-muted-foreground">Direct sales, data services, franchises, and maintenance contracts</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Social Impact</p>
                  <p className="text-sm text-muted-foreground">Measurable improvement in health, education, and gender equality</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg"
              >
                <Target className="mr-2 w-5 h-5" />
                Partner With Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-6 text-lg rounded-full"
              >
                Invest in the Mission
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">
            Every investment brings water independence closer to reality
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Together, we can transform atmospheric moisture into life-sustaining water for millions across East Africa and beyond.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Funding;
