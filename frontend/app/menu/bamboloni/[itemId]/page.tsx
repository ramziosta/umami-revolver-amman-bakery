// app/menu/bamboloni/[itemId]/page.tsx
'use client';

import { categories } from '@/app/data/categoryData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { use, useState } from 'react';
import ItemPageDisplay from "@/app/components/ItemPageDisplay";

interface ItemPageProps {
    params: Promise<{
        itemId: string;
    }>;
}

export default function ItemPage({ params }: ItemPageProps) {
    const { itemId } = use(params);

    const category = categories.find((cat) => cat.id === 'bamboloni');
    if (!category) {
        notFound();
    }

    const item = category.items.find((item) => item.id === itemId);
    if (!item) {
        notFound();
    }

    const [selectedImage, setSelectedImage] = useState(item.itemImages[0]);
    return (
        <ItemPageDisplay
            item={item}
            category={category}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
        />
    );
}