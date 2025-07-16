'use client';

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/app/ui/card";
import type { StaticImageData } from "next/image";
import tieredCake from "@/app/assets/tieredCake.png";
import brioche from "@/app/assets/brioche.jpeg";

const tieredCakes = {
    "id": "tiered-cakes",
    "name": "Tiered Cakes & Cupcakes",
    "image": tieredCake,
    "description": "Layered, tailored and unforgettable.",

    "details": {
        "frostings": [
            "Vanilla Bean Butter Cream",
            "French Buttercream",
            "German Butter Cream",
            "Cream Cheese Frosting",
            "Chocolate Butter Cream",
            "Salted Caramel Butter Cream",
            "Lemon Butter Cream",
            "Raspberry Butter Cream",
            "Strawberry Butter Cream",
            "Blueberry Butter Cream",
            "Lavender Butter Cream",
            "Coffee Butter Cream",
            "Earl Grey Butter Cream",
            "Peanut Butter Butter Cream",
            "Toasted Meringue",
            "Whipped Marshmallow",
            "Whipped Cream",
            "Chocolate Ganache"
        ],
        "fillingsAndToppings": [
            "Vanilla Bean Custard",
            "Strawberry",
            "Raspberry",
            "Blueberry",
            "Caramel",
            "Chocolate",
            "Banana Mousse",
            "Lemon Curd",
            "Coffee Cream",
            "Oreo",
            "Lotus",
            "Passion Fruit",
            "Mango",
            "Peach",
            "Toasted Coconut",
            "Pineapple",
            "Banana",
            "Peanut Butter"
        ]
    },

    "cakePricing": {
        "tiers": [
            {
                "layers": 2,
                "options": [
                    { "diameterInch": 6, "servings": 12, "priceJOD": 35 },
                    { "diameterInch": 8, "servings": 24, "priceJOD": 60 }
                ]
            },
            {
                "layers": 3,
                "options": [
                    { "diameterInch": 6, "servings": 18, "priceJOD": 50 },
                    { "diameterInch": 8, "servings": 36, "priceJOD": 85 },
                    { "diameterInch": 10, "servings": 50, "priceJOD": 120 }
                ]
            },
            {
                "layers": 4,
                "options": [
                    { "diameterInch": 8, "servings": 48, "priceJOD": 110 },
                    { "diameterInch": 10, "servings": 65, "priceJOD": 150 }
                ]
            }
        ]
    },

    "cupcakeQuantityOptions": [
        { "quantity": 4, "priceJOD": 15 },
        { "quantity": 6, "priceJOD": 20 },
        { "quantity": 8, "priceJOD": 25 },
        { "quantity": 10, "priceJOD": 30 },
        { "quantity": 12, "priceJOD": 35 },
        { "quantity": 24, "priceJOD": 65 }
    ],

    "items": [
        {
        "id": "white-confetti-cake",
        "itemName": "White Confetti Cake",
        "itemDescription": "Classic white cake layered with colorful confetti sprinkles and frosted with silky French buttercream.",
        itemImages: [brioche],
        quantityOptions: [
            {quantity: 1, price: "JOD 6"},
            {quantity: 2, price: "JOD 12"},
            {quantity: 3, price: "JOD 18"},
        ],
        ingredients: "flour",
        allergens: "flour, eggs"
    },
        {
            "id": "chocolate-cake",
            "itemName": "Chocolate Cake",
            "itemDescription": "Rich, moist chocolate cake filled and frosted with decadent chocolate French buttercream.",
            itemImages: [brioche],
            quantityOptions: [
                {quantity: 1, price: "JOD 6"},
                {quantity: 2, price: "JOD 12"},
                {quantity: 3, price: "JOD 18"},
            ],
            ingredients: "flour",
            allergens: "flour, eggs"
        },
        {
            "id": "germans-chocolate-cake",
            "itemName": "German's Chocolate Cake",
            "itemDescription": "Classic German's chocolate cake layered with coconut-pecan filling and chocolate frosting.",
            itemImages: [brioche],
            quantityOptions: [
                {quantity: 1, price: "JOD 6"},
                {quantity: 2, price: "JOD 12"},
                {quantity: 3, price: "JOD 18"},
            ],
            ingredients: "flour",
            allergens: "flour, eggs"
        },
        {
            "id": "black-forest-cake",
            "itemName": "Black Forest Cake",
            "itemDescription": "Decadent chocolate sponge layered with fresh cherries, whipped cream, and dark chocolate shavings.",
            itemImages: [brioche],
            quantityOptions: [
                {quantity: 1, price: "JOD 6"},
                {quantity: 2, price: "JOD 12"},
                {quantity: 3, price: "JOD 18"},
            ],
            ingredients: "flour",
            allergens: "flour, eggs"
        },
        {
            "id": "coconut-cake",
            "itemName": "Coconut Cake",
            "itemDescription": "Soft coconut cake layered with German buttercream and finished with toasted coconut flakes.",
            itemImages: [brioche],
            quantityOptions: [
                {quantity: 1, price: "JOD 6"},
                {quantity: 2, price: "JOD 12"},
                {quantity: 3, price: "JOD 18"},
            ],
            ingredients: "flour",
            allergens: "flour, eggs"
        },
        {
            "id": "banana-nut-cake",
            "itemName": "Banana Nut Cake",
            "itemDescription": "Moist banana cake studded with nuts and layered with salted caramel filling and frosting.",
            itemImages: [brioche],
            quantityOptions: [
                {quantity: 1, price: "JOD 6"},
                {quantity: 2, price: "JOD 12"},
                {quantity: 3, price: "JOD 18"},
            ],
            ingredients: "flour",
            allergens: "flour, eggs"
        },
        {
            "id": "carrot-pecan-cake",
            "itemName": "Classic Carrot Pecan Cake",
            "itemDescription": "Tender spiced carrot cake with crunchy pecans, filled and frosted with luscious cream cheese frosting.",
            itemImages: [brioche],
            quantityOptions: [
                {quantity: 1, price: "JOD 6"},
                {quantity: 2, price: "JOD 12"},
                {quantity: 3, price: "JOD 18"},
            ],
            ingredients: "flour",
            allergens: "flour, eggs"
        }
        ]
}


