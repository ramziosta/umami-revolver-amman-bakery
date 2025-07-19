import Link from "next/link";
import { X } from 'lucide-react';
import { Button } from '../ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from '../ui/sheet';

interface MobileNavigationProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileNavigation = ({ isOpen, onClose }: MobileNavigationProps) => {
    const navigationItems = [
        { title: 'What We Bake', href: '/menu' },
        { title: 'About', href: '/about' },
        { title: 'Contact', href: '/contact' },
    ];

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-umami-cream">
                <SheetHeader>
                    <SheetTitle className="text-left">
                        <Link
                            href="/frontend/public"
                            onClick={onClose}
                            className="text-umami-pink font-goglast tracking-widest hover:text-umami-charcoal transition-colors duration-300"
                        >
                            Umami Amman Bakery & Patisserie
                        </Link>
                    </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col space-y-4 mt-8 bg-umami-cream">
                    {navigationItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            onClick={onClose}
                            className="text-umami-charcoal hover:text-umami-navy transition-colors duration-300 font-medium text-2xl py-2 border-b border-umami-gray/20 last:border-b-0"
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNavigation;