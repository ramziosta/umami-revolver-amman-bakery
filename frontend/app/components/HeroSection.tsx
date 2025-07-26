import { ArrowDown } from 'lucide-react';

export const HeroSection = () => {
  return (
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0">
              <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://res.cloudinary.com/df2jleiei/video/upload/v1753476955/umamiammans_scklr4.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-hidden="true"
                  poster="/fallback-hero.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-[20vh] md:pt-0">
              <h1 className="text-5xl md:text-7xl font-blanka text-white tracking-wide leading-tight mb-4">
                  Baked to Break the Mold
              </h1>
              <p className="text-2xl md:text-4xl italic text-umami-berry font-lovan mb-6">
                  Flavor. Elevated.
              </p>
              <p className="text-xl md:text-2xl text-umami-nube font-ppneuemontreal max-w-2xl mx-auto leading-relaxed mt-2">
                  Not just baked. Engineered. Every crumb, crust, and layer crafted to surprise. Even our brownie? A bold, edible statement.
              </p>

              {/* Scroll Indicator */}
              <div className="mt-12 flex justify-center animate-bounce">
                  <ArrowDown className="h-8 w-8 text-umami-nube opacity-80" />
              </div>
          </div>
      </section>
  );
};


