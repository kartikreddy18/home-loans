"use client";
import Link from "next/link";
import {
  HomeIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex items-center justify-between relative z-10">
      <Logo />
      <Bars3BottomRightIcon
        className="w-6 h-6 cursor-pointer sm:hidden"
        onClick={() => setToggle((toggle) => !toggle)}
      />
      <div className="text-gray-400 font-semibold sm:flex items-center gap-5 hidden">
        <Link href="/product" className="hover:text-black">
          Product
        </Link>
        <Link href="/support" className="hover:text-black">
          Support
        </Link>
        <Link href="/company" className="hover:text-black">
          Company
        </Link>
        <Link href="/blog" className="hover:text-black">
          Blog
        </Link>
        <button className="text-black border border-gray-400 p-3 rounded">
          Create Account
        </button>
      </div>
      <div
        className={`fixed top-0 ${
          toggle ? "right-0" : "-right-[100%]"
        } z-50 h-screen w-80 bg-gray-900 grid items-center duration-200 ease-in-out`}
      >
        <XMarkIcon
          className="w-6 h-6 absolute text-gray-200 top-9 right-4 font-semibold cursor-pointer"
          onClick={() => setToggle((toggle) => !toggle)}
        />
        <div className="grid place-items-center gap-10 -translate-y-20 font-semibold">
          <Link
            href="/product"
            className="text-gray-200 hover:text-white"
            onClick={() => setToggle((toggle) => !toggle)}
          >
            Product
          </Link>
          <Link
            href="/support"
            className="text-gray-200 hover:text-white"
            onClick={() => setToggle((toggle) => !toggle)}
          >
            Support
          </Link>
          <Link
            href="/company"
            className="text-gray-200 hover:text-white"
            onClick={() => setToggle((toggle) => !toggle)}
          >
            Company
          </Link>
          <Link
            href="/blog"
            className="text-gray-200 hover:text-white"
            onClick={() => setToggle((toggle) => !toggle)}
          >
            Blog
          </Link>
          <button
            className="text-white border border-gray-400 p-3 rounded"
            onClick={() => setToggle((toggle) => !toggle)}
          >
            Create Account
          </button>
        </div>
      </div>
    </nav>
  );
}

export const Logo = () => (
  <Link
    href={"/"}
    className="flex items-center space-x-2 font-semibold uppercase"
  >
    <HomeIcon className="w-10 h-10" />
    <>
      Home
      <br />
      Loans
    </>
  </Link>
);
