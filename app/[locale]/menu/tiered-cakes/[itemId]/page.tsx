'use client'
import { categories } from '@/app/data/categoryData'
import { notFound } from 'next/navigation'
import ItemPageDisplay from '@/app/components/ItemPageDisplay'
import {use, useState} from "react";

interface ItemPageProps {
    params: Promise<{
        locale: 'en' | 'ar';
        itemId: string;
    }>;
}
export default function ItemPage({ params }: ItemPageProps) {
    const { locale, itemId } = use(params);

    const category = categories.find((cat) => cat.id === 'tiered-cakes')
    if (!category) {
        notFound()
    }

    const item = category.items.find((item) => item.id === itemId)
    if (!item) {
        notFound()
    }
    const [selectedImage, setSelectedImage] = useState(item.itemImages[0]);

    return (
        <ItemPageDisplay
            item={item}
            category={category}
            locale={locale}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
        />
    )
}
