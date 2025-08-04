// // components/ItemPage/AddToCartSection.tsx
// import Link from "next/link";
// import { CartHelper } from "@/app/utils/cartHelpers";
//
// interface AddToCartSectionProps {
//     item: any;
//     category: any;
//     cartState: any;
//     setCartState: any;
//     isLoggedIn: boolean;
//     addToCart: any;
// }
//
// export function AddToCartSection({
//                                      item,
//                                      category,
//                                      cartState,
//                                      setCartState,
//                                      isLoggedIn,
//                                      addToCart
//                                  }: AddToCartSectionProps) {
//     const handleAddToCart = async () => {
//         if (!isLoggedIn) {
//             alert('Please login to add items to cart');
//             return;
//         }
//
//         const validation = CartHelper.validateCartItem({
//             item,
//             categoryId: category.id,
//             quantity: cartState.quantity,
//             selectedOption: cartState.selectedQuantityOption || undefined,
//             selectedVariation: cartState.selectedVariation || undefined,
//         });
//
//         if (!validation.isValid) {
//             alert(validation.error);
//             return;
//         }
//
//         setCartState((prev: { isAddingToCart: boolean; addToCartSuccess: boolean }) => ({ ...prev, isAddingToCart: true, addToCartSuccess: false }));
//
//         try {
//             const cartItem = CartHelper.createCartItem({
//                 item,
//                 categoryId: category.id,
//                 quantity: cartState.quantity,
//                 selectedOption: cartState.selectedQuantityOption || undefined,
//                 selectedVariation: cartState.selectedVariation || undefined,
//             });
//
//             await addToCart(cartItem);
//             setCartState((prev: typeof cartState) => ({ ...prev, addToCartSuccess: true }));
//
//             setTimeout(() => setCartState((prev: typeof cartState) => ({ ...prev, addToCartSuccess: false })), 2000);
//         } catch (error) {
//             console.error('Error adding to cart:', error);
//         } finally {
//             setCartState((prev: typeof cartState) => ({ ...prev, isAddingToCart: false }));
//         }
//     };
//
//     return (
//         <div className="flex flex-col sm:flex-row gap-4">
//             <button
//                 onClick={handleAddToCart}
//                 disabled={cartState.isAddingToCart || !isLoggedIn}
//                 className={`flex-1 py-3 px-6 rounded-lg font-semibold transition ${
//                     cartState.isAddingToCart || !isLoggedIn
//                         ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
//                         : 'bg-umami-charcoal text-umami-white hover:bg-umami-black'
//                 }`}
//             >
//                 {cartState.isAddingToCart ? 'Adding...' : !isLoggedIn ? 'Login to Add to Cart' : 'Add to Cart'}
//             </button>
//             <Link
//                 href={`/menu/${category.id}`}
//                 className="flex-1 px-6 py-3 border border-umami-charcoal text-umami-charcoal rounded-lg font-semibold text-center hover:bg-umami-charcoal hover:text-umami-white transition"
//             >
//                 Back to Category
//             </Link>
//         </div>
//     );
// }