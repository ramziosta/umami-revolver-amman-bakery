// app/menu/tiramisu/page.tsx
import {categories } from  '@/app/data/categoryData';
import CategoryDisplayPage from "@/app/components/categoryDisplayPage";


export default function TiramisuPage() {
    const category = categories.find((cat) => cat.id === 'tiramisu')
    if (!category) {
        return <div>Category not found</div>
    }
    return (
        <CategoryDisplayPage category={category} />
    )
}