import Image from "next/image";
import why from '@/app/assets/policy.jpg'

const PolicyPage = () => {
    return (
        <div className="min-h-screen bg-umami-linen">

            {/* ── HERO ── */}
            <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
                <div className="absolute inset-0">
                    <Image src={why} alt="Umami policies" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-16 max-w-4xl">
                    <p className="text-[0.52rem] font-structural tracking-[0.4em] uppercase mb-8" style={{ color: '#C9A96E' }}>
                        Policies
                    </p>

                    <h1 className="font-display text-umami-linen text-5xl sm:text-6xl md:text-7xl leading-[0.95] mb-4">
                        Clear standards.
                    </h1>
                    <p className="font-display italic text-4xl sm:text-6xl md:text-7xl leading-[0.95] mb-10" style={{ color: '#C9A96E' }}>
                        Thoughtfully applied.
                    </p>

                    <p className="font-body font-light text-sm md:text-base text-umami-alabaster/80 max-w-md leading-relaxed">
                        Every order, every interaction, and every product follows the same principle — clarity, fairness, and respect for the guest.
                    </p>
                </div>
            </section>


            {/* ── POLICY CONTENT ── */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-5xl space-y-20">

                    {/* INTRO */}
                    <div>
                        <p className="font-body text-umami-dim-grey leading-[1.9] text-sm md:text-base">
                            Umami Amman operates as a made-to-order kitchen. The following policies define how orders are placed, processed, and fulfilled, and how customer data and food safety are handled in accordance with Jordanian regulations.
                        </p>
                    </div>


                    {/* ── ORDER POLICY ── */}
                    <div>
                        <p className="text-[0.52rem] font-structural tracking-[0.4em] uppercase mb-6" style={{ color: '#C9A96E' }}>
                            Order Policy
                        </p>

                        <div className="space-y-4 font-body text-sm text-umami-dim-grey leading-[1.9]">
                            <p>Orders are made to order with a minimum notice of 24 hours.</p>
                            <p>Orders are confirmed only after acknowledgment and payment.</p>
                            <p>Messaging via WhatsApp or contact form does not constitute confirmation.</p>

                            <div className="pt-4">
                                <p className="font-display text-umami-carbon">Cancellations</p>
                                <p>48+ hours: Full refund or store credit</p>
                                <p>24–48 hours: Store credit only</p>
                                <p>Under 24 hours: No refund or credit</p>
                            </div>

                            <div className="pt-4">
                                <p className="font-display text-umami-carbon">Modifications</p>
                                <p>Changes are accepted up to 24 hours before the scheduled time.</p>
                            </div>

                            <div className="pt-4">
                                <p className="font-display text-umami-carbon">Quality Claims</p>
                                <p>Must be submitted within 24 hours with photo evidence.</p>
                            </div>
                        </div>
                    </div>


                    {/* ── PRIVACY POLICY ── */}
                    <div>
                        <p className="text-[0.52rem] font-structural tracking-[0.4em] uppercase mb-6" style={{ color: '#C9A96E' }}>
                            Privacy & Data
                        </p>

                        <div className="space-y-4 font-body text-sm text-umami-dim-grey leading-[1.9]">
                            <p>We collect only the data necessary to process orders: name, phone number, order details, and delivery information.</p>
                            <p>Communication via WhatsApp is subject to Meta’s privacy policies.</p>
                            <p>Analytics data such as IP address and browsing behavior may be collected to improve the website.</p>
                            <p>All data is used solely for order fulfillment and service improvement.</p>
                            <p>You may request access, correction, or deletion of your data at any time.</p>
                        </div>
                    </div>


                    {/* ── ALLERGEN POLICY ── */}
                    <div>
                        <p className="text-[0.52rem] font-structural tracking-[0.4em] uppercase mb-6" style={{ color: '#C9A96E' }}>
                            Allergen & Food Safety
                        </p>

                        <div className="space-y-4 font-body text-sm text-umami-dim-grey leading-[1.9]">
                            <p>Our kitchen handles dairy, eggs, wheat, tree nuts, soy, and sesame.</p>
                            <p>We cannot guarantee the absence of cross-contamination.</p>
                            <p>Customers with allergies must contact us before ordering.</p>
                            <p>Products are perishable and must be refrigerated immediately upon receipt.</p>
                            <p>Umami Amman is not responsible for improper handling after pickup or delivery.</p>
                        </div>
                    </div>


                    {/* ── TERMS ── */}
                    <div>
                        <p className="text-[0.52rem] font-structural tracking-[0.4em] uppercase mb-6" style={{ color: '#C9A96E' }}>
                            Terms of Service
                        </p>

                        <div className="space-y-4 font-body text-sm text-umami-dim-grey leading-[1.9]">
                            <p>All products are made to order and subject to availability.</p>
                            <p>All content, images, and branding remain the property of Umami Amman.</p>
                            <p>Liability is limited to the value of the order.</p>
                            <p>All terms are governed under the laws of Jordan.</p>
                        </div>
                    </div>


                    {/* ── DELIVERY ── */}
                    <div>
                        <p className="text-[0.52rem] font-structural tracking-[0.4em] uppercase mb-6" style={{ color: '#C9A96E' }}>
                            Delivery & Pickup
                        </p>

                        <div className="space-y-4 font-body text-sm text-umami-dim-grey leading-[1.9]">
                            <p>Delivery is available within Amman based on location and schedule.</p>
                            <p>Customers must be available to receive and refrigerate products immediately.</p>
                            <p>Pickup details and timing are confirmed after order approval.</p>
                        </div>
                        <br />
                        <p className="text-[0.52rem] font-structural tracking-[0.4em] uppercase mb-6" style={{ color: '#C9A96E' }}>Handover Requirement</p>
                        <div className="space-y-4 font-body text-sm text-umami-dim-grey leading-[1.9]">
                            <p>A recipient must be present at the time of delivery.</p>
                            <p>If no one is available, the driver will call and wait up to 5 minutes.</p>
                            <p>If unanswered, the order is returned. No refunds or exceptions apply.</p>
                        </div>


                    </div>


                    {/* ── CLOSING ── */}
                    <div className="pt-10 border-t border-umami-alabaster">
                        <p className="font-body text-sm text-umami-dim-grey leading-[1.9] mb-4">
                            These policies exist to ensure clarity, consistency, and the highest standard of product quality.
                        </p>

                        <p className="font-display italic text-umami-carbon">
                            Every detail matters.
                        </p>

                        <p className="text-[0.8rem] font-structural tracking-[0.4em] uppercase mt-4" style={{ color: '#C9A96E' }}>
                            That is Umami.
                        </p>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default PolicyPage;