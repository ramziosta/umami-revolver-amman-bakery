'use client'
import Link from "next/link";
import MobileNavigation from './MobileNavigation';
import {useState} from 'react';
import {Menu} from "lucide-react";
import {Button} from '../ui/button';
const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                            <span className="text-[0.6rem] font-structural tracking-[0.35em] uppercase text-umami-dim-grey group-hover:text-umami-taupe transition-colors duration-300">
                                Amman
                            </span>
                        </div>
                    </Link>

                    {/* Navigation — Cinzel structural labels */}
                    <nav className="hidden md:flex items-center space-x-10">
                        <Link
                            href="/menu"
                            className="text-[0.62rem] font-structural tracking-[0.28em] uppercase text-umami-carbon hover:text-umami-olive-bark transition-colors duration-300"
                        >
                            Menu
                        </Link>
                        <Link
                            href="/about"
                            className="text-[0.62rem] font-structural tracking-[0.28em] uppercase text-umami-carbon hover:text-umami-olive-bark transition-colors duration-300"
                        >
                            Our Story
                        </Link>
                        <Link
                            href="/contact"
                            className="text-[0.62rem] font-structural tracking-[0.28em] uppercase text-umami-carbon hover:text-umami-olive-bark transition-colors duration-300"
                        >
                            Contact
                        </Link>
                        <Link
                            href="/location"
                            className="text-[0.62rem] font-structural tracking-[0.28em] uppercase text-umami-carbon hover:text-umami-olive-bark transition-colors duration-300"
                        >
                            Visit
                        </Link>
                    </nav>

                    {/* Mobile Menu */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden hover:bg-transparent"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu className="h-5 w-5 text-umami-carbon" strokeWidth={1.2} />
                    </Button>
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