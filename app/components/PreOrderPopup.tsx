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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-3xl p-8 w-[90%] max-w-2xl text-center shadow-2xl relative border border-gray-200">
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl"
                    aria-label="Close"
                >
                    ×
                </button>
                <p className="text-2xl font-ppneuemontreal font-semibold text-umami-black">
                    By Pre Orders Only
                </p>
                <p className="mt-2 text-gray-600">
                    We currently operate by pre-orders only. Please plan ahead!
                </p>
            </div>
        </div>
    );
}