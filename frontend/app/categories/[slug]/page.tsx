'use client';

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/app/ui/card";
import { categories } from "@/app/data/categoryData";
import type { StaticImageData } from "next/image";

interface Params {
    params: {
        slug: string;
    };
}

interface Item {
    id: string;
    itemName: string;
    itemDescription: string;
    itemPrice?: number | Record<string, number>;
    itemPrices?: { size: string; priceJOD: number }[];
    itemImages: (StaticImageData | string)[];
}

type Category = {
    id: string;
    name: string;
    image: StaticImageData;
    description: string;
    itemCount?: number;
    details?: any;
    cupcakeQuantityOptions?: { quantity: number; priceJOD: number }[];
    items: {
        id: string;
        itemName: string;
        itemDescription: string;
        itemPrice?: number | Record<string, number>;
        itemPrices?: { size: string; priceJOD: number }[];
        itemImages: (StaticImageData | string)[];
    }[];
};

const CategoryHero = ({ title, subtitle, backgroundImage }: { title: string; subtitle: string; backgroundImage: StaticImageData }) => (
    <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 parallax-bg">
            <Image
                src={backgroundImage}
                alt={title}
                fill
                sizes="100vh"
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
            <h1 className="text-5xl font-goglast text-umami-cream tracking-[0.5rem] mb-4 font-bold">
                {title}
            </h1>
            <p className="max-w-6xl mx-auto text-umami-cream/90 font-glimp text-4xl leading-relaxed">
                {subtitle}
            </p>
        </div>
    </section>
);

const ItemCard = ({ slug, item }: { slug: string; item: Category['items'][0] }) => (
    <Link href={`/categories/${slug}/item/${item.id}`}>
        <Card className="group cursor-pointer elegant-shadow hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white">
            {item.itemImages?.[0] && (
                <div className="relative h-64 overflow-hidden">
                    <Image
                        src={item.itemImages[0]}
                        alt={item.itemName}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-xl font-goglast font-bold mb-1 text-shadow tracking-[0.5rem]">
                            {item.itemName}
                        </h3>
                    </div>
                </div>
            )}

            <CardContent className="p-6 bg-white group-hover:bg-umami-cream transition-colors duration-300">
                <p className="text-umami-navy text-lg font-bold leading-relaxed mb-2">
                    {item.itemDescription}
                </p>

                {item.itemPrice && typeof item.itemPrice === "number" && (
                    <p className="text-umami-navy font-semibold">Price: {item.itemPrice} JOD</p>
                )}

                {item.itemPrices && (
                    <div className="mt-2 text-umami-navy">
                        <h4 className="font-bold">Sizes & Prices:</h4>
                        <ul className="list-disc pl-5">
                            {item.itemPrices.map((price, idx) => (
                                <li key={idx}>{price.size}: {price.priceJOD} JOD</li>
                            ))}
                        </ul>
                    </div>
                )}

                {item.itemPrice && typeof item.itemPrice === "object" && (
                    <div className="mt-2 text-umami-navy">
                        <h4 className="font-bold">Options & Prices:</h4>
                        <ul className="list-disc pl-5">
                            {Object.entries(item.itemPrice).map(([key, val]) => (
                                <li key={key}>{key}: {val} JOD</li>
                            ))}
                        </ul>
                    </div>
                )}
            </CardContent>
        </Card>
    </Link>
);

export default function CategoryPage({ params }: Params) {
    const { slug } = params;
    const category = categories.find((cat) => cat.id === slug);

    if (!category) {
        return <div className="container mx-auto px-4 py-8">Category not found</div>;
    }

    return (
        <div className="min-h-screen bg-umami-cream">
            <CategoryHero
                title={category.name}
                subtitle={category.description}
                backgroundImage={category.image}
            />

            {category.details && (
                <section className="container mx-auto px-4 py-8">
                    <h2 className="text-2xl font-bold mb-2">Details</h2>
                    <pre className="bg-white p-4 rounded shadow overflow-x-auto">
            {JSON.stringify(category.details, null, 2)}
          </pre>
                </section>
            )}

            {category.cupcakeQuantityOptions && (
                <section className="container mx-auto px-4 pb-8">
                    <h2 className="text-2xl font-bold mb-2">Cupcake Options</h2>
                    <ul className="list-disc pl-5">
                        {category.cupcakeQuantityOptions.map((opt) => (
                            <li key={opt.quantity}>
                                {opt.quantity} cupcakes — {opt.priceJOD} JOD
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {category.items.map((item) => (
                            <ItemCard key={item.id} slug={slug} item={item} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}