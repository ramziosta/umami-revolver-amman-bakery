'use client';

import { use } from 'react';
import { categories } from '@/app/data/categoryData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface ItemPageProps {
    params: Promise<{
        itemId: string;
    }>;
}

export default function ItemPage({ params }: ItemPageProps) {
    const { itemId } = use(params);

    const category = categories.find(cat => cat.id === 'tiered-cakes');
    if (!category) notFound();

    const item = category.items.find(item => item.id === itemId);
    if (!item) notFound();

    const [selectedImage, setSelectedImage] = useState(item.itemImages[0]);

    return (
        <div className="min-h-screen bg-umami-white">
            {/* Hero */}
            <section className="relative h-[60vh] overflow-hidden">
                <Image
                    src={selectedImage}
                    alt={item.itemName}
                    fill
                    sizes="100vh"
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
                    <h1 className="text-5xl font-goglast text-umami-white tracking-[0.5rem] mb-4">
                        {item.itemName}
                    </h1>
                    {item.seasonal && (
                        <span className="inline-block px-4 py-1 bg-umami-pink-200 text-umami-white text-sm rounded-full">
              Seasonal Item
            </span>
                    )}
                </div>
            </section>

            {/* Details */}
            <section className="p-10 lg:p-16 lg:m-12">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Details Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-glimp tracking-[0.5rem] text-umami-black mb-4">
                                {item.itemName}
                            </h2>
                            <p className="text-umami-black font-glimp leading-relaxed">
                                {item.itemDescription}
                            </p>
                        </div>

                        {/* Ingredients & Allergens */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-glimp tracking-[0.5rem] text-umami-black mb-2">
                                    Ingredients
                                </h3>
                                <p className="text-umami-black text-sm">{item.ingredients}</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-glimp tracking-[0.5rem] text-umami-black mb-2">
                                    Allergens
                                </h3>
                                <p className="text-umami-black text-sm">{item.allergens}</p>
                            </div>
                        </div>

                        {/* Quantity Options */}
                        <div>
                            <h3 className="text-xl font-glimp tracking-[0.5rem] text-umami-black mb-4">
                                Quantity & Pricing
                            </h3>
                            <div className="space-y-3">
                                {item.quantityOptions.map((option, index) => {
                                    if (!option) return null;
                                    return (
                                        <div
                                            key={index}
                                            className="flex justify-between items-center p-2 bg-umami-white border border-umami-charcoal rounded-lg"
                                        >
                                            <span className="font-glimp text-umami-black">{option.quantity}</span>
                                            <span className="text-lg text-umami-charcoal">{option.price}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                            <button className="flex-1 bg-umami-charcoal text-umami-white py-3 px-6 rounded-lg font-semibold hover:bg-umami-black transition-colors">
                                Add to Cart
                            </button>
                            <Link
                                href="/menu/tiered-cakes"
                                className="px-6 py-3 border border-umami-charcoal text-umami-charcoal rounded-lg font-semibold hover:bg-umami-white hover:shadow transition-colors"
                            >
                                Back to Category
                            </Link>
                        </div>
                    </div>

                    {/* Main Image + Thumbnails */}
                    <div className="space-y-4">
                        <div className="rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src={selectedImage}
                                alt={item.itemName}
                                width={1000}
                                height={800}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            {item.itemImages.map((img, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => setSelectedImage(img)}
                                    className={`rounded-lg overflow-hidden border-2 ${
                                        selectedImage === img ? 'border-umami-charcoal' : 'border-transparent'
                                    }`}
                                >
                                    <Image
                                        src={img}
                                        alt={`${item.itemName} ${idx + 1}`}
                                        width={200}
                                        height={200}
                                        className="object-cover w-full h-full"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}