'use client';
import { usePathname } from 'next/navigation';
import Notice from './Notice';

export default function ConditionalNotice() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return isHomePage ? <Notice /> : null;
}
