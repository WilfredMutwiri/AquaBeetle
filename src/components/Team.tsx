import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Wilfred Mutwiri",
    role: "Founder",
    expertise: "AIoT & Software Engineering",
    bio: "Passionate about leveraging technology to solve climate challenges in vulnerable communities.",
  },
  {
    name: "Jepchirchir Mercy",
    role: "Co-founder & Researcher",
    expertise: "Biomimicry & Materials Science",
    bio: "Expertise in bio-inspired design and sustainable material engineering for water systems.",
  },
  {
    name: "Brian Gillo",
    role: "Co-founder",
    expertise: "Business Development",
    bio: "Focused on scaling impact through strategic partnerships and community engagement.",
  },
  {
    name: "Abigail Kiplagat",
    role: "Technical Manager",
    expertise: "Systems Engineering",
    bio: "Oversees technical development and ensures product reliability and scalability.",
  },
  {
    name: "Jeckonia Opiyo",
    role: "Climate-Tech Researcher",
    expertise: "Environmental Science",
    bio: "Conducts field research and validates performance in diverse ASAL environments.",
  },
  {
    name: "Caleb Kipkazi",
    role: "Software Engineer",
    expertise: "IoT & Machine Learning",
    bio: "Develops AI algorithms for predictive water harvesting optimization.",
  },
  {
    name: "Ann Wakio",
    role: "Legal & Business Development",
    expertise: "Regulatory Compliance",
    bio: "Manages legal framework, certifications, and strategic business partnerships.",
  },
];

const Team = () => {
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
            The AquaBeetle Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse team of innovators, researchers, and engineers united by a mission to transform water access in arid regions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-border hover:border-primary/30 h-full">
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center text-3xl font-bold text-primary mb-4 mx-auto group-hover:scale-105 transition-transform">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-1">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.expertise}</p>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed text-center mb-4">
                  {member.bio}
                </p>
                
                <div className="flex justify-center">
                  <button className="text-secondary hover:text-secondary/80 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 text-center border border-primary/20"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Join Our Mission
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're always looking for passionate individuals who want to make a real difference in climate resilience and water access.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
