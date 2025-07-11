//categories/slug]/page.tsx

import Link from "next/link";
import {categories} from "@/app/data/categoryData";
import type {StaticImageData} from "next/image";
interface Params {
    params: {
        slug: string;
    };
}
type Category = {
    id: string;
    name: string;
    image: StaticImageData;
    description: string;
    itemCount?: number;
    items: {
        id: string;
        itemName: string;
        itemDescription: string;
        itemImages: (StaticImageData | string)[];
    }[];
};
export default function CategoryPage({ params }: Params) {
    const { slug } = params;

    const category = categories.find((cat) => cat.id === slug);

    if (!category) {
        return <div>Category not found</div>;
    }

    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">{category.name}</h1>
            <p className="mb-4">{category.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.items.map((item) => (
                    <Link
                        key={item.id}
                        href={`/categories/${slug}/item/${item.id}`}
                        className="block p-4 border rounded hover:shadow-lg"
                    >
                        <h2 className="text-2xl font-bold">{item.itemName}</h2>
                        <p className="text-gray-700">{item.itemDescription}</p>
                    </Link>
                ))}
            </div>
        </main>
    );
}