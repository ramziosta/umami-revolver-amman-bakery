import {categories} from '@/app/data/categoryData'
import CategoryDisplayPage from "@/app/components/categoryDisplayPage";
import {notFound} from 'next/navigation';
import type { Metadata } from 'next'

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: locale === 'ar'
            ? 'كيك ميل كريب في عمّان | أومامي عمّان'
            : 'Mille Crêpe Cakes Amman | Umami Amman',
        description: locale === 'ar'
            ? 'كيك ميل كريب مصنوع يدويًا في عمّان، الأردن. عشرون طبقة رقيقة كورق الكريب، وكريم دبلومات محضّر منزليًا. كريم بروليه، تيراميسو، سوكسيه برالينيه، زهر البرتقال والفستق، الفراولة والليتشي والكركديه. يُحضَّر حسب الطلب.'
            : 'Handmade mille crêpe cakes in Amman, Jordan. Twenty paper-thin crêpe layers, house-made diplomat cream. Crème Brûlée, Tiramisu, Succès Praline, Orange Blossom & Pistachio, Strawberry Lychee & Hibiscus. Made to order.',
        alternates: { canonical: `https://umamiamman.com/${locale}/menu/mille-crepe-cakes` },
    };
}

export default async function MilleCrepeCakesPage({
    params,
}: {
    params: Promise<{ locale: 'en' | 'ar' }>;
}) {
    const { locale } = await params;
    const category = categories.find((cat) => cat.id === 'mille-crepe-cakes')

    if (!category) {
        notFound();
    }

    return (
        <CategoryDisplayPage category={category} locale={locale} />
    )
}
