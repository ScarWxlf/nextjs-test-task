'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Main() {
    const [dimensions, setDimensions] = useState({ width: 500, height: 500 });

  useEffect(() => {
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;

     if (screenWidth < 1024) {
        setDimensions({ width: 300, height: 300 });
      } else {
        setDimensions({ width: 500, height: 500 });
      }
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <section className="flex-grow flex-col lg:flex-row flex lg:justify-between relative">
      <div className="relative flex flex-col gap-4 justify-between h-2/3 mt-8 lg:mt-16 lg:order-1 order-2">
        <div className="flex justify-center mb-5 sm:mb-10 lg:justify-start lg:mb-0">
          <h1 className="text-2xl">here will be social media</h1>
        </div>
        <div className="lg:text-4xl text-3xl">
          <p className="mb-2">Construction Estimating Services </p>
          in {" "}
          <span className="text-red-600">USA</span> &{" "}
          <span className="text-red-600">CANADA</span>
        </div>
        <p className="text-black text-xl">
          We help busy contractors with accurate estimates and win more projects
        </p>
        <div className="flex gap-4 text-bold text-lg">
          <button className="bg-white text-black border-2 border-secondary h-14 w-36 rounded-2xl hidden lg:block">
            More Details
          </button>
          <button className="bg-secondary text-white h-14 w-52 rounded-full lg:rounded-2xl">
            Book An Appointment
          </button>
        </div>
        <p>
          <span className="text-lg text-gray-500">Let&apos;s Talk </span>
          <br />
          <span className="font-bold text-3xl">(+92)3064699803</span>
        </p>
      </div>

      <div className="mt-10 relative flex items-center h-full justify-center md:mt-0 font-bold lg:order-2 order-1">
        <div className="hidden flex-col absolute text-xl xl:text-3xl z-[-1] select-none lg:flex">
          <div className="tracking-[7px]">* * * * * * * * * * * * * *</div>
          <div className="tracking-[7px]">* * * * * * * * * * * * * *</div>
          <div className="tracking-[7px]">* * * * * * * * * * * * * *</div>
          <div className="tracking-[7px]">* * * * * * * * * * * * * *</div>
          <div className="tracking-[7px]"><span className="collapse">*</span> * * * * * * * * * * * * *</div>
          <div className="tracking-[7px]">* * * * * * * * * * * * *</div>
        </div>
        <Image
          src="/images/image.png"
          alt="Worker"
          className="bg-white lg:bg-current rounded-full lg:rounded-none mx-auto md:mx-0 lg:h-full z-10"
          style={{objectPosition: typeof window !== "undefined" && window.innerWidth < 1024 ? (window.innerWidth < 640 ? '-10px' : '-20px') : "center"}}
          width={dimensions.width}
          height={dimensions.height}
        />
        <div 
            className="absolute bg-main rounded-full lg:hidden"
            style={{
                width: dimensions.width + 50,
                height: dimensions.height,
            }}
        />
      </div>

      <section className="flex justify-center gap-8 sm:gap-12 xl:gap-20 2xl:gap-28 px-6 py-6 text-center lg:absolute left-0 bottom-0 w-full z-[-1] order-3">
        <div className="w-20">
          <h3 className="text-main text-3xl lg:text-4xl font-bold">95%</h3>
          <p className="text-lg">Customer Satisfaction</p>
        </div>
        <div className="w-20">
          <h3 className="text-main text-3xl lg:text-4xl font-bold">36+</h3>
          <p className="text-lg">Industry Award</p>
        </div>
        <div className="w-20">
          <h3 className="text-main text-3xl lg:text-4xl font-bold">370+</h3>
          <p className="text-lg">Successful Projects</p>
        </div>
      </section>
    </section>
  );
}
