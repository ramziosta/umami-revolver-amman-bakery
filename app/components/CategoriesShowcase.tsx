import Link from "next/link";
import {Card, CardContent} from '../ui/card';
import chocolateMousse from '../assets/chocolate-mousse.jpeg';
import milleCrepeCake from "@/app/assets/mille-crepe-cake.jpg";
import Image from 'next/image';
import {StaticImageData} from 'next/image';

type ShowcaseCategory = {
    id: string;
    name: string;
    image: StaticImageData | string;
    description: string;
};

const categories: ShowcaseCategory[] = [
    {
        id: 'mille-crepe-cakes',
        name: 'Mille Crêpe Cakes',
        image: milleCrepeCake,
        description: 'Twenty paper-thin crêpe layers, filled with house-made diplomat creams. Each cake assembled to order.',
    },
];

const CategoriesShowcase = () => {
    return (
        <section className="py-24 md:py-32 bg-umami-linen">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                {/* Section Header */}
                <div className="mb-16 max-w-2xl">
                    <p className="umami-label mb-6">
                        What We Make
                    </p>
                    <h2 className="font-display text-umami-carbon text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-4">
                        A small menu,
                    </h2>
                    <p className="font-display italic text-3xl md:text-5xl lg:text-6xl leading-[1.05] text-umami-olive-bark mb-8">
                        built with care.
                    </p>
                    <p className="font-body font-light text-[0.85rem] leading-[1.85] text-umami-dim-grey max-w-lg">
                        Every item earns its place. No redundancy in flavors. Controlled sweetness. Intentional textures.
                    </p>
                </div>

                {/* Category Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {categories.map((category) => (
                        <Link key={category.id} href={`/menu/${category.id}`}>
                            <Card className="group cursor-pointer overflow-hidden border-0 shadow-none bg-transparent">
                                <div className="relative h-72 md:h-80 lg:h-96 overflow-hidden">
                                    <Image
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <p className="text-[0.5rem] font-structural tracking-[0.35em] uppercase text-white/70 mb-2">
                                            Explore
                                        </p>
                                        <h3 className="font-display text-white text-2xl md:text-3xl">
                                            {category.name}
                                        </h3>
                                    </div>
                                </div>

                                <CardContent className="px-0 pt-5 pb-2 bg-transparent">
                                    <p className="font-body font-light text-[0.82rem] leading-[1.8] text-umami-dim-grey">
                                        {category.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoriesShowcase;