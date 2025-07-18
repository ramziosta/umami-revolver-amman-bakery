'use client';

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/app/ui/card";
import { categories } from "@/app/data/categoryData"; // ✅ Import your categories
import type { StaticImageData } from "next/image";
import React from "react";

// ✅ Get the category data from `categories`
const tieredCakes = categories.find(cat => cat.id === "tiered-cakes");

if (!tieredCakes) {
    throw new Error("Tiered Cakes category not found!");
}

// Assert that tieredCakes has a details property
const tieredCakesWithDetails = tieredCakes as { details: { frostings: string[], fillingsAndToppings: string[] } } & typeof tieredCakes;

const CakeHero = () => (
    <section className="relative h-[70vh] overflow-hidden">
        <Image
            src={tieredCakes.image}
            alt={tieredCakes.name}
            fill
            className="object-cover"
            priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
            <h1 className="text-5xl font-goglast text-umami-white tracking-[0.5rem] mb-4">
                {tieredCakes.name}
            </h1>
            <p className="max-w-4xl text-2xl text-umami-white font-glimp font-[100]">
                {tieredCakes.description}
            </p>
        </div>
    </section>
);

const CakePricingTable = () => (
    <section className="container bg-umami-cream/50 mx-auto pt-4 pb-16">
        <h2 className="text-3xl text-umami-black font-black font-goglast text-center tracking-[0.3rem] m-8">Cake Size & Tier Pricing</h2>
        <div className="overflow-x-auto">
            <table className="w-full max-w-3xl mx-auto border-collapse border border-gray-300 text-umami-white font-glimp">
                <thead>
                <tr className="bg-umami-charcoal/90 text-umami-cream uppercase tracking-wider text-xs">
                    <th className="text-left py-2 px-3">Layers</th>
                    <th className="text-left py-2 px-3">Diameter</th>
                    <th className="text-left py-2 px-3">Servings</th>
                    <th className="text-left py-2 px-3">Price (JOD)</th>
                </tr>
                </thead>
                <tbody>
                {tieredCakes.cakePricing?.tiers?.map((tier) => (
                    <React.Fragment key={tier.layers}>
                        <tr className="bg-umami-charcoal/80 font-goglast text-sm">
                            <td className="py-2 px-3" colSpan={4}>
                                {tier.layers} Layer{tier.layers > 1 ? 's' : ''}
                            </td>
                        </tr>
                        {tier.options.map((opt, idx) => (
                            <tr
                                key={`${tier.layers}-${opt.diameterInch}-${idx}`}
                                className="border-b border-gray-700 bg-umami-charcoal transition text-sm"
                            >
                                <td className="py-2 px-3"></td>
                                <td className="py-2 px-3">{opt.diameterInch}"</td>
                                <td className="py-2 px-3">{opt.servings}</td>
                                <td className="py-2 px-3 font-semibold">{opt.priceJOD} JOD</td>
                            </tr>
                        ))}
                    </React.Fragment>
                )) || (
                    <tr>
                        <td colSpan={4} className="text-center py-4">
                            No pricing information available
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    </section>
);

const FrostingsAndFillings = () => (
    <section className="container bg-umami-cream/50 mx-auto pt-4 pb-16">
        <h2 className="text-3xl text-umami-black font-black font-goglast text-center tracking-[0.3rem] m-8">Frostings, Fillings & Toppings</h2>
        <div className="space-y-12">
            {/* Frostings */}
            <div className="mx-10">
                <h3 className="text-2xl text-umami-black font-black font-goglast tracking-[0.3rem] m-8">Frostings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 mx-10">
                    <ul className="list-disc pl-5 font-umami-glimp text-umami-black">
                        {tieredCakesWithDetails.details.frostings.slice(0, 9).map((frosting) => (
                            <li key={frosting}>{frosting}</li>
                        ))}
                    </ul>
                    <ul className="list-disc pl-5 font-umami-glimp text-umami-black">
                        {tieredCakesWithDetails.details.frostings.slice(9).map((frosting) => (
                            <li key={frosting}>{frosting}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Fillings & Toppings */}
            <div className="mx-10">
                <h3 className="text-2xl text-umami-black font-black font-goglast tracking-[0.3rem] m-8">Fillings & Toppings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 mx-10">
                    <ul className="list-disc pl-5 font-umami-glimp text-umami-black">
                        {tieredCakesWithDetails.details.fillingsAndToppings.slice(0, 9).map((fill) => (
                            <li key={fill}>{fill}</li>
                        ))}
                    </ul>
                    <ul className="list-disc pl-5 font-umami-glimp text-umami-black">
                        {tieredCakesWithDetails.details.fillingsAndToppings.slice(9).map((fill) => (
                            <li key={fill}>{fill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

const CakeItemCard = ({ item }: { item: any }) => (
    <Link href={`/menu/tiered-cakes/${item.id}`}>
        <Card className="group cursor-pointer elegant-shadow hover:shadow-2xl transition overflow-hidden border-0 bg-white">
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={item.itemImages[0]}
                    alt={item.itemName}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-goglast mb-1 tracking-[0.5rem]">
                        {item.itemName}
                    </h3>
                </div>
            </div>
            <CardContent className="p-6 bg-white">
                <p className="text-umami-black leading-relaxed">
                    {item.itemDescription}
                </p>
            </CardContent>
        </Card>
    </Link>
);

const CakesGrid = () => (
    <section className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl text-umami-black font-black font-goglast text-center tracking-[0.3rem] m-8">Classic Crowd Pleasers & All Time Favorites</h2>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tieredCakes.items.map((item) => (
                <CakeItemCard key={item.id} item={item} />
            ))}
        </div>
    </section>
);

export default function CakePage() {
    return (
        <div className="min-h-screen bg-umami-white">
            <CakeHero />
            <FrostingsAndFillings />
            <CakesGrid />
            <CakePricingTable />
        </div>
    );
}
