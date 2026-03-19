// app/components/PreOrderPopup.tsx
"use client";

import { useEffect, useState } from "react";

export default function PreOrderPopup() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const seen = localStorage.getItem("preOrderSeen");
        if (!seen) {
            setShow(true);
        }
    }, []);

    const handleClose = () => {
        setShow(false);
        localStorage.setItem("preOrderSeen", "true");
    };

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div
                className="bg-umami-linen p-10 md:p-12 w-[90%] max-w-lg text-center relative border border-umami-alabaster"
            >
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-5 text-umami-dim-grey hover:text-umami-carbon text-xl transition-colors duration-300"
                    aria-label="Close"
                >
                    &times;
                </button>

                <p className="text-[0.52rem] font-structural tracking-[0.35em] uppercase text-umami-olive-bark mb-5">
                    Pre-Order Only
                </p>

                <h2 className="font-display text-umami-carbon text-2xl md:text-3xl leading-tight mb-4">
                    Every cake is made<br />
                    <em className="text-umami-taupe">to your order.</em>
                </h2>

                <p className="font-body font-light text-[0.82rem] text-umami-dim-grey leading-relaxed mb-8">
                    Please allow a minimum of 24 hours.
                    Mille crêpe cakes require overnight rest.
                </p>

                <button
                    onClick={handleClose}
                    className="font-structural text-[0.55rem] tracking-[0.28em] uppercase px-8 py-3 bg-umami-olive-bark text-umami-linen hover:bg-umami-dark-walnut transition-colors duration-300"
                >
                    Understood
                </button>
            </div>
        </div>
    );
}