"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function PreOrderPopup() {
    const [show, setShow] = useState(true);
    const t = useTranslations('preorder');

    const handleClose = () => {
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-y-auto py-4 px-4">
            <div className="bg-umami-linen p-10 md:p-12 w-full max-w-lg text-center relative border border-umami-alabaster max-h-[90vh] overflow-y-auto my-auto">
                <button
                    onClick={handleClose}
                    className="absolute top-4 end-5 text-umami-dim-grey hover:text-umami-carbon text-xl transition-colors duration-300"
                    aria-label="Close"
                >
                    &times;
                </button>

                <p className="text-[0.52rem] font-structural tracking-[0.35em] uppercase text-umami-olive-bark mb-5">
                    {t('eyebrow')}
                </p>

                <h2 className="font-display text-umami-carbon text-2xl md:text-3xl leading-tight mb-4">
                    {t('headline')}<br />
                    <em className="text-umami-taupe">{t('headlineItalic')}</em>
                </h2>

                <div className="font-body font-light text-[0.82rem] text-umami-dim-grey leading-relaxed mb-8 space-y-3 text-start">
                    <p>{t('body1')}</p>
                    <p>{t('body2')}</p>
                    <ul className="list-disc ps-5 space-y-2">
                        <li>{t('bullet1')}</li>
                        <li>{t('bullet2')}</li>
                        <li>{t('bullet3')}</li>
                    </ul>
                    <p>{t('body3')}</p>
                </div>

                <button
                    onClick={handleClose}
                    className="font-structural text-[0.55rem] tracking-[0.28em] uppercase px-8 py-3 bg-umami-olive-bark text-umami-linen hover:bg-umami-dark-walnut transition-colors duration-300"
                >
                    {t('understood')}
                </button>
            </div>
        </div>
    );
}
