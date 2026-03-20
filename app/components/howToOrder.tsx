import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/app/ui/accordion";

const orderSteps = [
    {
        q: "Step 1 — Browse the Menu",
        a: "Explore our full selection of cakes, pastries, and specialty items online. Take note of sizes, flavors, and available custom options."
    },
    {
        q: "Step 2 — Choose Your Item",
        a: "Decide on the item(s) you want to order, including quantity, flavor variations, and any personalization or custom requests."
    },
    {
        q: "Step 3 — Contact Us",
        a: "Message us via WhatsApp, direct messaging on our instagram or the contact form. For WhatsApp, we recommend using this pre-filled template:\n\n\"Hi, I'd like to order [item name] for [date]. Pickup/Delivery to [location].\""
    },
    {
        q: "Step 4 — Confirm Availability & Payment",
        a: "We will confirm your order availability within 2–4 hours during business hours. Custom or large orders may require additional review. Payment instructions will be sent, including deposit requirements (50% non-refundable for large/custom orders; full payment for standard cakes)."
    },
    {
        q: "Step 5 — Delivery & Pickup",
        a: "Delivery is available within Amman. A recipient must be present to receive the order. Our driver will call and wait up to 5 minutes. If no one is available, the order will be returned, with no refund or credit, as products are perishable and require immediate refrigeration. Pickup may be available upon request."
    },
    {
        q: "Step 6 — Cake Care",
        a: "Refrigerate immediately upon receipt. Remove 10–15 minutes before serving for optimal taste. Mille crêpe cakes are delicate and should never be left out in hot conditions."
    }
];

export default function HowToOrder() {
    return (
        <div className="max-w-4xl mx-auto">

            {/* ── HEADER ── */}
            <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl text-umami-carbon mb-3">
                    How to Order
                </h2>
                <p className="text-sm text-umami-dim-grey max-w-md mx-auto">
                    A step-by-step guide to ensure your pre-order experience is smooth and precise.
                </p>
            </div>

            {/* ── ORDER STEPS ACCORDION ── */}
            <Accordion
                type="single"
                collapsible
                defaultValue="step-0"
                className="space-y-4"
            >
                {orderSteps.map((step, index) => (
                    <AccordionItem
                        key={index}
                        value={`step-${index}`}
                        className="border border-umami-alabaster rounded-xl px-5 py-3 bg-white transition-all duration-200 hover:shadow-md"
                    >
                        <AccordionTrigger className="text-left font-medium text-umami-carbon text-base hover:no-underline">
                            <div className="flex items-start gap-3">
                                <span className="text-gold font-bold mt-0.5">{index + 1}</span>
                                {step.q}
                            </div>
                        </AccordionTrigger>

                        <AccordionContent className="pl-8 pt-2 text-sm text-umami-dim-grey leading-relaxed whitespace-pre-line">
                            {step.a}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>

            {/* ── SUPPORT NOTE ── */}
            <div className="text-center mt-12">
                <p className="text-xs text-umami-dim-grey">
                    Questions? Message us directly — we typically respond within a few hours.
                </p>
            </div>
            <br />
            <br />

        </div>
    );
}