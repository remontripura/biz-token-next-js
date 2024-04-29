"use client"


import { Swiper, SwiperSlide, pagination } from "swiper/react";
import right from "@/public/image/latest-blog/right.svg"
import left from "@/public/image/latest-blog/left.svg";



import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const SwiperComponent = ({allBlogs}) => {
  return (
    <div>
           <Swiper
            slidesPerView={1}
            spaceBetween={5}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              type: "bullets",
              // dynamicBullets: 3,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {allBlogs?.slice(0, 5).map((item) => (
              <SwiperSlide key={item._id}>
                <div className={`h-[411px] relative md:mt-0  mr-3 mb-10`}>
                  <div to={`news/${item?._id}`}>
                    <Link href={`pages/news/${item?._id}`}>
                      <Image
                        style={{
                          width: "100%",
                          height: "350px",
                          borderRadius: "10px",
                          objectFit: "cover",
                        }}
                        width={500}
                        height={500}
                        src={item?.imageUrl}
                        alt="Picture of the author"
                      />
                      <div className="px-[33px] py-[25px] w-[90%] absolute bg-[#FFFFFF]  right-0 left-0 mx-auto -bottom-0 rounded-lg shadow-lg">
                        <h3 className="font-medium text-[20px]">
                          {item?.title?.slice(0, 30) + " ..."}
                        </h3>
                        <p className="text-[#6A6A6A] text-4">
                          {`${item?.date?.date} ${item?.date?.monthName} ${item?.date?.year}`}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="button-atrrangment absolute bottom-0 right-0 left-0">
            <div className="button-swiper p-5 flex items-center justify-between mx-auto w-[250px]">
              <div className="swiper-button-prev previous">
                <Image className="md:size-auto size-8" src={left} alt="" />
              </div>
              <div className="swiper-pagination"></div>
              <div className="swiper-button-next">
                {" "}
                <Image className="md:size-auto size-8" src={right} alt="" />
              </div>
            </div>
          </div>
    </div>
  );
};

export default SwiperComponent;