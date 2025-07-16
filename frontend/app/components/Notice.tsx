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
        <header className=" shadow-sm border-b border-umami-gray/20 sticky top-0 z-50">
            <div className=" bg-umami-blue mx-auto px-4 py-4">
                <p className="text-l font-goglast text-umami-white  font-bold text-center lg:text-xl tracking-[0.2rem]">
                    To serve you best, we craft every order with care — please give us at least 24 hours’ notice.
                </p>
            </div>

        </header>
    );
};

export default Notice;