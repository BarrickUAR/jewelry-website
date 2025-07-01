import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      {/* ----------- HERO SECTION ----------- */}
      <section>
        <div className="heroWrapper bg-[url('/images/hero-background.png')] bg-cover min-h-screen flex justify-start mx-auto">
          <div className="flex flex-col items-start justify-center text-white px-16">
            <h1 className="lg:text-6xl text-3xl mb-8 ">the autumn equinox</h1>
            <p className="text-4xl">Fall has arrived.</p>
            <p className="text-4xl mb-8">
              Shop for our new releases starting today.
            </p>
            <Link
              className="border p-4 text-3xl hover:border-[#7130c2] "
              href="/"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </section>
      {/* ----------- HERO SECTION ----------- */}
    </React.Fragment>
  );
}
