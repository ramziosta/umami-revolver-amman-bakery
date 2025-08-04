// services/cartService.ts
// import {
//     doc,
//     getDoc,
//     setDoc,
//     updateDoc,
//     deleteDoc,
//     collection,
//     addDoc,
//     serverTimestamp,
//     arrayUnion,
//     arrayRemove
// } from 'firebase/firestore';
// import { User } from 'firebase/auth';
// import {Cart, CartItem, Order} from "@/app/types/cart";
// import {db} from "@/app/lib/firebase";
//
//
// export class CartService {
//     private static getCartRef(userId: string) {
//         return doc(db, 'carts', userId);
//     }
//
//     private static getOrdersCollection() {
//         return collection(db, 'orders');
//     }
//
//     // Get user's cart
//     static async getCart(userId: string): Promise<Cart | null> {
//         try {
//             const cartRef = this.getCartRef(userId);
//             const cartSnap = await getDoc(cartRef);
//
//             if (cartSnap.exists()) {
//                 return cartSnap.data() as Cart;
//             }
//             return null;
//         } catch (error) {
//             console.error('Error getting cart:', error);
//             throw error;
//         }
//     }
//
//     // Create new cart
//     static async createCart(userId: string): Promise<Cart> {
//         const newCart: Cart = {
//             userId,
//             items: [],
//             totalItems: 0,
//             subtotal: 0,
//             total: 0,
//             currency: 'JOD',
//             createdAt: serverTimestamp() as any,
//             updatedAt: serverTimestamp() as any,
//         };
//
//         try {
//             const cartRef = this.getCartRef(userId);
//             await setDoc(cartRef, newCart);
//             return newCart;
//         } catch (error) {
//             console.error('Error creating cart:', error);
//             throw error;
//         }
//     }
//
//     // Add item to cart
//     static async addToCart(userId: string, cartItem: Omit<CartItem, 'id' | 'addedAt' | 'lastUpdated'>): Promise<void> {
//         try {
//             let cart = await this.getCart(userId);
//
//             if (!cart) {
//                 cart = await this.createCart(userId);
//             }
//
//             // Generate unique cart item ID
//             const cartItemId = `${cartItem.itemId}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
//
//             const newCartItem: CartItem = {
//                 ...cartItem,
//                 id: cartItemId,
//                 addedAt: serverTimestamp() as any,
//                 lastUpdated: serverTimestamp() as any,
//             };
//
//             // Check if similar item exists (same item, variation, customizations)
//             const existingItemIndex = cart.items.findIndex(item =>
//                 item.itemId === cartItem.itemId &&
//                 JSON.stringify(item.selectedVariation) === JSON.stringify(cartItem.selectedVariation) &&
//                 JSON.stringify(item.selectedOption) === JSON.stringify(cartItem.selectedOption) &&
//                 JSON.stringify(item.customizations) === JSON.stringify(cartItem.customizations)
//             );
//
//             if (existingItemIndex > -1) {
//                 // Update existing item quantity
//                 cart.items[existingItemIndex].quantity += cartItem.quantity;
//                 cart.items[existingItemIndex].totalPrice =
//                     cart.items[existingItemIndex].quantity * cart.items[existingItemIndex].unitPrice;
//                 cart.items[existingItemIndex].lastUpdated = serverTimestamp() as any;
//             } else {
//                 // Add new item
//                 cart.items.push(newCartItem);
//             }
//
//             // Recalculate totals
//             cart = this.calculateCartTotals(cart);
//             cart.updatedAt = serverTimestamp() as any;
//
//             const cartRef = this.getCartRef(userId);
//             // Spread cart properties to satisfy Firestore's type requirements
//             await updateDoc(cartRef, { ...cart });
//         } catch (error) {
//             console.error('Error adding to cart:', error);
//             throw error;
//         }
//     }
//
//     // Update cart item quantity
//     static async updateCartItemQuantity(userId: string, cartItemId: string, newQuantity: number): Promise<void> {
//         try {
//             const cart = await this.getCart(userId);
//             if (!cart) return;
//
//             const itemIndex = cart.items.findIndex(item => item.id === cartItemId);
//             if (itemIndex === -1) return;
//
//             if (newQuantity <= 0) {
//                 // Remove item if quantity is 0 or less
//                 cart.items.splice(itemIndex, 1);
//             } else {
//                 // Update quantity and recalculate price
//                 cart.items[itemIndex].quantity = newQuantity;
//                 cart.items[itemIndex].totalPrice = newQuantity * cart.items[itemIndex].unitPrice;
//                 cart.items[itemIndex].lastUpdated = serverTimestamp() as any;
//             }
//
//             // Recalculate totals
//             const updatedCart = this.calculateCartTotals(cart);
//             updatedCart.updatedAt = serverTimestamp() as any;
//
//             const cartRef = this.getCartRef(userId);
//             // Spread cart properties to satisfy Firestore's type requirements
//             await updateDoc(cartRef, { ...updatedCart });
//         } catch (error) {
//             console.error('Error updating cart item:', error);
//             throw error;
//         }
//     }
//
//     // Remove item from cart
//     static async removeFromCart(userId: string, cartItemId: string): Promise<void> {
//         try {
//             const cart = await this.getCart(userId);
//             if (!cart) return;
//
//             cart.items = cart.items.filter(item => item.id !== cartItemId);
//
//             // Recalculate totals
//             const updatedCart = this.calculateCartTotals(cart);
//             updatedCart.updatedAt = serverTimestamp() as any;
//
//             const cartRef = this.getCartRef(userId);
//             // Spread cart properties to satisfy Firestore's type requirements
//             await updateDoc(cartRef, { ...updatedCart });
//         } catch (error) {
//             console.error('Error removing from cart:', error);
//             throw error;
//         }
//     }
//
//     // Clear entire cart
//     static async clearCart(userId: string): Promise<void> {
//         try {
//             const cartRef = this.getCartRef(userId);
//             await deleteDoc(cartRef);
//         } catch (error) {
//             console.error('Error clearing cart:', error);
//             throw error;
//         }
//     }
//
//     // Calculate cart totals
//     private static calculateCartTotals(cart: Cart): Cart {
//         const subtotal = cart.items.reduce((sum, item) => sum + item.totalPrice, 0);
//         const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
//
//         // You can add tax and delivery fee logic here
//         const tax = subtotal * 0.1; // 10% tax example
//         const deliveryFee = subtotal > 50 ? 0 : 5; // Free delivery over 50 JOD
//
//         return {
//             ...cart,
//             totalItems,
//             subtotal,
//             tax,
//             deliveryFee,
//             total: subtotal + tax + deliveryFee,
//         };
//     }
//
//     // Create order from cart
//     static async createOrder(
//         userId: string,
//         customerInfo: {
//             email: string;
//             name: string;
//             shippingAddress: any;
//             customerNotes?: string;
//         }
//     ): Promise<string> {
//         try {
//             const cart = await this.getCart(userId);
//             if (!cart || cart.items.length === 0) {
//                 throw new Error('Cart is empty');
//             }
//
//             // Generate order number
//             const orderNumber = `ORD-${Date.now()}`;
//
//             const order: Omit<Order, 'id'> = {
//                 userId,
//                 orderNumber,
//                 items: cart.items,
//                 subtotal: cart.subtotal,
//                 tax: cart.tax || 0,
//                 deliveryFee: cart.deliveryFee || 0,
//                 total: cart.total,
//                 currency: cart.currency,
//                 customerEmail: customerInfo.email,
//                 customerName: customerInfo.name,
//                 shippingAddress: customerInfo.shippingAddress,
//                 status: 'pending',
//                 paymentStatus: 'pending',
//                 customerNotes: customerInfo.customerNotes,
//                 createdAt: serverTimestamp() as any,
//                 updatedAt: serverTimestamp() as any,
//             };
//
//             const ordersCollection = this.getOrdersCollection();
//             const orderRef = await addDoc(ordersCollection, order);
//
//             // Clear the cart after successful order creation
//             await this.clearCart(userId);
//
//             return orderRef.id;
//         } catch (error) {
//             console.error('Error creating order:', error);
//             throw error;
//         }
//     }
// }