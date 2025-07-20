// app/menu/cheesecake/page.tsx
import {categories } from  '@/app/data/categoryData';
import CategoryDisplayPage from "@/app/components/categoryDisplayPage";


export default function ChouxAuCraquelinPage() {
    const category = categories.find((cat) => cat.id === 'choux-au-craquelin')

    if (!category) {
        return <div>Category not found</div>
    }

    return (
        <CategoryDisplayPage category={category} />
    )
}