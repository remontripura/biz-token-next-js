import Link from "next/link";
import { useEffect } from "react";
import { IoIosClose } from "react-icons/io";

const NavItem1 = (
  <>
    <Link
      href="/"
      className="hover:bg-[#ffffffa7] duration-200 w-full p-2 rounded hover:text-[#000] hover:bg-slate-300"
    >
      Home
    </Link>
    <Link
      href="/all-blogs"
      className="hover:bg-[#ffffffa7] duration-200 w-full p-2 rounded hover:text-[#000] hover:bg-slate-300"
    >
      All Blog
    </Link>
    <Link
      href="/blog-post"
      className="hover:bg-[#ffffffa7] duration-200 w-full p-2 rounded hover:text-[#000] hover:bg-slate-300"
    >
      Blog Post
    </Link>
    <Link
      href="/category-post"
      className="hover:bg-[#ffffffa7] duration-200 w-full p-2 rounded hover:text-[#000] hover:bg-slate-300"
    >
      Category Post
    </Link>
  </>
);
const Sidebar = ({ toggleMenu }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
        document.body.style.overflowY = "auto";
    }
  });
  return (
    <div>
      <div className="fixed top-0 right-0 bottom-0 left-0 bg-[#1414142c] z-[1000] "  onClick={toggleMenu}></div>
      <div className="fixed top-0 right-0 bottom-0 z-[1001] w-1/2">
        <div className="flex flex-col gap-2 w-full overflow-y-auto bg-[#fff] h-full">
          <IoIosClose
            onClick={toggleMenu}
            className="text-[44px] md:hidden block text-black cursor-pointer"
          />
          {NavItem1}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
