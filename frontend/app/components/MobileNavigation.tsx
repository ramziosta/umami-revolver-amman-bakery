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
            <SheetContent
                side="left"
                className="w-[300px] sm:w-[400px] bg-umami-cream"
            >
                <SheetHeader>
                    <SheetTitle className="text-left">
                        <Link
                            href="/"
                            onClick={onClose}
                            className="text-umami-black font-blanka tracking-[0.1em] hover:text-umami-berry transition-colors duration-300 text-2xl"
                        >
                            Umami Amman
                        </Link>
                    </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col space-y-4 mt-8">
                    {navigationItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            onClick={onClose}
                            className="text-umami-charcoal font-ppneuemontreal hover:text-umami-berry transition-colors duration-300  text-xl py-2 border-b border-umami-caramel/40 last:border-b-0 pl-2"
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