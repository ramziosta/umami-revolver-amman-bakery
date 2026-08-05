import { useTranslations } from 'next-intl';

const UmamiDifference = () => {
    const t = useTranslations('home.philosophy');

    return (
        <section className="bg-umami-carbon py-24 md:py-32">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                {/* Section Label */}
                <p className="text-[0.75rem] font-structural tracking-[0.15em] uppercase mb-8" style={{ color: '#C9A96E' }}>
                    {t('eyebrow')}
                </p>

                {/* Headline */}
                <h2 className="font-display text-umami-linen text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-2">
                    {t('headline')}
                </h2>
                <p className="font-display italic text-3xl md:text-5xl lg:text-6xl leading-[1.05] mb-16 md:mb-20" style={{ color: '#C9A96E' }}>
                    {t('headlineItalic')}
                </p>

                {/* Three Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-umami-dim-grey/20">
                    {/* Balance */}
                    <div className="bg-umami-carbon p-8 md:p-10">
                        <p className="text-[0.75rem] font-structural tracking-[0.15em] uppercase text-umami-alabaster/60 mb-5">
                            {t('balanceTitle')}
                        </p>
                        <p className="font-body font-light text-[0.9375rem] leading-[1.85] text-umami-taupe">
                            {t('balanceBody')}
                        </p>
                    </div>

                    {/* Technique */}
                    <div className="bg-umami-carbon p-8 md:p-10 md:border-s md:border-e border-umami-dim-grey/20">
                        <p className="text-[0.75rem] font-structural tracking-[0.15em] uppercase text-umami-alabaster/60 mb-5">
                            {t('techniqueTitle')}
                        </p>
                        <p className="font-body font-light text-[0.9375rem] leading-[1.85] text-umami-taupe">
                            {t('techniqueBody')}
                        </p>
                    </div>

                    {/* Intention */}
                    <div className="bg-umami-carbon p-8 md:p-10">
                        <p className="text-[0.75rem] font-structural tracking-[0.15em] uppercase text-umami-alabaster/60 mb-5">
                            {t('intentionTitle')}
                        </p>
                        <p className="font-body font-light text-[0.9375rem] leading-[1.85] text-umami-taupe">
                            {t('intentionBody')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UmamiDifference;
