"use client";
import { useState } from 'react';
import Link from "next/link";
import { X } from 'lucide-react';
import { Button } from '../ui/button';

interface MobileNavigationProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileNavigation = ({ isOpen, onClose }: MobileNavigationProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-umami-linen">
            <div className="flex flex-col h-full">
                <div className="flex justify-end p-6">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        className="hover:bg-transparent"
                    >
                        <X className="h-6 w-6 text-umami-carbon" strokeWidth={1.2} />
                    </Button>
                </div>
                
                <nav className="flex flex-col items-center justify-center space-y-8 flex-1">
                    <Link
                        href="/menu"
                        className="text-2xl font-wordmark tracking-tight text-umami-carbon hover:text-umami-olive-bark transition-colors duration-300"
                        onClick={onClose}
                    >
                        Menu
                    </Link>
                    <Link
                        href="/about"
                        className="text-2xl font-wordmark tracking-tight text-umami-carbon hover:text-umami-olive-bark transition-colors duration-300"
                        onClick={onClose}
                    >
                        Our Story
                    </Link>
                    <Link
                        href="/contact"
                        className="text-2xl font-wordmark tracking-tight text-umami-carbon hover:text-umami-olive-bark transition-colors duration-300"
                        onClick={onClose}
                    >
                        Contact
                    </Link>
                    <Link
                        href="/location"
                        className="text-2xl font-wordmark tracking-tight text-umami-carbon hover:text-umami-olive-bark transition-colors duration-300"
                        onClick={onClose}
                    >
                        Visit
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default MobileNavigation;