"use client";

import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaMapMarkerAlt, FaSearch, FaHeart } from "react-icons/fa";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        if (searchQuery.trim()) {
            window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
        }
    };

    return (
        <>
            <header className="w-full fixed top-0 z-50 shadow-md backdrop-blur-md bg-white text-gray-700 transition">
                <div className="max-w-7xl mx-auto py-6 px-6 flex justify-between items-center">

                    {/* Left Menu */}
                    <div className="hidden md:flex items-center space-x-6 text-xs sm:text-sm lg:text-lg uppercase font-medium tracking-widest">
                        <a href="/contact" title="Contact"><FaMapMarkerAlt /></a>
                        <a href="#jewelry" className="group relative hover:text-purple-600 transition">
                            Jewelry
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a href="#new-releases" className="group relative hover:text-purple-600 transition">
                            New Releases
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a href="#gifts" className="group relative hover:text-purple-600 transition">
                            Gifts
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                        </a>
                    </div>

                    {/* Center Logo */}
                    <a href="/" className="text-xl lg:text-2xl tracking-widest font-semibold font-serif uppercase cursor-pointer">
                        ED Jewelry
                    </a>

                    {/* Right Menu + Hamburger */}
                    <div className="flex items-center space-x-4">
                        {/* Desktop Right Menu */}
                        <div className="hidden md:flex items-center space-x-6">
                            <div className="relative hidden lg:block">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-4 pr-10 py-1.5 border rounded-full text-sm focus:outline-none focus:ring-2 border-gray-300 text-black"
                                />
                                <FaSearch
                                    onClick={handleSearch}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                                />
                            </div>

                            <a href="#favorites" className="text-lg hover:text-purple-600"><FaHeart /></a>

                            <a href="#all-products" className="group relative uppercase text-sm lg:text-base font-medium hover:text-purple-600 tracking-widest whitespace-nowrap">
                                All Products
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        </div>

                        {/* Hamburger Button */}
                        <button onClick={() => setIsOpen(true)} className="md:hidden text-3xl">
                            <IoMenu />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 w-full h-full z-50 bg-white text-gray-700 shadow-lg transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex justify-between items-center p-4 border-b">
                    <a href="/" className="text-xl font-bold tracking-widest uppercase">ED Jewelry</a>
                    <button onClick={() => setIsOpen(false)} className="text-3xl">
                        <IoClose />
                    </button>
                </div>
                <nav className="flex flex-col items-center justify-center h-full space-y-6 px-6 uppercase text-base font-medium tracking-widest text-center">
                    <a href="/contact"><FaMapMarkerAlt /></a>
                    <a href="/contact">Contact</a>
                    <a href="#jewelry">Jewelry</a>
                    <a href="#new-releases">New Releases</a>
                    <a href="#gifts">Gifts</a>
                    <a href="#favorites">Favorites</a>
                    <a href="#all-products" className="whitespace-nowrap">All Products</a>
                </nav>
            </div>
        </>
    );
};

export default Header;
