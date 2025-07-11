'use client';

import { categories } from "@/app/data/categoryData";
import Image from "next/image";
import { use } from "react";

interface Params {
    params: Promise<{
        slug: string;
        itemId: string;
    }>;
}

export default function ItemPage({ params }: Params) {
    const { slug, itemId } = use(params);
    const category = categories.find((cat) => cat.id === slug);
    const item = category?.items.find((i) => i.id === itemId);

    if (!category || !item) {
        return <div>Item not found</div>;
    }

    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">{item.itemName}</h1>
            <p className="mb-2">{item.itemDescription}</p>

            {item.itemImages[0] && (
                <Image
                    src={item.itemImages[0]}
                    alt={item.itemName}
                    width={800}
                    height={600}
                    className="rounded shadow"
                />
            )}

            {/* TODO: Add toppings, crust, options if exist */}
        </main>
    );
}