import React from "react";

export default function ProductDetailsLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div>
            <h1>Featured Products</h1>
            {children}
        </div>
    );
}