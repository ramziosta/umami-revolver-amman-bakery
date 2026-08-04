import {categories} from '@/app/data/categoryData'
import CategoryDisplayPage from "@/app/components/categoryDisplayPage";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Signature Cakes Amman | Umami Amman',
    description: 'Layered, tailored, and uniquely unforgettable. Brown Butter Carrot Cake, Chocolate Noir, Triple Chocolate Cake, Dulce and Banana, and more. Made to order in Amman, Jordan.',
    alternates: { canonical: 'https://umamiamman.com/menu/tiered-cakes' },
}
export default function TieredCakesPage() {
    const category = categories.find((cat) => cat.id === 'tiered-cakes')

    if (!category) {
        return <div>Category not found</div>
    }

    return (
        <CategoryDisplayPage category={category} />
    )
}
