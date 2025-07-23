// app/menu/cheesecake/page.tsx
import {categories } from  '@/app/data/categoryData';
import CategoryDisplayPage from "@/app/components/categoryDisplayPage";
import CheesecakeDetails from "@/app/components/CheesecakeDetails";

export default function CheesecakePage() {
    const category = categories.find((cat) => cat.id === 'cheesecake')

    if (!category) {
        return <div>Category not found</div>
    }

    return (
        <div>

            <CategoryDisplayPage category={category} />
            <CheesecakeDetails />
        </div>

    )
}