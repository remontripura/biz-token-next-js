import { Inter } from "next/font/google";
import React from 'react';
import Footer from '../components/shared/footer/Footer';
import Navbar from '../components/shared/navbar/Navbar';
import AdminSidebar from '../components/shared/admin/AdminSideBar';
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

const DashboardLayout = ({ children }) => {
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
};

export default DashboardLayout;