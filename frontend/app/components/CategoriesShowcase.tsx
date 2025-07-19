
import Link from "next/link";
import { Card, CardContent } from '../ui/card';
import specialtyCakes from '../assets/specialty-cakes.png';
import seasonal from '../assets/lemon-basil.png';
import milleCrepeCake from "../assets/mille-crepe-cake.jpg";
import Image from 'next/image';
import sourdough from "@/app/assets/artisan.jpeg";
import { StaticImageData } from 'next/image';
type ShowcaseCategory = {
    id: string;
    name: string;
    image: StaticImageData | string; // Allow both
    description: string;
};

const categories: ShowcaseCategory[] = [
  {
    id: 'artisan-sourdoughs',
    name: 'Artisan Breads',
    image: sourdough,
    description: 'Using the best flours, grains and seeds.',
  },
  {
    id: 'specialty-cakes',
    name: 'Specialty Cakes',
    image:specialtyCakes,
    description: 'Signature cakes with unique flavor combinations.',
  },
  {
    id: 'mille-crepe-cakes',
    name: 'Mille Crêpe Cakes',
    image: milleCrepeCake,
    description: 'Light, layered crêpe cakes filled with luscious whites.',
  },
  {
    id: 'seasonal',
    name: 'Seasonal Treats',
    image: seasonal,
    description: 'Inspired by the freshest seasonal ingredients.',
  }
];

const CategoriesShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-goglast text-umami-black mb-3  goglast-tracking">
            Featured Specialty Collections
          </h2>
          <p className="max-w-4xl mx-auto text-umami-black font-glimp text-2xl lg:text-3xl font-[100] tracking-[0.5rem] leading-relaxed">
            Discover our carefully curated selection of unique and premium baked goods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link key={category.id} href={`/menu/${category.id}`}>
              <Card className="group cursor-pointer elegant-shadow hover:shadow-2xl transition-all duration-500 overflow-hidden border-0">
                <div className="relative h-64 overflow-hidden">
                  <Image
                      fill
                      sizes="100vh"
                      priority
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black  via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-goglast  mb-1 tracking-[0.5rem] text-shadow">
                      {category.name}
                    </h3>
                  </div>
                </div>
                
                <CardContent className="p-6 bg-white group-hover:bg-umami-white transition-colors duration-300">
                  <p className="text-umami-black text-lg  leading-relaxed">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesShowcase;
