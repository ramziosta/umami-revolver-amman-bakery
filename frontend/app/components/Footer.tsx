"use client";
import Image from "next/image";
import Link from "next/link";
import whatsapp from "../assets/whatsapp.png";

const Footer = () => {
    return (
        <footer className="bg-umami-charcoal text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <h3 className="text-3xl font-goglast text-umami-pink tracking-[0.5rem] font-bold mb-4">
                            Umami
                        </h3>
                        <p className="text-umami-gray mb-6 leading-relaxed max-w-md">
                            Crafting exceptional baked goods with passion, precision, and the finest ingredients.
                            From our family kitchen to your table, every bite tells a story of dedication to quality.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                href="https://instagram.com/umamiamman"
                                className="text-umami-gray hover:text-white transition-colors duration-300"
                            >
                                Instagram
                            </Link>
                            <Link
                                href="https://www.facebook.com/profile.php?id=61570837547092#"
                                className="text-umami-gray hover:text-white transition-colors duration-300"
                            >
                                Facebook
                            </Link>
                            <Link
                                href="/twitter"
                                className="text-umami-gray hover:text-white transition-colors duration-300"
                            >
                                Twitter
                            </Link>
                            <a
                                href="https://wa.me/962790894715"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-50"
                            >
                                <Image src={whatsapp} alt="WhatsApp" className="h-12 w-12" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-goglast font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/categories"
                                    className="text-umami-gray hover:text-white transition-colors duration-300"
                                >
                                    What We Bake
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-umami-gray hover:text-white transition-colors duration-300"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-umami-gray hover:text-white transition-colors duration-300"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Uncomment when needed */}
                    {/* <div>
            <h4 className="text-lg font-goglast font-bold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/orders" className="text-umami-gray hover:text-white transition-colors duration-300">
                  Track Orders
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="text-umami-gray hover:text-white transition-colors duration-300">
                  Delivery Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-umami-gray hover:text-white transition-colors duration-300">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-umami-gray hover:text-white transition-colors duration-300">
                  Help Center
                </Link>
              </li>
            </ul>
          </div> */}
                </div>

                <div className="border-t border-umami-gray/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-umami-gray text-sm mb-4 md:mb-0">
                        © 2025 Umami Bakery. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm">
                        <Link
                            href="/privacy"
                            className="text-umami-gray hover:text-white transition-colors duration-300"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-umami-gray hover:text-white transition-colors duration-300"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;