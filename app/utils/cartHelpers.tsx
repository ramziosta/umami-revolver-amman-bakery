// utils/cartHelpers.ts

import { Category, QuantityOption, Variation, CakeTierOption } from '@/app/data/categoryData';
import {CartItem} from "@/app/types/cart";

export interface AddToCartParams {
    item: Category['items'][0];
    categoryId: string;
    quantity: number;
    selectedOption?: QuantityOption | CakeTierOption;
    selectedVariation?: Variation;
    customizations?: {
        size?: string;
        frosting?: string;
        fillings?: string[];
        toppings?: string[];
        crust?: string;
        extraCharges?: Array<{option: string; additionalPrice: number}>;
    };
}

export class CartHelper {
    // Convert your product data into cart item format
    static createCartItem(params: AddToCartParams): Omit<CartItem, 'id' | 'addedAt' | 'lastUpdated'> {
        const { item, categoryId, quantity, selectedOption, selectedVariation, customizations } = params;

        // Calculate unit price based on selection
        const unitPrice = this.calculateUnitPrice({
            item,
            selectedOption,
            selectedVariation,
            customizations
        });

        return {
            itemId: item.id,
            categoryId,
            itemName: item.itemName,
            itemDescription: item.itemDescription,
            itemImage: Array.isArray(item.itemImages) && item.itemImages.length > 0 ? 
                String(item.itemImages[0]) : 
                typeof item.itemImages === 'string' ? item.itemImages : 
                '',
            quantity,
            selectedOption: selectedOption ? {
                ...selectedOption,
                price: typeof selectedOption.price === 'string' ?
                    parseFloat(selectedOption.price.replace(/[^\d.]/g, '')) : selectedOption.price
            } : undefined,
            selectedVariation: selectedVariation ? {
                id: selectedVariation.id || '',
                name: selectedVariation.name || '',
                price: selectedVariation.price || '0'
            } : undefined,
            customizations,
            unitPrice,
            totalPrice: unitPrice * quantity,
        };
    }

    // Calculate unit price based on all selections
    private static calculateUnitPrice(params: {
        item: Category['items'][0];
        selectedOption?: QuantityOption | CakeTierOption;
        selectedVariation?: Variation;
        customizations?: any;
    }): number {
        const { item, selectedOption, selectedVariation, customizations } = params;

        let price = 0;

        // Priority order: selectedOption > selectedVariation > itemPrice
        if (selectedOption) {
            price = typeof selectedOption.price === 'string' ?
                parseFloat(selectedOption.price.replace(/[^\d.]/g, '')) :
                Number(selectedOption.price);
        } else if (selectedVariation && selectedVariation.price) {
            price = parseFloat(selectedVariation.price.replace(/[^\d.]/g, ''));
        } else if (item.itemPrice) {
            // Handle different itemPrice formats
            if (typeof item.itemPrice === 'string') {
                price = parseFloat(item.itemPrice.replace(/[^\d.]/g, ''));
            } else if (typeof item.itemPrice === 'number') {
                price = item.itemPrice;
            } else if (Array.isArray(item.itemPrice)) {
                // Take first price if array
                price = item.itemPrice[0]?.price || 0;
            } else if (typeof item.itemPrice === 'object') {
                // Take first value if object
                price = Object.values(item.itemPrice)[0] as number || 0;
            }
        }

        // Add extra charges from customizations
        if (customizations?.extraCharges) {
            const extraCharges = customizations.extraCharges.reduce(
                (sum: number, charge: {additionalPrice: number}) => sum + charge.additionalPrice,
                0
            );
            price += extraCharges;
        }

        return price;
    }

    // Get available options for an item (for UI dropdowns)
    static getItemOptions(item: Category['items'][0], category: Category) {
        const options: {
            quantityOptions?: QuantityOption[];
            variations?: Variation[];
            cakeTiers?: any[];
            categoryVariations?: Variation[];
        } = {};

        // Item-level quantity options
        if (item.quantityOptions) {
            options.quantityOptions = item.quantityOptions;
        }

        // Item-level variations
        if (item.variations) {
            options.variations = item.variations;
        }

        // Category-level variations (for ciabatta-style categories)
        if (category.variations) {
            options.categoryVariations = category.variations;
        }

        // Cake tiers
        if (category.cakePricing?.tiers) {
            options.cakeTiers = category.cakePricing.tiers;
        }

        // Cupcake quantity options
        if (category.cupcakeQuantityOptions) {
            options.quantityOptions = category.cupcakeQuantityOptions;
        }

        return options;
    }

    // Format price for display
    static formatPrice(price: number | string, currency: string = 'JOD'): string {
        const numPrice = typeof price === 'string' ?
            parseFloat(price.replace(/[^\d.]/g, '')) : price;

        return `${numPrice.toFixed(2)} ${currency}`;
    }

    // Validate cart item before adding
    static validateCartItem(params: AddToCartParams): { isValid: boolean; error?: string } {
        const { item, quantity, selectedOption, selectedVariation } = params;

        if (quantity <= 0) {
            return { isValid: false, error: 'Quantity must be greater than 0' };
        }

        // Check if item requires a selection and none is made
        if (item.quantityOptions && item.quantityOptions.length > 0 && !selectedOption) {
            return { isValid: false, error: 'Please select a quantity option' };
        }

        if (item.variations && item.variations.length > 0 && !selectedVariation) {
            return { isValid: false, error: 'Please select a variation' };
        }

        return { isValid: true };
    }
}