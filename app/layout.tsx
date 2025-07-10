import type {Metadata} from "next";
import "./globals.css";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

import {CartProvider} from "@/app/contexts/CartContext";
import Notice from "@/app/components/Notice";

export const metadata: Metadata = {
    title: "Umami Bakery",
    description: "Artisan Baked Goods",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <CartProvider>
            <Navigation/>
            {children}
            <Footer/>
        </CartProvider>
        </body>
        </html>
    );
}