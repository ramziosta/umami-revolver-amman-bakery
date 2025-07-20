// app/menu/seasonal/page.tsx
import {categories} from '@/app/data/categoryData';
import CategoryDisplayPage from "@/app/components/categoryDisplayPage";

export default function SpecialtyCakesPage() {
    const category = categories.find((cat) => cat.id === 'specialty-cakes')
    if (!category) {
        return <div>Category not found</div>
    }
    return (
        <CategoryDisplayPage category={category}/>
    )
}