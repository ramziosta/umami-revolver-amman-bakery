// app/menu/sweet-breads/page.tsx
import {categories} from '@/app/data/categoryData';
import CategoryDisplayPage from "@/app/components/categoryDisplayPage";

export default function SweetBreadsPage() {
    const category = categories.find((cat) => cat.id === 'sweet-breads')

    if (!category) {
        return <div>Category not found</div>
    }

    return (
        <CategoryDisplayPage category={category}/>
    )
}