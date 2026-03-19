// app/types/categoryTypes.ts
import { StaticImageData } from 'next/image';

// ── Shared Item Types ──────────────────────────────────────────────────────

export interface QuantityOption {
    /** Always a string: "1 Loaf", "9 inch", "4", etc. */
    quantity: string;
    /** Always a string with currency: "5 JOD", "60 JOD", etc. */
    price: string;
}

export interface Variation {
    id: string;
    name: string;
    description: string;
    price: string;
    images: (StaticImageData | string)[];
}

export interface CategoryItem {
    id: string;
    itemName: string;
    itemDescription: string;
    itemImages: (StaticImageData | string)[];
    quantityOptions: QuantityOption[];
    ingredients: string;
    allergens: string;
    seasonal: boolean;
    /** Always a string: "800 g", "9 inch — serves 12–14", "3 Layer 8 inch", etc. */
    weight: string;
    variations: Variation[];
}


// ── Category Type ──────────────────────────────────────────────────────────

export interface Category {
    id: string;
    name: string;
    image: StaticImageData | string;
    description: string;
    itemCount: number;
    items: CategoryItem[];
}


// ── Featured Category (for menu grid) ──────────────────────────────────────

export interface FeaturedCategory {
    id: string;
    name: string;
    image: StaticImageData | string;
    description: string;
    itemCount: number;
}