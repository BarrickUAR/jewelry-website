import React from 'react';

const Header = () => {
    return (
        <header className="bg-white/80 backdrop-blur-md py-4 px-6 shadow-md">
            <div className="w-2/2 mx-auto flex items-center justify-between px-30">
                {/* Left links */}
                <div className="flex space-x-20 uppercase">
                    <a href="#" className="text-black/60 text-lg hover:text-black font-medium transition">Home</a>
                    <a href="#" className="text-black/60 text-lg hover:text-black font-medium transition">About</a>
                    <a href="#" className="text-black/60 text-lg hover:text-black font-medium transition">Services</a>
                    <a href="#" className="text-black/60 text-lg hover:text-black font-medium transition">Blog</a>
                </div>

                {/* Logo */}
                <div className="flex-shrink-0 mx-20">
                    <h1 className="font-cormorant text-3xl tracking-widest text-gray-900 uppercase">
                        ED Bijuteri
                    </h1>
                </div>

                {/* Right links */}
                <div className="flex space-x-20 uppercase">
                    <a href="#" className="text-black/60 text-lg hover:text-black font-medium transition">Shop</a>
                    <a href="#" className="text-black/60 text-lg hover:text-black font-medium transition">Gallery</a>
                    <a href="#" className="text-black/60 text-lg hover:text-black font-medium transition">Contact</a>
                    <a href="#" className="text-black/60 text-lg hover:text-black font-medium transition">Support</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
