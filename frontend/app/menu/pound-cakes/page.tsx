// app/menu/pound-cakes/page.tsx
import {categories } from  '@/app/data/categoryData';
import CategoryDisplayPage from "@/app/components/categoryDisplayPage";
export default function PoundCakesPage() {
    const category = categories.find((cat) => cat.id === 'pound-cakes')

    if (!category) {
        return <div>Category not found</div>
    }

    return (
        <CategoryDisplayPage category={category} />
    )
}