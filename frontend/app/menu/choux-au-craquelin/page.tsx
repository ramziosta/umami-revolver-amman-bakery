// app/menu/cheesecake/page.tsx
import {categories } from  '@/app/data/categoryData';
import Link from 'next/link';
import Image from 'next/image';
import {Card, CardContent} from "@/app/ui/card";


export default function ChouxAuCraquelinPage() {
    const category = categories.find((cat) => cat.id === 'choux-au-craquelin')

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
            <section className="p-16 m-12">
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
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {category.items.map((item, index) => (
                            <Link key={`${item.id}-${index}`} href={`/menu/choux-au-craquelin/${item.id}`}>
                            <Card
                                className="group cursor-pointer elegant-shadow hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white"
                            >
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
                                        <h3 className="text-xl font-goglast mb-1 text-shadow tracking-[0.5rem]">
                                            {item.itemName}
                                        </h3>
                                        {item.seasonal && (
                                            <span className="px-2 py-1 bg-yellow-200 text-yellow-800 text-xs rounded-full">
                        Seasonal
                      </span>
                                        )}
                                    </div>
                                </div>

                                <CardContent className="p-6 bg-white group-hover:bg-umami-white transition-colors duration-300">
                                    <p className="text-umami-black leading-relaxed mb-4 line-clamp-2">
                                        {item.itemDescription}
                                    </p>
                                 <span
                                     className="inline-block w-full text-center bg-umami-charcoal text-umami-white py-2 px-4 rounded hover:bg-umami-black transition-colors"
                                 >
                                        View Details
                                  </span>

                                </CardContent>
                            </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}