import React from 'react';
import {
    FaInstagram,
    FaTwitter,
    FaFacebookF,
    FaYoutube,
    FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#f2efed] text-gray-800 py-12 lg:px-20 px-6">
            <div className="lg:w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
                {/* Customer Services */}
                <div>
                    <h3 className="font-semibold mb-4 uppercase text-2xl text-black">Customer Services</h3>
                    <ul className="space-y-2 text-lg text-gray-600">
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Track your Order</a></li>
                        <li><a href="#">Shipping & Returns</a></li>
                        <li><a href="#">Frequently Asked Questions</a></li>
                        <li><a href="#">Schedule an appointment</a></li>
                    </ul>
                </div>

                {/* About Us */}
                <div>
                    <h3 className="font-semibold mb-4 uppercase text-2xl text-black">About Us</h3>
                    <ul className="space-y-2 text-lg text-gray-600">
                        <li><a href="#">Origins</a></li>
                        <li><a href="#">Our Purpose</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Sustainability</a></li>
                        <li><a href="#">Giving Back</a></li>
                    </ul>
                </div>

                {/* Material Care */}
                <div>
                    <h3 className="font-semibold mb-4 uppercase text-2xl text-black">Material Care</h3>
                    <ul className="space-y-2 text-lg text-gray-600">
                        <li><a href="#">Jewelry Repair</a></li>
                        <li><a href="#">Ring Sizing</a></li>
                        <li><a href="#">Metal Allergy Resources</a></li>
                        <li><a href="#">Styling Tips</a></li>
                    </ul>
                </div>

                {/* Main Locations */}
                <div>
                    <h3 className="font-semibold mb-4 uppercase text-2xl text-black">Main Locations</h3>
                    <ul className="space-y-2 text-lg text-gray-600">
                        <li>Chicago, IL</li>
                        <li>San Francisco, CA</li>
                        <li>New York, NY</li>
                        <li>Seattle, WA</li>
                    </ul>
                </div>

                {/* Newsletter & Social */}
                <div>
                    <h3 className="text-2xl font-semibold mb-2 text-black">You can be one step ahead.</h3>
                    <p className="text-lg mb-4 text-gray-600">Sign up to hear about our updates on the dot.</p>
                    <div className="flex flex-col sm:flex-row mb-4">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="p-3 border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none flex-grow mb-2 sm:mb-0"
                        />
                        <button className="bg-gray-800 text-white px-6 py-3 rounded-md sm:rounded-r-md sm:rounded-l-none text-lg">
                            SIGN UP
                        </button>
                    </div>
                    <div className="flex space-x-4 text-gray-600 text-xl mt-4">
                        <FaInstagram className="hover:text-black cursor-pointer" />
                        <FaTwitter className="hover:text-black cursor-pointer" />
                        <FaFacebookF className="hover:text-black cursor-pointer" />
                        <FaYoutube className="hover:text-black cursor-pointer" />
                        <FaLinkedinIn className="hover:text-black cursor-pointer" />
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-300 mt-10 pt-6 text-sm sm:text-base flex flex-col md:flex-row justify-between items-center gap-4 ">
                <span className="text-gray-600">© ED JEWELRY, LLC</span>
                <div className="flex flex-wrap justify-center gap-3 text-gray-600">
                    <a href="#">PRIVACY POLICY</a>
                    <span>•</span>
                    <a href="#">TERMS OF USE</a>
                    <span>•</span>
                    <a href="#">SITEMAP</a>
                    <span>•</span>
                    <a href="#">DO NOT SELL MY INFORMATION</a>
                    <span>•</span>
                    <a href="#">COOKIES</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
