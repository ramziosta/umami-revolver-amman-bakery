import Link from "next/link";
import {Button} from "@/app/ui/button";
import Image from "next/image";
import why from "@/app/assets/why.png";
import {ArrowDown} from "lucide-react";


export default function Page() {
    return (
        <div>
            {/* Hero Section */}

            <section className="relative w-full h-screen sm:h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image (resizes with section) */}
                <div className="absolute inset-0">
                    <Image
                        src={why}
                        alt="Artisan Pound Cake"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-[10vh] sm:pt-[12vh] md:pt-0 flex flex-col items-center justify-center">
                    <p className="uppercase text-umami-nube font-ppneuemontreal text-sm sm:text-base tracking-widest mb-4 opacity-90">
                        Welcome to
                    </p>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-blanka text-umami-nube tracking-[0.1em] mb-6">
                        UMAMI AMMAN
                    </h1>
                    <p className="max-w-2xl mx-auto font-ppneuemontreal text-umami-nube text-base sm:text-lg md:text-xl xl:text-2xl tracking-[0.05em] leading-relaxed">
                        Where global flavors, local soul, and honest craft meet. We craft pastries that blend seasonality, timeless technique, and bold, modern flavors.
                    </p>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ArrowDown className="h-8 w-8 sm:h-10 sm:w-10 text-umami-nube" />
                </div>
            </section>
            <section className="grid grid-cols-1 mb-10 md:grid-cols-[60%_40%] min-h-[50vh]">
                {/* LEFT SIDE */}
                <div className="bg-umami-nube text-black px-8 md:px-16 py-16 flex flex-col justify-center">
                    <div className="flex flex-col ml-0 md:ml-24 space-y-4">

                        <h1 className="text-8xl md:text-[100px] font-blanka leading-none">
                            A Taste of Something Unique
                        </h1>

                        <h2 className="text-2xl md:text-4xl leading-snug">
                           <span className="text-5xl font-blanka leading-none">UMAMI</span> isn’t just the fifth taste — it’s the one that lingers. The one that makes a bite unforgettable. For us, it’s a promise of balance, warmth, and craft.
                        </h2>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="bg-black text-white px-10 md:px-10 py-20 flex flex-col justify-center">
                    <p className="text-2xl md:text-4xl font-light leading-tight mb-3">From our Jordanian roots to New York City’s vibrant kitchens, Umami blends seasonal ingredients, timeless technique, and bold flavor — all made by hand, with care.</p>
                    <p className="text-2xl md:text-4xl font-light leading-tight mb-2"> Whether you’re here for a delicate pastry, a handcrafted cake, or a moment shared over good food — Umami Amman is where global inspiration and local soul come together.
                    </p>
                </div>
            </section>
            {/* Story Section */}
            <section className="py-16 bg-umami-white">
                <div className="flex justify-center">
                    <Button asChild className="bg-white border border-black/30 text-umami-dark hover:bg-umami-nube font-ppneuemontreal tracking-wider">
                        <Link href="/menu">Explore Our Menu</Link>
                    </Button>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-16 bg-umami-nube">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-ppneuemontreal mb-8">Our Philosophy</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
                        <div className="bg-white/60 p-6 rounded-xl">
                            <h3 className="font-ppneuemontreal text-xl mb-4 text-umami-dark">Rooted in the Seasons</h3>
                            <p className="text-muted-foreground font-ppneuemontreal">
                                We craft pastries and viennoiserie with the finest ingredients each season brings — ensuring every bite is fresh, vibrant, and true to nature.
                            </p>
                        </div>
                        <div className="bg-white/60 p-6 rounded-xl">
                            <h3 className="font-ppneuemontreal text-xl mb-4 text-umami-dark">Crafted with Precision</h3>
                            <p className="text-muted-foreground font-ppneuemontreal">
                                We honor classical pastry methods while embracing modern ideas — creating confections that comfort, surprise, and delight.
                            </p>
                        </div>
                        <div className="bg-white/60 p-6 rounded-xl">
                            <h3 className="font-ppneuemontreal text-xl mb-4 text-umami-dark">Made with Intention</h3>
                            <p className="text-muted-foreground font-ppneuemontreal">
                                From sourcing to preparation, we hold every detail to the highest standards of care.
                            </p>
                        </div>
                    </div>

                    <blockquote className="text-xl font-cormorant italic mb-8">
                        “Pastries that spark connection. Memory. A story worth sharing.”
                    </blockquote>

                    <div className="flex justify-center">
                        <Button
                            asChild
                            className="bg-white border border-black/30 text-umami-dark hover:bg-umami-nube hover:text-umami-dark font-ppneuemontreal tracking-wider transition-colors duration-300"
                        >
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
