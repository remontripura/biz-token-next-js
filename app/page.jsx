import HomeLayout from "./(dashboardLayout)/layout";
import navbar from "./components/shared/_navbar/navbar";
import Footer from "./components/shared/footer/Footer";
import RootLayout from "./layout";
import Index from "./pages/home/page";

export default function Home() {
  return (
    <RootLayout>
      <navbar />
      <Index />
      <Footer />
    </RootLayout>
  );
}
