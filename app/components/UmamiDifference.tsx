const UmamiDifference = () => {
    return (
        <section className="bg-umami-carbon py-24 md:py-32">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                {/* Section Label */}
                <p className="text-[0.52rem] font-structural tracking-[0.4em] uppercase mb-8" style={{ color: '#C9A96E' }}>
                    Philosophy
                </p>

                {/* Headline */}
                <h2 className="font-display text-umami-linen text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-2">
                    Flavor is not accidental.
                </h2>
                <p className="font-display italic text-3xl md:text-5xl lg:text-6xl leading-[1.05] mb-16 md:mb-20" style={{ color: '#C9A96E' }}>
                    It is built.
                </p>

                {/* Three Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-umami-dim-grey/20">
                    {/* Balance */}
                    <div className="bg-umami-carbon p-8 md:p-10">
                        <p className="text-[0.52rem] font-structural tracking-[0.4em] uppercase text-umami-alabaster/60 mb-5">
                            Balance
                        </p>
                        <p className="font-body font-light text-[0.82rem] leading-[1.85] text-umami-taupe">
                            Sweetness balanced with acidity. Richness lifted with freshness. Nothing here is sweet for its own sake — every recipe is calibrated to the point where you finish and immediately want another bite.
                        </p>
                    </div>

                    {/* Technique */}
                    <div className="bg-umami-carbon p-8 md:p-10 md:border-l md:border-r border-umami-dim-grey/20">
                        <p className="text-[0.52rem] font-structural tracking-[0.4em] uppercase text-umami-alabaster/60 mb-5">
                            Technique
                        </p>
                        <p className="font-body font-light text-[0.82rem] leading-[1.85] text-umami-taupe">
                            Classical French pastry as the foundation. Laminated doughs, diplomat creams, and precisely tempered chocolate. The technique is never hidden and never showy. You taste it in the result.
                        </p>
                    </div>

                    {/* Intention */}
                    <div className="bg-umami-carbon p-8 md:p-10">
                        <p className="text-[0.52rem] font-structural tracking-[0.4em] uppercase text-umami-alabaster/60 mb-5">
                            Intention
                        </p>
                        <p className="font-body font-light text-[0.82rem] leading-[1.85] text-umami-taupe">
                            Every item on the menu earns its place. Nothing is added out of habit. Nothing exists because it is easy. Familiar flavors — rebuilt from the ground up.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UmamiDifference;