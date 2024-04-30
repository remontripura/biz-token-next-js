import HomeLayout from "./(homeLayout)/layout";
import Navbar from "./components/shared/_navbar/Navbar";
import Footer from "./components/shared/footer/Footer";
import Index from "./pages/home/page";

export default function Home() {
  return (
    <HomeLayout>
      <Index />
    </HomeLayout>
  );
}
