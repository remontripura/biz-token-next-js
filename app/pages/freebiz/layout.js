import Navbar from "@/app/components/_navbar/Navbar";
import Footer from "@/app/components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
