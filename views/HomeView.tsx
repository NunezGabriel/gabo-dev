import PresentationSection from "@/components/PresentationSection";
import SkillsSection from "@/components/SkillsSection";
import LatestProjectSection from "@/components/LastProjetSection";
import ContactSection from "@/components/ContactSection";

const HomeView = () => {
  return (
    <div className="">
      <PresentationSection />
      <SkillsSection />
      <LatestProjectSection />
      <ContactSection />
    </div>
  );
};

export default HomeView;
