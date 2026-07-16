import React from "react";
import {Metadata} from "next";
export const metadata: Metadata = {
    // ... existing
    openGraph: {
        title: 'Umami Amman | Mille Crêpe Cake Amman',
        description: 'Precision patisserie in Amman, Jordan. Handmade mille crêpe cakes made to order.',
        url: 'https://umamiamman.com',
        siteName: 'Umami Amman',
        images: [{ url: 'https://umamiamman.com/og-image.jpg', width: 1200, height: 630 }],
        locale: 'en_US',
        type: 'website',
    },
}
export default function ProductDetailsLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div>
            {children}
        </div>
    );
}