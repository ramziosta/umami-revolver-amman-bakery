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
        <div className="min-h-screen bg-umami-white">
            <section className="relative h-[70vh] overflow-hidden">
                <div className="absolute inset-0 parallax-bg">
                    <Image
                        src={chocolateMousse}
                        alt="Pound cake"
                        fill
                        sizes="100vh"
                        className="object-cover"
                        priority
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
                    <h1 className="text-5xl font-goglast text-umami-white tracking-[0.5rem] mb-4">
                        What We Bake
                    </h1>
                    <p className="max-w-6xl mx-auto text-umami-white font-glimp font-[100] text-2xl leading-relaxed">
                        Our curated menu showcases exclusive flavors and small-batch creations you won’t find anywhere else — including seasonal specialties and refined takes on cult favorites.
                    </p>
                </div>
            </section>
            <section className="px-4 py-8 sm:px-8 sm:py-12 lg:px-16 lg:py-16">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                        {categories.map((category) => (
                            <Link href={`/menu/${category.id}`} key={category.id}>
                                <Card className="group cursor-pointer elegant-shadow hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white h-full">
                                    <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                                        <Image
                                            src={category.image}
                                            alt={category.name}
                                            width={900}
                                            height={600}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                                        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                                            <h3 className="text-lg sm:text-xl font-goglast mb-1 text-shadow tracking-[0.2rem] sm:tracking-[0.5rem]">
                                                {category.name}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-umami-white font-glimp font-[100]">
                                                {category.itemCount} items
                                            </p>
                                        </div>
                                    </div>

                                    <CardContent className="p-4 sm:p-6 bg-white group-hover:bg-umami-white transition-colors duration-300 flex-1">
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
