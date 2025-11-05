'use client'
import {Button} from '../ui/button';
import Link from "next/link";
import MobileNavigation from './MobileNavigation';
import {useState} from 'react';
import {Menu} from "lucide-react";
import Notice from './Notice';

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    return (
        <div className="">
            <div className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/">
                        <div className="flex items-center flex-col group ">
                            <h1 className="text-4xl lg:text-5xl font-blanka tracking-tight group-hover:text-zinc-600 transition-colors duration-300">
                                UMAMI AMMAN
                            </h1>
                            <span
                                className="text-sm text-umami-charcoal italic group-hover:text-zinc-600 transition-colors duration-300">Artisan
                                Viennoiserie & Pâtisserie
                            </span>
                        </div>
                    </Link>

                    {/* Nav Links */}
                    <nav
                        className="hidden md:flex items-center space-x-8 font-ppneuemontreal uppercase   tracking-[0.15em]">
                        <Link
                            href="/menu"
                            className="text-umami-black hover:text-zinc-600 transition-colors duration-300 border-b border-transparent hover:border-zinc-600 pb-1"
                        >
                           What we Bake
                        </Link>
                        <Link
                            href="/about"
                            className="text-umami-black hover:text-zinc-600 transition-colors duration-300 border-b border-transparent hover:border-zinc-600 pb-1"
                        >
                            Our Story
                        </Link>
                        <Link
                            href="/contact"
                            className="text-umami-black text-bold hover:text-zinc-600 transition-colors duration-300 border-b border-transparent hover:border-zinc-600 pb-1"
                        >
                            Contact / Orders
                        </Link>
                        <Link
                            href="/location"
                            className="text-umami-black hover:text-zinc-600 transition-colors duration-300 border-b border-transparent hover:border-zinc-600 pb-1"
                        >
                            Location
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center space-x-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden hover:bg-umami-nube"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu className="h-6 w-6 text-umami-black"/>
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
