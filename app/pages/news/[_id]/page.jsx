"use client";

import Container from "@/app/_container/Container";
import timelogo from "../../../../public/image/news/time.svg";
import facebook from "../../../../public/image/news/facebook.svg";
import twitter from "../../../../public/image/news/twitter.svg";
import instagram from "../../../../public/image/news/instagram.svg";
import reddit from "../../../../public/image/news/reddit.svg";
import linkedin from "../../../../public/image/news/linkedin.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import Lottie from "react-lottie-player";
import lottieJson from "../../../../public/json/loading.json";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";

const News = ({ params }) => {
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://biz-server-git-main-remontripuras-projects.vercel.app/category-group"
      )
      .then((response) => {
        setCategory(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
    window.scrollTo(0, 100);
  }, []);
  useEffect(() => {
    axios
      .get("https://biz-server-git-main-remontripuras-projects.vercel.app/news")
      .then((response) => {
        setData(response.data);
        const filterData = response.data?.find(
          (item) => item._id == params._id
        );
        setFilterData(filterData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
    window.scrollTo(0, 100);
  }, []);

  useEffect(() => {
    scrollTo(0, 0);
    
  }, []);

  const reversedData = data && Array.isArray(data) ? [...data].reverse() : [];

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Lottie
          loop
          animationData={lottieJson}
          play
          style={{ width: 300, height: 300 }}
        />
      </div>
    );
  }
  // const scroll = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <Container>
      <div className="md:pb-[80px] md:pt-[100px] pt-[100px] pb-5 ">
        <div className="flex justify-start items-center py-5 bg-[#FFFFFF] shadow rounded-lg my-5 w-fit px-[14px] gap-5">
          <span className="text-[20px] text-[#7A7A7A]">Home</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#7A7A7A"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
          <span className="text-[20px] text-[#2F76DE] font-medium">Blog</span>
        </div>
        <div className="col-span-12 grid grid-cols-12 gap-3">
          <div className="lg:col-span-9 col-span-12 px-3">
            <Image
              width={500}
              height={500}
              className="md:h-[500px] h-[300px] object-cover w-full rounded-3xl"
              src={filterData.imageUrl}
              alt=""
            />
            <p className="flex items-center gap-5 mt-10 mb-[60px]">
              <Image
                width={500}
                height={500}
                className="size-[30px]"
                src={timelogo}
                alt=""
              />
              <span className="text-[20px] text-[#787878]">
                {`${filterData.date?.date} ${filterData.date?.monthName} ${filterData.date?.year}  `}
              </span>{" "}
              <span className="font-medium text-[20px] text-[#787878] ml-3">
                2.18 PM
              </span>{" "}
            </p>
            <h3 className="font-bold text-[48px] text-[#242424] mb-3">
              {filterData.title}
            </h3>
            <div
              className="bg-none"
              dangerouslySetInnerHTML={{
                __html: filterData.content,
              }}
            ></div>

            <div className="flex justify-end items-center md:gap-8 gap-3 md:my-[66px] my-[30px]">
              <h3 className="md:text-[32px] text-[20px] text-[#494949] font-bold">
                Share
              </h3>
              <Image
                src={facebook}
                alt=""
                className="md:size-[50px] size-[24px] cursor-pointer"
              />
              <Image
                src={twitter}
                alt=""
                className="md:size-[50px] size-[24px] cursor-pointer"
              />
              <Image
                src={instagram}
                alt=""
                className="md:size-[50px] size-[24px] cursor-pointer"
              />
              <Image
                src={reddit}
                alt=""
                className="md:size-[50px] size-[24px] cursor-pointer"
              />
              <Image
                width={500}
                height={500}
                src={linkedin}
                alt=""
                className="md:size-[50px] size-[24px] cursor-pointer"
              />
            </div>
            <div className="md:mt-[84px] mt-[50px] mb-[100px]">
              <form>
                <div className="w-full space-y-3">
                  <input
                    type="text"
                    className="w-full md:px-[34px] px-[5px] md:py-[20px] py-[10px] rounded border border-slate-300  focus:outline focus:outline-slate-400"
                    placeholder="Name"
                  />
                  <textarea
                    name=""
                    id=""
                    rows=""
                    className="w-full h-[155px] md:px-[34px] px-[5px] md:py-[20px] py-[10px] rounded border border-slate-300  focus:outline focus:outline-slate-400"
                    placeholder="Enter Your Text"
                  ></textarea>
                  <button className="md:px-[41px] px-[20px] md:py-[16px] py-[8px] rounded-lg bg-[#2F77E0] text-[20px] font-medium text-[#FFFFFF]">
                    Comment
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="md:col-span-3 col-span-12 md:mx-0 mx-3">
            <div className=" bg-[#F3F3F3] p-4 rounded md:h-[500px] h-[300px]">
              <div className="bg-[#fff] rounded p-[10px] w-fit px-5 mb-3">
                <h3 className="font-bold text-[#2F76DE] text-[20px]">
                  Category
                </h3>
              </div>
              <ul className="space-y-3 p-1">
                {category?.map((item) => (
                  <Link
                    href={`/pages/category/${item._id}`}
                    key={item._id}
                    className="w-full bg-[#fff] rounded-full pl-3 pr-1 py-1 flex justify-between"
                  >
                    {item.category}
                    <span className="w-6 h-full bg-[#2F76DE] rounded-full text-center text-[#fff]">
                      {item.count}
                    </span>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="bg-[#F3FAFF] h-fit border p-3 rounded mt-5">
              <div className="bg-[#fff] rounded p-[10px] w-full text-center">
                <h3 className="font-bold text-[#2F76DE] text-[20px]">
                  Populer news
                </h3>
              </div>
              <div className="space-y-2">
                {data?.slice(0, 6).map((data) => (
                  <div
                    key={data._id}
                    className="flex items-start gap-2 border-b-2 border-b-[#CDCDCD] py-3"
                  >
                    <Image
                      width={500}
                      height={500}
                      className="size-[80px] rounded-md"
                      src={data.imageUrl}
                      alt=""
                    />
                    <div className="flex flex-col justify-between">
                      <p className="text-[12px] text-[#8B8B8B]">
                        Biz Ecosystem
                      </p>
                      <Link href={`/pages/news/${data?._id}`}>
                        <p className="text-[#242424] font-medium text-[14px]">
                          {data.title}
                        </p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#F3FAFF] h-fit p-3 rounded mt-5">
              <div className="bg-[#fff] rounded p-[10px] w-fit text-center px-5">
                <h3 className="font-bold text-[#2F76DE] text-[20px]">
                  Follow Us
                </h3>
              </div>
              <div className="flex justify-start items-center  gap-4 md:my-[40px] my-[25px]">
                <Image
                  width={500}
                  height={500}
                  src={facebook}
                  alt=""
                  className=" size-[25px] cursor-pointer"
                />
                <Image
                  width={500}
                  height={500}
                  src={twitter}
                  alt=""
                  className=" size-[25px] cursor-pointer"
                />
                <Image
                  width={500}
                  height={500}
                  src={instagram}
                  alt=""
                  className=" size-[25px] cursor-pointer"
                />
                <Image
                  width={500}
                  height={500}
                  src={reddit}
                  alt=""
                  className=" size-[25px] cursor-pointer"
                />
                <Image
                  width={500}
                  height={500}
                  src={linkedin}
                  alt=""
                  className=" size-[25px] cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative col-span-12 mt-5">
          <h3 className=" md:text-[48px] text-[32px] font-bold">
            Related blog
          </h3>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
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
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {reversedData?.map((data) => (
              <SwiperSlide key={data._id} className="w-full mt-5">
                <Image
                  width={500}
                  height={500}
                  className="h-[190px] w-full object-cover"
                  src={data.imageUrl}
                  alt=""
                />
                <Link href={`/pages/news/${data?._id}`}>
                  <p className="mt-4 hover:text-blue-600 duration-300">
                    {data.title}
                  </p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="button-atrrangment absolute top-3 right-0">
            <div className="button-swiper px-3 flex items-center justify-between w-[150px]">
              <div className="swiper-button-prev   bg-[#2F76DE] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#fff"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
              <div className="swiper-pagination"></div>
              <div className="swiper-button-next bg-[#2F76DE] rounded-full">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#fff"
                  className="md:size-8 size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default News;
