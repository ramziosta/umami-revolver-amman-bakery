import React from "react";

export default function ProductDetailsLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div>
            {children}
        </div>
    );
}