const CakeHero = () => (
    <section className="relative h-[70vh] overflow-hidden">
        <Image
            src={tieredCakes.image}
            alt="Tiered Cakes & Cupcakes"
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
    <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl mb-4 font-goglast">Cake Size & Tier Pricing</h2>
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                <tr className="bg-gray-100">
                    <th className="text-left py-2 px-4">Layers</th>
                    <th className="text-left py-2 px-4">Diameter (inch)</th>
                    <th className="text-left py-2 px-4">Servings</th>
                    <th className="text-left py-2 px-4">Price (JOD)</th>
                </tr>
                </thead>
                <tbody>
                {tieredCakes.cakePricing.tiers.map((tier) =>
                    tier.options.map((opt, idx) => (
                        <tr key={`${tier.layers}-${opt.diameterInch}-${idx}`}>
                            <td className="py-2 px-4">{tier.layers}</td>
                            <td className="py-2 px-4">{opt.diameterInch}"</td>
                            <td className="py-2 px-4">{opt.servings}</td>
                            <td className="py-2 px-4">{opt.priceJOD} JOD</td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    </section>
);

const FrostingsAndFillings = () => (
    <section className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl mb-4 font-goglast">Frostings, Fillings & Toppings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-2xl mb-2 font-glimp">Frostings</h3>
                <ul className="list-disc pl-5">
                    {tieredCakes.details.frostings.map((frosting) => (
                        <li key={frosting}>{frosting}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-2xl mb-2 font-glimp">Fillings & Toppings</h3>
                <ul className="list-disc pl-5">
                    {tieredCakes.details.fillingsAndToppings.map((fill) => (
                        <li key={fill}>{fill}</li>
                    ))}
                </ul>
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
        <h2 className="text-3xl mb-4 font-goglast">Signature Cakes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <CakePricingTable />
            <FrostingsAndFillings />
            <CakesGrid />
        </div>
    );
}

// app/menu/tiered-cakes/page.tsx
// import {categories } from  '@/app/data/categoryData';
// import Link from 'next/link';
// import Image from 'next/image';
//
//
// export default function ArtisanSourdoughsPage() {
//     const category = categories.find(cat => cat.id === 'tiered-cakes');
//
//     if (!category) {
//         return <div>Category not found</div>;
//     }
//
//     return (
//         <div className="container mx-auto px-4 py-8">
//             {/* Breadcrumb */}
//             <nav className="mb-8 text-sm">
//                 <Link href="/menu" className="text-blue-600 hover:text-blue-800">
//                     Menu
//                 </Link>
//                 <span className="mx-2 text-gray-400">/</span>
//                 {category.name}
//             </nav>
//             {/* Category Header */}
//             <div className="mb-8">
//                 <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
//                 <p className="text-lg text-gray-600 mb-2">{category.categoryDescription}</p>
//             </div>
//
//             {/* Items Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {category.items.map((item) => (
//                     <div key={item.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
//                         <div className="aspect-video bg-gray-200 rounded-t-lg">
//                             <Image
//                                 src={item.itemImages[0]}
//                                 alt={item.itemName}
//                                 width={800}
//                                 height={600}
//                                 className="rounded shadow"
//                             />
//                         </div>
//                         <div className="p-4">
//                             <h3 className="text-xl font-semibold mb-2">{item.itemName}</h3>
//                             <p className="text-gray-600 text-sm mb-3 line-clamp-2">
//                                 {item.itemDescription}
//                             </p>
//                             <div className="flex justify-between items-center mb-4">
//                 <span className="text-lg font-bold text-blue-600">
//                   {item.quantityOptions[0]?.price}
//                 </span>
//                                 {item.seasonal && (
//                                     <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
//                     Seasonal
//                   </span>
//                                 )}
//                             </div>
//
//                             {/* This is the important part - the link to individual item */}
//                             <Link
//                                 href={`/menu/tiered-cakes/${item.id}`}
//                                 className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded hover:bg-blue-700 transition-colors"
//                             >
//                                 View Details
//                             </Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }