// components/ItemPage/ItemDetails.tsx
import Link from "next/link";
import { CartHelper } from "@/app/utils/cartHelpers";
import { QuantitySelector } from "./QuantitySelector";
import { VariationSelector } from "./VariationSelector";
import { QuantityOptionsDisplay } from "./QuantityOptionsDisplay";
import { AddToCartSection } from "./AddToCartSection";

interface ItemDetailsProps {
    item: any;
    category: any;
    cartState: any;
    setCartState: any;
    cartError: string | null;
    isLoggedIn: boolean;
    addToCart: any;
    setSelectedImage: any;
}

export function ItemDetails({
                                item,
                                category,
                                cartState,
                                setCartState,
                                cartError,
                                isLoggedIn,
                                addToCart,
                                setSelectedImage
                            }: ItemDetailsProps) {
    const options = CartHelper.getItemOptions(item, category);

    return (
        <div className="space-y-8">
            {/* Item Info */}
            <div>
                <h2 className="text-3xl lg:text-5xl font-blanka tracking-[0.15em] mb-4">
                    {item.itemName}
                </h2>
                {item.seasonal && (
                    <span className="inline-block mb-6 px-4 py-2 bg-umami-black text-umami-white text-xs rounded-full">
                        Seasonal Specialty
                    </span>
                )}
                <p className="text-umami-black font-ppneuemontreal leading-relaxed">
                    {item.itemDescription}
                </p>
            </div>

            {/* Cart Messages */}
            {cartError && (
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                    {cartError}
                </div>
            )}
            {cartState.addToCartSuccess && (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                    Item added to cart successfully!
                </div>
            )}

            <QuantitySelector
                quantity={cartState.quantity}
                setQuantity={(quantity) => setCartState((prev: typeof cartState) => ({ ...prev, quantity }))}
            />

            {item.variations && item.variations.length > 0 && (
                <VariationSelector
                    variations={item.variations}
                    selectedVariation={cartState.selectedVariation}
                    onSelect={(variation) => {
                        setCartState((prev: typeof cartState) => ({ ...prev, selectedVariation: variation }));
                        if (variation.images && variation.images.length > 0) {
                            setSelectedImage(variation.images[0]);
                        }
                    }}
                />
            )}

            <QuantityOptionsDisplay
                item={item}
                options={options}
                selectedQuantityOption={cartState.selectedQuantityOption}
                onSelect={(option) => setCartState((prev: typeof cartState) => ({ ...prev, selectedQuantityOption: option }))}
            />

            {/* Product Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-ppneuemontreal uppercase tracking-widest text-umami-charcoal mb-2">
                        Ingredients
                    </h3>
                    <p className="text-umami-black text-sm">{item.ingredients}</p>
                </div>
                <div>
                    <h3 className="text-xl font-ppneuemontreal uppercase tracking-widest text-umami-charcoal mb-2">
                        Allergens
                    </h3>
                    <p className="text-umami-black text-sm">{item.allergens}</p>
                </div>
                <div>
                    <h3 className="text-xl font-ppneuemontreal uppercase tracking-widest text-umami-charcoal mb-2">
                        Weight <span className="text-umami-charcoal lowercase text-sm">(each)</span>
                    </h3>
                    <p className="text-umami-black text-sm">{item.weight} g</p>
                </div>
            </div>

            <AddToCartSection
                item={item}
                category={category}
                cartState={cartState}
                setCartState={setCartState}
                isLoggedIn={isLoggedIn}
                addToCart={addToCart}
            />

            {!isLoggedIn && (
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-800 text-sm">
                        <Link href="/login" className="underline hover:text-blue-900">Login</Link> or{" "}
                        <Link href="/login" className="underline hover:text-blue-900">create an account</Link>{" "}
                        to add items to your cart and place orders.
                    </p>
                </div>
            )}
        </div>
    );
}