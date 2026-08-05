import Image from "next/image";
import whatsapp from "../assets/whatsapp.png";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const Footer = () => {
    const t = useTranslations();

    return (
        <footer className="bg-umami-carbon">
            {/* CTA Section */}
            <div className="border-b border-umami-dim-grey/20 py-20 md:py-24">
                <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
                    <p className="text-[0.75rem] font-structural tracking-[0.15em] uppercase mb-8" style={{ color: '#C9A96E' }}>
                        {t('common.readyHeadline')}
                    </p>
                    <p className="font-display italic text-umami-linen/80 text-2xl md:text-3xl lg:text-4xl max-w-2xl mx-auto leading-snug mb-10">
                        {t('common.readyBody')}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/menu"
                            className="inline-flex items-center font-structural text-[0.875rem] tracking-[0.1em] uppercase px-8 py-3.5 transition-all duration-300"
                            style={{ backgroundColor: '#C9A96E', color: '#F0ECE4' }}
                        >
                            {t('common.exploreMenu')} &rarr;
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center font-structural text-[0.875rem] tracking-[0.1em] uppercase px-8 py-3.5 border border-umami-linen/30 text-umami-linen/80 hover:bg-umami-linen/5 transition-all duration-300"
                        >
                            {t('common.placeAnOrder')}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer Content */}
            <div className="container mx-auto px-6 md:px-12 lg:px-16 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div>
                        <Link href="/">
                            <div className="flex flex-col group mb-6">
                                <span className="text-2xl font-wordmark text-umami-linen group-hover:text-umami-taupe transition-colors duration-300">
                                    Umami
                                </span>
                                <span className="text-[0.75rem] font-structural tracking-[0.13em] uppercase text-umami-dim-grey">
                                    Amman
                                </span>
                            </div>
                        </Link>
                        <p className="font-body font-light text-[0.875rem] leading-[1.8] text-umami-taupe max-w-xs">
                            {t('footer.tagline')}
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <p className="text-[0.75rem] font-structural tracking-[0.13em] uppercase text-umami-dim-grey mb-6">
                            {t('footer.navigate')}
                        </p>
                        <nav className="flex flex-col space-y-3">
                            <Link
                                href="/menu"
                                className="font-body font-light text-[0.9375rem] text-umami-taupe hover:text-umami-linen transition-colors duration-300"
                            >
                                {t('nav.menu')}
                            </Link>
                            <Link
                                href="/about"
                                className="font-body font-light text-[0.9375rem] text-umami-taupe hover:text-umami-linen transition-colors duration-300"
                            >
                                {t('nav.ourStory')}
                            </Link>
                            <Link
                                href="/contact"
                                className="font-body font-light text-[0.9375rem] text-umami-taupe hover:text-umami-linen transition-colors duration-300"
                            >
                                {t('nav.contact')}
                            </Link>
                            <Link
                                href="/policy"
                                className="font-body font-light text-[0.9375rem] text-umami-taupe hover:text-umami-linen transition-colors duration-300"
                            >
                                {t('footer.policy')}
                            </Link>
                        </nav>
                    </div>

                    {/* Connect */}
                    <div>
                        <p className="text-[0.75rem] font-structural tracking-[0.13em] uppercase text-umami-dim-grey mb-6">
                            {t('footer.connect')}
                        </p>
                        <nav className="flex flex-col space-y-3">
                            <a
                                href="https://instagram.com/umamiamman"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-body font-light text-[0.9375rem] text-umami-taupe hover:text-umami-linen transition-colors duration-300"
                            >
                                {t('contact.info.instagramLabel')}
                            </a>
                            <a
                                href="https://wa.me/962790894715"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-body font-light text-[0.9375rem] text-umami-taupe hover:text-umami-linen transition-colors duration-300"
                            >
                                {t('contact.info.whatsappLabel')}
                            </a>
                            <a
                                href="mailto:contact@umamiamman.com"
                                className="font-body font-light text-[0.9375rem] text-umami-taupe hover:text-umami-linen transition-colors duration-300"
                            >
                                contact@umamiamman.com
                            </a>
                        </nav>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-umami-dim-grey/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-body font-light text-[0.8125rem] text-umami-dim-grey">
                        {t('footer.copyright', { year: new Date().getFullYear() })}
                    </p>
                    <div className="flex space-x-6">
                        <Link
                            href="/policy"
                            className="font-body font-light text-[0.8125rem] text-umami-dim-grey hover:text-umami-taupe transition-colors duration-300"
                        >
                            {t('footer.privacy')}
                        </Link>
                        <Link
                            href="/policy"
                            className="font-body font-light text-[0.8125rem] text-umami-dim-grey hover:text-umami-taupe transition-colors duration-300"
                        >
                            {t('footer.terms')}
                        </Link>
                    </div>
                </div>
            </div>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/962790894715"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 end-6 bg-[#25D366] hover:bg-[#1da851] p-3 rounded-full shadow-lg z-50 transition-colors duration-300"
            >
                <Image src={whatsapp} alt="WhatsApp" className="h-10 w-10" />
            </a>
        </footer>
    );
};

export default Footer;
