import Link from "next/link";

export default function CheesecakeDetails() {
    return (
        <section className="container mx-auto pt-12 pb-24 px-4">
            <h2 className="text-3xl lg:text-5xl text-umami-black font-blanka text-center tracking-[0.3rem] mb-8">
                Cheesecake Options & Details
            </h2>

            {/* Available Size, Base Price & Custom Options */}
            <div className="max-w-xl mx-auto mb-12 text-center">
                <p className="text-xl font-ppneuemontreal mb-2">
                    <span className="font-medium">Available Size:</span> 9 inch (serves 10–12)
                </p>
                <p className="text-xl font-ppneuemontreal mb-2">
                        <span className="font-medium">Base Price Range:</span> Starts from 35–45 JOD depending on style
                </p>
                <p className="text-xl font-ppneuemontreal mb-2">
                    <span className="font-medium">Custom Options:</span> Add Chocolate Cheesecake (+5 JOD),
                    Premium Crusts (+2 JOD), extra toppings (+2 JOD)
                </p>
                <p className="text-lg font-ppneuemontreal text-umami-charcoal/70 italic mt-4">
                    All cheesecakes can be personalized with your choice of crusts and toppings.
                </p>
            </div>

            <div className="space-y-16">
                {/* Toppings */}
                <div>
                    <h3 className="text-2xl lg:text-4xl text-umami-black font-blanka tracking-[0.3rem] text-center mb-8">
                        Toppings
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Strawberry Compote",
                            "Blueberry Compote",
                            "Raspberry Compote",
                            "Salted Caramel",
                            "Chocolate Sauce",
                            "Seasonal Fruit Compote",
                            "Dulce De Leche",
                            "Other specials",
                        ].map((topping) => (
                            <div
                                key={topping}
                                className="bg-umami-nube/60 rounded-lg px-4 py-3 font-ppneuemontreal text-umami-black shadow hover:bg-umami-charcoal/10 transition"
                            >
                                {topping}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Crust Options */}
                <div>
                    <h3 className="text-2xl lg:text-4xl text-umami-black font-blanka tracking-[0.3rem] text-center mb-8">
                        Crust Options
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Graham Cracker Crust",
                            "Digestive Biscuit Crust",
                            "Pastry Crust",
                            "Cookie Crust (Oreo, Gingersnap, Biscoff, Chocolate)",
                            "Sponge Base",
                        ].map((crust) => (
                            <div
                                key={crust}
                                className="bg-umami-nube/60 rounded-lg px-4 py-3 font-ppneuemontreal text-umami-black shadow hover:bg-umami-charcoal/10 transition"
                            >
                                {crust}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="text-center mt-16">
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border font-blanka text-2xl border-umami-charcoal/30 text-umami-black px-8 py-4 hover:bg-umami-nube transition-colors duration-300"
                >
                    Get A Custom Quote
                </Link>
            </div>
        </section>
    );
}