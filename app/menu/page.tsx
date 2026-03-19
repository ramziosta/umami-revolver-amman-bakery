'use client'
import Link from 'next/link';
import {Card, CardContent} from '../ui/card';
import Image from "next/image";

import {categories} from "@/app/data/categoryData"


const MenuPage = () => {
    return (
        <div className="min-h-screen bg-umami-linen">

            {/* ── HERO — Split Panel ── */}
            <section className="grid grid-cols-1 md:grid-cols-[58%_42%] min-h-[55vh]">

                {/* LEFT — Soft Linen panel */}
                <div className="bg-umami-taupe/30 px-8 md:px-16 lg:px-24 py-20 flex flex-col justify-center">
                    <div className="max-w-lg">

                        {/* Headline */}
                        <h1 className="font-display text-umami-carbon text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] mb-10">
                            What We Bake
                        </h1>

                        {/* Divider */}
                        <div className="w-10 h-[1.5px] mb-8" style={{ backgroundColor: '#624203' }} />

                        {/* Body copy */}
                        <div className="font-body font-light text-[0.85rem] leading-[1.85] text-umami-dim-grey max-w-sm space-y-0">
                            <p>Every item is made to order.</p>
                            <p className="mb-5">24 hours&rsquo; notice required.</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT — Dusty Taupe panel */}
                <div
                    className="px-10 md:px-14 lg:px-16 py-20 flex flex-col justify-center"
                    style={{ backgroundColor: '#C9A96E' }}
                >
                    <div className="max-w-lg space-y-1">
                        <p className="font-display text-umami-linen text-2xl md:text-3xl lg:text-[2.2rem] leading-[1.35]">
                            Seasonally driven.
                        </p>
                        <p className="font-display text-umami-linen/80 text-2xl md:text-3xl lg:text-[2.2rem] leading-[1.35]">
                            Built on French technique.
                        </p>
                        <p className="font-display text-umami-linen/80 text-2xl md:text-3xl lg:text-[2.2rem] leading-[1.35]">
                            Shaped with Japanese precision.
                        </p>
                        <p className="font-display text-umami-linen/80 text-2xl md:text-3xl lg:text-[2.2rem] leading-[1.35]">
                            From Amman.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── CATEGORY GRID ── */}
            <section className="px-6 md:px-12 lg:px-16 py-20 md:py-24">
                <div className="container mx-auto">

                    {/* Section label */}
                    <p
                        className="text-[0.52rem] font-structural tracking-[0.4em] uppercase mb-12"
                        style={{ color: '#C9A96E' }}
                    >
                        Explore
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {categories.map((category) => (
                            <Link href={`/menu/${category.id}`} key={category.id}>
                                <Card className="group cursor-pointer overflow-hidden border-0 shadow-none bg-transparent">
                                    <div className="relative h-72 md:h-80 overflow-hidden">
                                        <Image
                                            src={category.image}
                                            alt={category.name}
                                            width={900}
                                            height={600}
                                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                        <div className="absolute bottom-5 left-5 right-5">
                                            <p className="text-[0.45rem] font-structural tracking-[0.3em] uppercase text-white/60 mb-1.5">
                                                {category.itemCount} items
                                            </p>
                                            <h3 className="font-display text-white text-xl md:text-2xl">
                                                {category.name}
                                            </h3>
                                        </div>
                                    </div>

                                    <CardContent className="px-1 pt-4 pb-2 bg-transparent">
                                        <p className="font-body font-light text-[0.82rem] leading-[1.8] text-umami-dim-grey line-clamp-3">
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