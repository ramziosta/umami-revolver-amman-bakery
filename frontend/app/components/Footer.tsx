"use client";
import Image from "next/image";
import Link from "next/link";
import whatsapp from "../assets/whatsapp.png";

const Footer = () => {
    return (
        <footer className="bg-umami-black text-umami-nube">
            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link href="/">
                            <div className="flex flex-col text-umami-white group mb-4">
                                <h1 className="text-4xl font-blanka tracking-tight group-hover:text-zinc-400 transition-colors duration-300">
                                    UMAMI AMMAN
                                </h1>
                                <span className="text-sm italic group-hover:text-zinc-400 transition-colors duration-300">
              Artisan Viennoiserie & Pâtisserie
            </span>
                            </div>
                        </Link>
                        <p className="font-ppneuemontreal text-base leading-relaxed max-w-md mb-6 text-umami-nube">
                            Crafting exceptional baked goods with passion, precision and the finest ingredients.
                            From our kitchen to your table — every bite tells a story.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                href="https://instagram.com/umamiamman"
                                className="hover:text-zinc-400 transition-colors duration-300"
                            >
                                Instagram
                            </Link>
                            <Link
                                href="https://www.facebook.com/profile.php?id=61570837547092#"
                                className="hover:text-zinc-400 transition-colors duration-300"
                            >
                                Facebook
                            </Link>
                            <Link
                                href="/twitter"
                                className="hover:text-zinc-400 transition-colors duration-300"
                            >
                                Twitter
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-blanka lg:text-2xl mb-4 tracking-wide">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/menu"
                                    className="hover:text-zinc-400 transition-colors duration-300"
                                >
                                    What We Bake
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-zinc-400 transition-colors duration-300"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-zinc-400 transition-colors duration-300"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Policy Links */}
                    <div>
                        <h4 className="text-lg lg:text-2xl font-blanka mb-4 tracking-wide">Info</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/privacy"
                                    className="hover:text-zinc-400 transition-colors duration-300"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="hover:text-zinc-400 transition-colors duration-300"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-umami-nube mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-umami-nube mb-4 md:mb-0">
                        © 2025 Umami Bakery. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm">
                        <Link
                            href="/privacy"
                            className="hover:text-zinc-400 transition-colors duration-300"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="/terms"
                            className="hover:text-zinc-400 transition-colors duration-300"
                        >
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
            <a
                href="https://wa.me/962790894715"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-50"
            >
                <Image src={whatsapp} alt="WhatsApp" className="h-12 w-12" />
            </a>
        </footer>

    );
};

export default Footer;