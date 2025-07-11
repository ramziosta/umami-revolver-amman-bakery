//categories/page.tsx
'use client'
import Link from 'next/link';
import Footer from '../components/Footer';
import {Card, CardContent} from '../ui/card';
import chocolateMousse from "@/app/assets/chocolate-mousse.jpeg";
import Image from "next/image";
import type { StaticImageData } from 'next/image';
import {categories} from "@/app/data/categoryData"

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
type CategoriesHeroProps = {
    title: string;
    subtitle: string;
    backgroundImage: StaticImageData;
};

const CategoriesHero = ({title, subtitle, backgroundImage}: CategoriesHeroProps) => (
    <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 parallax-bg">
            <Image
                src={backgroundImage}
                alt="Pound cake"
                fill
                sizes="100vh"
                className="object-cover"
                priority
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
            <h1 className="text-5xl font-goglast text-umami-cream tracking-[0.5rem] mb-4 font-bold">
                {title}
            </h1>
            <p className="max-w-6xl mx-auto text-umami-cream/90 font-glimp text-4xl leading-relaxed">
                {subtitle}
            </p>
        </div>
    </section>
);

const CategoryCard = ({ category }: { category: Category }) => (
    <Link href={`/categories/${category.id}`}>
        <Card
            className="group cursor-pointer elegant-shadow hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white">
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={category.image}
                    alt={category.name}
                    width={800}    // ✅ Required!
                    height={600}   // ✅ Required!
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-goglast font-bold mb-1 text-shadow tracking-[0.5rem]">
                        {category.name}
                    </h3>
                    <p className="text-sm text-umami-cream/90">
                        {category.itemCount} items
                    </p>
                </div>
            </div>

            <CardContent className="p-6 bg-white group-hover:bg-umami-cream transition-colors duration-300">
                <p className="text-umami-navy text-lg font-bold leading-relaxed">
                    {category.description}
                </p>
            </CardContent>
        </Card>
    </Link>
);

const CategoriesGrid = ({ categories }: { categories: Category[] }) => (
    <section className="py-16">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {categories.map((category) => (
                    <CategoryCard key={category.id} category={category} />
                ))}
            </div>
        </div>
    </section>
);

const Categories = () => {
    return (
        <div className="min-h-screen bg-umami-cream">

            <CategoriesHero
                title="What We Bake"
                subtitle="Our curated menu showcases exclusive flavors and small-batch creations you won’t find anywhere else — including seasonal specialties and refined takes on cult favorites."
                backgroundImage={chocolateMousse}
            />
            <CategoriesGrid categories={categories}/>
            <Footer/>
        </div>
    );
};

export default Categories;
