'use client';
import { Suspense } from 'react';
import React, {useState, useEffect, useRef} from 'react';
import Image from "next/image";
import contact from "@/app/assets/contact.jpg";
import ContactClient from "../components/ContactClient";
import FAQ from "@/app/components/FAQ";


const ContactHero: React.FC = () => (
    <section className="relative h-[60vh]  flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
            <Image
                src={contact}
                alt="Artisan Pound Cake"
                fill
                className="object-cover"
                priority
            />
            {/* Refined Warm Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-[5vh] sm:pt-[10vh] md:pt-0 flex flex-col items-center justify-center">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-blanka text-umami-nube tracking-[0.1em] mb-6">
                Contact Us
            </h1>

            <p className="max-w-2xl mx-auto font-ppneuemontreal text-umami-nube text-lg md:text-xl xl:text-3xl tracking-[0.05em] leading-relaxed">
                Have a question, special request, or just want to connect? We’d love to hear from you — reach out
                anytime.
            </p>
        </div>
    </section>
);



// Main Contact component
const Contact = () => {
    return (
        <div className="min-h-screen ">
                   <Suspense fallback={<div>Loading...</div>}>
            <ContactClient />
            </Suspense>
            <FAQ />
            <br />
        </div>
    );
};

export default Contact;