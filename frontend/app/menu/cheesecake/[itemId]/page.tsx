// app/menu/cheesecake/[itemId]/page.tsx
import {categories } from  '@/app/data/categoryData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';


interface ItemPageProps {
    params: Promise<{
        itemId: string;
    }>;
}

export default async function ItemPage({ params }: ItemPageProps) {
    const { itemId } = await params

    const category = categories.find((cat) => cat.id === 'cheesecake')
    if (!category) {
        notFound()
    }

    const item = category.items.find((item) => item.id === itemId)
    if (!item) {
        notFound()
    }

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
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
                    <h1 className="text-5xl font-goglast text-umami-white tracking-[0.5rem] mb-4">
                        {item.itemName}
                    </h1>
                    {item.seasonal && (
                        <span className="inline-block px-4 py-1 bg-yellow-200 text-yellow-800 text-sm rounded-full">
              Seasonal Item
            </span>
                    )}
                </div>
            </section>

            {/* Details */}
            <section className="p-10 lg:p-16 lg:m-12">
                {/* Breadcrumb */}
                <nav className="mb-8 text-sm">
                    <Link href="/menu" className="text-umami-charcoal hover:text-blue-800">
                        Menu
                    </Link>
                    <span className="mx-2 text-gray-400">/</span>
                    <Link
                        href="/menu/cheesecake"
                        className="text-umami-charcoal hover:text-blue-800"
                    >
                        {category.name}
                    </Link>
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-gray-600">{item.itemName}</span>
                </nav>
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Details Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-[0.3rem] text-umami-black tracking-[0.3rem] mb-4">{item.itemName}</h2>
                            <p className="text-umami-black text-glimp leading-relaxed font-glimp">
                                {item.itemDescription}
                            </p>
                        </div>

                        {/* Ingredients & Allergens */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-glimp font-500 tracking-[0.3rem] text-umami-charcoal mb-2">Ingredients</h3>
                                <p className="text-umami-black text-sm">{item.ingredients}</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-glimp font-500 tracking-[0.3rem] text-umami-charcoal mb-2">Allergens</h3>
                                <p className="text-umami-black text-sm">{item.allergens}</p>
                            </div>
                        </div>

                        {/* Quantity Options */}
                        <div>
                            <h3 className="text-xl font-glimp font-500 tracking-[0.3rem] text-umami-charcoal mb-4">Quantity & Pricing</h3>
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
                                href="/menu/cheesecake"
                                className="px-6 py-3 border border-umami-charcoal text-umami-charcoal rounded-lg font-semibold hover:bg-umami-white hover:shadow transition-colors"
                            >
                                Back to Category
                            </Link>
                        </div>
                    </div>

                    {/* Large Image */}
                    <div className="hidden lg:block rounded-lg overflow-hidden shadow-xl">
                        <Image
                            src={item.itemImages[0]}
                            alt={item.itemName}
                            width={500}
                            height={500}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}