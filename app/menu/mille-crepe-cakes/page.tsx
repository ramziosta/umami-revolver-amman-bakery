import {categories} from '@/app/data/categoryData'
import CategoryDisplayPage from "@/app/components/categoryDisplayPage";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Mille Crêpe Cakes Amman | Umami Amman',
    description: 'Handmade mille crêpe cakes in Amman, Jordan. Twenty paper-thin crêpe layers, house-made diplomat cream. Crème Brûlée, Tiramisu, Succès Praline, Orange Blossom & Pistachio, Strawberry Lychee & Hibiscus. Made to order.',
    alternates: { canonical: 'https://umamiamman.com/menu/mille-crepe-cakes' },
}
export default function ArtisanSourdoughsPage() {
    const category = categories.find((cat) => cat.id === 'mille-crepe-cakes')

    if (!category) {
        return <div>Category not found</div>
    }

    return (
        <CategoryDisplayPage category={category} />
    )
}