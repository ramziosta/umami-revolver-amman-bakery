import Script from "next/script";
import "./globals.css";
import Footer from "@/app/components/Footer";
import Navigation from "@/app/components/Navigation";
import { CartProvider } from "@/app/contexts/CartContext";
import ConditionalNotice from "@/app/components/conditionalNotice";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Umami Bakery",
    // ... your other metadata
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
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
            <ConditionalNotice />
            <Navigation/>
            {children}
            <Footer/>
        </CartProvider>
        </body>
        </html>
    );
}