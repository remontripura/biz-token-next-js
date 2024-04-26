

import HeroSection from "@/app/components/_homeComponent/HeroSection";
import BlockChainTrustSection from "@/app/components/_homeComponent/BlockChainYouCanTrust";
import Freedom from "@/app/components/_homeComponent/Freedom";
import WhyChooseUs from "@/app/components/_homeComponent/WhyChooseUs";
import Facilities from "@/app/components/_homeComponent/Facilities";
import BuildBiz from "@/app/components/_homeComponent/BuildBix";
import LatestBlog from "@/app/components/_homeComponent/LatestBlog";
import Contact from "@/app/components/_homeComponent/Contact";

const Index = () => {
  return (
    <div>
      <HeroSection />
      <BlockChainTrustSection />
      <Freedom />
      <WhyChooseUs />
      <Facilities />
      <BuildBiz />
      <LatestBlog />
      <Contact />
    </div>
  );
};

export default Index;