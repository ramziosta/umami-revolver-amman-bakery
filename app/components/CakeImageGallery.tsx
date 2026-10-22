'use client';

import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import type { ItemImage } from '@/app/types/categoryTypes';
import { imageAlt } from '@/app/lib/itemImages';

type Locale = 'en' | 'ar';

interface CrossfadeImageProps {
    images: ItemImage[];
    activeIndex: number;
    itemName: string;
    locale: Locale;
    sizes: string;
    priority?: boolean;
    /** Use when the same photo is already described elsewhere on the page. */
    decorative?: boolean;
}

/**
 * Fills its (relatively positioned) parent with the active photo.
 * When the active photo changes, the new one fades in (200ms) over the old one.
 */
export function CrossfadeImage({ images, activeIndex, itemName, locale, sizes, priority, decorative }: CrossfadeImageProps) {
    const [state, setState] = useState<{ active: number; previous: number | null }>({
        active: activeIndex,
        previous: null,
    });

    if (state.active !== activeIndex) {
        setState({ active: activeIndex, previous: state.active });
    }

    useEffect(() => {
        if (state.previous === null) return;
        const id = setTimeout(() => setState((s) => ({ ...s, previous: null })), 250);
        return () => clearTimeout(id);
    }, [state.previous, state.active]);

    const current = images[state.active];

    return (
        <>
            {state.previous !== null && images[state.previous] && (
                <Image
                    key={`previous-${state.previous}`}
                    src={images[state.previous].src}
                    alt=""
                    aria-hidden
                    fill
                    sizes={sizes}
                    className="object-cover"
                />
            )}
            <Image
                key={`active-${state.active}`}
                src={current.src}
                alt={decorative ? '' : imageAlt(current, itemName, state.active, images.length, locale)}
                aria-hidden={decorative || undefined}
                fill
                sizes={sizes}
                priority={priority}
                className={`object-cover ${
                    state.previous !== null ? 'animate-[fade-in_200ms_ease-out_forwards] motion-reduce:animate-none' : ''
                }`}
            />
        </>
    );
}

interface ThumbnailStripProps {
    images: ItemImage[];
    activeIndex: number;
    onSelect: (index: number) => void;
    itemName: string;
    locale: Locale;
}

function ThumbnailStrip({ images, activeIndex, onSelect, itemName, locale }: ThumbnailStripProps) {
    const t = useTranslations('item');
    const buttons = useRef<(HTMLButtonElement | null)[]>([]);
    const last = images.length - 1;
    const rtl = locale === 'ar';

    const go = (to: number) => {
        onSelect(to);
        buttons.current[to]?.focus();
    };

    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        const forward = rtl ? 'ArrowLeft' : 'ArrowRight';
        const backward = rtl ? 'ArrowRight' : 'ArrowLeft';
        if (e.key === forward) go(Math.min(activeIndex + 1, last));
        else if (e.key === backward) go(Math.max(activeIndex - 1, 0));
        else if (e.key === 'Home') go(0);
        else if (e.key === 'End') go(last);
        else return;
        e.preventDefault();
    };

    return (
        <div
            role="group"
            aria-label={t('galleryLabel')}
            onKeyDown={onKeyDown}
            className="bg-umami-linen px-6 md:px-12 lg:px-16 py-6 flex gap-3 overflow-x-auto snap-x"
        >
            {images.map((image, index) => {
                const active = index === activeIndex;
                return (
                    <button
                        key={index}
                        type="button"
                        ref={(el) => { buttons.current[index] = el; }}
                        onClick={() => onSelect(index)}
                        aria-pressed={active}
                        className={`relative shrink-0 snap-start w-20 h-20 md:w-24 md:h-24 overflow-hidden transition-all duration-200
                            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-umami-olive-bark
                            ${active
                                ? 'ring-2 ring-umami-gold ring-offset-2 ring-offset-umami-linen opacity-100'
                                : 'opacity-60 hover:opacity-100'}`}
                    >
                        <Image
                            src={image.src}
                            alt={imageAlt(image, itemName, index, images.length, locale)}
                            fill
                            sizes="96px"
                            loading="lazy"
                            className="object-cover"
                        />
                    </button>
                );
            })}
        </div>
    );
}

interface CakeImageGalleryProps {
    images: ItemImage[];
    activeIndex: number;
    onSelect: (index: number) => void;
    itemName: string;
    locale: Locale;
    /** Overlaid on the main photo (title, badges). */
    children?: ReactNode;
}

/** Full-width main photo with a clickable thumbnail row beneath it (row only appears with 2+ photos). */
export default function CakeImageGallery({ images, activeIndex, onSelect, itemName, locale, children }: CakeImageGalleryProps) {
    return (
        <>
            <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
                <CrossfadeImage
                    images={images}
                    activeIndex={activeIndex}
                    itemName={itemName}
                    locale={locale}
                    sizes="100vw"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
                {children}
            </section>

            {images.length > 1 && (
                <ThumbnailStrip
                    images={images}
                    activeIndex={activeIndex}
                    onSelect={onSelect}
                    itemName={itemName}
                    locale={locale}
                />
            )}
        </>
    );
}
