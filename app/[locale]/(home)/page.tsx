import {HeroSection} from "@/app/components/HeroSection";
import UmamiDifference from "@/app/components/UmamiDifference";
import CategoriesShowcase from "@/app/components/CategoriesShowcase";
import PreOrderPopup from "@/app/components/PreOrderPopup";

const Home = () => {
    return (
        <div className="min-h-screen bg-umami-linen">
            <PreOrderPopup />
            <HeroSection />
            <CategoriesShowcase />
            <UmamiDifference />
        </div>
    );
};

export default Home;
 