"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { urlFor } from "../../../public/lib/imageBuilder";
import {
  SiteContent,
  Social,
  finalSocials,
} from "../../../public/lib/types/types";

export default function Main({ siteContent }: { siteContent: SiteContent }) {
  const [defaultPosition, setDefaultPosition] = useState("center");
  const [dimensions, setDimensions] = useState({ width: 500, height: 500 });
  const { title, subtitle, statistics, contactNumber } = siteContent;
  let finalSocials = [] as finalSocials[];
  if (siteContent.socials) {
    finalSocials = siteContent.socials.map((social: Social) => ({
      name: social.name,
      link: social.link,
      iconUrl: urlFor(social.icon.asset._ref).url(),
    }));
  }

  useEffect(() => {
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 450) {
        setDimensions({ width: 200, height: 200 });
      } else if (screenWidth < 1024) {
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

  useEffect(() => {
    const updateDefaultPosition = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 1024) {
        setDefaultPosition("-10px");
      } else {
        setDefaultPosition("center");
      }
    };

    updateDefaultPosition();

    window.addEventListener("resize", updateDefaultPosition);

    return () => {
      window.removeEventListener("resize", updateDefaultPosition);
    };
  }, []);

  return (
    <section className="flex-grow flex-col lg:flex-row flex lg:justify-between relative">
      <div className="relative flex flex-col gap-4 justify-between h-2/3 mt-8 lg:mt-16 lg:order-1 order-2">
        <div className="flex justify-center mb-5 sm:mb-10 lg:justify-start lg:mb-0">
          <div className="flex gap-2">
            {finalSocials.map((social, index) => (
              <a
                href={social.link}
                key={index}
                className="text-black hover:text-main"
              >
                <img
                  src={social.iconUrl}
                  alt={social.name}
                  className="w-7 h-7"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="lg:text-4xl text-3xl">{title}</div>
        <p className="text-black text-xl">{subtitle}</p>
        <div className="flex gap-4 text-bold text-lg">
          <a href="/career">
            <button className="bg-white text-black border-2 border-secondary h-14 w-36 rounded-2xl hidden lg:block">
              More Details
            </button>
          </a>
          <a href="/about">
            <button className="bg-secondary text-white h-14 w-52 rounded-full lg:rounded-2xl">
              Book An Appointment
            </button>
          </a>
        </div>
        <p>
          <span className="text-lg text-gray-500">Let&apos;s Talk </span>
          <br />
          <span className="font-bold text-3xl">{contactNumber}</span>
        </p>
      </div>

      <div className="mt-10 relative flex lg:flex-none items-center h-full justify-center md:mt-0 font-bold lg:order-2 order-1">
        <div className="hidden flex-col absolute text-xl xl:text-3xl z-[-1] select-none lg:flex">
          <div className="tracking-[7px]">* * * * * * * * * * * * * *</div>
          <div className="tracking-[7px]">* * * * * * * * * * * * * *</div>
          <div className="tracking-[7px]">* * * * * * * * * * * * * *</div>
          <div className="tracking-[7px]">* * * * * * * * * * * * * *</div>
          <div className="tracking-[7px]">
            <span className="collapse">*</span> * * * * * * * * * * * * *
          </div>
          <div className="tracking-[7px]">* * * * * * * * * * * * *</div>
        </div>
        <Image
          src="/images/image.png"
          alt="Worker"
          className="bg-white lg:bg-current rounded-full lg:rounded-none mx-auto md:mx-0 self-end z-10"
          style={{
            objectPosition: defaultPosition,
          }}
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

      <section className="flex justify-center gap-8 sm:gap-12 xl:gap-14 2xl:gap-28 px-6 py-6 text-center lg:absolute left-0 bottom-0 w-full z-30 order-3">
        {statistics.map((statistic, index) => (
          <div className="w-20" key={index}>
            <h3 className="text-main text-3xl lg:text-4xl font-bold">
              {statistic.metric}
            </h3>
            <p className="text-lg">{statistic.label}</p>
          </div>
        ))}
      </section>
    </section>
  );
}
