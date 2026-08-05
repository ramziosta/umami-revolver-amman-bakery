'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

import milleCrepeCake from "@/app/assets/Whole Cake Heads-on.jpg";
import tiramisuCrepe from "@/app/assets/tiramisu.jpg";
import succes from "@/app/assets/succes.jpg";
import ajloun from "@/app/assets/OrangeBlossom.jpg";
import coconutCrepe from "@/app/assets/coconutmille.jpg";

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
            image: coconutCrepe,
            key: "coconut",
            href: "/menu/mille-crepe-cakes/coconut-crepe",
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

    const slide = slides[current];
    const cakeName = t(`slides.${slide.key}.cakeName`);

    return (
        <section className="relative w-full h-[85vh] lg:h-screen flex items-end overflow-hidden">

            {/* ── BACKGROUND CAROUSEL ── */}
            <div className="absolute inset-0">
                {slides.map((s, index) => (
                    <Image
                        key={index}
                        src={s.image}
                        alt={t(`slides.${s.key}.cakeName`)}
                        fill
                        priority={index === 0}
                        className={`object-cover transition-opacity duration-1000 ${
                            index === current ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                        }`}
                    />
                ))}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/5" />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
            </div>

            {/* ── NAVIGATION ── */}
            <button
                onClick={prevSlide}
                className="absolute start-6 md:start-10 bottom-10 z-20 text-white/70 hover:text-white text-sm tracking-widest"
            >
                {locale === 'ar' ? '→' : '←'}
            </button>

            <button
                onClick={nextSlide}
                className="absolute end-6 md:end-10 bottom-10 z-20 text-white/70 hover:text-white text-sm tracking-widest"
            >
                {locale === 'ar' ? '←' : '→'}
            </button>

            {/* ── CONTENT ── */}
            <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-16 md:pb-20 lg:pb-24">

                {/* Eyebrow */}
                <p className="text-[0.75rem] font-structural tracking-[0.15em] uppercase text-umami-alabaster/80 mb-6">
                    {t('eyebrow')}
                </p>

                {/* Headline Top */}
                <h1 className="font-display text-white text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.95] mb-2">
                    {t(`slides.${slide.key}.headlineTop`)}
                </h1>

                {/* Headline Bottom */}
                <p
                    className="font-display italic text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.95] mb-8"
                    style={{ color: '#C9A96E' }}
                >
                    {t(`slides.${slide.key}.headlineBottom`)}
                </p>

                {/* Divider */}
                <div
                    className="w-10 h-[1.5px] mb-6"
                    style={{ backgroundColor: '#C9A96E' }}
                />

                {/* Description */}
                <p className="font-body font-light text-umami-alabaster/90 text-sm md:text-base max-w-md leading-relaxed mb-6">
                    {t(`slides.${slide.key}.description`)}
                </p>

                {/* Cake Name (subtle editorial label) */}
                <p className="font-structural text-[0.875rem] tracking-[0.13em] uppercase text-umami-alabaster/60 mb-10">
                    {cakeName}
                </p>

                {/* CTA */}
                <div className="flex flex-wrap gap-4">
                    <Link
                        href={slide.href}
                        className="inline-flex items-center gap-2 font-structural text-[0.875rem] tracking-[0.1em] uppercase px-8 py-3.5 transition-all duration-300"
                        style={{ backgroundColor: '#C9A96E', color: '#F0ECE4' }}
                    >
                        {tc('explore')} {locale === 'ar' ? '←' : '→'}
                    </Link>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 font-structural text-[0.875rem] tracking-[0.1em] uppercase px-8 py-3.5 border border-white/60 text-white/90 hover:bg-white/10 transition-all duration-300"
                    >
                        {tc('placeAnOrder')}
                    </Link>
                </div>

                {/* Scroll hint */}
                <p className="hidden lg:block absolute bottom-24 end-16 text-[0.75rem] font-structural tracking-[0.13em] uppercase text-umami-alabaster/50">
                    {t('scroll')}
                </p>
            </div>
        </section>
    );
};
