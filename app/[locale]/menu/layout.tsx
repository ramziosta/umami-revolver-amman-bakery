import React from "react";

export default function MenuLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div>
            {children}
        </div>
    );
}
