// app/menu/mille-crepe-cakes/page.tsx
import {categories} from '@/app/data/categoryData';
import CategoryDisplayPage from "@/app/components/categoryDisplayPage";

export default function MilleCrepeCakesPage() {
    const category = categories.find((cat) => cat.id === 'mille-crepe-cakes')

    if (!category) {
        return <div>Category not found</div>
    }
    return (
        <CategoryDisplayPage category={category} />
    )
}