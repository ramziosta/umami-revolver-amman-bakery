'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

import milleCrepeCake from "@/app/assets/Whole Cake Heads-on.jpg";
import tiramisuCrepe from "@/app/assets/tiramisu.jpg";
import succes from "@/app/assets/succes.jpg";
import ajloun from "@/app/assets/OrangeBlossom.jpg";
import tartTatin from "@/app/assets/AppleTarteTatin.jpg";

export const HeroSection = () => {
    const t = useTranslations('home');
    const tc = useTranslations('common');
    const locale = useLocale();

    const slides = [
        {
            image: milleCrepeCake,
            key: "cremeBrulee",
            href: "/menu/mille-crepe-cakes/creme-brulee-crepe",
        },
        {
            image: tiramisuCrepe,
            key: "tiramisu",
            href: "/menu/mille-crepe-cakes/tiramisu-crepe",
        },
        {
            image: succes,
            key: "succes",
            href: "/menu/mille-crepe-cakes/succes-praline-crepe",
        },
        {
            image: tartTatin,
            key: "tarteTatin",
            href: "/menu/mille-crepe-cakes/apple-tarte-tatin-crepe",
        },
        {
            image: ajloun,
            key: "orangeBlossom",
            href: "/menu/mille-crepe-cakes/orange-blossom-crepe",
        },
    ] as const;

    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [current]);

    return (
        <section className="grid grid-cols-1 lg:grid-cols-[58%_42%] lg:min-h-[max(600px,calc(100vh-7.5rem))] bg-umami-linen">

            {/* ── IMAGE — the cake, unobstructed ── */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto overflow-hidden">
                {slides.map((s, index) => (
                    <Image
                        key={index}
                        src={s.image}
                        alt={t(`slides.${s.key}.cakeName`)}
                        fill
                        sizes="(min-width: 1024px) 58vw, 100vw"
                        priority={index === 0}
                        className={`object-cover transition-opacity duration-1000 ${
                            index === current ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                ))}

                {/* Prev / Next */}
                <button
                    onClick={prevSlide}
                    aria-label="Previous"
                    className="absolute start-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-black/35 hover:bg-black/55 text-white transition-colors duration-300"
                >
                    {locale === 'ar' ? '→' : '←'}
                </button>
                <button
                    onClick={nextSlide}
                    aria-label="Next"
                    className="absolute end-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-black/35 hover:bg-black/55 text-white transition-colors duration-300"
                >
                    {locale === 'ar' ? '←' : '→'}
                </button>

                {/* Slide dots */}
                <div className="absolute bottom-4 inset-x-0 z-20 flex justify-center gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            aria-label={`${index + 1} / ${slides.length}`}
                            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                                index === current ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* ── TEXT PANEL ── all slides share one grid cell so the panel height never jumps */}
            <div className="grid content-center px-6 py-12 md:px-12 lg:px-12 xl:px-14 lg:py-16 bg-umami-taupe/15">
                {slides.map((s, index) => {
                    const active = index === current;
                    const Heading = active ? 'h1' : 'div';
                    return (
                        <div
                            key={s.key}
                            aria-hidden={!active}
                            className={`col-start-1 row-start-1 transition-[opacity,visibility] duration-500 ${
                                active ? 'opacity-100 visible' : 'opacity-0 invisible'
                            }`}
                        >
                            {/* Eyebrow */}
                            <p className="text-[0.75rem] font-structural tracking-[0.15em] uppercase text-umami-dim-grey mb-6">
                                {t('eyebrow')}
                            </p>

                            {/* Headline Top */}
                            <Heading className="font-display text-umami-carbon text-4xl md:text-5xl leading-[1.05] mb-2">
                                {t(`slides.${s.key}.headlineTop`)}
                            </Heading>

                            {/* Headline Bottom */}
                            <p className="font-display italic text-umami-olive-bark text-3xl md:text-4xl leading-[1.1] mb-8">
                                {t(`slides.${s.key}.headlineBottom`)}
                            </p>

                            {/* Divider */}
                            <div
                                className="w-10 h-[1.5px] mb-6"
                                style={{ backgroundColor: '#C9A96E' }}
                            />

                            {/* Description */}
                            <p className="font-body font-light text-umami-dim-grey text-base md:text-lg max-w-md leading-relaxed mb-5">
                                {t(`slides.${s.key}.description`)}
                            </p>

                            {/* Cake Name (subtle editorial label) */}
                            <p className="font-structural text-[0.875rem] tracking-[0.13em] uppercase text-umami-taupe mb-10">
                                {t(`slides.${s.key}.cakeName`)}
                            </p>

                            {/* CTA */}
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href={s.href}
                                    tabIndex={active ? 0 : -1}
                                    className="inline-flex items-center gap-2 font-structural text-[0.875rem] tracking-[0.1em] uppercase px-8 py-3.5 transition-all duration-300 hover:opacity-90"
                                    style={{ backgroundColor: '#C9A96E', color: '#F0ECE4' }}
                                >
                                    {tc('explore')} {locale === 'ar' ? '←' : '→'}
                                </Link>

                                <Link
                                    href="/contact"
                                    tabIndex={active ? 0 : -1}
                                    className="inline-flex items-center gap-2 font-structural text-[0.875rem] tracking-[0.1em] uppercase px-8 py-3.5 border border-umami-carbon/60 text-umami-carbon hover:bg-umami-carbon/5 transition-all duration-300"
                                >
                                    {tc('placeAnOrder')}
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
