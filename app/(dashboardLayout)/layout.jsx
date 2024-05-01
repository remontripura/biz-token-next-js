import { Inter } from "next/font/google";
import React from 'react';
import AdminSidebar from '../components/shared/admin/AdminSideBar';
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className} >
        <div>
          sidebar
        </div>
        <div>
          {children}
        </div>
        <div>
          footer
        </div>
      </body>
    </html>
  );
}
