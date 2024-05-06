"use client";

import Image from "next/image";
import Link from "next/link";
import icon from "@/public/icon/logo.png";
import { usePathname } from "next/navigation";

const menuItem = [
  {
    title: "All blog",
    pathname: "all-blogs",
  },
  {
    title: "Blog Post",
    pathname: "blog-post",
  },
  {
    title: "Category Post",
    pathname: "category-post",
  },
];

const AdminSideBar = () => {
  const pathname = usePathname();

  return (
    <aside
      className={`bg-[#2F76DE] h-screen fixed col-span-3 top-0 overflow-auto shadow-lg w-1/4`}
    >
      <div className="flex justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#fff"
          className="size-8 md:hidden right-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>

      <div className="flex justify-center font-semibold text-[20px] md:my-12 my-4">
        <Link href="/">
          {" "}
          <Image src={icon} alt="image" />
        </Link>
      </div>
      <ul className="flex flex-col ">
        {menuItem.map((item, i) => (
          <Link key={i} href={`/${item.pathname}`} className="cursor-pointer">
            <li
              className={`${
                `/${item.pathname}` == pathname
                  ? "bg-white"
                  : ""
              } border-b py-3 px-5 w-full`}
            >
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  );
};

export default AdminSideBar;
