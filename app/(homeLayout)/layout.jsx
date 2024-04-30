import React from 'react';
import Footer from '../components/shared/footer/Footer';
import Navbar from '../components/shared/_navbar/Navbar';

const HomeLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;