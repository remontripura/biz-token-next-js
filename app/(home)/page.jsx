
import HeroSection from "../components/_homeComponent/HeroSection";
import Freedom from "../components/_homeComponent/Freedom";
import WhyChooseUs from "../components/_homeComponent/WhyChooseUs";
import Facilities from "../components/_homeComponent/Facilities";
import BuildBiz from "../components/_homeComponent/BuildBix";
import LatestBlog from "../components/_homeComponent/LatestBlog";
import Contact from "../components/_homeComponent/Contact";
import BlockChainTrust from "../components/_homeComponent/BlockChainYouCanTrust";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BlockChainTrust />
      <Freedom />
      <WhyChooseUs />
      <Facilities />
      <BuildBiz />
      <LatestBlog />
      <Contact />
    </div>

  );
}
