import PresentationSection from "@/components/PresentationSection";
import SkillsSection from "@/components/SkillsSection";
import FeaturedWorkSection from "@/components/FeaturedWorkSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const HomeView = () => {
  return (
    <div>
      <PresentationSection />
      <SkillsSection />
      <FeaturedWorkSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
};

export default HomeView;
