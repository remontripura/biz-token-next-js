"use client";

import Container from "@/app/_container/Container";
import akuna from "../../../public/image/blockchain-trust/akuna.svg";
import binance from "../../../public/image/blockchain-trust/binance.svg";
import cboe from "../../../public/image/blockchain-trust/cboe.svg";
import jane from "../../../public/image/blockchain-trust/jane.svg";
import okx from "../../../public/image/blockchain-trust/okx.svg";
import optiver from "../../../public/image/blockchain-trust/optiver.svg";
import twosigma from "../../../public/image/blockchain-trust/twosigma.svg";
import wintermute from "../../../public/image/blockchain-trust/wintermute.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const BlockChainTrust = () => {
  return (
    <div className="w-full bg-[#F3F3F3] px-5 md:py-24 py-12">
      <Container>
        <div>
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-[#242424] font-bold lg:text-[48px] md:text-[32px] text-[28px]">
              Blockchain You Can Trust
            </h2>
            <p className="max-w-[70ch] mt-[30px]">
              Major financial institutions—including some of the world’s biggest
              exchanges, market makers, and trading firms—publish their data
              directly to the network.
            </p>
          </div>
          <div className="md:mt-[124px]">
            <Swiper
              slidesPerView="auto"
              loop={true}
              autoplay={{ delay: 3000 }}
              spaceBetween={30}
              breakpoints={{
                320: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                480: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                640: {
                  slidesPerView: 5,
                  spaceBetween: 40,
                },
              }}
              className="md:p-0 swiper-size"
            >
              <SwiperSlide>
                <Image className="w-[160px] col-span-3" src={akuna} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Image className="w-[160px] col-span-3" src={binance} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Image className="w-[160px] col-span-3" src={cboe} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Image className="w-[160px] col-span-3" src={jane} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Image className="w-[160px] col-span-3" src={okx} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Image className="w-[160px] col-span-3" src={optiver} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Image className="w-[160px] col-span-3" src={twosigma} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Image className="w-[160px] col-span-3" src={wintermute} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlockChainTrust;
