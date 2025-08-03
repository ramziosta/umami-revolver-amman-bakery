// types/cart.ts
import { Timestamp } from 'firebase/firestore';

export interface CartItem {
    id: string; // Unique cart item ID
    itemId: string; // Reference to your product
    categoryId: string;
    itemName: string;
    itemDescription: string;
    itemImage: string; // Single image for cart display
    quantity: number;

    // Handle different pricing structures
    selectedOption?: {
        // For regular quantity options
        quantity?: number | string;
        price: number | string;
    } | {
        // For cake tiers
        diameterInch?: number;
        servings?: number;
        price: number;
    };

    // For items with variations
    selectedVariation?: {
        id: string;
        name: string;
        price: string;
    };

    // For custom cakes with multiple selections
    customizations?: {
        size?: string;
        frosting?: string;
        fillings?: string[];
        toppings?: string[];
        crust?: string;
        extraCharges?: Array<{option: string; additionalPrice: number}>;
    };

    unitPrice: number; // Final calculated unit price
    totalPrice: number; // quantity * unitPrice

    // Metadata
    addedAt: Timestamp;
    lastUpdated: Timestamp;
}

export interface Cart {
    userId: string;
    items: CartItem[];
    totalItems: number;
    subtotal: number;
    tax?: number;
    deliveryFee?: number;
    total: number;
    currency: string; // 'JOD' for your case
    createdAt: Timestamp;
    updatedAt: Timestamp;
}

export interface ShippingAddress {
    fullName: string;
    address: string;
    city: string;
    governorate: string;
    postalCode?: string;
    country: string;
    phone: string;
}

export interface Order {
    id: string;
    userId: string;
    orderNumber: string; // Human-readable order number

    // Cart snapshot
    items: CartItem[];
    subtotal: number;
    tax: number;
    deliveryFee: number;
    total: number;
    currency: string;

    // Customer info
    customerEmail: string;
    customerName: string;
    shippingAddress: ShippingAddress;

    // Order status
    status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'out_for_delivery' | 'delivered' | 'cancelled';

    // Payment
    paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
    paymentMethod?: string;
    paymentIntentId?: string; // For Stripe integration

    // Timestamps
    createdAt: Timestamp;
    updatedAt: Timestamp;
    estimatedDelivery?: Timestamp;

    // Notes
    customerNotes?: string;
    internalNotes?: string;
}

// For user profiles
export interface UserProfile {
    uid: string;
    email: string;
    displayName?: string;
    phone?: string;
    defaultShippingAddress?: ShippingAddress;
    createdAt: Timestamp;
    lastLoginAt: Timestamp;
}