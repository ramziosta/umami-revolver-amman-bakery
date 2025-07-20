"use client";
import { useState } from 'react';
import Link from "next/link";
import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { useCart } from '../contexts/CartContext';
import MobileNavigation from './MobileNavigation';

const Notice = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { getTotalItems } = useCart();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle search logic here
        console.log('Search query:', searchQuery);
        setIsSearchOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-umami-black/30">
            <div className="bg-umami-black px-4 py-2">
                <p className="font-ppneuemontreal text-umami-cream text-center text-base md:text-[1rem] tracking-[0.05em]">
                    To serve you best, we craft every order with care — please allow at least 24 hours’ notice.
                </p>
            </div>
        </header>
    );
};

export default Notice;