import Link from "next/link";
import {Button} from "@/app/ui/button";
import Image from "next/image";
import why from "@/app/assets/kouigan-amann3.jpg";
import {ArrowDown} from "lucide-react";


export default function Page() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src={why}
                        alt="Artisan Pound Cake"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-[5vh] sm:pt-[10vh] md:pt-0 flex flex-col items-center justify-center">
                    <p className="uppercase text-umami-nube font-ppneuemontreal text-base tracking-widest mb-4 opacity-90">
                        Welcome to
                    </p>
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-blanka text-umami-nube tracking-[0.1em] mb-6">
                        UMAMI AMMAN
                    </h1>
                    <p className="max-w-2xl mx-auto font-ppneuemontreal text-umami-nube text-lg md:text-xl xl:text-3xl tracking-[0.05em] leading-relaxed">
                        Where global flavors, local soul, and honest craft meet. We craft pastries that blend seasonality, timeless technique, and bold, modern flavors.
                    </p>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ArrowDown className="h-10 w-10 text-umami-nube" />
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16 bg-umami-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            {/* Optionally add image here */}
                        </div>
                        <div>
                            <h2 className="text-4xl font-ppneuemontreal mb-6 tracking-tight">A Taste of Something Unique</h2>
                            <p className="text-muted-foreground font-ppneuemontreal mb-4">
                                Umami isn’t just the fifth taste — it’s the one that lingers. The one that makes a bite unforgettable. For us, it’s a promise of balance, warmth, and craft.
                            </p>
                            <p className="text-muted-foreground font-ppneuemontreal mb-4">
                                From our Jordanian roots to New York City’s vibrant kitchens, Umami blends seasonal ingredients, timeless technique, and bold flavor — all made by hand, with care.
                            </p>
                            <p className="text-muted-foreground font-ppneuemontreal mb-6">
                                Whether you’re here for a delicate pastry, a handcrafted cake, or a moment shared over good food — Umami Amman is where global inspiration and local soul come together.
                            </p>
                            <div className="flex justify-start">
                                <Button asChild className="bg-white border border-black/30 text-umami-dark hover:bg-umami-nube font-ppneuemontreal tracking-wider">
                                    <Link href="/menu">Explore Our Menu</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
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
