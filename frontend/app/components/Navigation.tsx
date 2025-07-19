'use client'
import { Button } from '../ui/button';
import Link from "next/link";
import MobileNavigation from './MobileNavigation';
import { useState } from 'react';
import {Menu} from "lucide-react";
import Notice from './Notice';
const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    return (
        <div className="bg-umami-cream/50">
            <div className="container mx-auto px-4 py-4  " >

                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <h1 className="text-2xl font-goglast font-black text-umami-pink tracking-[0.3rem] hover:text-umami-blue ml-4 transition-colors duration-300">
                            Umami Amman Bakery & Pâtisserie
                        </h1>

                    </Link>
                    <nav className="text-xl hidden md:flex items-center  space-x-8">
                        <Link
                            href="/menu"
                            className="text-umami-charcoal hover:text-umami-pink  transition-colors duration-300"
                        >
                            What We Bake
                        </Link>
                        <Link
                            href="/about"
                            className="text-umami-charcoal hover:text-umami-pink   transition-colors duration-300 "
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="text-umami-charcoal hover:text-umami-pink   transition-colors duration-300 "
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden hover:bg-umami-white"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu className="h-5 w-5 text-umami-charcoal" />
                        </Button>

                    </div>
                </div>
            </div>
            {/* Mobile Navigation Drawer */}
            <MobileNavigation
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </div>




    );
};

export default Navigation;
