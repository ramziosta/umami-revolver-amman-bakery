import Link from "next/link";
import {Button} from "@/app/ui/button";
import Image from "next/image";
import why from "@/app/assets/kouigan-amann3.jpg";
import {ArrowDown} from "lucide-react";


export default function Page() {
    return (
        <div>
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
                    {/* Refined Warm Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-[20vh] md:pt-0">
                    <p className="max-w-2xl mx-auto font-ppneuemontreal text-umami-nube text-lg md:text-xl xl:text-3xl tracking-[0.05em] leading-relaxed">
                        Welcome to
                    </p>
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-blanka text-umami-nube tracking-[0.1em] mb-6">
                        UMAMI AMMAN
                    </h1>

                    <p className="max-w-2xl mx-auto font-ppneuemontreal text-umami-nube text-lg md:text-xl xl:text-3xl tracking-[0.05em] leading-relaxed">
                        Where global flavors, local soul, and honest craft meet.  We craft pastries and viennoiserie that blend seasonality, timeless technique, and unexpected flavors.
                    </p>

                    {/* Scroll Indicator */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 animate-bounce mt-12">
                        <ArrowDown className="h-10 w-10 text-umami-nube" />
                    </div>
                </div>
            </section>

            {/* Story Content */}
            <section className="py-16 bg-umami-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative">


                        </div>

                        <div>
                            <h2 className="text-3xl font-ppneuemontreal mb-4">A Taste of Something Unique </h2>
                            <p className="text-muted-foreground font-montserrat mb-4">
                                Umami is the fifth taste — the deep, satisfying flavor that makes food memorable. For us, Umami means more than taste — it’s a promise of balance, warmth, and craft.
                            </p>
                            <p className="text-muted-foreground font-montserrat mb-4">
                                From our Jordanian roots to New York City’s vibrant kitchens, Umami brings together seasonal ingredients, timeless technique, and bold, modern flavors — all made by hand, with care.
                            </p>
                            <p className="text-muted-foreground font-montserrat mb-6">
                                Whether you’re here for a delicate pastry, a handcrafted cake, or a moment shared over good food, Umami Amman is where global inspiration and local soul come together.
                            </p>

                            <div className="flex justify-start">
                                <Button asChild className="bg-umami-gold text-umami-dark hover:bg-umami-dark hover:text-umami-light font-montserrat tracking-wider">
                                    <Link href="/menu">Explore Our Menu</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-16 bg-umami-nube">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-ppneuemontreal mb-8">Our Philosophy</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
                        <div>
                            <h3 className="font-ppneuemontreal text-xl mb-4 text-umami-dark">Seasonality</h3>
                            <p className="text-muted-foreground font-montserrat">
                                We craft pastries and viennoiserie with the finest ingredients each season brings — ensuring every bite is fresh, vibrant, and true to nature.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-ppneuemontreal text-xl mb-4 text-umami-dark">Technique</h3>
                            <p className="text-muted-foreground font-montserrat">
                                We honor classical pastry methods while embracing modern ideas — creating confections that comfort, surprise, and delight.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-ppneuemontreal text-xl mb-4 text-umami-dark">Integrity</h3>
                            <p className="text-muted-foreground font-montserrat">
                                From careful sourcing to mindful preparation, we hold every detail to the highest standards of craft and care
                            </p>
                        </div>
                    </div>

                    <blockquote className="text-xl font-cormorant italic mb-8">
                        “Good pastries nourish more than the body — they spark connection, memory, and a story worth sharing.”
                    </blockquote>

                    <div className="flex justify-center">
                        <Button
                            asChild
                            className="border border-umami-dark text-umami-dark hover:bg-umami-gold hover:text-umami-dark font-montserrat tracking-wider transition-colors duration-300"
                        >
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}