// app/category/[slug]/item/[itemId]/page.tsx



import {categories} from "@/app/data/categoryData";
import Image from "next/image";
export default function CheesecakeItemPage({ params }: { params: { slug: string, itemId: string } }) {
    const { slug, itemId } = params;
    const category = categories.find(cat => cat.id === slug);
    const item = category?.items.find(i => i.id === itemId);

    if (!category || !item) {
        return <div>Item not found</div>;
    }

    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">{item.itemName}</h1>
            <p className="mb-2">{item.itemDescription}</p>
            <Image src={item.itemImages[0]} alt={item.itemName} />
            {/* Add topping options, crust, etc */}
        </main>
    );
}