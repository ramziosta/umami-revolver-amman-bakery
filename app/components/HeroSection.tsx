'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import milleCrepeCake from "@/app/assets/Whole Cake Heads-on.jpg";
import tiramisuCrepe from "@/app/assets/tiramisu-mille-crepe.jpeg";
import seasonal from "@/app/assets/bucheDeNoel.jpeg";

export const HeroSection = () => {

    const slides = [
        {
            image: milleCrepeCake,
            headlineTop: "Twenty layers.",
            headlineBottom: "One moment.",
            description: "Mille crêpe cake. French technique, Japanese precision.",
            cakeName: "Crème Brûlée Mille-Crêpe",
            href: "/menu/mille-crepe-cakes/creme-brulee-crepe/"
        },
        {
            image: tiramisuCrepe,
            headlineTop: "Bitter first.",
            headlineBottom: "Then sublime.",
            description: "Espresso. Sabayon-Mascarpone. Cocoa.",
            cakeName: "Tiramisu Mille-Crêpe",
            href: "/menu/mille-crepe-cakes/tiramisu-crepe/"
        },
        {
            image: seasonal,
            headlineTop: "What The Season Brings.",
            headlineBottom: "We refine.",
            description: "Almond Jaconde. Chocolate Crèmeux. Praline.",
            cakeName: "Buche De Noel",
            href: "/menu/tiered-cakes/buche-de-noel/"
        },
    ];

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
        <section className="relative w-full h-[85vh] lg:h-screen flex items-end overflow-hidden">

            {/* ── BACKGROUND CAROUSEL ── */}
            <div className="absolute inset-0">
                {slides.map((slide, index) => (
                    <Image
                        key={index}
                        src={slide.image}
                        alt={slide.cakeName}
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
                className="absolute left-6 md:left-10 bottom-10 z-20 text-white/70 hover:text-white text-sm tracking-widest"
            >
                ←
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-6 md:right-10 bottom-10 z-20 text-white/70 hover:text-white text-sm tracking-widest"
            >
                →
            </button>

            {/* ── CONTENT ── */}
            <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-16 md:pb-20 lg:pb-24">

                {/* Eyebrow */}
                <p className="text-[0.52rem] font-structural tracking-[0.4em] uppercase text-umami-alabaster/80 mb-6">
                    Amman, Jordan · Made to Order
                </p>

                {/* Headline Top */}
                <h1 className="font-display text-white text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.95] mb-2">
                    {slides[current].headlineTop}
                </h1>

                {/* Headline Bottom */}
                <p
                    className="font-display italic text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.95] mb-8"
                    style={{ color: '#C9A96E' }}
                >
                    {slides[current].headlineBottom}
                </p>

                {/* Divider */}
                <div
                    className="w-10 h-[1.5px] mb-6"
                    style={{ backgroundColor: '#C9A96E' }}
                />

                {/* Description */}
                <p className="font-body font-light text-umami-alabaster/90 text-sm md:text-base max-w-md leading-relaxed mb-6">
                    {slides[current].description}
                </p>

                {/* Cake Name (subtle editorial label) */}
                <p className="font-structural text-[0.55rem] tracking-[0.35em] uppercase text-umami-alabaster/60 mb-10">
                    {slides[current].cakeName}
                </p>

                {/* CTA */}
                <div className="flex flex-wrap gap-4">
                    <Link
                        href={slides[current].href}
                        className="inline-flex items-center gap-2 font-structural text-[0.55rem] tracking-[0.28em] uppercase px-8 py-3.5 transition-all duration-300"
                        style={{ backgroundColor: '#C9A96E', color: '#F0ECE4' }}
                    >
                        Explore →
                    </Link>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 font-structural text-[0.55rem] tracking-[0.28em] uppercase px-8 py-3.5 border border-white/60 text-white/90 hover:bg-white/10 transition-all duration-300"
                    >
                        Place an Order
                    </Link>
                </div>

                {/* Scroll hint */}
                <p className="hidden lg:block absolute bottom-24 right-16 text-[0.5rem] font-structural tracking-[0.35em] uppercase text-umami-alabaster/50">
                    Scroll
                </p>
            </div>
        </section>
    );
};