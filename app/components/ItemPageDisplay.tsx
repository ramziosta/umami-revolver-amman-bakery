import Image, {StaticImageData} from "next/image";
import Link from "next/link";
import { QuantityOption } from "@/app/data/categoryData";

export default function ItemPageDisplay({
                                            item,
                                            category,
                                            selectedImage,
                                            setSelectedImage
                                        }: any) {
    return (
        <div className="min-h-screen bg-umami-linen">

            {/* ── HERO — Full-bleed image, bottom-left text ── */}
            <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
                <Image
                    src={item.itemImages[0]}
                    alt={item.itemName}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
                <div className="relative h-full flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-14 md:pb-20 z-10">
                    {/* Eyebrow */}
                    <p
                        className="text-[0.52rem] font-structural tracking-[0.4em] uppercase mb-6"
                        style={{ color: '#C9A96E' }}
                    >
                        {category.name}
                    </p>

                    {/* Item Name */}
                    <h1 className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-[0.95]">
                        {item.itemName}
                    </h1>

                    {item.seasonal && (
                        <span
                            className="inline-block mt-5 px-4 py-1.5 font-structural text-[0.48rem] tracking-[0.25em] uppercase border border-white/40 text-white/80 self-start"
                        >
                            Seasonal
                        </span>
                    )}
                </div>
            </section>

            {/* ── DETAILS — Split layout ── */}
            <section className="grid grid-cols-1 lg:grid-cols-[58%_42%] min-h-[50vh]">

                {/* LEFT — Description + Pricing on Linen */}
                <div className="bg-umami-linen px-6 md:px-12 lg:px-16 py-16 md:py-20">

                    {/* Breadcrumb */}
                    <nav className="mb-12 flex items-center gap-2 font-body font-light text-[0.72rem] text-umami-dim-grey">
                        <Link href="/menu" className="hover:text-umami-olive-bark transition-colors duration-300">
                            Menu
                        </Link>
                        <span className="text-umami-alabaster">/</span>
                        <Link
                            href={`/menu/${category.id}`}
                            className="hover:text-umami-olive-bark transition-colors duration-300"
                        >
                            {category.name}
                        </Link>
                        <span className="text-umami-alabaster">/</span>
                        <span className="text-umami-taupe">{item.itemName}</span>
                    </nav>

                    {/* Item Heading */}
                    <h2 className="font-display text-umami-carbon text-3xl md:text-4xl lg:text-[2.8rem] leading-[1.1] mb-8">
                        {item.itemName}
                    </h2>

                    {/* Divider */}
                    <div className="w-10 h-[1.5px] mb-8" style={{ backgroundColor: '#624203' }} />

                    {/* Description */}
                    <p className="font-body font-light text-[0.85rem] leading-[1.85] text-umami-dim-grey max-w-lg mb-12">
                        {item.itemDescription}
                    </p>

                    {/* ── Options & Pricing ── */}
                    <div className="mb-12">
                        <p
                            className="text-[0.52rem] font-structural tracking-[0.4em] uppercase mb-6"
                            style={{ color: '#C9A96E' }}
                        >
                            Options &amp; Pricing
                        </p>
                        <div className="space-y-0 border-t border-umami-alabaster">
                            {item.quantityOptions.map((option: QuantityOption, index: any) => {
                                if (!option) return null;
                                return (
                                    <div
                                        key={index}
                                        className="flex justify-between items-center py-4 border-b border-umami-alabaster hover:bg-umami-alabaster/20 transition-colors duration-300 px-1"
                                    >
                                        <span className="font-body font-light text-[0.85rem] text-umami-carbon">
                                            {option.quantity}
                                        </span>
                                        <span className="font-display text-lg text-umami-carbon">
                                            {option.price}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>


                    {/* Order CTA */}
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 font-structural text-[0.55rem] tracking-[0.28em] uppercase px-10 py-4 transition-all duration-300"
                        style={{ backgroundColor: '#C9A96E', color: '#F0ECE4' }}
                        onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = '#b8944f' }}
                        onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = '#C9A96E' }}
                    >
                        Place an Order &rarr;
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
                            src={item.itemImages[0]}
                            alt={item.itemName}
                            fill
                            sizes="(max-width: 1024px) 100vw, 42vw"
                            className="object-cover"
                        />
                    </div>

                    {/* Specifications */}
                    <div className="space-y-8">
                        <div>
                            <p className="text-[0.52rem] font-structural tracking-[0.4em] uppercase text-umami-linen/50 mb-4">
                                Ingredients
                            </p>
                            <p className="font-body font-light text-[0.82rem] text-umami-linen/80 leading-[1.85]">
                                {item.ingredients}
                            </p>
                        </div>

                        <div className="w-full h-[1px] bg-umami-linen/15" />

                        <div>
                            <p className="text-[0.52rem] font-structural tracking-[0.4em] uppercase text-umami-linen/50 mb-4">
                                Allergens
                            </p>
                            <p className="font-body font-light text-[0.82rem] text-umami-linen/80 leading-[1.85]">
                                {item.allergens}
                            </p>
                        </div>

                        <div className="w-full h-[1px] bg-umami-linen/15" />

                        <div>
                            <p className="text-[0.52rem] font-structural tracking-[0.4em] uppercase text-umami-linen/50 mb-4">
                                Weight <span className="normal-case">(each)</span>
                            </p>
                            <p className="font-body font-light text-[0.82rem] text-umami-linen/80">
                                {item.weight} g
                            </p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}