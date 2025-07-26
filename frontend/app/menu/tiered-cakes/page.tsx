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
const Breadcrumb = () => (
    <nav className="w-full max-w-7xl mx-auto px-4 mb-8 mt-6 text-sm flex items-center">
        <Link href="/menu" className="text-umami-charcoal hover:text-blue-800">
            Menu
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-umami-charcoal">{tieredCakes.name}</span>
    </nav>
);


const CakePricingTable = () => (
    <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl lg:text-5xl text-umami-black font-ppneuemontreal text-center tracking-[0.3rem] mb-12">
            Cake Size & Tier Pricing
        </h2>
        <span className="block text-center text-umami-black text-sm font-ppneuemontreal opacity-60 mt-2">
          Prices shown are starting points — premium options & customizations available!
        </span>
        <div className="overflow-x-auto px-4">
            <table
                className="w-full max-w-4xl mx-auto border-collapse shadow-lg overflow-hidden font-ppneuemontreal text-umami-black rounded-lg">
                <thead>
                <tr className="bg-umami-charcoal/20 text-umami-black tracking-wide">
                    <th className="text-left font-medium py-3 px-4">Layers</th>
                    <th className="text-left font-medium py-3 px-4">Diameter</th>
                    <th className="text-left font-medium py-3 px-4">Servings</th>
                    <th className="text-left font-medium py-3 px-4">Starting Price (JOD)</th>
                </tr>
                </thead>
                <tbody>
                {tieredCakes.cakePricing?.tiers?.map((tier) => (
                    <React.Fragment key={tier.layers}>
                        <tr className="bg-umami-charcoal/10 text-umami-black font-blanka text-base md:text-lg">
                            <td className="py-2 px-4 tracking-wide" colSpan={4}>
                                {tier.layers} Layer{tier.layers > 1 ? 's' : ''}
                            </td>
                        </tr>
                        {tier.options.map((opt, idx) => (
                            <tr
                                key={`${tier.layers}-${opt.diameterInch}-${idx}`}
                                className="hover:bg-umami-nube transition-colors duration-200 border-b border-umami-gray/20"
                            >
                                <td className="py-3 px-4"></td>
                                <td className="py-3 px-4">{opt.diameterInch}"</td>
                                <td className="py-3 px-4">{opt.servings}</td>
                                <td className="py-3 px-4">{opt.price} JOD</td>
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
            <p className="mt-4 text-center text-umami-black italic text-md opacity-80 font-ppneuemontreal">
                Pricing includes classic cake base and simple buttercream finish.
                Special frostings (French, German), signature fillings (lotus, fresh fruit, custards),
                premium toppers, florals, or custom decorations may be added for an additional fee starting from 3–10
                JOD.
                Final pricing depends on design complexity and selected options.
            </p>
            <h2 className="text-3xl lg:text-5xl mt-6 text-umami-black font-ppneuemontreal text-center tracking-[0.3rem] mb-12">
                Cupcake Pricing
            </h2>
            <section className="max-w-md mx-auto my-8 shadow-lg">

                <table className="w-full text-left border border-umami-charcoal/20 font-ppneuemontreal">
                    <thead>
                    <tr className="bg-umami-charcoal/10">
                        <th className="py-2 font-medium px-4">Quantity</th>
                        <th className="py-2 font-medium px-4">Base Price (JOD)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="border-t border-umami-charcoal/10">
                        <td className="py-2 px-4">6 Cupcakes</td>
                        <td className="py-2 px-4">15 JOD</td>
                    </tr>
                    <tr className="border-t border-umami-charcoal/10">
                        <td className="py-2 px-4">12 Cupcakes</td>
                        <td className="py-2 px-4">25 JOD</td>
                    </tr>
                    <tr className="border-t border-umami-charcoal/10">
                        <td className="py-2 px-4">24 Cupcakes</td>
                        <td className="py-2 px-4">48 JOD</td>
                    </tr>
                    </tbody>
                </table>

            </section>
            <p className="text-center mt-2 mb-6 text-sm text-umami-black opacity-70 font-ppneuemontreal">
                Base prices for classic cupcakes. Intricate designs, custom flavours, or themed toppers may be priced
                individually.
            </p>

            <div className="text-center font-ppneuemontreal text-umami-black">
                <h4 className="text-xl lg:text-2xl font-ppneuemontreal mb-3 tracking-[0.15em]">Classic Flavours</h4>
                <p className="mb-4">Vanilla Bean • Chocolate • Red Velvet • Lemon Zest • Carrot • Coffee</p>

                <h4 className="text-xl lg:text-2xl font-ppneuemontreal mb-3 tracking-[0.15em]">Classic Frostings</h4>
                <p>Vanilla Buttercream • Chocolate Ganache • Cream Cheese • Coffee Frosting • Lemon Buttercream</p>
            </div>

            <p className="text-center mt-6 text-sm italic text-umami-black font-ppneuemontreal">
                Want something extra special? We’ll craft custom cupcake designs, unique fillings, and themed
                decorations — just ask!
            </p>
        </div>


        <p className="mt-6 text-center text-umami-black text-lg opacity-70 font-ppneuemontreal">
            Need help picking sizes or customizing your dream cake? We’re here to help — get in touch for
            recommendations, ideas, and a quote.
        </p>
    </section>
);

const FrostingsAndFillings = () => (
    <section className="container mx-auto pt-8 pb-20 px-4">
        <h2 className="text-3xl lg:text-5xl text-umami-black font-black font-blanka text-center tracking-[0.3rem] mb-8">
            Custom Cakes: Flavours<span className="font-ppneuemontreal">, </span>Fillings & Frostings
        </h2>

        <p className="max-w-3xl mx-auto mb-16 text-center text-lg lg:text-xl italic text-umami-black font-ppneuemontreal leading-relaxed">
            From our signature sponges to delicate fillings and luscious frostings — every Umami cake is made to order,
            with flavour pairings you won’t find anywhere else. Consult us for recommendations and let’s create
            something memorable together.
        </p>
        <h3 className="text-3xl lg:text-4xl text-umami-black font-boldfont-ppneuemontreal text-center tracking-[0.3rem] mb-12">
            Choose your Cake Elements
        </h3>
        <div className="space-y-20 ">
            {/* Cake Bases */}
            <h3 className="text-2xl lg:text-4xl text-umami-black font-ppneuemontreal tracking-[0.3rem]  text-center">
                Cake Bases
            </h3>
            <div className="bg-umami-nube py-8">
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 max-w-7xl mx-auto px-4">
                    {tieredCakesWithDetails.details.cakeFlavors.map((cake) => (
                        <div
                            key={cake}
                            className="bg-umami-nube/60 rounded-md px-3 py-2 text-sm md:text-base font-ppneuemontreal text-umami-black shadow hover:bg-umami-charcoal/10 transition"
                        >
                            {cake}
                        </div>
                    ))}
                </div>
            </div>

            {/* Crunch */}
            <h3 className="text-2xl lg:text-4xl text-umami-black font-ppneuemontreal font-blanka tracking-[0.3rem] text-center">
                Crunch
            </h3>
            <div className="bg-umami-nube py-8">
                <div className="grid sm:grid-cols-3 grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 max-w-7xl mx-auto px-4">
                    {tieredCakesWithDetails.details.crunchElements.map((element) => (
                        <div
                            key={element}
                            className="bg-umami-nube/60 rounded-md px-3 py-2 text-sm md:text-base font-ppneuemontreal text-umami-black shadow hover:bg-umami-charcoal/10 transition"
                        >
                            {element}
                        </div>
                    ))}
                </div>
            </div>
            {/* Frostings */}
            <h3 className="text-2xl lg:text-4xl text-umami-black font-ppneuemontreal font-blanka tracking-[0.3rem] text-center">
                Frostings
            </h3>
            <div className="bg-umami-nube py-8">
                <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto px-4">
                    {tieredCakesWithDetails.details.frostings.map((frost) => (
                        <div
                            key={frost}
                            className="bg-umami-nube/60 rounded-md px-3 py-2 text-sm md:text-base font-ppneuemontreal text-umami-black shadow hover:bg-umami-charcoal/10 transition"
                        >
                            {frost}
                        </div>
                    ))}
                </div>
            </div>

            {/* Fillings & Toppings */}
            <h3 className="text-2xl lg:text-4xl text-umami-black font-ppneuemontreal tracking-[0.3rem] mb-6 text-center">
                Fillings & Toppings
            </h3>
            <div className="bg-umami-nube py-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto px-4">
                    {tieredCakesWithDetails.details.crunchElements.map((crunch) => (
                        <div
                            key={crunch}
                            className="bg-umami-nube/60 rounded-md px-3 py-2 text-sm md:text-base font-ppneuemontreal text-umami-black shadow hover:bg-umami-charcoal/10 transition"
                        >
                            {crunch}
                        </div>
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
            <Breadcrumb />
            <FrostingsAndFillings/>
            <div className="text-center my-10">
                <p className="mt-8 text-center italic mb-6 text-umami-black text-base md:text-lg lg:text-xl font-ppneuemontreal">
                    Prefer cupcakes? Any of our cakes can be crafted into custom cupcakes — the same signature flavours,
                    in perfect bite-sized form.
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border font-blanka text-2xl mb-10 border-umami-charcoal/30 text-umami-black px-8 py-4 hover:bg-umami-nube transition-colors duration-300"
                >
                    Let’s Design Your Dream Cake
                </Link>
            </div>
            <CakesGrid/>
            <CakePricingTable/>
        </div>
    );
}
