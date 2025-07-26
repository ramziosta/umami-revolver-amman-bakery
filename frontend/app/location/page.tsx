import Image from "next/image";
import why from "@/app/assets/kouigan-amann3.jpg";
import {ArrowDown} from "lucide-react";

export default function ComingSoon() {
    return (
        <div>
            <section className="relative lg:h-screen md:h-screen flex items-center justify-center overflow-hidden">
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
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-blanka text-umami-nube tracking-[0.1em] mb-6">
                        UMAMI AMMAN
                    </h1>

                    <p className="max-w-2xl mx-auto font-ppneuemontreal text-umami-nube text-lg md:text-xl xl:text-3xl tracking-[0.05em] leading-relaxed">
                        Our location is coming soon! Sign up to get notified.
                    </p>

                    <div className=" flex flex-col items-center my-10 px-4" >
                        <form
                            action="http://eepurl.com/jj1OUc" // 👈 replace this
                            method="POST"
                            target="_blank"
                            className="w-full max-w-md flex flex-col md:flex-row gap-2"
                        >
                            <input
                                type="email"
                                name="EMAIL"
                                required
                                placeholder="Your email address"
                                className="flex-1 px-4 py-2 rounded-md border font-ppneuemontreal border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                            />
                            <button
                                type="submit"
                                className="bg-black text-white px-6 py-2 font-ppneuemontreal rounded-md hover:bg-gray-800 transition"
                            >
                                Notify Me
                            </button>
                        </form>

                        <p className="text-sm font-ppneuemontreal text-umami-nube mt-4">
                            We respect your inbox. No spam, just updates.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}