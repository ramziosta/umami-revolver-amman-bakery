import HeroSection from "@/app/components/HeroSection";
import UmamiDifference from "@/app/components/UmamiDifference";
import CategoriesShowcase from "@/app/components/CategoriesShowcase";

const Home = () => {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <UmamiDifference />
            <CategoriesShowcase />
        </div>
    );
};

export default Home