// app/menu/brunch/page.tsx
import {categories} from '@/app/data/categoryData';
import CategoryDisplayPage from "@/app/components/categoryDisplayPage";


export default function BrunchPage() {
    const category = categories.find((cat) => cat.id === 'brunch')

    if (!category) {
        return <div>Category not found</div>
    }

    return (
        <CategoryDisplayPage category={category} />
    )
}