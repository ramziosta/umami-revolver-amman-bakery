'use client';

import Image from "next/image";
import Link from "next/link";
import {Card, CardContent} from "@/app/ui/card";
import {categories} from "@/app/data/categoryData"; // ✅ Import your categories
import React from "react";


const tieredCakes = categories.find(cat => cat.id === "tiered-cakes");

if (!tieredCakes) {
    throw new Error("Tiered Cakes category not found!");
}

const tieredCakesWithDetails = tieredCakes as {
    details: { frostings: string[], fillingsAndToppings: string[] }
} & typeof tieredCakes;

const CakeHero = () => (
    <section className="relative h-[70vh] overflow-hidden">
        <Image
            src={tieredCakes.image}
            alt={tieredCakes.name}
            fill
            className="object-cover"
            priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-blanka text-umami-nube tracking-[0.1em] mb-6">
                {tieredCakes.name}
            </h1>
            <p className="max-w-2xl mx-auto font-ppneuemontreal text-umami-nube/90 text-lg md:text-xl xl:text-3xl tracking-[0.05em] leading-relaxed">
                {tieredCakes.description}
            </p>
        </div>
    </section>
);

const CakePricingTable = () => (
    <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl lg:text-5xl text-umami-black font-black font-blanka text-center tracking-[0.3rem] mb-12">
            Cake Size & Tier Pricing
        </h2>

        <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto border-collapse shadow-xl overflow-hidden font-ppneuemontreal text-umami-black rounded-lg">
                <thead>
                <tr className="bg-umami-charcoal/20 text-umami-black tracking-wide ">
                    <th className="text-left font-medium  py-4 px-5">Layers</th>
                    <th className="text-left font-medium  py-4 px-5">Diameter</th>
                    <th className="text-left font-medium  py-4 px-5">Servings</th>
                    <th className="text-left font-medium  py-4 px-5">Price (JOD)</th>
                </tr>
                </thead>
                <tbody>
                {tieredCakes.cakePricing?.tiers?.map((tier) => (
                    <React.Fragment key={tier.layers}>
                        <tr className="bg-umami-charcoal/10 text-umami-black font-blanka text-lg">
                            <td className="py-4 px-5 tracking-wide" colSpan={4}>
                           {tier.layers} Layer{tier.layers > 1 ? 's' : ''}
                            </td>
                        </tr>
                        {tier.options.map((opt, idx) => (
                            <tr
                                key={`${tier.layers}-${opt.diameterInch}-${idx}`}
                                className="hover:bg-umami-nube transition-colors duration-200 border-b border-umami-gray/20"
                            >
                                <td className="py-3 px-5"></td>
                                <td className="py-3 px-5">{opt.diameterInch}"</td>
                                <td className="py-3 px-5">{opt.servings}</td>
                                <td className="py-3 px-5">{opt.price} JOD</td>
                            </tr>
                        ))}
                    </React.Fragment>
                )) || (
                    <tr>
                        <td colSpan={4} className="text-center italic py-8">
                            No pricing information available
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>

        <p className="mt-8 text-center text-umami-black italic text-sm opacity-70 font-ppneuemontreal">
            * Pricing may vary based on custom designs and special requests.
            Reach out for your personalized quote.
        </p>
    </section>
);

const FrostingsAndFillings = () => (
    <section className="container mx-auto pt-8 pb-20 px-4">
        <h2 className="text-3xl lg:text-5xl text-umami-black font-black font-blanka text-center tracking-[0.3rem] mb-8">
            Custom Cakes: Flavours, Fillings & Frostings
        </h2>

        <p className="max-w-3xl mx-auto mb-16 text-center text-lg lg:text-xl italic text-umami-black font-ppneuemontreal leading-relaxed">
            From our signature sponges to delicate fillings and luscious frostings — every Umami cake is made to order,
            with flavour pairings you won’t find anywhere else. Consult us for recommendations and let’s create
            something memorable together.
        </p>

        <div className="space-y-20">
            {/* Cake Bases */}
            <div className="bg-umami-nube ">
                <h3 className="text-2xl lg:text-4xl text-umami-black font-black font-blanka tracking-[0.3rem] mb-6 text-center">
                    Cake Bases
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        tieredCakesWithDetails.details.cakeFlavors.slice(0, 8),
                        tieredCakesWithDetails.details.cakeFlavors.slice(8, 16),
                        tieredCakesWithDetails.details.cakeFlavors.slice(16)
                    ].map((group, index) => (
                        <ul key={index} className="space-y-4">
                            {group.map((cake) => (
                                <li
                                    key={cake}
                                    className="bg-umami-nube/60 rounded-lg px-4 py-3 font-ppneuemontreal text-umami-black shadow hover:bg-umami-charcoal/10 transition"
                                >
                                     {cake}
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>

            {/* Frostings */}
            <div className="bg-umami-nube ">
                <h3 className="text-2xl lg:text-4xl text-umami-black font-black font-blanka tracking-[0.3rem] mb-6 text-center">
                    Frostings
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        tieredCakesWithDetails.details.frostings.slice(0, 6),
                        tieredCakesWithDetails.details.frostings.slice(6, 12),
                        tieredCakesWithDetails.details.frostings.slice(12)
                    ].map((group, index) => (
                        <ul key={index} className="space-y-4">
                            {group.map((frost) => (
                                <li
                                    key={frost}
                                    className="bg-umami-nube/60 rounded-lg px-4 py-3 font-ppneuemontreal text-umami-black shadow hover:bg-umami-charcoal/10 transition"
                                >
                                     {frost}
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>

            {/* Fillings & Toppings */}
            <div className="bg-umami-nube ">
                <h3 className="text-2xl lg:text-4xl text-umami-black font-black font-blanka tracking-[0.3rem] mb-6 text-center">
                    Fillings & Toppings
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        tieredCakesWithDetails.details.fillingsAndToppings.slice(0, 6),
                        tieredCakesWithDetails.details.fillingsAndToppings.slice(6, 12),
                        tieredCakesWithDetails.details.fillingsAndToppings.slice(12)
                    ].map((group, index) => (
                        <ul key={index} className="space-y-4">
                            {group.map((fill) => (
                                <li
                                    key={fill}
                                    className="bg-umami-nube/60 rounded-lg px-4 py-3 font-ppneuemontreal text-umami-black shadow hover:bg-umami-charcoal/10 transition"
                                >
                                     {fill}
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

const CakeItemCard = ({item}: { item: any }) => (
    <Link href={`/menu/tiered-cakes/${item.id}`}>
        <Card
            className="group cursor-pointer elegant-shadow hover:shadow-2xl transition overflow-hidden border-0 bg-white">
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
                    <h3 className="text-2xl font-blanka mb-1 tracking-[0.5rem]">
                        {item.itemName}
                    </h3>
                </div>
            </div>
            <CardContent className="p-6 bg-white">
                <p className="text-umami-black font-ppneuemontreal leading-relaxed">
                    {item.itemDescription}
                </p>

            </CardContent>
        </Card>
    </Link>
);

const CakesGrid = () => (
    <section className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl lg:text-5xl text-umami-black font-black font-blanka text-center tracking-[0.3rem]  mb-12 mx-8">Classic
            Crowd Pleasers & All Time Favorites</h2>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tieredCakes.items.map((item) => (
                <CakeItemCard key={item.id} item={item}/>
            ))}
        </div>
    </section>
);

export default function CakePage() {
    return (
        <div className="min-h-screen bg-umami-nube/50">
            <CakeHero/>
            <FrostingsAndFillings/>
            <div className="text-center my-10">
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border font-blanka text-2xl mb-10 border-umami-charcoal/30 text-umami-black px-8 py-4 hover:bg-umami-nube  transition-colors duration-300"
                >
                   Talk to us about your custom cake
                </Link>
            </div>
            <CakesGrid/>
            <CakePricingTable/>
        </div>
    );
}
