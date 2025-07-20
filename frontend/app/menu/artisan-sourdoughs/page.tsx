// app/menu/artisan-sourdoughs/page.tsx
'use client'

import {categories} from '@/app/data/categoryData'
import CategoryDisplayPage from "@/app/components/categoryDisplayPage";

export default function ArtisanSourdoughsPage() {
    const category = categories.find((cat) => cat.id === 'artisan-sourdoughs')

    if (!category) {
        return <div>Category not found</div>
    }

    return (
        <CategoryDisplayPage category={category} />
    )
}