import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import ValueProposition from "@/components/ValueProposition";
import MarketOpportunity from "@/components/MarketOpportunity";
import BusinessModel from "@/components/BusinessModel";
import TechDeepDive from "@/components/TechDeepDive";
import MissionVision from "@/components/MissionVision";
import Team from "@/components/Team";
import Funding from "@/components/Funding";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <ValueProposition />
      <MarketOpportunity />
      <BusinessModel />
      <TechDeepDive />
      <MissionVision />
      <Team />
      <Funding />
      <Contact />
    </div>
  );
};

export default Index;
