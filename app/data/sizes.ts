import type { LocalizedText, QuantityOption } from '@/app/types/categoryTypes';

export type SizeKey = 'large' | 'medium' | 'le_petit';

/** Prices in JOD for each size of a cake. */
export type SizePrices = Record<SizeKey, number>;

interface SizeTier {
    key: SizeKey;
    label: LocalizedText;
    /** How many people it serves at home (not cafe slices). */
    servings: { from: number; to: number };
}

/**
 * Home-serving sizes for the Mille Crêpe cakes.
 * Listed smallest to largest: this order IS the display order on every item page.
 */
export const SIZE_TIERS: readonly SizeTier[] = [
    { key: 'le_petit', label: { en: 'Le Petit', ar: 'لو بوتي' }, servings: { from: 6,  to: 8 } },
    { key: 'medium',   label: { en: 'Medium',   ar: 'متوسط' },   servings: { from: 10, to: 12 } },
    { key: 'large',    label: { en: 'Large',    ar: 'كبير' },    servings: { from: 14, to: 16 } },
];

const servesEn = ({ from, to }: SizeTier['servings']) => `serves ${from}–${to}`;
const servesAr = ({ from, to }: SizeTier['servings']) =>
    `يكفي ${from} إلى ${to} ${to <= 10 ? 'أشخاص' : 'شخصًا'}`;

/** Builds the price rows for an item: "Le Petit (serves 6–8)  40 JOD", then Medium, then Large. */
export function sizeOptions(prices: SizePrices): QuantityOption[] {
    return SIZE_TIERS.map((tier) => ({
        quantity: {
            en: `${tier.label.en} (${servesEn(tier.servings)})`,
            ar: `${tier.label.ar} (${servesAr(tier.servings)})`,
        },
        price: `${prices[tier.key]} JOD`,
    }));
}
