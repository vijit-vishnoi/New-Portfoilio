import { Navigation } from "@/app/components/navigation";
import { HeroSection } from "@/app/components/hero-section";
import { AboutSection } from "@/app/components/about-section";
import { SkillsSection } from "@/app/components/skills-section";
import { ExperienceSection } from "@/app/components/experience-section";
import { ProjectsSection } from "@/app/components/projects-section";
import { CompetitiveProgrammingSection } from "@/app/components/competitive-programming-section";
import { AchievementsSection } from "@/app/components/achievements-section";
import { ContactSection } from "@/app/components/contact-section";
import { Footer } from "@/app/components/footer";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Ensure dark mode is applied
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navigation />
      
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CompetitiveProgrammingSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}