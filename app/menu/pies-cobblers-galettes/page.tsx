// app/menu/pies-cobblers-galettes/page.tsx
import {categories } from  '@/app/data/categoryData';
import CategoryDisplayPage from "@/app/components/categoryDisplayPage";

export default function PiesCobblersGalettesPage() {
    const category = categories.find((cat) => cat.id === 'pies-cobblers-galettes')

    if (!category) {
        return <div>Category not found</div>
    }

    return (
        <CategoryDisplayPage category={category} />
    )
}