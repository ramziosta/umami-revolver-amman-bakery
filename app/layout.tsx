import Script from "next/script";
import "./globals.css";
import Footer from "@/app/components/Footer";
import Navigation from "@/app/components/Navigation";
import { CartProvider } from "@/app/contexts/CartContext";
import ConditionalNotice from "@/app/components/conditionalNotice";
import {Metadata} from "next";
import { Analytics } from '@vercel/analytics/next';
export const metadata: Metadata = {
    title: 'Umami Amman | Mille Crêpe Cake Amman | Precision Patisserie Jordan',
    description: 'Precision patisserie in Amman, Jordan. Handmade mille crêpe cakes made to order. French technique, Japanese precision. Pre-order for collection or delivery in Amman.',
    openGraph: {
        title: 'Umami Amman | Mille Crêpe Cake Amman | Precision Patisserie Jordan',
        description: 'Precision patisserie in Amman, Jordan. Handmade mille crêpe cakes made to order. French technique, Japanese precision.',
        url: 'https://umamiamman.com',
        siteName: 'Umami Amman',
        images: [
            {
                url: 'https://umamiamman.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Umami Amman — Mille Crêpe Cakes made to order in Amman, Jordan',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Umami Amman | Mille Crêpe Cake Amman',
        description: 'Precision patisserie in Amman, Jordan. Handmade mille crêpe cakes made to order.',
        images: ['https://umamiamman.com/og-image.jpg'],
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    alternates: {
        canonical: 'https://umamiamman.com',
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
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
        <CartProvider>
            <Navigation/>
            <Analytics />
            {children}
            <Footer/>
        </CartProvider>
        </body>
        </html>
    );
}