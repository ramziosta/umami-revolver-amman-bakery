import { Inter } from "next/font/google";
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