import Script from "next/script";
import "../globals.css";
import Footer from "@/app/components/Footer";
import Navigation from "@/app/components/Navigation";
import ConditionalNotice from "@/app/components/conditionalNotice";
import {Metadata} from "next";
import { Analytics } from '@vercel/analytics/next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'meta' });

    return {
        title: t('siteTitle'),
        description: t('siteDescription'),
        openGraph: {
            title: t('siteTitle'),
            description: t('siteDescription'),
            url: 'https://umamiamman.com',
            siteName: 'Umami Amman',
            images: [
                {
                    url: 'https://umamiamman.com/og-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: t('ogImageAlt'),
                },
            ],
            locale: locale === 'ar' ? 'ar_JO' : 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: t('siteTitle'),
            description: t('siteDescription'),
            images: ['https://umamiamman.com/og-image.jpg'],
        },
        icons: {
            icon: '/favicon.ico',
            apple: '/apple-touch-icon.png',
        },
        alternates: {
            canonical: `https://umamiamman.com/${locale}`,
            languages: {
                en: 'https://umamiamman.com/en',
                ar: 'https://umamiamman.com/ar',
            },
        },
    };
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    setRequestLocale(locale);
    const dir = locale === 'ar' ? 'rtl' : 'ltr';

    return (
        <html lang={locale} dir={dir}>
        <body>
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-D19HSLMGNB"
            strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
            {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-D19HSLMGNB');
    `}
        </Script>
        <NextIntlClientProvider>
            <ConditionalNotice />
            <Navigation/>
            <Analytics />
            {children}
            <Footer/>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
