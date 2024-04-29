
import Navbar from "./components/shared/_navbar/Navbar";
import Footer from "./components/shared/footer/Footer";
import Index from "./pages/home/page";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Index />
            <Footer />
        </main>
    );
}
