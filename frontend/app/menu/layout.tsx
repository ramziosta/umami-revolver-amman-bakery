import React from "react";

export default function ProductDetailsLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div >
            <h1 className="text-3xl bg-zinc-800 text-white">Menu Directory</h1>
            {children}
        </div>
    );
}