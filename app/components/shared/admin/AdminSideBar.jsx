"use client";

import icon from "@/public/icon/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItem = [
  {
    title: "All blog",
    pathname: "all-blog",
  },
  {
    title: "Add-Blog",
    pathname: "blog-post",
  },
  {
    title: "Add-Category",
    pathname: "add-category",
  },
];

const AdminSidebar = () => {
  //   useEffect(() => {
  //     setShow(false);
  //   }, [location.pathname]);
  const pathname = usePathname();
  const activeNav = menuItem.find(
    (item) => `/pages/bloogs/bloogPost/${item.pathname}` == pathname
  );


  return (
    <aside
      className={`bg-[#2F76DE] h-screen sticky col-span-3 top-0 overflow-auto`}
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
          <li key={i} className="bg-white border-b py-3 px-5">
            <Link href={`/pages/bloogs/bloogPost/${item.pathname}`}>
              {" "}
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AdminSidebar;
