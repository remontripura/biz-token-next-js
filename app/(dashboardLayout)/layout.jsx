import React from 'react';
import Footer from '../components/shared/footer/Footer';
import Navbar from '../components/shared/navbar/Navbar';
import AdminSidebar from '../components/shared/admin/AdminSideBar';
import "../globals.css";

const DashboardLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
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