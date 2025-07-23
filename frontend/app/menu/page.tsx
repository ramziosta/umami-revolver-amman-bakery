//categories/page.tsx
'use client'
import Link from 'next/link';
import {Card, CardContent} from '../ui/card';
import Image from "next/image";

import {categories} from "@/app/data/categoryData"


const MenuPage = () => {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="grid grid-cols-1 mb-10 md:grid-cols-[60%_40%] min-h-[50vh]">
                {/* LEFT SIDE */}
                <div className="bg-umami-nube text-black px-8 md:px-16 py-16 flex flex-col justify-center">
                    <div className="flex flex-col ml-26 space-y-4">

                        <h1 className="text-8xl md:text-[100px] font-blanka leading-none">
                            What We Bake
                        </h1>

                        <p className="font-ppneuemontreal italic text-gray-600 text-lg">
                            By pre-orders only
                        </p>

                        <h2 className="text-2xl md:text-4xl leading-snug">
                            Modern Twists & Signature Creations
                        </h2>
                        <p className="text-lg md:text-2xl font-light leading-tight mb-3">
                            Discover our evolving collection of breads, pastries, cakes and more.</p>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="bg-black text-white px-10 md:px-10 py-20 flex flex-col justify-center">
                   <p className="text-2xl md:text-4xl font-light leading-tight mb-3">Baked to order in small batches.</p>
                    <p className="text-2xl md:text-4xl font-light leading-tight mb-2">Modern twists guided by the season and finished by hand.
                    </p>
                </div>
            </section>
            {/* Grid */}
            <section className="px-4 py-12 mb-10 sm:px-8 lg:px-16">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {categories.map((category) => (
                            <Link href={`/menu/${category.id}`} key={category.id}>
                                <Card
                                    className="group cursor-pointer overflow-hidden border border-umami-white shadow-sm hover:shadow-md transition-all duration-500">
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={category.image}
                                            alt={category.name}
                                            width={900}
                                            height={600}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                                        <div
                                            className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-umami-white">
                                            <h3 className="text-3xl lg:text-2xl  font-blanka tracking-wide mb-1">
                                                {category.name}
                                            </h3>
                                            <p className="text-xs sm:text-sm font-ppneuemontreal">
                                                {category.itemCount} items
                                            </p>
                                        </div>
                                    </div>

                                    <CardContent
                                        className="p-4 sm:p-6 group-hover:bg-umami-nube/10 transition-colors duration-300 flex-1">
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

export default MenuPage;