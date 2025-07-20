'use client';

import Image from "next/image";
import Link from "next/link";
import {Card, CardContent} from "@/app/ui/card";
import {categories} from "@/app/data/categoryData"; // ✅ Import your categories
import type {StaticImageData} from "next/image";
import React from "react";

// ✅ Get the category data from `categories`
const tieredCakes = categories.find(cat => cat.id === "tiered-cakes");

if (!tieredCakes) {
    throw new Error("Tiered Cakes category not found!");
}

// Assert that tieredCakes has a details property
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
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-blanka text-umami-cream tracking-[0.1em] mb-6">
                {tieredCakes.name}
            </h1>
            <p className="max-w-2xl mx-auto font-ppneuemontreal text-umami-cream/90 text-lg md:text-xl xl:text-3xl tracking-[0.05em] leading-relaxed">
                {tieredCakes.description}
            </p>
        </div>
    </section>
);

const CakePricingTable = () => (
    <section className="container bg-umami-cream mx-auto pt-12 pb-20">
        <h2 className="text-3xl lg:text-5xl text-umami-black font-black font-blanka text-center tracking-[0.3rem] mb-8">
            Cake Size & Tier Pricing
        </h2>

        <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse border border-umami-gray/30 shadow-lg rounded overflow-hidden font-ppneuemontreal text-umami-black">
                <thead>
                <tr className="bg-umami-cream  text-umami-black tracking-wider text-lg border-b border-umami-gray/30">
                    <th className="text-left py-4 font-medium px-5">Layers</th>
                    <th className="text-left py-4 font-medium px-5">Diameter</th>
                    <th className="text-left py-4 font-medium px-5">Servings</th>
                    <th className="text-left py-4 font-medium  px-5">Price (JOD)</th>
                </tr>
                </thead>
                <tbody>
                {tieredCakes.cakePricing?.tiers?.map((tier) => (
                    <React.Fragment key={tier.layers}>
                        <tr className="bg-umami-cream/80 text-umami-black font-blanka  text-2xl border-b border-umami-gray/20">
                            <td className="py-3 px-5  tracking-wider" colSpan={4}>
                                {tier.layers} Layer{tier.layers > 1 ? 's' : ''}
                            </td>
                        </tr>
                        {tier.options.map((opt, idx) => (
                            <tr
                                key={`${tier.layers}-${opt.diameterInch}-${idx}`}
                                className="hover:bg-umami-cream/70 transition border-b border-umami-gray/20 text-sm"
                            >
                                <td className="py-3 px-5"></td>
                                <td className="py-3 px-5">{opt.diameterInch}"</td>
                                <td className="py-3 px-5">{opt.servings}</td>
                                <td className="py-3 px-5 ">{opt.price} JOD</td>
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

        <p className="mt-8 text-center text-umami-black italic text-sm opacity-70 font-fppneuemontreal">
            * Pricing may vary based on custom designs and special requests. Reach out for your personalized quote.
        </p>
    </section>
);

const FrostingsAndFillings = () => (
    <section className="container mx-auto pt-4 pb-16">
        <h2 className="text-3xl lg:text-5xl text-umami-black font-black font-blanka text-center tracking-[0.3rem] m-8">
            Custom Cakes: Flavours, Fillings & Frostings
        </h2>

        <p className="max-w-3xl mx-auto mb-12 text-center text-lg lg:text-xl italic text-umami-black font-ppneuemontreal leading-relaxed">
            From our signature sponges to delicate fillings and luscious frostings — every Umami cake is made to order,
            with flavour pairings you won’t find anywhere else. Consult us for recommendations and let’s create
            something memorable together.
        </p>

        <div className="space-y-16">
            {/* Cakes */}
            <div className="mx-10">
                <h3 className="text-2xl lg:text-4xl text-umami-black font-black font-blanka tracking-[0.3rem] mb-6">Cake
                    Bases</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10">
                    <ul className="list-disc pl-5 font-ppneuemontreal text-umami-black">
                        {tieredCakesWithDetails.details.cakeFlavors.slice(0, 8).map((cake) => (
                            <li key={cake}>{cake}</li>
                        ))}
                    </ul>
                    <ul className="list-disc pl-5 font-ppneuemontreal text-umami-black">
                        {tieredCakesWithDetails.details.cakeFlavors.slice(8, 16).map((cake) => (
                            <li key={cake}>{cake}</li>
                        ))}
                    </ul>
                    <ul className="list-disc pl-5 font-ppneuemontreal text-umami-black">
                        {tieredCakesWithDetails.details.cakeFlavors.slice(16).map((cake) => (
                            <li key={cake}>{cake}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Frostings */}
            <div className="mx-10">
                <h3 className="text-2xl lg:text-4xl text-umami-black font-black font-blanka tracking-[0.3rem] mb-6">Frostings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10">
                    <ul className="list-disc pl-5 font-ppneuemontreal text-umami-black">
                        {tieredCakesWithDetails.details.frostings.slice(0, 6).map((frost) => (
                            <li key={frost}>{frost}</li>
                        ))}
                    </ul>
                    <ul className="list-disc pl-5 font-ppneuemontreal text-umami-black">
                        {tieredCakesWithDetails.details.frostings.slice(6, 12).map((frost) => (
                            <li key={frost}>{frost}</li>
                        ))}
                    </ul>
                    <ul className="list-disc pl-5 font-ppneuemontreal text-umami-black">
                        {tieredCakesWithDetails.details.frostings.slice(12).map((frost) => (
                            <li key={frost}>{frost}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Fillings & Toppings */}
            <div className="mx-10 mb-30">
                <h3 className="text-2xl lg:text-4xl text-umami-black font-black font-blanka tracking-[0.3rem] mb-6">
                    Fillings & Toppings
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10">
                    <ul className="list-disc pl-5 font-ppneuemontreal text-umami-black">
                        {tieredCakesWithDetails.details.fillingsAndToppings.slice(0, 6).map((fill) => (
                            <li key={fill}>{fill}</li>
                        ))}
                    </ul>
                    <ul className="list-disc pl-5 font-ppneuemontreal text-umami-black">
                        {tieredCakesWithDetails.details.fillingsAndToppings.slice(6, 12).map((fill) => (
                            <li key={fill}>{fill}</li>
                        ))}
                    </ul>
                    <ul className="list-disc pl-5 font-ppneuemontreal text-umami-black">
                        {tieredCakesWithDetails.details.fillingsAndToppings.slice(12).map((fill) => (
                            <li key={fill}>{fill}</li>
                        ))}
                    </ul>
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
                    <h3 className="text-xl font-blanka mb-1 tracking-[0.5rem]">
                        {item.itemName}
                    </h3>
                </div>
            </div>
            <CardContent className="p-6 bg-white">
                <p className="text-umami-black font-ppneuemontreal leading-relaxed">
                    {item.itemDescription}
                </p>
                <span
                    className="inline-block w-full text-center bg-umami-charcoal text-umami-white mt-2 py-2 px-4 rounded hover:bg-umami-black transition-colors"
                >
                                        View Details
                                      </span>
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
        <div className="min-h-screen bg-umami-cream/50">
            <CakeHero/>
            <FrostingsAndFillings/>
            <div className="text-center my-10">
                <Link href="/contact"
                      className="inline-block border font-blanka text-2xl mb-10 border-umami-black text-umami-black px-8 py-4 hover:bg-umami-charcoal hover:text-umami-white transition-colors duration-300">
                    Talk to us about your custom cake
                </Link>
            </div>
            <CakesGrid/>
            <CakePricingTable/>
        </div>
    );
}
