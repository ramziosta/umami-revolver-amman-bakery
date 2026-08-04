'use client';
import { usePathname } from '@/i18n/navigation';
import Notice from './Notice';

export default function ConditionalNotice() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return isHomePage ? <Notice /> : null;
}
