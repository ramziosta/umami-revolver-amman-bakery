import { useTranslations } from 'next-intl';

const Notice = () => {
    const t = useTranslations('notice');
    return (
        <header className="sticky top-0 z-50 border-b border-umami-black/30">
            <div className="bg-umami-black px-4 py-2">
                <p className="font-ppneuemontreal text-umami-cream text-center text-base md:text-[1rem] tracking-[0.05em]">
                    {t('text')}
                </p>
            </div>
        </header>
    );
};

export default Notice;
