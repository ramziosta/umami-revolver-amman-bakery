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
            ? 'الكيكات المميزة في عمّان | أومامي عمّان'
            : 'Signature Cakes Amman | Umami Amman',
        description: locale === 'ar'
            ? 'طبقات مصممة بعناية، لا تُنسى بتفردها. كيك الجزر والبيكان بالزبدة المحمّرة، شوكولاتة نوار، كيك الشوكولاتة الثلاثية، دولسي والموز، وأكثر. يُحضَّر حسب الطلب في عمّان، الأردن.'
            : 'Layered, tailored, and uniquely unforgettable. Brown Butter Carrot Cake, Chocolate Noir, Triple Chocolate Cake, Dulce and Banana, and more. Made to order in Amman, Jordan.',
        alternates: { canonical: `https://umamiamman.com/${locale}/menu/tiered-cakes` },
    };
}

export default async function TieredCakesPage({
    params,
}: {
    params: Promise<{ locale: 'en' | 'ar' }>;
}) {
    const { locale } = await params;
    const category = categories.find((cat) => cat.id === 'tiered-cakes')

    if (!category) {
        notFound();
    }

    return (
        <CategoryDisplayPage category={category} locale={locale} />
    )
}
