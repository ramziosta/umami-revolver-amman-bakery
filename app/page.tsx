import Notice from "@/app/components/Notice";
import HeroSection from "@/app/components/HeroSection";
import WhyChooseUmami from "@/app/components/WhyChooseUmami";
import CategoriesShowcase from "@/app/components/CategoriesShowcase";

const Home = () => {
  return (
      <div className="min-h-screen">
        <HeroSection />
          <WhyChooseUmami />
          <CategoriesShowcase />
      </div>
  );
};

export default Home;
