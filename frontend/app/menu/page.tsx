//categories/page.tsx
'use client'
import Link from 'next/link';
import {Card, CardContent} from '../ui/card';
import chocolateMousse from "@/app/assets/chocolate-mousse.jpeg";
import Image from "next/image";
import type { StaticImageData } from 'next/image';
import {categories} from "@/app/data/categoryData"

type Category = {
    id: string;
    name: string;
    image: StaticImageData;
    description: string;
    itemCount: number;
    items: {
        id: string;
        itemName: string;
        itemDescription: string;
        itemImages: string[];
    }[];
};
type CategoriesHeroProps = {
    title: string;
    subtitle: string;
    backgroundImage: StaticImageData;
};

const Categories = () => {
    return (
        <div className="min-h-screen bg-umami-cream">
            {/* Hero */}
            <section className="relative h-[80vh] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={chocolateMousse}
                        alt="Chocolate Mousse"
                        fill
                        sizes="100vh"
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent"></div>
                </div>

                <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-blanka text-umami-cream tracking-[0.1em] mb-6">
                        What We Bake
                    </h1>
                    <p className="max-w-2xl mx-auto font-ppneuemontreal text-umami-cream/90 text-lg md:text-xl xl:text-3xl tracking-[0.05em] leading-relaxed">
                        Our curated menu showcases exclusive flavors & small-batch creations you won’t find anywhere else — seasonal specialties & refined classics.
                    </p>
                </div>
            </section>

            {/* Grid */}
            <section className="px-4 py-12 sm:px-8 lg:px-16">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {categories.map((category) => (
                            <Link href={`/menu/${category.id}`} key={category.id}>
                                <Card
                                    className="group cursor-pointer overflow-hidden border border-umami-cream shadow-sm hover:shadow-md transition-all duration-500">
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={category.image}
                                            alt={category.name}
                                            width={900}
                                            height={600}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                                        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-umami-cream">
                                            <h3 className="text-lg sm:text-xl font-blanka tracking-wide mb-1">
                                                {category.name}
                                            </h3>
                                            <p className="text-xs sm:text-sm font-ppneuemontreal">
                                                {category.itemCount} items
                                            </p>
                                        </div>
                                    </div>

                                    <CardContent className="p-4 sm:p-6 bg-umami-cream group-hover:bg-umami-cream transition-colors duration-300 flex-1">
                                        <p className="text-sm sm:text-base text-umami-black leading-relaxed line-clamp-3">
                                            {category.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Categories;
