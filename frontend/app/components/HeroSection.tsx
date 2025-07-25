'use client'
import { ArrowDown } from 'lucide-react';
import {useState} from "react"; // Assuming this is the correct import

interface HeroSectionProps {
    videoSrc?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ videoSrc = '/umamiamman.mp4' }) => {
    const [isVideoError, setIsVideoError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                {!isVideoError ? (
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src={videoSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        aria-label="Background video showing artisan baking process"
                        onError={(e: React.SyntheticEvent<HTMLVideoElement>) => {
                            console.error('Video error:', e);
                            setIsVideoError(true);
                        }}
                        onLoadStart={() => setIsLoading(true)}
                        onCanPlay={() => setIsLoading(false)}
                    />
                ) : (
                    <div className="absolute inset-0 bg-gray-900" aria-label="Fallback background" />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>
            </div>

            {isLoading && (
                <div className="relative z-20 text-white">Loading...</div>
            )}

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-[20vh] md:pt-0">
                <h1 className="text-5xl md:text-7xl lg:text-9xl font-blanka text-umami-nube tracking-[0.1em] mb-6">
                    Artisan Baked
                    <span className="block font-blanka text-umami-berry tracking-[0.05em] italic">
            Perfection
          </span>
                </h1>
                <p className="max-w-2xl mx-auto font-ppneuemontreal text-umami-nube text-lg md:text-xl xl:text-3xl tracking-[0.05em] leading-relaxed">
                    Experience handcrafted baked goods — made with passion, precision, and the finest ingredients. From our kitchen to your table.
                </p>
                <div
                    className="absolute left-1/2 transform -translate-x-1/2 animate-bounce mt-12"
                    aria-label="Scroll down indicator"
                >
                    <ArrowDown className="h-10 w-10 text-umami-nube" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;