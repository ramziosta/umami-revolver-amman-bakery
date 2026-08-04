import { Suspense } from 'react';
import ContactClient from "@/app/components/ContactClient";
import FAQ from "@/app/components/FAQ";
import {getTranslations} from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'contact' });
    return {
        title: t('metaTitle'),
        alternates: { canonical: `https://umamiamman.com/${locale}/contact` },
    };
}

export default function Contact() {
    return (
        <div className="min-h-screen">
            <Suspense fallback={<div>Loading...</div>}>
                <ContactClient />
            </Suspense>
            <FAQ />
            <br />
        </div>
    );
}
