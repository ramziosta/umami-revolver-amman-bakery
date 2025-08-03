

// components/ItemPage/QuantitySelector.tsx
interface QuantitySelectorProps {
    quantity: number;
    setQuantity: (quantity: number) => void;
}

export function QuantitySelector({ quantity, setQuantity }: QuantitySelectorProps) {
    return (
        <div>
            <h3 className="text-xl font-ppneuemontreal uppercase tracking-widest text-umami-charcoal mb-4">
                Quantity
            </h3>
            <div className="flex items-center space-x-4">
                <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-umami-charcoal rounded flex items-center justify-center hover:bg-umami-charcoal hover:text-umami-white transition"
                >
                    -
                </button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-umami-charcoal rounded flex items-center justify-center hover:bg-umami-charcoal hover:text-umami-white transition"
                >
                    +
                </button>
            </div>
        </div>
    );
}
