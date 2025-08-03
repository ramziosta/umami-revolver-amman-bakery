// app/menu/pound-cakes/[itemId]/page.tsx
'use client';

import {categories, QuantityOption} from '@/app/data/categoryData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image, {StaticImageData} from 'next/image';
import { use, useState } from 'react';
import ItemPageDisplay from "@/app/components/ItemPageDisplay";

interface ItemPageProps {
    params: Promise<{
        itemId: string;
    }>;
}

export default function ItemPage({ params }: ItemPageProps) {
    const { itemId } = use(params);

    const category = categories.find((cat) => cat.id === 'pound-cakes');
    if (!category) {
        notFound();
    }

    const item = category.items.find((item) => item.id === itemId);
    if (!item) {
        notFound();
    }

    const [selectedImage, setSelectedImage] = useState(item.itemImages[0]);
    return (
        <div className="min-h-screen bg-umami-white">
            {/* Hero Image */}
            <section className="relative h-[60vh] overflow-hidden">
                <Image
                    src={item.itemImages[0]}
                    alt={item.itemName}
                    fill
                    sizes="100vh"
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent"></div>
                <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10 drop-shadow-lg">
                    <h1 className="text-7xl md:text-8xl font-blanka text-umami-white tracking-[0.2em] mb-4">
                        {item.itemName}
                    </h1>

                </div>
            </section>

            {/* Details */}
            <section className="px-4 py-12 lg:py-16 lg:px-24">
                {/* Breadcrumb */}
                <nav className="mb-8 text-xs text-umami-charcoal/70">
                    <Link href="/menu" className="hover:text-blue-800">
                        Menu
                    </Link>
                    <span className="mx-2 text-gray-400">/</span>
                    <Link
                        href={`/menu/${category.id}`}
                        className="hover:text-blue-800"
                    >
                        {category.name}
                    </Link>
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-gray-600">{item.itemName}</span>
                </nav>

                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Details Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl lg:text-5xl font-blanka tracking-[0.15em] mb-4">
                                {item.itemName}
                            </h2>
                            {item.seasonal && (
                                <span className="inline-block mb-6 px-4 py-2 bg-umami-black text-umami-white text-xs rounded-full">
                                  Seasonal Specialty
                                </span>
                            )}
                            <p className="text-umami-black font-ppneuemontreal leading-relaxed">
                                {item.itemDescription}
                            </p>
                        </div>

                        {/* Variations */}
                        {item.variations && item.variations.length > 0 && (
                            <div>
                                <h3 className="text-xl font-ppneuemontreal uppercase tracking-widest text-umami-charcoal mb-4">
                                    Available Variations
                                </h3>
                                <div className="space-y-4">
                                    {item.variations.map((variation: { id?: string; name?: string; description?: string; price?: string; images?: (StaticImageData | string)[] }) => (
                                        <button
                                            key={variation.id}
                                            onClick={() => {
                                                if (variation.images && variation.images.length > 0) {
                                                    const firstImage = variation.images[0];
                                                    setSelectedImage(typeof firstImage === 'string' ? firstImage : firstImage.src);
                                                }
                                            }}
                                            className="w-full flex justify-between text-left border p-4 rounded font-ppneuemontreal border-umami-charcoal hover:bg-umami-nube transition"
                                        >
                                             <span className="font-ppneuemontreal text-umami-black">
                                                {variation.name}
                                             </span>
                                            <span className="text-lg text-umami-charcoal">
                                                {variation.price}
                                            </span>

                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Ingredients, Allergens, Weight */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-ppneuemontreal uppercase tracking-widest text-umami-charcoal mb-2">
                                    Ingredients
                                </h3>
                                <p className="text-umami-black text-sm">{item.ingredients}</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-ppneuemontreal uppercase tracking-widest text-umami-charcoal mb-2">
                                    Allergens
                                </h3>
                                <p className="text-umami-black text-sm">{item.allergens}</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-ppneuemontreal uppercase tracking-widest text-umami-charcoal mb-2">
                                    Available Sizes
                                </h3>
                                <p className="text-umami-black text-sm"> Medium (serves 8-10)</p>
                                <p className="text-umami-black text-sm"> Large (serves 12-14)</p>


                            </div>
                        </div>

                        {/* Quantity Options */}
                        <div>
                            <h3 className="text-xl font-ppneuemontreal uppercase tracking-widest text-umami-charcoal mb-4">
                                Quantity & Pricing
                            </h3>
                            <div className="space-y-3">
                                {item.quantityOptions.map((option: QuantityOption, index: any) => {
                                    if (!option) return null;
                                    return (
                                        <div
                                            key={index}
                                            className="flex justify-between items-center p-3 bg-umami-white border border-umami-charcoal rounded-lg"
                                        >
                                             <span className="font-ppneuemontreal text-umami-black">
                                                {option.quantity}
                                             </span>
                                            <span className="text-lg text-umami-charcoal">
                                                {option.price}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        {/*<div className="flex flex-col sm:flex-row gap-4">*/}
                        {/*    <button className="flex-1 bg-umami-charcoal text-umami-white py-3 px-6 rounded-lg font-semibold hover:bg-umami-black transition">*/}
                        {/*        Add to Cart*/}
                        {/*    </button>*/}
                        {/*    <Link*/}
                        {/*        href={`/menu/${category.id}`}*/}
                        {/*        className="flex-1 px-6 py-3 border border-umami-charcoal text-umami-charcoal rounded-lg font-semibold text-center hover:bg-umami-charcoal hover:text-umami-white transition"*/}
                        {/*    >*/}
                        {/*        Back to Category*/}
                        {/*    </Link>*/}
                        {/*</div>*/}
                    </div>

                    {/* Large Image */}
                    <div className="hidden lg:flex flex-col space-y-6">
                        {item.itemImages.map((image: StaticImageData | string, index: number) => (
                            <div
                                key={index}
                                className="rounded-lg overflow-hidden shadow-xl"
                            >
                                <Image
                                    src={image}
                                    alt={`${item.itemName} Image ${index + 1}`}
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}