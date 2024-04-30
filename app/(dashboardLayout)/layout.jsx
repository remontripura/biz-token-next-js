import React from 'react';
import Footer from '../components/shared/footer/Footer';
import Navbar from '../components/shared/_navbar/navbar';
import AdminSidebar from '../components/shared/admin/AdminSideBar';

const DashboardLayout = ({ children }) => {
  return (
    <div >
      <div className=''>
        <div>
          sidebar
        </div>
        <div>
          {children}
        </div>
        <div>
          footer
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;