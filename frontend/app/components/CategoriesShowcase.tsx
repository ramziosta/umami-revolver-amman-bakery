import Link from "next/link";
import {Card, CardContent} from '../ui/card';
import chocolateMousse from '../assets/chocolate-mousse.jpeg';
import bamboloni from '../assets/bamboloni.jpg';
import milleCrepeCake from "../assets/mille-crepe-cake.jpg";
import Image from 'next/image';
import sourdough from "@/app/assets/artisan.jpeg";
import {StaticImageData} from 'next/image';

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
        description: 'Using the best Local, French & Italian flours, grains and seeds.',
    },
    {
        id: 'specialty-cakes',
        name: 'Specialty Cakes',
        image: chocolateMousse,
        description: 'Signature cakes with unique flavor combinations.',
    },
    {
        id: 'mille-crepe-cakes',
        name: 'Mille Crêpe Cakes',
        image: milleCrepeCake,
        description: 'Light, layered crêpe cakes filled with luscious whites.',
    },
    {
        id: 'bamboloni',
        name: 'Bamboloni',
        image: bamboloni,
        description: 'Italian-style filled doughnuts — soft, fluffy, irresistible.',
    }
];

const CategoriesShowcase = () => {
    return (
        <section className="py-24 bg-umami-cream">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-5xl lg:text-7xl font-blanka text-umami-black mb-4 tracking-tight">
                        Featured Collections
                    </h2>
                    <p className="max-w-3xl mx-auto font-ppneuemontreal text-umami-charcoal text-xl md:text-2xl tracking-[0.05em] leading-relaxed">
                        Explore our carefully curated selection of unique, seasonal and signature baked goods.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category) => (
                        <Link key={category.id} href={`/menu/${category.id}`}>
                            <Card
                                className="group cursor-pointer overflow-hidden border border-umami-cream shadow-sm hover:shadow-md transition-all duration-500">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        fill
                                        sizes="100vh"
                                        priority
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 right-4 text-umami-cream">
                                        <h3 className="text-2xl font-blanka tracking-[0.1em] uppercase">
                                            {category.name}
                                        </h3>
                                    </div>
                                </div>

                                <CardContent
                                    className="p-6 bg-umami-cream group-hover:bg-umami-cream transition-colors duration-300">
                                    <p className="font-ppneuemontreal text-umami-black text-base leading-relaxed">
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
