

// export default function PreOrderPopup() {
//     const [show, setShow] = useState(false);
//
//     useEffect(() => {
//         const seen = localStorage.getItem("preOrderSeen");
//         if (!seen) {
//             setShow(true);
//         }
//     }, []);
//
//     const handleClose = () => {
//         setShow(false);
//         localStorage.setItem("preOrderSeen", "true");
//     };
//
//     if (!show) return null;
//
//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
//             <div
//                 className="bg-umami-linen p-10 md:p-12 w-[90%] max-w-lg text-center relative border border-umami-alabaster"
//             >
//                 <button
//                     onClick={handleClose}
//                     className="absolute top-4 right-5 text-umami-dim-grey hover:text-umami-carbon text-xl transition-colors duration-300"
//                     aria-label="Close"
//                 >
//                     &times;
//                 </button>
//
//                 <p className="text-[0.52rem] font-structural tracking-[0.35em] uppercase text-umami-olive-bark mb-5">
//                     Pre-Order Only
//                 </p>
//
//                 <h2 className="font-display text-umami-carbon text-2xl md:text-3xl leading-tight mb-4">
//                     Every cake is made<br />
//                     <em className="text-umami-taupe">to your order.</em>
//                 </h2>
//
//                 <p className="font-body font-light text-[0.82rem] text-umami-dim-grey leading-relaxed mb-8">
//                     All mille-crêpe cakes are made to order and require extensive multi-day preparation.
//
//                     To confirm your order, a 50% non-refundable deposit is required.
//
//                     * Orders require 48–72 hours notice depending on the cake design and production schedule.
//                     * Because ingredients and production begin immediately after confirmation, cancellations or date changes made after booking cannot be fully refunded.
//                     * The remaining balance is due before pickup or delivery.
//
//                     Thank you for understanding the care and preparation involved in each cake.
//                 </p>
//
//                 <button
//                     onClick={handleClose}
//                     className="font-structural text-[0.55rem] tracking-[0.28em] uppercase px-8 py-3 bg-umami-olive-bark text-umami-linen hover:bg-umami-dark-walnut transition-colors duration-300"
//                 >
//                     Understood
//                 </button>
//             </div>
//         </div>
//     );
// }

"use client";

import { useEffect, useState } from "react";

export default function PreOrderPopup() {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-y-auto py-4 px-4">
            <div className="bg-umami-linen p-10 md:p-12 w-full max-w-lg text-center relative border border-umami-alabaster max-h-[90vh] overflow-y-auto my-auto">
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-5 text-umami-dim-grey hover:text-umami-carbon text-xl transition-colors duration-300"
                    aria-label="Close"
                >
                    &times;
                </button>

                <p className="text-[0.52rem] font-structural tracking-[0.35em] uppercase text-umami-olive-bark mb-5">
                    Pre-Order Only
                </p>

                <h2 className="font-display text-umami-carbon text-2xl md:text-3xl leading-tight mb-4">
                    Every cake is made<br />
                    <em className="text-umami-taupe">to your order.</em>
                </h2>

                <div className="font-body font-light text-[0.82rem] text-umami-dim-grey leading-relaxed mb-8 space-y-3 text-left">
                    <p>
                        All mille-crêpe cakes are made to order and require extensive multi-day preparation.
                    </p>
                    <p>
                        To confirm your order, a 50% non-refundable deposit is required.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            Orders require 48–72 hours notice depending on the cake design and production schedule.
                        </li>
                        <li>
                            Because ingredients and production begin immediately after confirmation, cancellations or date changes made after booking cannot be fully refunded.
                        </li>
                        <li>
                            The remaining balance is due before pickup or delivery.
                        </li>
                    </ul>
                    <p>
                        Thank you for understanding the care and preparation involved in each cake.
                    </p>
                </div>

                <button
                    onClick={handleClose}
                    className="font-structural text-[0.55rem] tracking-[0.28em] uppercase px-8 py-3 bg-umami-olive-bark text-umami-linen hover:bg-umami-dark-walnut transition-colors duration-300 mb-8"
                >
                    Understood
                </button>

                <p
                    className="text-[1rem] font-structural tracking-[0.22em] uppercase text-umami-olive-bark mb-5 text-center"
                    dir="rtl"
                >
                    للطلب المسبق فقط
                </p>

                <h2
                    className="font-display text-umami-carbon text-2xl md:text-3xl leading-tight mb-4 text-center"
                    dir="rtl"
                >
                    كل كيك يُحضّر<br />
                    <em className="text-umami-taupe not-italic">
                        خصيصًا لطلبك.
                    </em>
                </h2>

                <div
                    className="font-body font-light text-[0.82rem] text-umami-dim-grey leading-relaxed mb-8 space-y-3 text-center"
                    dir="rtl"
                >
                    <p>
                        جميع كيكات الميل كريب تُحضّر حسب الطلب وتتطلب تحضيرًا دقيقًا يمتد على عدة أيام.
                    </p>
                    <p>
                        لتأكيد الطلب، يتطلب دفع عربون غير قابل للاسترداد بقيمة 50٪ من إجمالي الطلب.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            تتطلب الطلبات إشعارًا مسبقًا من 48 إلى 72 ساعة حسب تصميم الكيك وجدول التحضير.
                        </li>
                        <li>
                            نظرًا لبدء تجهيز المكونات والإنتاج مباشرة بعد تأكيد الطلب، لا يمكن استرداد المبلغ بالكامل عند الإلغاء أو تعديل موعد الطلب بعد التأكيد.
                        </li>
                        <li>
                            يتم دفع المبلغ المتبقي قبل الاستلام أو التوصيل.
                        </li>
                    </ul>
                    <p>
                        شكرًا لتقديركم العناية والتفاصيل الدقيقة التي تدخل في تحضير كل كيك.
                    </p>
                </div>
            </div>
        </div>
    );
}