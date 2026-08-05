import Image from "next/image";
import comingSoon from "@/app/assets/coming-soon.png";
import {getTranslations} from 'next-intl/server';

export default async function ComingSoon() {
    const t = await getTranslations('location');

    return (
        <div>
            <section className="relative lg:h-screen md:h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src={comingSoon}
                        alt="Umami Amman"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Refined Warm Overlay */}
                    <div className="absolute inset-0 backdrop-blur bg-gradient-to-b from-black/80 via-black/60 to-transparent"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-[20vh] md:pt-0">
                    <h1 className="font-wordmark text-umami-gold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[0.95] mb-2">
                        Umami
                    </h1>
                    <p className="text-umami-linen text-[1.5rem] font-structural tracking-[0.13em] uppercase">Amman</p>
                    <br />
                    <br />

                    <p className="max-w-2xl mx-auto text-umami-linen text-umami-nube text-lg md:text-xl xl:text-3xl tracking-[0.05em] leading-relaxed">
                        {t('comingSoonTitle')}
                    </p>

                    <div className=" flex flex-col items-center my-10 px-4" >
                        <form
                            action="http://eepurl.com/jj1OUc"
                            method="POST"
                            target="_blank"
                            className="w-full max-w-md flex flex-col md:flex-row gap-2"
                        >
                            <input
                                type="email"
                                name="EMAIL"
                                required
                                placeholder={t('emailPlaceholder')}
                                className="flex-1 px-4 py-2 rounded-md border font-ppneuemontreal border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                            />
                            <button
                                type="submit"
                                className="bg-umami-gold text-white px-6 py-2 font-ppneuemontreal rounded-md hover:bg-umami-gold/70 transition"
                            >
                                {t('notifyMe')}
                            </button>
                        </form>

                        <p className="text-sm text-umami-linen mt-4">
                            {t('privacyNote')}
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}
