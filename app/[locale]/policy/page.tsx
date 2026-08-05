import Image from "next/image";
import policyHero from '@/app/assets/policy.jpg'
import {getTranslations} from 'next-intl/server';
import type { Metadata } from 'next'

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'policy' });
    return {
        title: t('metaTitle'),
        alternates: { canonical: `https://umamiamman.com/${locale}/policy` },
    };
}

export default async function PolicyPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'policy' });

    return (
        <div className="min-h-screen bg-umami-linen">

            {/* ── HERO ── */}
            <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
                <div className="absolute inset-0">
                    <Image src={policyHero} alt={t('eyebrow')} fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent rtl:bg-gradient-to-l" />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-16 max-w-4xl">
                    <p className="text-[0.75rem] font-structural tracking-[0.15em] uppercase mb-8" style={{ color: '#C9A96E' }}>
                        {t('eyebrow')}
                    </p>

                    <h1 className="font-display text-umami-linen text-5xl sm:text-6xl md:text-7xl leading-[0.95] mb-4">
                        {t('heroTitle')}
                    </h1>
                    <p className="font-display italic text-4xl sm:text-6xl md:text-7xl leading-[0.95] mb-10" style={{ color: '#C9A96E' }}>
                        {t('heroTitleItalic')}
                    </p>

                    <p className="font-body font-light text-sm md:text-base text-umami-alabaster/80 max-w-md leading-relaxed">
                        {t('heroSub')}
                    </p>
                </div>
            </section>


            {/* ── POLICY CONTENT ── */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-5xl space-y-20">

                    {/* INTRO */}
                    <div>
                        <p className="font-body text-umami-dim-grey leading-[1.9] text-sm md:text-base">
                            {t('intro')}
                        </p>
                    </div>


                    {/* ── ORDER POLICY ── */}
                    <div>
                        <p className="text-[0.75rem] font-structural tracking-[0.15em] uppercase mb-6" style={{ color: '#C9A96E' }}>
                            {t('orderPolicy.title')}
                        </p>

                        <div className="space-y-4 font-body text-sm text-umami-dim-grey leading-[1.9]">
                            <p>{t('orderPolicy.p1')}</p>
                            <p>{t('orderPolicy.p2')}</p>
                            <p>{t('orderPolicy.p3')}</p>

                            <div className="pt-4">
                                <p className="font-display text-umami-carbon">{t('orderPolicy.cancellationsTitle')}</p>
                                <p>{t('orderPolicy.cancel1')}</p>
                                <p>{t('orderPolicy.cancel2')}</p>
                                <p>{t('orderPolicy.cancel3')}</p>
                            </div>

                            <div className="pt-4">
                                <p className="font-display text-umami-carbon">{t('orderPolicy.modificationsTitle')}</p>
                                <p>{t('orderPolicy.modifications')}</p>
                            </div>

                            <div className="pt-4">
                                <p className="font-display text-umami-carbon">{t('orderPolicy.qualityTitle')}</p>
                                <p>{t('orderPolicy.quality')}</p>
                            </div>
                        </div>
                    </div>


                    {/* ── PRIVACY POLICY ── */}
                    <div>
                        <p className="text-[0.75rem] font-structural tracking-[0.15em] uppercase mb-6" style={{ color: '#C9A96E' }}>
                            {t('privacyPolicy.title')}
                        </p>

                        <div className="space-y-4 font-body text-sm text-umami-dim-grey leading-[1.9]">
                            <p>{t('privacyPolicy.p1')}</p>
                            <p>{t('privacyPolicy.p2')}</p>
                            <p>{t('privacyPolicy.p3')}</p>
                            <p>{t('privacyPolicy.p4')}</p>
                            <p>{t('privacyPolicy.p5')}</p>
                        </div>
                    </div>


                    {/* ── ALLERGEN POLICY ── */}
                    <div>
                        <p className="text-[0.75rem] font-structural tracking-[0.15em] uppercase mb-6" style={{ color: '#C9A96E' }}>
                            {t('allergenPolicy.title')}
                        </p>

                        <div className="space-y-4 font-body text-sm text-umami-dim-grey leading-[1.9]">
                            <p>{t('allergenPolicy.p1')}</p>
                            <p>{t('allergenPolicy.p2')}</p>
                            <p>{t('allergenPolicy.p3')}</p>
                            <p>{t('allergenPolicy.p4')}</p>
                            <p>{t('allergenPolicy.p5')}</p>
                        </div>
                    </div>


                    {/* ── TERMS ── */}
                    <div>
                        <p className="text-[0.75rem] font-structural tracking-[0.15em] uppercase mb-6" style={{ color: '#C9A96E' }}>
                            {t('terms.title')}
                        </p>

                        <div className="space-y-4 font-body text-sm text-umami-dim-grey leading-[1.9]">
                            <p>{t('terms.p1')}</p>
                            <p>{t('terms.p2')}</p>
                            <p>{t('terms.p3')}</p>
                            <p>{t('terms.p4')}</p>
                        </div>
                    </div>


                    {/* ── DELIVERY ── */}
                    <div>
                        <p className="text-[0.75rem] font-structural tracking-[0.15em] uppercase mb-6" style={{ color: '#C9A96E' }}>
                            {t('delivery.title')}
                        </p>

                        <div className="space-y-4 font-body text-sm text-umami-dim-grey leading-[1.9]">
                            <p>{t('delivery.p1')}</p>
                            <p>{t('delivery.p2')}</p>
                            <p>{t('delivery.p3')}</p>
                        </div>
                        <br />
                        <p className="text-[0.75rem] font-structural tracking-[0.15em] uppercase mb-6" style={{ color: '#C9A96E' }}>{t('delivery.handoverTitle')}</p>
                        <div className="space-y-4 font-body text-sm text-umami-dim-grey leading-[1.9]">
                            <p>{t('delivery.handover1')}</p>
                            <p>{t('delivery.handover2')}</p>
                            <p>{t('delivery.handover3')}</p>
                        </div>


                    </div>


                    {/* ── CLOSING ── */}
                    <div className="pt-10 border-t border-umami-alabaster">
                        <p className="font-body text-sm text-umami-dim-grey leading-[1.9] mb-4">
                            {t('closing.p1')}
                        </p>

                        <p className="font-display italic text-umami-carbon">
                            {t('closing.p2')}
                        </p>

                        <p className="text-[0.875rem] font-structural tracking-[0.15em] uppercase mt-4" style={{ color: '#C9A96E' }}>
                            {t('closing.mark')}
                        </p>
                    </div>

                </div>
            </section>

        </div>
    );
}
