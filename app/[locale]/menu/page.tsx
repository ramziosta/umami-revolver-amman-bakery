import {Card, CardContent} from '@/app/ui/card';
import Image from "next/image";
import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';

import {categories} from "@/app/data/categoryData"

import type { Metadata } from 'next'

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: locale === 'ar'
            ? 'القائمة | أومامي عمّان | كيك ميل كريب في عمّان'
            : 'Menu | Umami Amman | Mille Crêpe Cakes Amman',
        description: locale === 'ar'
            ? 'استكشف قائمة أومامي عمّان. كيك ميل كريب، كيكات مميزة، ومعجنات تُحضَّر حسب الطلب في عمّان، الأردن. يلزم الطلب المسبق بمهلة 48 إلى 72 ساعة.'
            : 'Explore the Umami Amman menu. Mille crêpe cakes, signature cakes, and pastries made to order in Amman, Jordan. Pre-order required with 48–72 hours notice.',
        alternates: { canonical: `https://umamiamman.com/${locale}/menu` },
    };
}

export default async function MenuPage({
    params,
}: {
    params: Promise<{ locale: 'en' | 'ar' }>;
}) {
    const { locale } = await params;
    const t = await getTranslations('menuPage');
    const tc = await getTranslations('common');

    return (
        <div className="min-h-screen bg-umami-linen">

            {/* ── HERO — Split Panel ── */}
            <section className="grid grid-cols-1 md:grid-cols-[58%_42%] min-h-[55vh]">

                {/* LEFT — Soft Linen panel */}
                <div className="bg-umami-taupe/30 px-8 md:px-16 lg:px-24 py-20 flex flex-col justify-center">
                    <div className="max-w-lg">

                        {/* Headline */}
                        <h1 className="font-display text-umami-carbon text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] mb-10">
                            {t('title')}
                        </h1>

                        {/* Divider */}
                        <div className="w-10 h-[1.5px] mb-8" style={{ backgroundColor: '#624203' }} />

                        {/* Body copy */}
                        <div className="font-body font-light text-[1rem] leading-[1.85] text-umami-dim-grey max-w-sm space-y-0">
                            <p>{t('body1')}</p>
                            <p className="mb-5">{t('body2')}</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT — Dusty Taupe panel */}
                <div
                    className="px-10 md:px-14 lg:px-16 py-20 flex flex-col justify-center"
                    style={{ backgroundColor: '#C9A96E' }}
                >
                    <div className="max-w-lg space-y-1">
                        <p className="font-display text-umami-linen text-2xl md:text-3xl lg:text-[2.2rem] leading-[1.35]">
                            {t('panelLine1')}
                        </p>
                        <p className="font-display text-umami-linen/80 text-2xl md:text-3xl lg:text-[2.2rem] leading-[1.35]">
                            {t('panelLine2')}
                        </p>
                        <p className="font-display text-umami-linen/80 text-2xl md:text-3xl lg:text-[2.2rem] leading-[1.35]">
                            {t('panelLine3')}
                        </p>
                        <p className="font-display text-umami-linen/80 text-2xl md:text-3xl lg:text-[2.2rem] leading-[1.35]">
                            {t('panelLine4')}
                        </p>
                    </div>
                </div>
            </section>

            {/* ── CATEGORY GRID ── */}
            <section className="px-6 md:px-12 lg:px-16 py-20 md:py-24">
                <div className="container mx-auto">

                    {/* Section label */}
                    <p
                        className="text-[0.75rem] font-structural tracking-[0.15em] uppercase mb-12"
                        style={{ color: '#C9A96E' }}
                    >
                        {tc('explore')}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {categories.map((category) => (
                            <Link href={`/menu/${category.id}`} key={category.id}>
                                <Card className="group cursor-pointer overflow-hidden border-0 shadow-none bg-transparent">
                                    <div className="relative h-72 md:h-80 overflow-hidden">
                                        <Image
                                            src={category.image}
                                            alt={category.name[locale]}
                                            width={900}
                                            height={600}
                                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                        <div className="absolute bottom-5 start-5 end-5">
                                            <p className="text-[0.7rem] font-structural tracking-[0.12em] uppercase text-white/60 mb-1.5">
                                                {tc('itemsCount', { count: category.items.length })}
                                            </p>
                                            <h3 className="font-display text-white text-xl md:text-2xl">
                                                {category.name[locale]}
                                            </h3>
                                        </div>
                                    </div>

                                    <CardContent className="px-1 pt-4 pb-2 bg-transparent">
                                        <p className="font-body font-light text-[0.9375rem] leading-[1.8] text-umami-dim-grey line-clamp-3">
                                            {category.description[locale]}
                                        </p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
