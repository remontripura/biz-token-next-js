"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = ({ href, path }) => {
  const pathname = usePathname();
  const activeLink = href === pathname;
  return (
    <Link href={href} className={`${activeLink ? "text-red-500" : ""}`}>
      {path}
    </Link>
  );
};

export default Nav;
