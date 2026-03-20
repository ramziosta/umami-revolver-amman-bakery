"use client";
import Image from "next/image";
import Link from "next/link";
import whatsapp from "../assets/whatsapp.png";

const Footer = () => {
    return (
        <footer className="bg-umami-carbon">
            {/* CTA Section */}
            <div className="border-b border-umami-dim-grey/20 py-20 md:py-24">
                <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
                    <p className="text-[0.52rem] font-structural tracking-[0.4em] uppercase mb-8" style={{ color: '#C9A96E' }}>
                        Ready to Taste It
                    </p>
                    <p className="font-display italic text-umami-linen/80 text-2xl md:text-3xl lg:text-4xl max-w-2xl mx-auto leading-snug mb-10">
                        Everything here is made with intention.<br />
                        Come experience what the standard should be.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/menu"
                            className="inline-flex items-center font-structural text-[0.55rem] tracking-[0.28em] uppercase px-8 py-3.5 transition-all duration-300"
                            style={{ backgroundColor: '#C9A96E', color: '#F0ECE4' }}
                        >
                            Explore the Menu &rarr;
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center font-structural text-[0.55rem] tracking-[0.28em] uppercase px-8 py-3.5 border border-umami-linen/30 text-umami-linen/80 hover:bg-umami-linen/5 transition-all duration-300"
                        >
                            Place an Order
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
                                <span className="text-[0.5rem] font-structural tracking-[0.35em] uppercase text-umami-dim-grey">
                                    Amman
                                </span>
                            </div>
                        </Link>
                        <p className="font-body font-light text-[0.78rem] leading-[1.8] text-umami-taupe max-w-xs">
                            Artisan Viennoiserie & Pâtisserie
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <p className="text-[0.52rem] font-structural tracking-[0.35em] uppercase text-umami-dim-grey mb-6">
                            Navigate
                        </p>
                        <nav className="flex flex-col space-y-3">
                            <Link
                                href="/menu"
                                className="font-body font-light text-[0.82rem] text-umami-taupe hover:text-umami-linen transition-colors duration-300"
                            >
                                Menu
                            </Link>
                            <Link
                                href="/about"
                                className="font-body font-light text-[0.82rem] text-umami-taupe hover:text-umami-linen transition-colors duration-300"
                            >
                                Our Story
                            </Link>
                            <Link
                                href="/contact"
                                className="font-body font-light text-[0.82rem] text-umami-taupe hover:text-umami-linen transition-colors duration-300"
                            >
                                Contact
                            </Link>
                            <Link
                                href="/policy"
                                className="font-body font-light text-[0.82rem] text-umami-taupe hover:text-umami-linen transition-colors duration-300"
                            >
                                Policy
                            </Link>
                        </nav>
                    </div>

                    {/* Connect */}
                    <div>
                        <p className="text-[0.52rem] font-structural tracking-[0.35em] uppercase text-umami-dim-grey mb-6">
                            Connect
                        </p>
                        <nav className="flex flex-col space-y-3">
                            <a
                                href="https://instagram.com/umamiamman"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-body font-light text-[0.82rem] text-umami-taupe hover:text-umami-linen transition-colors duration-300"
                            >
                                Instagram
                            </a>
                            <a
                                href="https://wa.me/962790894715"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-body font-light text-[0.82rem] text-umami-taupe hover:text-umami-linen transition-colors duration-300"
                            >
                                WhatsApp
                            </a>
                            <a
                                href="mailto:contact@umamiamman.com"
                                className="font-body font-light text-[0.82rem] text-umami-taupe hover:text-umami-linen transition-colors duration-300"
                            >
                                contact@umamiamman.com
                            </a>
                        </nav>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-umami-dim-grey/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-body font-light text-[0.72rem] text-umami-dim-grey">
                        © {new Date().getFullYear()} Umami Amman. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <Link
                            href="/privacy"
                            className="font-body font-light text-[0.72rem] text-umami-dim-grey hover:text-umami-taupe transition-colors duration-300"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="/terms"
                            className="font-body font-light text-[0.72rem] text-umami-dim-grey hover:text-umami-taupe transition-colors duration-300"
                        >
                            Terms
                        </Link>
                    </div>
                </div>
            </div>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/962790894715"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#1da851] p-3 rounded-full shadow-lg z-50 transition-colors duration-300"
            >
                <Image src={whatsapp} alt="WhatsApp" className="h-10 w-10" />
            </a>
        </footer>
    );
};

export default Footer;