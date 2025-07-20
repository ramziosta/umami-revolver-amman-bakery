// app/menu/bamboloni/page.tsx
import {categories} from "@/app/data/categoryData";

import CategoryDisplayPage from "@/app/components/categoryDisplayPage";
export default function BamboloniPage() {
    const category = categories.find((cat) => cat.id === 'bamboloni')

    if (!category) {
        return <div>Category not found</div>
    }

    return (
        <CategoryDisplayPage category={category} />
    )
}