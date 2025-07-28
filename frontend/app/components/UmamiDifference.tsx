import {Award, Clock, Heart, Settings, ChefHat, Cake, Truck, Shell, SunSnow, Gem} from 'lucide-react';

const features = [
    {
        icon: Award,
        title: '15+ Years of Artisan Craft.',
    },
    {
        icon: Clock,
        title: 'Baked Fresh. Always to Order.',
    },
    {
        icon: Heart,
        title: 'Personal Service, Every Time.',
    },
    {
        icon: ChefHat,
        title: 'Global & Local Ingredients — Premium, No Compromise.',
    },
    {
        icon: Settings,
        title: 'Custom Orders, Tailored to You.',
    },
    {
        icon: Cake,
        title: 'Cakes & Cupcakes, Made Your Way.',
    },
    {
        icon: Shell,
        title: 'Additions? All Made In-House.',
    },
    {
        icon: SunSnow,
        title: "Seasonal Desserts, Naturally Inspired.",
    },
    {
        icon: Truck,
        title: 'Delivered Straight to Your Door.',
    }
];

const UmamiDifference = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-blanka text-umami-black tracking-tight leading-tight mb-4">
                        The Umami <span className="relative inline-block underline-accent">Difference</span>
                    </h2>

                    <p className="text-2xl md:text-4xl italic font-ppneuemontreal text-umami-berry mb-6">
                        Trends fade. Craft lasts.
                    </p>
                    <p className="max-w-4xl mx-auto mb-4 font-ppneuemontreal text-umami-charcoal text-xl md:text-2xl tracking-[0.05em] leading-relaxed">
                        Every ingredient has purpose. No fillers. No shortcuts. Never artificial.</p>
                    <p className="max-w-3xl mx-auto mb-4 font-ppneuemontreal text-umami-charcoal text-xl md:text-2xl tracking-[0.05em] leading-relaxed">
                        Ratios, refined. Textures, designed. Flavor, elevated.
                        Every bite feels as intentional as it tastes.</p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div key={index}
                                 className="text-center group hover:bg-umami-nube p-8 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
                                <div className="flex justify-center mb-4">
                                    <div
                                        className="w-16 h-16 bg-umami-black rounded-full flex items-center justify-center group-hover:bg-umami-charcoal transition-colors duration-300">
                                        <IconComponent size={40} strokeWidth={1.2} className="text-umami-cream"/>
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
                    <div className="text-center group hover:bg-umami-nube p-10 md:p-12 rounded-xl transition-all duration-300 shadow-md">
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-umami-black rounded-full flex items-center justify-center group-hover:bg-umami-charcoal transition-colors duration-300">
                                <Gem size={40} strokeWidth={1.2} className="text-umami-cream" />
                            </div>
                        </div>
                        <h3 className="text-2xl md:text-4xl font-blanka text-umami-black tracking-tight leading-tight">
                            Flavors You Won’t Find Anywhere Else
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UmamiDifference;