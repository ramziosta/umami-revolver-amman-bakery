// app/menu/artisan-sourdoughs/page.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/app/ui/card'
import { categories } from '@/app/data/categoryData'
import { MenuItem } from '@/app/types/menu'

export default function ArtisanSourdoughsPage() {
    const category = categories.find((cat) => cat.id === 'artisan-sourdoughs')

    if (!category) {
        return <div>Category not found</div>
    }

    return (
        <div className="min-h-screen bg-umami-white">
            {/* Hero */}
            <section className="relative h-[60vh] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        sizes="100vh"
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
                    <h1 className="text-5xl font-goglast text-umami-white tracking-[0.5rem] mb-4">
                        {category.name}
                    </h1>
                    <p className="max-w-4xl mx-auto text-umami-white font-glimp font-[100] text-2xl leading-relaxed">
                        {category.description}
                    </p>
                </div>
            </section>

            {/* Items Grid */}
            <section className="p-10 lg:p-16 lg:m-12">
                <nav className="mb-8 text-sm flex flex-row">
                    <Link href="/menu" className="text-umami-charcoal hover:text-blue-800">
                        Menu
                    </Link>
                    <span className="mx-2 text-gray-400">/</span>
                    <p className="text-umami-charcoal "
                    >
                        {category.name}
                    </p>
                </nav>
                <div className="w-full px-2 sm:px-6 lg:px-8">
                    <div className="max-w-none mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                            {category.items.map((item, index) => (
                                <Link key={`${item.id}-${index}`} href={`/menu/artisan-sourdoughs/${item.id}`}>
                                    <Card className="group cursor-pointer elegant-shadow hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white">
                                        <div className="relative h-80 sm:h-96 lg:h-72 xl:h-80 overflow-hidden">
                                            <Image
                                                src={item.itemImages[0]}
                                                alt={item.itemName}
                                                width={800}
                                                height={600}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                                <h3 className="text-2xl sm:text-3xl lg:text-xl xl:text-2xl font-goglast mb-2 text-shadow tracking-[0.3rem] sm:tracking-[0.5rem]">
                                                    {item.itemName}
                                                </h3>
                                                {item.seasonal && (
                                                    <span className="inline-block px-3 py-1.5 bg-yellow-200 text-yellow-800 text-sm font-medium rounded-full">
                                        Seasonal
                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <CardContent className="p-6 sm:p-8 lg:p-6 xl:p-8 bg-white group-hover:bg-umami-white transition-colors duration-300">
                                            <p className="text-base sm:text-lg lg:text-base text-umami-black leading-relaxed mb-6 sm:mb-8 lg:mb-6 line-clamp-3">
                                                {item.itemDescription}
                                            </p>

                                            <span className="inline-block w-full text-center bg-umami-charcoal text-umami-white py-4 sm:py-5 lg:py-3 px-6 rounded-lg text-base sm:text-lg lg:text-base font-semibold hover:bg-umami-black transform hover:scale-[1.02] transition-all duration-200">
                                View Details
                            </span>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}