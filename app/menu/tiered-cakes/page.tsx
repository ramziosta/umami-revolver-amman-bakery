'use client';

import Image from "next/image";
import Link from "next/link";
import {Card, CardContent} from "@/app/ui/card";
import {extras} from "@/app/data/categoryData";
import React from "react";


const tieredCakes = extras.find(cat => cat.id === "tiered-cakes");

if (!tieredCakes) {
    throw new Error("Tiered Cakes category not found!");
}

const tieredCakesWithDetails = tieredCakes as {
    details: { frostings: string[], fillingsAndToppings: string[] }
} & typeof tieredCakes;


const CakeHero = () => (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
            src={tieredCakes.image}
            alt={tieredCakes.name}
            fill
            sizes="100vw"
            className="object-cover"
            priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="relative h-full flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-14 md:pb-20 z-10">
            {/* Eyebrow */}
            <p
                className="text-[0.52rem] font-structural tracking-[0.4em] uppercase mb-6"
                style={{ color: '#C9A96E' }}
            >
                Menu
            </p>

            {/* Category Name */}
            <h1 className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-[0.95] mb-6">
                {tieredCakes.name}
            </h1>

            {/* Description */}
            <p className="font-body font-light text-sm md:text-base text-umami-alabaster/80 max-w-lg leading-relaxed">
                {tieredCakes.description}
            </p>
        </div>
    </section>
);

const Breadcrumb = () => (
    <nav className="mb-12 flex items-center gap-2 font-body font-light text-[0.72rem] text-umami-dim-grey">
        <Link href="/menu" className="hover:text-umami-olive-bark transition-colors duration-300">
            Menu
        </Link>
        <span className="text-umami-alabaster">/</span>
        <span className="text-umami-taupe">{tieredCakes.name}</span>
    </nav>
);

const CakeItemCard = ({item}: { item: any }) => (
    <Link href={`/menu/tiered-cakes/${item.id}`}>
        <Card className="group cursor-pointer overflow-hidden border-0 shadow-none bg-transparent">
            <div className="relative h-72 md:h-80 overflow-hidden">
                <Image
                    src={item.itemImages[0]}
                    alt={item.itemName}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="font-display text-white text-xl md:text-2xl mb-1">
                        {item.itemName}
                    </h3>
                    {item.seasonal && (
                        <span className="inline-block mt-2 px-3 py-1 font-structural text-[0.45rem] tracking-[0.2em] uppercase border border-white/40 text-white/80">
                            Seasonal
                        </span>
                    )}
                </div>
            </div>

            <CardContent className="px-1 pt-4 pb-2 bg-transparent">
                <p className="font-body font-light text-[0.82rem] leading-[1.8] text-umami-dim-grey line-clamp-2">
                    {item.itemDescription}
                </p>
            </CardContent>
        </Card>
    </Link>
);

const CakesGrid = () => (
    <section className="px-6 md:px-12 lg:px-16 pb-20 md:pb-24">
        {/* Section label */}
        <p
            className="text-[0.52rem] font-structural tracking-[0.4em] uppercase mb-12"
            style={{ color: '#C9A96E' }}
        >
            Explore
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {tieredCakes.items.map((item) => (
                <CakeItemCard key={item.id} item={item} />
            ))}
        </div>
    </section>
);

export default function CakePage() {
    return (
        <div className="min-h-screen bg-umami-linen">
            <CakeHero />
            <div className="px-6 md:px-12 lg:px-16 pt-16">
                <Breadcrumb />
            </div>
            <CakesGrid />
        </div>
    );
}