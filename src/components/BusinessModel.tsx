import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingCart, Database, Users, Wrench } from "lucide-react";

const models = [
  {
    icon: ShoppingCart,
    title: "Direct-to-Community Sales",
    description: "Affordable pricing with flexible payment options including micro-financing and pay-as-you-go models for households and institutions.",
    features: ["Subsidized units for vulnerable communities", "Bulk orders for NGOs and government programs", "Installation and setup support"],
  },
  {
    icon: Database,
    title: "Data-as-a-Service",
    description: "Environmental monitoring insights from our IoT sensor network provide valuable climate data to research institutions and government agencies.",
    features: ["Real-time humidity and weather data", "Climate pattern analysis", "Agricultural planning insights"],
  },
  {
    icon: Users,
    title: "Local Micro-Franchises",
    description: "Empowering community entrepreneurs to distribute, install, and maintain AquaBeetle units, creating local jobs and ensuring sustained support.",
    features: ["Training and certification programs", "Revenue sharing model", "Community ownership and trust"],
  },
];

const BusinessModel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Business Model
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Multiple revenue streams ensuring sustainability and scalability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="bg-card rounded-3xl p-8 h-full shadow-lg hover:shadow-xl transition-all border border-border hover:border-primary/30">
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {model.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {model.description}
                  </p>
                  <div className="space-y-2">
                    {model.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border"
        >
          <div className="flex items-start gap-6">
            <div className="bg-accent/20 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
              <Wrench className="w-7 h-7 text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Maintenance & Support Services
              </h3>
              <p className="text-muted-foreground mb-4">
                Ongoing support ensures long-term reliability and customer satisfaction while creating additional revenue and local employment.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-muted/50 rounded-xl p-4">
                  <p className="font-medium text-foreground mb-1">Service Contracts</p>
                  <p className="text-sm text-muted-foreground">Annual maintenance packages</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4">
                  <p className="font-medium text-foreground mb-1">Spare Parts</p>
                  <p className="text-sm text-muted-foreground">Locally available components</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4">
                  <p className="font-medium text-foreground mb-1">Training Programs</p>
                  <p className="text-sm text-muted-foreground">Technical skill development</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessModel;
