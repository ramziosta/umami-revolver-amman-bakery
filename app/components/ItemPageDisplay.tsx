import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Category, CategoryItem, QuantityOption } from "@/app/data/categoryData";

export default function ItemPageDisplay({
                                            item,
                                            category,
                                            locale,
                                            selectedImage,
                                            setSelectedImage
                                        }: {
    item: CategoryItem;
    category: Category;
    locale: 'en' | 'ar';
    selectedImage: any;
    setSelectedImage: (image: any) => void;
}) {
    const t = useTranslations('item');
    const tc = useTranslations('common');
    const tCategory = useTranslations('category');

    return (
        <div className="min-h-screen bg-umami-linen">

            {/* ── HERO — Full-bleed image, bottom-left text ── */}
            <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
                <Image
                    src={selectedImage}
                    alt={item.itemName[locale]}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
                <div className="relative h-full flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-14 md:pb-20 z-10">
                    {/* Eyebrow */}
                    <p
                        className="text-[0.75rem] font-structural tracking-[0.15em] uppercase mb-6"
                        style={{ color: '#C9A96E' }}
                    >
                        {category.name[locale]}
                    </p>

                    {/* Item Name */}
                    <h1 className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-[0.95]">
                        {item.itemName[locale]}
                    </h1>

                    {item.seasonal && (
                        <span
                            className="inline-block mt-5 px-4 py-1.5 font-structural text-[0.75rem] tracking-[0.08em] uppercase border border-white/40 text-white/80 self-start"
                        >
                            {tc('seasonal')}
                        </span>
                    )}
                </div>
            </section>

            {/* ── THUMBNAILS — only shown when there's more than one photo ── */}
            {item.itemImages.length > 1 && (
                <div className="bg-umami-linen px-6 md:px-12 lg:px-16 py-6 flex gap-3 overflow-x-auto">
                    {item.itemImages.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedImage(image)}
                            className="relative shrink-0 w-20 h-20 md:w-24 md:h-24 overflow-hidden transition-opacity duration-300"
                            style={{
                                outline: image === selectedImage ? '2px solid #C9A96E' : '2px solid transparent',
                                outlineOffset: '2px',
                                opacity: image === selectedImage ? 1 : 0.6,
                            }}
                            aria-label={`${item.itemName[locale]} ${index + 1}`}
                        >
                            <Image
                                src={image}
                                alt={`${item.itemName[locale]} ${index + 1}`}
                                fill
                                sizes="96px"
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}

            {/* ── DETAILS — Split layout ── */}
            <section className="grid grid-cols-1 lg:grid-cols-[58%_42%] min-h-[50vh]">

                {/* LEFT — Description + Pricing on Linen */}
                <div className="bg-umami-linen px-6 md:px-12 lg:px-16 py-16 md:py-20">

                    {/* Breadcrumb */}
                    <nav className="mb-12 flex items-center gap-2 font-body font-light text-[0.8125rem] text-umami-dim-grey">
                        <Link href="/menu" className="hover:text-umami-olive-bark transition-colors duration-300">
                            {tCategory('menuBreadcrumb')}
                        </Link>
                        <span className="text-umami-alabaster">/</span>
                        <Link
                            href={`/menu/${category.id}`}
                            className="hover:text-umami-olive-bark transition-colors duration-300"
                        >
                            {category.name[locale]}
                        </Link>
                        <span className="text-umami-alabaster">/</span>
                        <span className="text-umami-taupe">{item.itemName[locale]}</span>
                    </nav>

                    {/* Item Heading */}
                    <h2 className="font-display text-umami-carbon text-3xl md:text-4xl lg:text-[2.8rem] leading-[1.1] mb-8">
                        {item.itemName[locale]}
                    </h2>

                    {/* Divider */}
                    <div className="w-10 h-[1.5px] mb-8" style={{ backgroundColor: '#624203' }} />

                    {/* Description */}
                    <p className="font-body font-light text-[1rem] leading-[1.85] text-umami-dim-grey max-w-lg mb-12">
                        {item.itemDescription[locale]}
                    </p>

                    {/* ── Options & Pricing ── */}
                    <div className="mb-12">
                        <p
                            className="text-[0.75rem] font-structural tracking-[0.15em] uppercase mb-6"
                            style={{ color: '#C9A96E' }}
                        >
                            {t('optionsAndPricing')}
                        </p>
                        <div className="space-y-0 border-t border-umami-alabaster">
                            {item.quantityOptions.map((option: QuantityOption, index: number) => {
                                if (!option) return null;
                                return (
                                    <div
                                        key={index}
                                        className="flex justify-between items-center py-4 border-b border-umami-alabaster hover:bg-umami-alabaster/20 transition-colors duration-300 px-1"
                                    >
                                        <span className="font-body font-light text-[1rem] text-umami-carbon">
                                            {option.quantity[locale]}
                                        </span>
                                        <span className="font-display text-lg text-umami-carbon">
                                            {option.price}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* ── Variations ── */}
                    {item.variations.length > 0 && (
                        <div className="mb-12">
                            <p
                                className="text-[0.75rem] font-structural tracking-[0.15em] uppercase mb-6"
                                style={{ color: '#C9A96E' }}
                            >
                                {t('variations')}
                            </p>
                            <div className="space-y-4">
                                {item.variations.map((variation) => (
                                    <div key={variation.id}>
                                        <p className="font-display text-umami-carbon text-lg">
                                            {variation.name[locale]}
                                        </p>
                                        {variation.description[locale] && (
                                            <p className="font-body font-light text-[0.9375rem] text-umami-dim-grey leading-[1.7]">
                                                {variation.description[locale]}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}


                    {/* Order CTA */}
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 font-structural text-[0.875rem] tracking-[0.1em] uppercase px-10 py-4 transition-all duration-300"
                        style={{ backgroundColor: '#C9A96E', color: '#F0ECE4' }}
                        onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = '#b8944f' }}
                        onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = '#C9A96E' }}
                    >
                        {tc('placeAnOrder')} {locale === 'ar' ? '←' : '→'}
                    </Link>
                </div>

                {/* RIGHT — Specs on Dusty Taupe */}
                <div
                    className="px-8 md:px-12 lg:px-14 py-16 md:py-20 flex flex-col justify-start"
                    style={{ backgroundColor: '#8F7F70' }}
                >
                    {/* Secondary Image */}
                    <div className="relative h-64 md:h-80 overflow-hidden mb-12">
                        <Image
                            src={selectedImage}
                            alt={item.itemName[locale]}
                            fill
                            sizes="(max-width: 1024px) 100vw, 42vw"
                            className="object-cover"
                        />
                    </div>

                    {/* Specifications */}
                    <div className="space-y-8">
                        <div>
                            <p className="text-[0.75rem] font-structural tracking-[0.15em] uppercase text-umami-linen/50 mb-4">
                                {t('ingredients')}
                            </p>
                            <p className="font-body font-light text-[0.9375rem] text-umami-linen/80 leading-[1.85]">
                                {item.ingredients[locale]}
                            </p>
                        </div>

                        <div className="w-full h-[1px] bg-umami-linen/15" />

                        <div>
                            <p className="text-[0.75rem] font-structural tracking-[0.15em] uppercase text-umami-linen/50 mb-4">
                                {t('allergens')}
                            </p>
                            <p className="font-body font-light text-[0.9375rem] text-umami-linen/80 leading-[1.85]">
                                {item.allergens[locale]}
                            </p>
                        </div>

                        {item.weight[locale] && (
                            <>
                                <div className="w-full h-[1px] bg-umami-linen/15" />
                                <div>
                                    <p className="text-[0.75rem] font-structural tracking-[0.15em] uppercase text-umami-linen/50 mb-4">
                                        {t('weightEach')}
                                    </p>
                                    <p className="font-body font-light text-[0.9375rem] text-umami-linen/80">
                                        {item.weight[locale]}
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>

            </section>
        </div>
    );
}
