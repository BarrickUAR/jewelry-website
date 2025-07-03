"use client";


import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>

      {/* ----------- HERO SECTION ----------- */}
      <section className="relative">
        {/* Arka Plan + Zoom */}
        <div className="heroWrapper bg-[url('/images/hero-background.png')] bg-cover bg-center min-h-screen flex items-center justify-center bg-animate relative">

          {/* Karanlık Overlay */}
          <div className="absolute inset-0 bg-black/40 z-0"></div>

          {/* Yazılar */}
          <div className="z-10 flex flex-col items-start text-left text-white px-6 md:px-16 max-w-4xl">
            <h1 className="text-3xl lg:text-6xl font-bold mb-6 fade-in-up delay-1">the autumn equinox</h1>
            <p className="text-2xl lg:text-4xl mb-2 fade-in-up delay-2">Fall has arrived.</p>
            <p className="text-2xl lg:text-4xl mb-8 fade-in-up delay-3">
              Shop for our new releases starting today.
            </p>
            <Link
              href="/"
              className="border border-white px-6 py-3 text-xl font-medium hover:bg-white hover:text-black transition duration-300 fade-in-up delay-4"
            >
              SHOP NOW
            </Link>
          </div>
        </div>

        {/* Scroll Down İkonu */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
          <button
            onClick={() => {
              const el = document.getElementById("scroll-target");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="scroll-indicator text-white text-4xl hover:text-[#915ad7] transition-colors duration-300 cursor-pointer"
            aria-label="Scroll down"
          >
            ↓
          </button>
        </div>
      </section>
      {/* ----------- HERO SECTION ----------- */}

      {/* ----------- CATEGORY SECTION ----------- */}
      <section id="scroll-target">
        <div className="flex flex-col items-center justify-center text-center my-16 py-8">
          <h2 className="text-4xl mb-8">Shop by Category</h2>
          <p className="text-xl mb-12 font-cormorant">
            Indulge in what we offer.
          </p>
          <div className="md:flex items-center justify-center grid grid-cols-1 gap-8 px-4 md:px-16">

            <Link href="/" className="group relative">
              <Image
                src="/images/category/neeklaces.png"
                alt="Shoes"
                width={300}
                height={300}
                className="w-full h-auto object-cover rounded-lg group-hover:opacity-80 transition-opacity duration-300"
              />
              <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                Necklaces
              </h3>
            </Link>

            <Link href="/" className="group relative">
              <Image
                src="/images/category/earrings.png"
                alt="Clothing"
                width={300}
                height={300}
                className="w-full h-auto object-cover rounded-lg group-hover:opacity-80 transition-opacity duration-300"
              />
              <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                Earrings
              </h3>
            </Link>

            <Link href="/" className="group relative">
              <Image
                src="/images/category/bracelets.png" alt="Accessories"
                width={300}
                height={300}
                className="w-full h-auto object-cover rounded-lg group-hover:opacity-80 transition-opacity duration-300"
              />
              <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                Bracelets
              </h3>
            </Link>

            <Link href="/" className="group relative">
              <Image
                src="/images/category/rings.png" alt="Accessories"
                width={300}
                height={300}
                className="w-full h-auto object-cover rounded-lg group-hover:opacity-80 transition-opacity duration-300"
              />
              <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                Rings
              </h3>
            </Link>

            <Link href="/" className="group relative">
              <Image
                src="/images/category/charms.png" alt="Accessories"
                width={300}
                height={300}
                className="w-full h-auto object-cover rounded-lg group-hover:opacity-80 transition-opacity duration-300"
              />
              <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                Charms
              </h3>
            </Link>
          </div>
        </div>
      </section>
      {/* ----------- CATEGORY SECTION ----------- */}

      {/* ----------- ARTICLE SECTION ----------- */}
      <section className="bg-black">
        <div className="w-full flex flex-col lg:flex-row h-auto lg:h-[600px] items-center justify-between mx-auto">

          {/* Sol: Görsel */}
          <div className="w-full lg:w-1/2 h-[300px] lg:h-full">
            <Image
              src="/images/article.svg"
              alt="Article"
              width={400}
              height={600}
              className="w-full h-full"
            />
          </div>

          {/* Sağ: İçerik */}
          <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-6 lg:px-16 py-10 text-white">
            {/* Tarih */}
            <p className="text-sm text-gray-400 mb-6 lg:mb-12">July 2, 2025</p>

            {/* Text Content */}
            <div className="space-y-4 text-start">
              <h1 className="text-3xl lg:text-5xl font-semibold">
                Timeless Elegance in Jewelry
              </h1>

              <p className="text-base lg:text-xl text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum.
              </p>

              <p className="text-base lg:text-xl text-gray-300 leading-relaxed">
                Elementum sagittis vitae et leo duis. Libero nunc consequat interdum varius. Habitant morbi tristique senectus et netus et malesuada fames ac.
              </p>

              <button className="mt-4 text-white border border-white px-6 py-2 font-semibold hover:bg-white hover:text-black transition cursor-pointer w-max">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* ----------- ARTICLE SECTION ----------- */},

      {/* ----------- GIFT SECTION ----------- */}
      <section className="bg-[#F4F0EB] py-20 lg:mb-24 mb-8">
        <div className="w-full max-w-8xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-[#faf3e6] px-4 sm:px-6 lg:px-24 py-10 lg:py-16">

          {/* Sol: Yazılar */}
          <div className="w-full md:w-2/2 text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 text-black">
              Gifts of the season
            </h1>
            <p className="text-sm sm:text-base lg:text-2xl text-black mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Cras semper auctor neque vitae tempus quam pellentesque. Elementum sagittis vitae et leo duis.
            </p>
            <Link
              href="/"
              className="inline-block border border-black text-black px-10 py-3 text-sm sm:text-base font-medium  hover:bg-[#915ad7] hover:text-white transition-colors duration-300 cursor-pointer"
            >
              Shop Gifts
            </Link>
          </div>

          {/* Sağ: Görsel */}
          <div className="w-full md:w-3/4">
            <Image
              src="/images/gift.svg"
              alt="Gift"
              width={600}
              height={300}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
      {/* ----------- GIFT SECTION ----------- */}

      {/* ----------- ABOUT SECTION ----------- */}
      <section className="w-full bg-black lg:mb-24 mb-8 ">
        <div className="lg:w-3/4 mx-auto flex flex-col md:flex-row items-center  gap-10 ">

          {/* Sol: Görsel */}
          <div className="w-full md:w-1/2 h-[300px] md:h-full relative  ">
            <Image
              src="/images/about-us.png"
              alt="About"
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Sağ: Metinler */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">Who We Are</h1>
            <p className="text-base md:text-lg text-white mb-8">
              We are passionate creators dedicated to delivering beautifully crafted digital experiences. Our focus is on quality, innovation, and meaningful results.
            </p>
            <button className="inline-block border mb-14 border-white text-white px-10 py-3 text-sm sm:text-base font-medium  hover:bg-[#915ad7] transition-colors duration-300 cursor-pointer">
              About Us
            </button>
          </div>

        </div>
      </section>
      {/* ----------- ABOUT SECTION ----------- */}

    </React.Fragment>
  );
}
