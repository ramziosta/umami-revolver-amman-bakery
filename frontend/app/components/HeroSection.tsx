import { ArrowDown } from 'lucide-react';
import poundCake from '../assets/pound-cake.jpg';
import Image from 'next/image';
const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 parallax-bg">
            <Image
                src={poundCake}
                alt="Pound cake"
                fill
                sizes="100vh"
                className="object-cover"
                priority
            />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-goglast text-white tracking-[0.5rem] mb-4 ">
          Artisan Baked
          <span className="block text-umami-cream hover:transition-colors duration-300">Perfection</span>
        </h1>

          <p className="max-w-4xl mx-auto text-umami-cream/90 font-glimp text-2xl lg:text-3xl font-[100] tracking-[0.5rem] leading-relaxed">
          Experience the finest handcrafted baked goods, made with passion and premium ingredients.
          From our kitchen to your table.
        </p>


        {/* Scroll Indicator */}
        <div className="absolute left-1/2 transform -translate-x-1/2 animate-bounce mt-6">
          <ArrowDown className="h-14 w-12  text-umami-white" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
