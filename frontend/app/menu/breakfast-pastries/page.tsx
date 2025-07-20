// app/menu/breakfast-pastries/page.tsx
import {categories } from  '@/app/data/categoryData';
import CategoryDisplayPage from "@/app/components/categoryDisplayPage";


export default function BreakfastPastriesPage() {
    const category = categories.find((cat) => cat.id === 'breakfast-pastries')

    if (!category) {
        return <div>Category not found</div>
    }

    return (
        <CategoryDisplayPage category={category} />
    )
}