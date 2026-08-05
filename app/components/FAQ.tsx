import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/app/ui/accordion";
import { useTranslations } from "next-intl";

type FaqQA = { q: string; a: string };

export default function FAQ() {
    const t = useTranslations('faq');

    const sectionKeys = ['ordering', 'delivery', 'productCare'] as const;
    const sections = sectionKeys.map((key) => ({
        key,
        title: t(`sections.${key}.title`),
        items: t.raw(`sections.${key}.items`) as FaqQA[],
    }));
    const orderSteps = t.raw('howToOrder.steps') as FaqQA[];

    return (
        <div className="max-w-4xl mx-auto py-12">

            {/* ── FAQ SECTION ── */}
            <div className="mb-16">
                <div className="text-center mb-12">
                    <h2 className="font-display text-3xl md:text-4xl text-umami-carbon mb-3">
                        {t('title')}
                    </h2>
                    <p className="text-sm text-umami-dim-grey max-w-md mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                {sections.map((section, sIndex) => (
                    <div key={section.key} className="mb-10">
                        <p
                            className="text-[0.875rem] font-structural tracking-[0.13em] uppercase mb-4"
                            style={{ color: '#C9A96E' }}
                        >
                            {section.title}
                        </p>

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
                                    className="border border-umami-alabaster rounded-xl px-5 py-3 bg-white transition-all duration-200 hover:shadow-md"
                                >
                                    <AccordionTrigger className="text-start font-medium text-umami-carbon text-base hover:no-underline">
                                        <div className="flex items-start gap-3">
                                            <span className="text-gold font-bold mt-0.5">?</span>
                                            {faq.q}
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="ps-8 pt-2 text-sm text-umami-dim-grey leading-relaxed whitespace-pre-line">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                ))}
            </div>

            {/* ── HOW TO ORDER SECTION ── */}
            <div>
                <div className="text-center mb-12">
                    <h2 className="font-display text-3xl md:text-4xl text-umami-carbon mb-3">
                        {t('howToOrder.title')}
                    </h2>
                    <p className="text-sm text-umami-dim-grey max-w-md mx-auto">
                        {t('howToOrder.subtitle')}
                    </p>
                </div>

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
                            <AccordionTrigger className="text-start font-medium text-umami-carbon text-base hover:no-underline">
                                <div className="flex items-start gap-3">
                                    <span className="text-gold font-bold mt-0.5">{index + 1}</span>
                                    {step.q}
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="ps-8 pt-2 text-sm text-umami-dim-grey leading-relaxed whitespace-pre-line">
                                {step.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>

            {/* ── SUPPORT NOTE ── */}
            <div className="text-center mt-12">
                <p className="text-xs text-umami-dim-grey">
                    {t('supportNote')}
                </p>
            </div>

        </div>
    );
}
