// components/ItemPage/VariationSelector.tsx
// import { Variation } from "@/app/data/categoryData";
//
// interface VariationSelectorProps {
//     variations: Variation[];
//     selectedVariation: Variation | null;
//     onSelect: (variation: Variation) => void;
// }
//
// export function VariationSelector({ variations, selectedVariation, onSelect }: VariationSelectorProps) {
//     return (
//         <div>
//             <h3 className="text-xl font-ppneuemontreal uppercase tracking-widest text-umami-charcoal mb-4">
//                 Available Variations
//             </h3>
//             <div className="space-y-4">
//                 {variations.map((variation: Variation) => (
//                     <button
//                         key={variation.id}
//                         onClick={() => onSelect(variation)}
//                         className={`w-full flex justify-between text-left border p-4 rounded font-ppneuemontreal transition ${
//                             selectedVariation?.id === variation.id
//                                 ? 'border-umami-black bg-umami-nube'
//                                 : 'border-umami-charcoal hover:bg-umami-nube'
//                         }`}
//                     >
//                         <span className="font-ppneuemontreal text-umami-black">
//                             {variation.name}
//                         </span>
//                         <span className="text-lg text-umami-charcoal">
//                             {variation.price}
//                         </span>
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// }