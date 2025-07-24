import Image from "next/image";
import Link from "next/link";
import {Card, CardContent} from "@/app/ui/card";


export default function CategoryDisplayPage({ category }: { category: any }) {
    return (
        <div className="min-h-screen">
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
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-blanka text-umami-nube tracking-[0.1em] mb-6">
                        {category.name}
                    </h1>
                    <p className="max-w-2xl mx-auto font-ppneuemontreal text-umami-nube text-lg md:text-xl xl:text-3xl tracking-[0.05em] leading-relaxed">
                        {category.description}
                    </p>
                </div>
            </section>

            {/* Items Grid */}
            <section className="p-1 lg:p-16 sm:mt-6 md:mt-6 lg:m-8">
                <nav className="mb-8 mt-8 md:mt-1 text-sm flex flex-row">
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
                            {category.items.map((item: any, index: any) => (
                                <Link key={`${item.id}-${index}`} href={`/menu/${category.id}/${item.id}`}>
                                    <Card
                                        className="group cursor-pointer shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden border-0 ">
                                        <div className="relative h-80 sm:h-96 lg:h-72 xl:h-80 overflow-hidden">
                                            <Image
                                                src={item.itemImages[0]}
                                                alt={item.itemName}
                                                width={800}
                                                height={600}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div
                                                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                                <h3 className="text-2xl sm:text-3xl lg:text-xl xl:text-2xl font-blanka mb-2 text-shadow tracking-[0.3rem] sm:tracking-[0.5rem]">
                                                    {item.itemName}
                                                </h3>
                                                {item.seasonal && (
                                                    <span
                                                        className="inline-block px-3 py-1.5 bg-umami-white text-umami-black text-sm font-medium rounded-full">
                                                    Seasonal
                                                </span>
                                                )}
                                            </div>
                                        </div>

                                        <CardContent
                                            className="p-6 sm:p-8 lg:p-6 xl:p-8  group-hover:shadow-md transition-colors duration-300">
                                            <p className="text-base sm:text-lg lg:text-base font-ppneuemontreal text-umami-black leading-relaxed mb-6 sm:mb-8 lg:mb-6 line-clamp-3">
                                                {item.itemDescription}
                                            </p>
                                            
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}