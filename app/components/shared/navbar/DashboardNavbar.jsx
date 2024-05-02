"use client";

import Image from "next/image";
import Link from "next/link";
import icon from "@/public/icon/logo.png";
import { useState } from "react";

const DashboardNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const NavItem1 = (
    <>
      <Link
        href="/"
        className="hover:bg-[#ffffffa7] duration-200 w-full p-2 rounded hover:text-[#000]"
      >
        Home
      </Link>
      <Link
        href="/all-blogs"
        className="hover:bg-[#ffffffa7] duration-200 w-full p-2 rounded hover:text-[#000]"
      >
        All Blog
      </Link>
      <Link
        href="/blog-post"
        className="hover:bg-[#ffffffa7] duration-200 w-full p-2 rounded hover:text-[#000]"
      >
        Blog Post
      </Link>
      <Link
        href="/category-post"
        className="hover:bg-[#ffffffa7] duration-200 w-full p-2 rounded hover:text-[#000]"
      >
        Category Post
      </Link>
    </>
  );
  return (
    <div className="md:hidden block">
      <div
        className={`w-2/4 absolute top-12 bg-[#CBD5E1] shadow-md h-fit z-50 px-2 py-5 rounded-md  ${
          menuOpen ? "left-2" : "-left-[400px]"
        }`}
      >
        <div className="flex flex-col justify-center items-center gap-2">
          {NavItem1}
        </div>
      </div>
      <div className=" bg-[#2F76DE]  w-full flex justify-between items-center py-1 px-2 mb-3">
        <div className="flex items-center gap-4">
          {menuOpen === true ? (
            <svg
              onClick={handleToggle}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fff"
              class="size-8 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              onClick={handleToggle}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke=" #fff"
              class="size-8 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          )}

          <Link href="/">
            <Image
              src={icon}
              width={100}
              height={50}
              alt="Picture of the author"
            />
          </Link>
        </div>
        <div className="relative">
          <input
            type="text"
            className=" px-3 py-1  rounded-3xl border border-slate-300  focus:outline focus:outline-slate-400"
            placeholder="Search blog"
            id="title"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#A3AAB5"
            className="size-8 absolute right-4 top-0 bottom-0 my-auto cursor-pointer border-l pl-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
