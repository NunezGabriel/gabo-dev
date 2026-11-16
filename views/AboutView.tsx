import AboutSection from "@/components/about/AboutSection";
import CareerTimeline from "@/components/about/CareerTimelineSection";
import ExtraSection from "@/components/about/ExtraSection";
import AboutContactSection from "@/components/about/AboutContactSection";

const AboutView = () => {
  return (
    <div>
      <AboutSection />
      <CareerTimeline />
      <ExtraSection />
      <AboutContactSection />
    </div>
  );
};

export default AboutView;
