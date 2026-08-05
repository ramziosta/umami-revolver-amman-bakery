'use client'
import MobileNavigation from './MobileNavigation';
import {useState} from 'react';
import {Menu} from "lucide-react";
import {useTranslations, useLocale} from 'next-intl';
import {Link, usePathname} from '@/i18n/navigation';
import {Button} from '../ui/button';

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const t = useTranslations('nav');
    const locale = useLocale();
    const pathname = usePathname();
    const otherLocale = locale === 'ar' ? 'en' : 'ar';

    return (
        <div className="bg-umami-linen">
            <div className="container mx-auto px-6 py-2">
                <div className="flex items-center justify-between">
                    {/* Logo — Lovan wordmark only */}
                    <Link href="/">
                        <div className="flex flex-col group">
                            <h1 className="text-3xl lg:text-4xl font-wordmark tracking-tight text-umami-gold group-hover:text-umami-dim-grey transition-colors duration-300">
                                Umami
                            </h1>
                            <span className="text-[0.875rem] font-structural tracking-[0.13em] uppercase text-umami-dim-grey group-hover:text-umami-taupe transition-colors duration-300">
                                Amman
                            </span>
                        </div>
                    </Link>

                    {/* Navigation — Cinzel structural labels */}
                    <nav className="hidden md:flex items-center gap-10">
                        <Link
                            href="/menu/mille-crepe-cakes"
                            className="text-[0.9375rem] font-structural tracking-[0.1em] uppercase text-umami-carbon hover:text-umami-olive-bark transition-colors duration-300"
                        >
                            {t('milleCrepe')}
                        </Link>
                        <Link
                            href="/menu"
                            className="text-[0.9375rem] font-structural tracking-[0.1em] uppercase text-umami-carbon hover:text-umami-olive-bark transition-colors duration-300"
                        >
                            {t('menu')}
                        </Link>
                        <Link
                            href="/about"
                            className="text-[0.9375rem] font-structural tracking-[0.1em] uppercase text-umami-carbon hover:text-umami-olive-bark transition-colors duration-300"
                        >
                            {t('ourStory')}
                        </Link>
                        <Link
                            href="/contact"
                            className="text-[0.9375rem] font-structural tracking-[0.1em] uppercase text-umami-carbon hover:text-umami-olive-bark transition-colors duration-300"
                        >
                            {t('contact')}
                        </Link>
                        <Link
                            href="/location"
                            className="text-[0.9375rem] font-structural tracking-[0.1em] uppercase text-umami-carbon hover:text-umami-olive-bark transition-colors duration-300"
                        >
                            {t('visit')}
                        </Link>
                        <Link
                            href={pathname}
                            locale={otherLocale}
                            className="text-[0.9375rem] font-structural tracking-[0.1em] uppercase text-umami-olive-bark hover:text-umami-carbon transition-colors duration-300"
                        >
                            {t('languageSwitch')}
                        </Link>
                    </nav>

                    {/* Mobile Menu */}
                    <div className="flex items-center gap-3 md:hidden">
                        <Link
                            href={pathname}
                            locale={otherLocale}
                            className="text-[0.875rem] font-structural tracking-[0.06em] uppercase text-umami-olive-bark"
                        >
                            {t('languageSwitch')}
                        </Link>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="hover:bg-transparent"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu className="h-5 w-5 text-umami-carbon" strokeWidth={1.2} />
                        </Button>
                    </div>
                </div>
            </div>

            <MobileNavigation
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </div>
    );
};

export default Navigation;
