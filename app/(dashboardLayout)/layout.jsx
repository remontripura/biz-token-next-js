import { Inter } from "next/font/google";
import React from "react";
import "@/app/globals.css";
import DashboardNavbar from "@/app/components/shared/navbar/DashboardNavbar";
import AdminSideBar from "@/app/components/shared/admin/AdminSideBar";
const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="https://i.postimg.cc/HkzmZjxm/favicon.png"
          sizes="any"
        />
      </head>
      <body className={inter.className}>
        <div className="w-full mx-auto relative">
          <DashboardNavbar />
          <div className="grid grid-cols-12 overflow-hidden ">
            <div
              className={`col-span-3 md:block hidden bg-white z-30 sticky overflow-y-auto`}
            >
              <AdminSideBar />
            </div>
            <div className="md:col-span-9 col-span-12">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
