// app/menu/cookies-bars-brownies/page.tsx
import {categories} from '@/app/data/categoryData';
import CategoryDisplayPage from "@/app/components/categoryDisplayPage";


export default function ChocolatesBarsBrowniesPage() {
    const category = categories.find((cat) => cat.id === 'cookies-bars-brownies')

    if (!category) {
        return <div>Category not found</div>
    }

    return (
        <CategoryDisplayPage category={category} />
    )
}