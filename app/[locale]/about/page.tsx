import Image from "next/image";
import why from '@/app/assets/why.png'
import {getTranslations} from 'next-intl/server';
import type { Metadata } from 'next'

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'about' });
    return {
        title: t('metaTitle'),
        description: t('metaDescription'),
        alternates: { canonical: `https://umamiamman.com/${locale}/about` },
    };
}

export default async function AboutPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'about' });

    return (
        <div className="min-h-screen bg-umami-linen">

            {/* ── HERO — "Thirty years. One decision." ── */}
            <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
                <div className="absolute inset-0">
                    <Image src={why} alt={t('eyebrow')} fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent rtl:bg-gradient-to-l" />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-16 max-w-4xl">
                    {/* Eyebrow */}
                    <p
                        className="text-[0.52rem] font-structural tracking-[0.4em] uppercase mb-8"
                        style={{ color: '#C9A96E' }}
                    >
                        {t('eyebrow')}
                    </p>

                    {/* Headline */}
                    <h1 className="font-display text-umami-linen text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] mb-2">
                        {t('heroTitle')}
                    </h1>
                    <p
                        className="font-display italic text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] mb-10"
                        style={{ color: '#C9A96E' }}
                    >
                        {t('heroTitleItalic')}
                    </p>

                    {/* Sub-copy */}
                    <p className="font-body font-light text-sm md:text-base text-umami-alabaster/80 max-w-md leading-relaxed">
                        {t('heroSub')}
                    </p>
                </div>
            </section>


            {/* ── THE CHEF + NEW YORK / THE RETURN / THE STANDARD ── */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                        {/* LEFT COLUMN — The Chef */}
                        <div>
                            {/* Section Label */}
                            <p
                                className="text-[0.52rem] font-structural tracking-[0.4em] uppercase mb-8"
                                style={{ color: '#C9A96E' }}
                            >
                                {t('chefEyebrow')}
                            </p>

                            {/* Display Heading */}
                            <h2 className="font-display text-umami-carbon text-3xl md:text-4xl lg:text-[2.8rem] leading-[1.1] mb-4">
                                {t('chefHeading')}
                            </h2>
                            <p
                                className="font-display italic text-3xl md:text-4xl lg:text-[2.8rem] leading-[1.1] mb-10"
                                style={{ color: '#C9A96E' }}
                            >
                                {t('chefHeadingItalic')}
                            </p>

                            {/* Divider */}
                            <div
                                className="w-10 h-[1.5px] mb-8"
                                style={{ backgroundColor: '#624203' }}
                            />

                            {/* Pull Quote */}
                            <p className="font-display italic text-umami-dim-grey text-lg md:text-xl leading-relaxed max-w-sm">
                                {t('chefQuote')}
                            </p>
                        </div>


                        {/* RIGHT COLUMN — Story Sections */}
                        <div className="space-y-0">

                            {/* ── NEW YORK ── */}
                            <div className="py-10 border-t border-umami-alabaster">
                                <p
                                    className="text-[0.52rem] font-structural tracking-[0.4em] uppercase mb-6"
                                    style={{ color: '#C9A96E' }}
                                >
                                    {t('newYorkEyebrow')}
                                </p>
                                <p className="font-display text-umami-carbon text-lg md:text-xl leading-[1.6] mb-4">
                                    {t('newYorkLead')}
                                </p>
                                <p className="font-body font-light text-[0.82rem] leading-[1.85] text-umami-dim-grey">
                                    {t('newYorkBody')}
                                </p>
                            </div>

                            {/* ── THE RETURN ── */}
                            <div className="py-10 border-t border-umami-alabaster">
                                <p
                                    className="text-[0.52rem] font-structural tracking-[0.4em] uppercase mb-6"
                                    style={{ color: '#C9A96E' }}
                                >
                                    {t('returnEyebrow')}
                                </p>
                                <p className="font-display text-umami-carbon text-lg md:text-xl leading-[1.6] mb-4">
                                    {t('returnLead')}
                                </p>
                                <p className="font-body font-light text-[0.82rem] leading-[1.85] text-umami-dim-grey">
                                    {t('returnBody')}
                                </p>
                            </div>

                            {/* ── THE STANDARD ── */}
                            <div className="py-10 border-t border-umami-alabaster">
                                <p
                                    className="text-[0.52rem] font-structural tracking-[0.4em] uppercase mb-6"
                                    style={{ color: '#C9A96E' }}
                                >
                                    {t('standardEyebrow')}
                                </p>

                                <div className="mb-6">
                                    <p className="font-display text-umami-carbon text-lg md:text-xl leading-[1.6]">
                                        {t('standardLine1')}
                                    </p>
                                    <p className="font-display text-umami-carbon text-lg md:text-xl leading-[1.6]">
                                        {t('standardLine2')}
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <p className="font-display text-umami-carbon text-lg md:text-xl leading-[1.6]">
                                        {t('standardLine3')}
                                    </p>
                                    <p className="font-display text-umami-carbon text-lg md:text-xl leading-[1.6]">
                                        {t('standardLine4')}
                                    </p>
                                    <p className="font-display text-umami-carbon text-lg md:text-xl leading-[1.6]">
                                        {t('standardLine5')}
                                    </p>
                                </div>

                                <p className="font-body font-light text-[0.82rem] leading-[1.85] text-umami-dim-grey">
                                    {t('standardBody1')}
                                </p>

                                <p className="font-body font-light text-[0.82rem] leading-[1.85] text-umami-dim-grey mb-2">
                                    {t('standardBody2')}
                                </p>

                                {/* Closing Mark */}
                                <p
                                    className="text-[1rem] font-structural tracking-[0.4em] uppercase"
                                    style={{ color: '#C9A96E' }}
                                >
                                    {t('closingMark')}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};
