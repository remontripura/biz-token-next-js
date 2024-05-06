import { Inter } from "next/font/google";
// import "@/app/globals.css";
import Navbar from "@/app/components/shared/navbar/Navbar";
import Footer from "@/app/components/shared/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Biz Token | blog",
  description: "Biz token",
};
export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
