// app/menu/rustic-breads/page.tsx
import {categories} from '@/app/data/categoryData';
import CategoryDisplayPage from "@/app/components/categoryDisplayPage";

export default function RusticBreadsPage() {
    const category = categories.find((cat) => cat.id === 'rustic-breads')
    if (!category) {
        return <div>Category not found</div>
    }
    return (
        <CategoryDisplayPage category={category}/>
    )
}