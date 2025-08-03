// app/menu/rustic-breads/[itemId]/page.tsx
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
    // Fix 1: More explicit unwrapping with error handling
    const resolvedParams = use(params);
    const { itemId } = resolvedParams;

    // Fix 2: Early return pattern with better error handling
    const category = categories.find((cat) => cat.id === 'rustic-breads');
    if (!category) {
        notFound();
        return null; // TypeScript safety
    }

    const item = category.items.find((item) => item.id === itemId);
    if (!item) {
        notFound();
        return null; // TypeScript safety
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