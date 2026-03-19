import Image from "next/image";
import why from '@/app/assets/why.png'
const AboutPage = () => {
    return (
        <div className="min-h-screen bg-umami-linen">

            {/* ── HERO — "Thirty years. One decision." ── */}
            <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
                {/* Background image — replace src with your flour-dusting hand photo */}
                <div className="absolute inset-0">

                      <Image src={why} alt="Chef at work" fill className="object-cover" priority />
                    {/* If using image, add this overlay on top: */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-16 max-w-4xl">
                    {/* Eyebrow */}
                    <p
                        className="text-[0.52rem] font-structural tracking-[0.4em] uppercase mb-8"
                        style={{ color: '#C9A96E' }}
                    >
                        Our Story
                    </p>

                    {/* Headline */}
                    <h1 className="font-display text-umami-linen text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] mb-2">
                        Thirty years.
                    </h1>
                    <p
                        className="font-display italic text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] mb-10"
                        style={{ color: '#C9A96E' }}
                    >
                        One decision.
                    </p>

                    {/* Sub-copy */}
                    <p className="font-body font-light text-sm md:text-base text-umami-alabaster/80 max-w-md leading-relaxed">
                        After thirty years away, a chef returns to Amman — bringing
                        a lifetime of craft home.
                    </p>
                </div>
            </section>


            {/* ── THE CHEF + NEW YORK / THE RETURN / THE STANDARD ── */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                        {/* LEFT COLUMN — The Chef */}
                        <div>
                            {/* Section Label */}
                            <p
                                className="text-[0.52rem] font-structural tracking-[0.4em] uppercase mb-8"
                                style={{ color: '#C9A96E' }}
                            >
                                The Chef
                            </p>

                            {/* Display Heading */}
                            <h2 className="font-display text-umami-carbon text-3xl md:text-4xl lg:text-[2.8rem] leading-[1.1] mb-4">
                                Trained in some of the world&rsquo;s most demanding kitchens. Rooted
                            </h2>
                            <p
                                className="font-display italic text-3xl md:text-4xl lg:text-[2.8rem] leading-[1.1] mb-10"
                                style={{ color: '#C9A96E' }}
                            >
                                in Amman.
                            </p>

                            {/* Divider */}
                            <div
                                className="w-10 h-[1.5px] mb-8"
                                style={{ backgroundColor: '#624203' }}
                            />

                            {/* Pull Quote */}
                            <p className="font-display italic text-umami-dim-grey text-lg md:text-xl leading-relaxed max-w-sm">
                                After thirty years abroad, there
                                was only one place left to cook.
                            </p>
                        </div>


                        {/* RIGHT COLUMN — Story Sections */}
                        <div className="space-y-0">

                            {/* ── NEW YORK ── */}
                            <div className="py-10 border-t border-umami-alabaster">
                                <p
                                    className="text-[0.52rem] font-structural tracking-[0.4em] uppercase mb-6"
                                    style={{ color: '#C9A96E' }}
                                >
                                    New York
                                </p>
                                <p className="font-display text-umami-carbon text-lg md:text-xl leading-[1.6] mb-4">
                                    The Loeb Boathouse. The Hamptons. Milos. Before that, Detroit — cooking
                                    on live television and preparing meals for celebrities and visiting dignitaries,
                                    including Sir Paul McCartney.
                                </p>
                                <p className="font-body font-light text-[0.82rem] leading-[1.85] text-umami-dim-grey">
                                    Thirty years spent learning what excellent food actually requires: the sourcing, the technique, the
                                    discipline, and the integrity to never cut a corner when the guest will taste the difference.
                                </p>
                            </div>

                            {/* ── THE RETURN ── */}
                            <div className="py-10 border-t border-umami-alabaster">
                                <p
                                    className="text-[0.52rem] font-structural tracking-[0.4em] uppercase mb-6"
                                    style={{ color: '#C9A96E' }}
                                >
                                    The Return
                                </p>
                                <p className="font-display text-umami-carbon text-lg md:text-xl leading-[1.6] mb-4">
                                    Returning to Amman was never about leaving something behind. It was
                                    about bringing three decades of experience home — and putting it on the
                                    table here.
                                </p>
                                <p className="font-body font-light text-[0.82rem] leading-[1.85] text-umami-dim-grey">
                                    Amman&rsquo;s food scene has grown tremendously in recent years. Umami exists to contribute to that
                                    growth — with craft, care, and standards that respect both the ingredient and the guest.
                                </p>
                            </div>

                            {/* ── THE STANDARD ── */}
                            <div className="py-10 border-t border-umami-alabaster">
                                <p
                                    className="text-[0.52rem] font-structural tracking-[0.4em] uppercase mb-6"
                                    style={{ color: '#C9A96E' }}
                                >
                                    The Standard
                                </p>

                                <div className="mb-6">
                                    <p className="font-display text-umami-carbon text-lg md:text-xl leading-[1.6]">
                                        Real flavors.
                                    </p>
                                    <p className="font-display text-umami-carbon text-lg md:text-xl leading-[1.6]">
                                        Real technique.
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <p className="font-display text-umami-carbon text-lg md:text-xl leading-[1.6]">
                                        No shortcuts.
                                    </p>
                                    <p className="font-display text-umami-carbon text-lg md:text-xl leading-[1.6]">
                                        No unnecessary substitutions.
                                    </p>
                                    <p className="font-display text-umami-carbon text-lg md:text-xl leading-[1.6]">
                                        No compromises that the guest can taste.
                                    </p>
                                </div>

                                <p className="font-body font-light text-[0.82rem] leading-[1.85] text-umami-dim-grey">
                                    Every plate is built the way it should be — thoughtfully, carefully, and
                                    honestly.
                                </p>

                                <p className="font-body font-light text-[0.82rem] leading-[1.85] text-umami-dim-grey mb-2">
                                    Great food is not complicated.
                                    It simply requires doing things the right way.
                                </p>

                                {/* Closing Mark */}
                                <p
                                    className="text-[1rem] font-structural tracking-[0.4em] uppercase"
                                    style={{ color: '#C9A96E' }}
                                >
                                    That is Umami.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutPage;