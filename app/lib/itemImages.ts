import type { CategoryItem, ItemImage } from '@/app/types/categoryTypes';

/** Index of the photo to show first: the one marked isPrimary, otherwise the first. */
export function primaryImageIndex(images: ItemImage[]): number {
    const i = images.findIndex((image) => image.isPrimary);
    return i === -1 ? 0 : i;
}

export function primaryImage(item: CategoryItem): ItemImage {
    return item.images[primaryImageIndex(item.images)];
}

/** Alt text for a photo: its own, if given, otherwise "<item name> (2 of 4)". */
export function imageAlt(
    image: ItemImage,
    itemName: string,
    index: number,
    total: number,
    locale: 'en' | 'ar'
): string {
    if (image.alt?.[locale]) return image.alt[locale];
    return total > 1 ? `${itemName} (${index + 1}/${total})` : itemName;
}
