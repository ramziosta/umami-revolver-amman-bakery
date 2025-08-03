// hooks/useCart.ts
import { useState, useEffect, useCallback } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { onSnapshot, doc } from 'firebase/firestore';
import {auth, db} from "@/app/lib/firebase";
import {Cart, CartItem} from "@/app/types/cart";
import {CartService} from "@/app/services/cartServices";


export const useCart = () => {
    const [user] = useAuthState(auth);
    const [cart, setCart] = useState<Cart | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Subscribe to cart changes in real-time
    useEffect(() => {
        if (!user) {
            setCart(null);
            setLoading(false);
            return;
        }

        const cartRef = doc(db, 'carts', user.uid);

        const unsubscribe = onSnapshot(
            cartRef,
            (docSnap) => {
                if (docSnap.exists()) {
                    setCart(docSnap.data() as Cart);
                } else {
                    setCart(null);
                }
                setLoading(false);
            },
            (error) => {
                console.error('Error listening to cart:', error);
                setError(error.message);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, [user]);

    const addToCart = useCallback(async (
        itemData: Omit<CartItem, 'id' | 'addedAt' | 'lastUpdated'>
    ) => {
        if (!user) {
            setError('Please login to add items to cart');
            return;
        }

        try {
            setError(null);
            await CartService.addToCart(user.uid, itemData);
        } catch (error: any) {
            setError(error.message);
            throw error;
        }
    }, [user]);

    const updateQuantity = useCallback(async (cartItemId: string, quantity: number) => {
        if (!user) return;

        try {
            setError(null);
            await CartService.updateCartItemQuantity(user.uid, cartItemId, quantity);
        } catch (error: any) {
            setError(error.message);
            throw error;
        }
    }, [user]);

    const removeFromCart = useCallback(async (cartItemId: string) => {
        if (!user) return;

        try {
            setError(null);
            await CartService.removeFromCart(user.uid, cartItemId);
        } catch (error: any) {
            setError(error.message);
            throw error;
        }
    }, [user]);

    const clearCart = useCallback(async () => {
        if (!user) return;

        try {
            setError(null);
            await CartService.clearCart(user.uid);
        } catch (error: any) {
            setError(error.message);
            throw error;
        }
    }, [user]);

    const createOrder = useCallback(async (customerInfo: {
        email: string;
        name: string;
        shippingAddress: any;
        customerNotes?: string;
    }) => {
        if (!user) {
            throw new Error('Please login to place an order');
        }

        try {
            setError(null);
            const orderId = await CartService.createOrder(user.uid, customerInfo);
            return orderId;
        } catch (error: any) {
            setError(error.message);
            throw error;
        }
    }, [user]);

    return {
        cart,
        loading,
        error,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        createOrder,
        isLoggedIn: !!user,
        user
    };
};

// Hook for cart item count (for navbar badge)
export const useCartItemCount = () => {
    const { cart } = useCart();
    return cart?.totalItems || 0;
};