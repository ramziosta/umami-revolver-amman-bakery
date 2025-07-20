import {categories} from "@/app/data/categoryData";
import CategoryDisplayPage from "@/app/components/categoryDisplayPage";

interface ItemPageProps {
    params: {
        itemId: string;
    };
}
export default function SeasonalItemsPage() {
    const category = categories.find((cat) => cat.id === 'seasonal')

    if (!category) {
        return <div>Category not found</div>
    }

    return (
        <CategoryDisplayPage category={category} />
    )
}