// // components/ItemPage/QuantityOptionsDisplay.tsx
// import { QuantityOption } from "@/app/data/categoryData";
// import { CartHelper } from "@/app/utils/cartHelpers";
//
// interface QuantityOptionsDisplayProps {
//     item: any;
//     options: any;
//     selectedQuantityOption: QuantityOption | null;
//     onSelect: (option: QuantityOption) => void;
// }
//
// export function QuantityOptionsDisplay({
//                                            item,
//                                            options,
//                                            selectedQuantityOption,
//                                            onSelect
//                                        }: QuantityOptionsDisplayProps) {
//     // Render selectable quantity options (for items with different sizes/portions)
//     if (options.quantityOptions && options.quantityOptions.length > 0) {
//         return (
//             <div>
//                 <h3 className="text-xl font-ppneuemontreal uppercase tracking-widest text-umami-charcoal mb-4">
//                     Size & Pricing Options
//                 </h3>
//                 <div className="space-y-3">
//                     {options.quantityOptions.map((option: QuantityOption, index: number) => (
//                         <button
//                             key={index}
//                             onClick={() => onSelect(option)}
//                             className={`w-full flex justify-between items-center p-4 rounded-lg border font-ppneuemontreal transition ${
//                                 selectedQuantityOption === option
//                                     ? 'border-umami-black bg-umami-nube'
//                                     : 'border-umami-charcoal hover:bg-umami-nube'
//                             }`}
//                         >
//                             <span className="text-umami-black">
//                                 {option.quantity}
//                             </span>
//                             <span className="text-lg text-umami-charcoal">
//                                 {CartHelper.formatPrice(option.price)}
//                             </span>
//                         </button>
//                     ))}
//                 </div>
//             </div>
//         );
//     }
//
//     // Render display-only quantity options (for items without selectable options)
//     if (!options.quantityOptions && item.quantityOptions && item.quantityOptions.length > 0) {
//         return (
//             <div>
//                 <h3 className="text-xl font-ppneuemontreal uppercase tracking-widest text-umami-charcoal mb-4">
//                     Quantity & Pricing
//                 </h3>
//                 <div className="space-y-3">
//                     {item.quantityOptions.map((option: QuantityOption, index: number) => {
//                         if (!option) return null;
//                         return (
//                             <div
//                                 key={index}
//                                 className="flex justify-between items-center p-3 bg-umami-white border border-umami-charcoal rounded-lg"
//                             >
//                                 <span className="font-ppneuemontreal text-umami-black">
//                                     {option.quantity}
//                                 </span>
//                                 <span className="text-lg text-umami-charcoal">
//                                     {option.price}
//                                 </span>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         );
//     }
//
//     return null;
// }