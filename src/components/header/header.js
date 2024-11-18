"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownServiseRef = useRef(null);
  const buttonRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownServiseRef.current &&
        !dropdownServiseRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex justify-between items-center px-14 py-4 bg-white border-b-2 border-gray-300 ">
      <div className="flex flex-col items-start">
        <h1 className="text-5xl font-bold text-main">DIGITAL</h1>
        <span className="text-black text-xl">Construction</span>
      </div>
      {/* Desktop */}
      <nav className="hidden md:flex space-x-10 text-lg font-bold">
        <Link href="/" className="hover:text-red-600">
          Home
          <div
            className={`h-1 bg-main ${pathname === "/" ? "" : "collapse"}`}
          />
        </Link>
        <div className="relative flex justify-center">
          <div>
            <button
              className="hover:text-red-600 flex"
              onClick={() => {
                setServicesOpen(!servicesOpen);
              }}
              ref={buttonRef}
            >
              Services
              <Image
                src="/images/arrow.png"
                alt="Arrow Down"
                width={15}
                height={15}
                className={`transform mt-2 ms-1  ${
                  servicesOpen ? "rotate-180" : "rotate-0"
                }
                      duration-200
                    `}
              />
            </button>
            <div
              className={`h-1 bg-main ${
                pathname.startsWith("/services") ? "" : "collapse"
              }`}
            />
          </div>
          {servicesOpen && (
            <div
              className="absolute mt-9 w-48 bg-white border border-gray-200 shadow-md"
              ref={dropdownServiseRef}
            >
              <a
                href="/services/cost-estimation"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Cost Estimation
              </a>
              <a
                href="/services/material-sourcing"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Material Sourcing
              </a>
            </div>
          )}
        </div>
        <Link href="/about" className="hover:text-red-600">
          About Company
          <div
            className={`h-1 bg-main ${pathname === "/about" ? "" : "collapse"}`}
          />
        </Link>
        <Link href="/career" className="hover:text-red-600">
          Career
          <div
            className={`h-1 bg-main ${
              pathname === "/career" ? "" : "collapse"
            }`}
          />
        </Link>
        <Link href="/blog" className="hover:text-red-600">
          Blog
          <div
            className={`h-1 bg-main ${pathname === "/blog" ? "" : "collapse"}`}
          />
        </Link>
      </nav>

      <button className="text-lg bg-secondary text-white h-14 w-36 rounded-2xl font-bold">
        Contact Us
      </button>

      {/* Mobile */}
      <button
        className="block md:hidden text-gray-600"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link href="/" className="hover:text-red-600">
            Home
          </Link>
          <Link href="/services" className="hover:text-red-600">
            Services
          </Link>
          <Link href="/about" className="hover:text-red-600">
            About Company
          </Link>
          <Link href="/career" className="hover:text-red-600">
            Career
          </Link>
          <Link href="/blog" className="hover:text-red-600">
            Blog
          </Link>
        </nav>
      )}
    </header>
  );
}
