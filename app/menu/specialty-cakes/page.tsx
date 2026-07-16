
import {categories} from '@/app/data/categoryData';
import CategoryDisplayPage from "@/app/components/categoryDisplayPage";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Mille Crêpe Cakes Amman | Umami Amman',
    description: 'Layered, tailored, and uniquely unforgettable. Brown Butter Carrot Cake. Chocolate Noir. White Velvet Cake. Banana Cake with Dulce de Leche. Made to order.',
    alternates: { canonical: 'https://umamiamman.com/menu/tiered-cakes' },
}
export default function SpecialtyCakesPage() {
    const category = categories.find((cat) => cat.id === 'tiered-cakes')
    if (!category) {
        return <div>Category not found</div>
    }
    return (
        <CategoryDisplayPage category={category}/>
    )
}