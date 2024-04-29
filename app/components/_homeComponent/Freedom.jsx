'use client'


// import innovation from "../../assets/icon/freedom/innovation.svg";
// import globe from "../../assets/icon/freedom/globe.svg";
// import bitcoin from "../../assets/icon/freedom/bitcoin.svg";
import innovation from "../../../public/icon/freedom/innovation.svg";
import globe from "../../../public/icon/freedom/globe.svg";
import bitcoin from "../../../public/icon/freedom/bitcoin.svg";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Container from "@/app/_container/Container";
import Image from "next/image";

const FreedomData = [
  {
    img: globe,
    title: "Empowering Financial Access Globally",
    description:
      "Revolutionizing Financial Paradigms,DeFi transforms finance with accessibility, transparency, autonomy, leveraging blockchain for peer-to-peer transactions, empowering individuals.",
  },
  {
    img: innovation,
    title: "Unlocking Financial Opportunities",
    description:
      "DeFi offers various financial opportunities, operates round-the-clock, enables passive income, governance participation, and portfolio diversification globally.",
  },
  {
    img: bitcoin,
    title: "Overcoming Barriers to Entry",
    description:
      "DeFi's open infrastructure democratizes finance, fostering innovation and economic empowerment globally, eliminating traditional accessibility barriers.",
  },
];

const Freedom = () => {
  const componentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "2 1"],
  });

  const xValue = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  return (
    <div
      style={{ x: xValue }}
      className="w-full bg-[#F3FAFF] pt-10 pb-20 lg:px-0 px-3"
    >
      <Container>
        <div className="w-full">
          <div className="lg:pt-[80px] pb-10">
            <h2 className="text-[#242424] font-bold lg:text-[48px] md:text-[32px] text-[28px]">
              DeFi: Empowering <br /> Financial Access Globally
            </h2>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {FreedomData.map((data, i) => (
              <div
                key={i}
                className=" bg-[#FFFFFF] pt-[42px] pr-[55px] pb-[47px] pl-[32px] gap-3 rounded-[10px]"
                style={{
                  boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
                }}
              >
                <div className="">
                  <div className="size-[70px] bg-[#2F77E0] p-2 rounded-full mt-1 flex justify-center items-center">
                    <Image width={50} height={50} className="size-[44px]" src={data.img} alt="" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-[24px] leading-9 pt-[20px] pb-[12px]">
                    {data.title}
                  </h3>
                  <p className="text-style1">{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Freedom;
