// app/types/categoryTypes.ts
import { StaticImageData } from 'next/image';

// ── Localization ────────────────────────────────────────────────────────────

/** Bilingual text: every guest-facing string in the menu data is one of these. */
export interface LocalizedText {
    en: string;
    ar: string;
}

// ── Shared Item Types ──────────────────────────────────────────────────────

export interface QuantityOption {
    /** e.g. "1 Loaf", "9 inch — serves 12–14", "4" */
    quantity: LocalizedText;
    /** Always a string with currency: "5 JOD", "60 JOD", etc. */
    price: string;
}

export interface Variation {
    id: string;
    name: LocalizedText;
    description: LocalizedText;
    price: string;
    images: (StaticImageData | string)[];
}

export interface CategoryItem {
    id: string;
    itemName: LocalizedText;
    itemDescription: LocalizedText;
    itemImages: (StaticImageData | string)[];
    quantityOptions: QuantityOption[];
    ingredients: LocalizedText;
    allergens: LocalizedText;
    seasonal: boolean;
    /** Optional extra size/weight note, shown only when non-empty. */
    weight: LocalizedText;
    variations: Variation[];
}


// ── Category Type ──────────────────────────────────────────────────────────

export interface Category {
    id: string;
    name: LocalizedText;
    image: StaticImageData | string;
    description: LocalizedText;
    items: CategoryItem[];
}


// ── Featured Category (for menu grid) ──────────────────────────────────────

export interface FeaturedCategory {
    id: string;
    name: LocalizedText;
    image: StaticImageData | string;
    description: LocalizedText;
}
