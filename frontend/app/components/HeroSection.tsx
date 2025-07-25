import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
              <iframe
                  src="https://player.cloudinary.com/embed/?cloud_name=df2jleiei&public_id=umamiammans_scklr4&profile=cld-adaptive-stream"
                  width="640"
                  height="360"
                  className="absolute inset-0 w-full h-full object-cover"
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              ></iframe>
              {/* Refined Warm Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>
          </div>

          {/* Hero Content */}
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

              {/* Scroll Indicator */}
              <div className="absolute left-1/2 transform -translate-x-1/2 animate-bounce mt-12">
                  <ArrowDown className="h-10 w-10 text-umami-nube" />
              </div>
          </div>
      </section>
  );
};

export default HeroSection;
