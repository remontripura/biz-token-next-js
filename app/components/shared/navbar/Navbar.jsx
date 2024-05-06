"use client";

import React, { useEffect, useState } from "react";
import icon from "@/public/icon/logo.png";
import { IoMdMenu, IoIosClose } from "react-icons/io";
import Container from "@/app/_container/Container";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "./Sidebar";

const NavItem1 = (
  <>
    <Link href="/" className="text-[#000] font-medium  hover:text-[#fff] btn">
      Home
    </Link>
    <Link
      href="/blogs"
      className="text-[#000] font-medium  hover:text-[#fff] btn"
    >
      Blog
    </Link>
    <Link
      href="/free-biz"
      className="text-[#000] font-medium  hover:text-[#fff] btn"
    >
      Free Biz
    </Link>
  </>
);

const Navbar = () => {
  const [menu, setmenu] = useState(false);
  const toggleMenu = () => setmenu(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`fixed w-full  bg-[#2F76DE] z-[999] ${
        isScrolled ? "py-1 duration-500 " : "py-3 duration-500"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center px-2">
          <Link href="/">
            <Image
              src={icon}
              width={100}
              height={50}
              alt="Picture of the author"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-5 ">
            {NavItem1}
          </div>
          <div>
            <Link href="/dashboard">
              <button className="text-[#303030] py-3 px-8 bg-[#F3FAFF] rounded-lg md:block hidden">
                Start Building
              </button>
            </Link>
            <IoMdMenu
              onClick={() => setmenu(true)}
              className="text-[32px] md:hidden block text-white"
            />
          </div>
        </div>
      </Container>
      <div className="block md:hidden">
        {menu === true && <Sidebar toggleMenu={toggleMenu} />}
      </div>
    </div>
  );
};

export default Navbar;

// "use client";

// import React, { useEffect, useState } from "react";
// import icon from "@/public/icon/logo.png";
// import { IoMdMenu, IoIosClose } from "react-icons/io";
// import Container from "@/app/_container/Container";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";

// const NavItem1 = (
//   <>
//     <Link
//       href="/"
//       className="text-[#000] font-medium  hover:text-[#6c6c6c] btn"
//     >
//       Home
//     </Link>
//     <Link
//       href="/blogs"
//       className="text-[#000] font-medium  hover:text-[#6c6c6c] btn"
//     >
//       Blog
//     </Link>
//     <Link
//       href="/free-biz"
//       className="text-[#000] font-medium  hover:text-[#6c6c6c] btn"
//     >
//       Free Biz
//     </Link>
//   </>
// );

// const Navbar = ({ scroll, setScroll }) => {
//   const [menu, setMenu] = useState(false);
//   // useEffect(() => window.scrollTo(0, 10));
//   const location = usePathname();
//   const handleToggleMenu = () => {
//     setMenu(!menu);
//     // setScroll(!scroll);
//   };
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 30);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     setMenu(false);
//   }, [location]);
//   return (
//     <div
//       className={`${
//         isScrolled == true
//           ? "bg-[#2F76DE] duration-300 py-2"
//           : "transition-all duration-300 py-3 bg-[#2F76DE]"
//       } w-full z-[99] fixed`}
//     >
//       <Container>
//         <div className="px-3 flex items-center justify-between relative ">
//           <Link href="/">
//             <Image
//               src={icon}
//               width={100}
//               height={50}
//               alt="Picture of the author"
//             />
//           </Link>
//           <div
//             className={`flex flex-col items-center gap-5 bg-[#fff] absolute  right-0 left-0 md:hidden ${
//               menu
//                 ? "top-12 py-8 transition-all  duration-500 ease-in "
//                 : "-top-96  transition-all duration-500 ease-in"
//             }`}
//           >
//             <div className="w-full flex justify-end">
//               <button
//                 onClick={handleToggleMenu}
//                 className=" md:hidden flex justify-end  mx-10"
//               >
//                 {/* {menu ? (
//                   <IoIosClose className="text-[50px] text-[#000] size-10" />
//                 ) : (
//                   ""
//                 )} */}
//               </button>
//             </div>
//             {NavItem1}
//             <div className=" flex justify-center">
//               <Link href="/dashboard/dashboard-home">
//                 <button className="text-[#303030] py-3 px-8 bg-[#F3FAFF] rounded-lg">
//                   Start Building
//                 </button>
//               </Link>
//             </div>
//           </div>
//           <div className="md:flex gap-5 text-[16px] hidden">{NavItem1}</div>
//           <div className="md:hidden">
//             <button onClick={handleToggleMenu} className="flex md:hidden">
//               {menu ? (
//                 <IoIosClose className="text-[50px] text-[#fff] size-10" />
//               ) : (
//                 <IoMdMenu className="text-[40px] text-[#fff] size-10" />
//               )}
//             </button>
//           </div>
//           <div className="md:block hidden">
//             <div className=" flex justify-center">
//               <Link href="/dashboard">
//                 <button className="text-[#303030] py-3 px-8 bg-[#F3FAFF] rounded-lg">
//                   Start Building
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Navbar;
