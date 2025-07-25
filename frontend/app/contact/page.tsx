'use client';

import React, {useState, useEffect, useRef} from 'react';
import {
    ArrowDown
} from 'lucide-react';
import Image from "next/image";
import contact from "@/app/assets/contact.jpg";

import ContactClient from "../components/ContactClient";
import {Card, CardContent, CardHeader, CardTitle} from "../ui/card";



const ContactHero: React.FC = () => (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-[20vh] md:pt-0">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-blanka text-umami-nube tracking-[0.1em] mb-6">
                Contact Us
            </h1>

            <p className="max-w-2xl mx-auto font-ppneuemontreal text-umami-nube text-lg md:text-xl xl:text-3xl tracking-[0.05em] leading-relaxed">
                Have a question, special request, or just want to connect? We’d love to hear from you — reach out
                anytime.
            </p>

            {/* Scroll Indicator */}
            <div className="absolute left-1/2 transform -translate-x-1/2 animate-bounce mt-12">
                <ArrowDown className="h-10 w-10 text-umami-nube"/>
            </div>
        </div>
    </section>
);


const FAQ = () => {
    return (
        <section className="py-20 px-6">
            <div className="container-premium">
                <div className="text-center mb-16">
                    <h2 className="heading-display text-4xl mb-4">Frequently Asked Questions</h2>
                    <p className="text-elegant text-lg max-w-2xl mx-auto">
                        Quick answers to common questions about our products and services
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {[
                        {
                            q: "Do you take custom orders?",
                            a: "Yes! We love creating custom cakes and specialty items for special occasions. Please contact us at least 48 hours in advance for custom orders."
                        },
                        {
                            q: "What are your delivery options?",
                            a: "We offer delivery in Amman and surrounding areas. Delivery is free for orders over 60 JOD — otherwise there’s a 3 JOD delivery fee. If you live outside Amman, please check with us to confirm availability."
                        },
                        {
                            q: "Do you have gluten-free options?",
                            a: "We offer a selection of gluten-free pastries. We can create custom orders. Please check our online menu or call us for current availability."
                        },
                        {
                            q: "Can I schedule pickup times?",
                            a: "Currently, we offer delivery only. Check with us for future locations and pick-up options."
                        }
                    ].map((faq, index) => (
                        <Card key={index}
                              className="card-premium hover:bg-umami-nube hover:shadow-lg transition-all duration-200 hover:scale-[1.02] ">
                            <CardHeader>
                                <CardTitle className="text-lg flex items-start gap-2">
                                    <div
                                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-gold text-sm font-bold">?</span>
                                    </div>
                                    {faq.q}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-elegant pl-8">{faq.a}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>);
}

// Main Contact component
const Contact = () => {
    return (
        <div className="min-h-screen ">
            <ContactHero/>
            <ContactClient />
            <FAQ/>
        </div>
    );
};

export default Contact;