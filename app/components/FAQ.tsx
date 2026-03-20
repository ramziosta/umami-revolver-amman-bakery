import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/app/ui/accordion";


const faqSections = [
    {
        title: "Ordering",
        items: [
            {
                q: "How do I place an order?",
                a: "Browse the menu and message us via WhatsApp or the contact form with your order details, preferred date, and delivery location. Orders are confirmed after availability is reviewed and payment is received."
            },
            {
                q: "How far in advance should I order?",
                a: "All orders require a minimum of 24 hours’ notice. Custom or larger orders may require additional time."
            },
            {
                q: "Do you take custom orders?",
                a: "Yes. We offer custom cakes and specialty items for select requests. Please contact us at least 48 hours in advance."
            }
        ]
    },
    {
        title: "Delivery",
        items: [
            {
                q: "What are your delivery options?",
                a: "We deliver within Amman. Orders over 60 JOD qualify for complimentary delivery; otherwise, a 5 JOD fee applies. Availability outside Amman must be confirmed in advance."
            },
            {
                q: "What happens at delivery?",
                a: "A recipient must be present to receive the order. Our driver will call and wait up to 5 minutes. If no one is available, the order will be returned with no refund or credit, as all products are perishable and require immediate refrigeration."
            },
            {
                q: "What happens if I miss my delivery?",
                a: "If delivery is missed, the order is returned after a 5-minute wait. No refunds or credits are issued. Re-delivery or same-day pickup is not guaranteed and is handled at our discretion."
            },
            {
                q: "Do you offer pickup?",
                a: "At this time, we operate as a delivery-only kitchen. Pickup options may be introduced in the future."
            }
        ]
    },
    {
        title: "Product & Care",
        items: [
            {
                q: "How should I store my order?",
                a: "All products must be refrigerated immediately upon receipt. For best quality, consume within 48 hours. Remove from the fridge 10–15 minutes before serving."
            },
            {
                q: "Do you have gluten-free options?",
                a: "We offer select gluten-free items. However, our kitchen handles wheat and other allergens, so we cannot guarantee the absence of cross-contamination."
            },
            {
                q: "What allergens are present in your kitchen?",
                a: "Our kitchen handles dairy, eggs, wheat, tree nuts, soy, and sesame. Customers with allergies should contact us before ordering."
            }
        ]
    }
];

export default function FAQ() {
    return (
        <div className="max-w-4xl mx-auto">

            {/* ── HEADER ── */}
            <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl text-umami-carbon mb-3">
                    Frequently Asked Questions
                </h2>
                <p className="text-sm text-umami-dim-grey max-w-md mx-auto">
                    Quick answers before you reach out — most questions are answered here.
                </p>
            </div>

            {/* ── SECTIONS ── */}
            <div className="space-y-10">

                {faqSections.map((section, sIndex) => (
                    <div key={sIndex}>

                        {/* Section Label */}
                        <p
                            className="text-[0.6rem] font-structural tracking-[0.35em] uppercase mb-4"
                            style={{ color: '#C9A96E' }}
                        >
                            {section.title}
                        </p>

                        {/* Accordion */}
                        <Accordion
                            type="single"
                            collapsible
                            defaultValue={sIndex === 0 ? "item-0-0" : undefined}
                            className="space-y-3"
                        >
                            {section.items.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${sIndex}-${index}`}
                                    className="border border-umami-alabaster rounded-xl px-5 py-2 bg-white transition-all duration-200 hover:shadow-md"
                                >
                                    <AccordionTrigger className="text-left font-medium text-umami-carbon text-base hover:no-underline">
                                        <div className="flex items-start gap-3">
                                            <span className="text-gold font-bold mt-0.5">?</span>
                                            {faq.q}
                                        </div>
                                    </AccordionTrigger>

                                    <AccordionContent className="pl-7 pt-2 text-sm text-umami-dim-grey leading-relaxed">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>

                    </div>
                ))}

            </div>

            {/* ── SUPPORT NOTE ── */}
            <div className="text-center mt-12">
                <p className="text-xs text-umami-dim-grey">
                    Still have a question? Message us directly — we typically respond within a few hours.
                </p>
            </div>

        </div>
    );
}