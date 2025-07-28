import { ArrowDown } from 'lucide-react';
import neapolitanPoundCake from "@/app/assets/pound-cake.jpg";

export const HeroSection = () => {
    return (
        <section className="relative w-full aspect-video sm:aspect-[4/3] md:aspect-[16/9] lg:h-screen flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0">
                <video
                    className="w-full h-full object-cover"
                    src="https://res.cloudinary.com/df2jleiei/video/upload/v1753476955/umamiammans_scklr4.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-hidden="true"
                    poster="fallback-hero.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col justify-center items-center h-full sm:pt-[18vh] md:pt-0">
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-9xl font-blanka text-white tracking-wide leading-snug mb-3">
                    Baked to Break<br /> the Mold
                </h1>

                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl italic text-umami-berry font-lovan mb-4 sm:mb-6">
                    Flavor. Elevated.
                </p>

                <p className="text-base sm:text-lg md:text-xl text-umami-nube font-ppneuemontreal leading-relaxed max-w-xl mx-auto mt-2">
                    Not just baked. Engineered. Every crumb, crust, and layer crafted to surprise.
                    Even our brownie? A bold, edible statement.
                </p>

                {/* Scroll Indicator */}
                <div className="mt-10 sm:mt-12 flex justify-center animate-bounce">
                    <ArrowDown className="h-6 w-6 sm:h-8 sm:w-8 text-umami-nube opacity-80" />
                </div>
            </div>
        </section>
    );
};

