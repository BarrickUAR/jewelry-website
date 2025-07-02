"use client";

import React, { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-md py-6 px-6 shadow-2xl block w-full z-50">
                <div className="w-full mx-auto flex items-center justify-between lg:px-20">

                    {/* Sol Menü */}
                    <div className="hidden md:flex space-x-20 uppercase">
                        <a href="#" className="text-black/60 lg:text-2xl text-xl tracking-widest hover:text-black font-medium transition">Anasayfa</a>
                        <a href="#" className="text-black/60 lg:text-2xl text-xl tracking-widest hover:text-black font-medium transition">Hakkımızda</a>
                        <a href="#" className="text-black/60 lg:text-2xl text-xl tracking-widest hover:text-black font-medium transition">Hizmetler</a>
                        <a href="#" className="text-black/60 lg:text-2xl text-xl tracking-widest hover:text-black font-medium transition">Blog</a>
                    </div>

                    {/* Logo */}
                    <div className="flex-shrink-0 mx-4 lg:mx-20">
                        <h1 className="font-cormorant text-3xl tracking-widest text-black font-semibold uppercase">
                            ED Bijuteri
                        </h1>
                    </div>

                    {/* Sağ Menü */}
                    <div className="hidden md:flex space-x-20 uppercase">
                        <a href="#" className="text-black/60 lg:text-2xl text-xl tracking-widest hover:text-black font-medium transition">Mağaza</a>
                        <a href="#" className="text-black/60 lg:text-2xl text-xl tracking-widest hover:text-black font-medium transition">Galeri</a>
                        <a href="#" className="text-black/60 lg:text-2xl text-xl tracking-widest hover:text-black font-medium transition">İletişim</a>
                        <a href="#" className="text-black/60 lg:text-2xl text-xl tracking-widest hover:text-black font-medium transition">Destek</a>
                    </div>

                    {/* Hamburger Menü İkonu */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="md:hidden text-3xl text-black"
                    >
                        <IoMenu />
                    </button>
                </div>
            </header>

            {/* Sidebar Menü (Mobil) */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-end p-4">
                    <button onClick={() => setIsOpen(false)} className="text-3xl text-black cursor-pointer">
                        <IoClose />
                    </button>
                </div>
                <nav className="flex flex-col space-y-6 p-6 uppercase">
                    <a href="#" className="text-black/70 text-xl hover:text-black">Anasayfa</a>
                    <a href="#" className="text-black/70 text-xl hover:text-black">Hakkımızda</a>
                    <a href="#" className="text-black/70 text-xl hover:text-black">Hizmetler</a>
                    <a href="#" className="text-black/70 text-xl hover:text-black">Blog</a>
                    <a href="#" className="text-black/70 text-xl hover:text-black">Mağaza</a>
                    <a href="#" className="text-black/70 text-xl hover:text-black">Galeri</a>
                    <a href="#" className="text-black/70 text-xl hover:text-black">İletişim</a>
                    <a href="#" className="text-black/70 text-xl hover:text-black">Destek</a>
                </nav>
            </div>
        </>
    );
};

export default Header;
