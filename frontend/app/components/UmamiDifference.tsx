
import { Award, Clock, Heart, Settings, ChefHat, Cake, Truck, Shell, SunSnow, Gem } from 'lucide-react';

const features = [
    {
        icon: Award,
        title: 'Over 15 years of artisan excellence.',
    },
    {
        icon: Clock,
        title: 'Everything Freshly Baked to Order.',
    },
    {
        icon: Heart,
        title: 'Exceptional personal service — always.',
    },
    {
        icon: ChefHat,
        title: 'Premium, global & local ingredients.',
    },
    {
        icon: Settings,
        title: 'Bespoke Options & Personalisation.',
    },
    {
        icon: Cake,
        title: 'Custom Cakes & Cupcakes.',
    },
    {
        icon: Shell,
        title: 'All additions & inclusions made in-house.',
    },
    {
        icon: SunSnow,
        title: "Desserts inspired by the season’s best",
    },
    {
        icon: Truck,
        title: 'Delivered to your doorstep',
    }
];

const UmamiDifference = () => {
    return (
        <section className="py-32">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-5xl lg:text-7xl font-blanka text-umami-black mb-4 tracking-tight">
                        The Umami <span className="relative inline-block underline-accent">Difference</span>
                    </h2>
                    <p className="max-w-3xl mx-auto font-ppneuemontreal text-umami-charcoal text-xl md:text-2xl tracking-[0.05em] leading-relaxed">
                        Crafted with passion, precision, and the finest ingredients — see what sets us apart.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div key={index} className="text-center group hover:bg-umami-nube p-8 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-umami-black rounded-full flex items-center justify-center group-hover:bg-umami-charcoal transition-colors duration-300">
                                        <IconComponent size={40} strokeWidth={1.2} className="text-umami-cream" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-ppneuemontreal text-umami-black mb-2 tracking-[0.05em]">
                                    {feature.title}
                                </h3>
                            </div>
                        );
                    })}
                </div>

                <div className="flex justify-center mt-12">
                    <div className="text-center group hover:bg-umami-black/5 p-8 rounded-lg transition-all duration-300 shadow-md ">
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-umami-black rounded-full flex items-center justify-center group-hover:bg-umami-charcoal transition-colors duration-300">
                                <Gem
                                    size={40}
                                    strokeWidth={1.2}
                                    className="text-umami-cream transition-colors duration-300"
                                />
                            </div>
                        </div>

                        <h3 className="text-2xl md:text-3xl lg:text-5xl font-blanka text-umami-black tracking-[0.05em]">
                            Flavors You Won’t Find Anywhere Else.
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UmamiDifference;