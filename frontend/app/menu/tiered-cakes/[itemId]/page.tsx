// app/menu/tiered-cakes/[itemId]/page.tsx
import { categories } from '@/app/data/categoryData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface ItemPageProps {
    params: {
        itemId: string;
    };
}

export default async function ItemPage({ params }: ItemPageProps) {
    const { itemId } = await params;

    console.log('=== DEBUG INFO ===');
    console.log('Item ID from params:', itemId);
    console.log('All categories:', categories.map(cat => cat.id));

    const category = categories.find(cat => cat.id === 'tiered-cakes');

    if (!category) {
        console.log('Category "tiered-cakes" not found');
        console.log('Available categories:', categories.map(cat => ({ id: cat.id, name: cat.name })));
        notFound();
    }

    console.log('Category found:', category.name);
    console.log('Items in category:', category.items.map(item => ({ id: item.id, name: item.itemName })));

    const item = category.items.find(item => item.id === itemId);

    if (!item) {
        console.log('Item not found:', itemId);
        console.log('Available item IDs:', category.items.map(item => item.id));
        notFound();
    }

    console.log('Item found:', item.itemName);
    console.log('=== END DEBUG ===');

    return (
        <div className="container mx-auto px-4 py-8">


            {/* Breadcrumb */}
            <nav className="mb-8 text-sm">
                <Link href="/menu" className="text-blue-600 hover:text-blue-800">
                    Menu
                </Link>
                <span className="mx-2 text-gray-400">/</span>
                <Link
                    href="/menu/tiered-cakes"
                    className="text-blue-600 hover:text-blue-800"
                >
                    {category.name}
                </Link>
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-600">{item.itemName}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image Section */}
                <div className="space-y-4">
                    <div className="aspect-square rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                        <Image
                            src={item.itemImages[0]}
                            alt={item.itemName}
                            width={800}
                            height={600}
                            className="rounded shadow"
                        />
                    </div>
                </div>

                {/* Details Section */}
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">{item.itemName}</h1>
                        {item.seasonal && (
                            <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full mb-4">
                                Seasonal Item
                            </span>
                        )}
                        <p className="text-gray-600 leading-relaxed">{item.itemDescription}</p>
                    </div>

                    {/* Quantity Options */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Quantity & Pricing</h3>
                        <div className="space-y-2">
                            {item.quantityOptions.map((option, index) => (
                                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                                    <span className="font-medium">{option.quantity}</span>
                                    <span className="text-lg font-bold text-blue-600">{option.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Ingredients & Allergens */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
                            <p className="text-gray-600 text-sm">{item.ingredients}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Allergens</h3>
                            <p className="text-gray-600 text-sm">{item.allergens}</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                        <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                            Add to Cart
                        </button>
                        <Link
                            href="/menu/tiered-cakes"
                            className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                        >
                            Back to Category
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}