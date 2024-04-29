"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../../../../public/json/loading.json";
import Container from "@/app/_container/Container";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Page = ({ params }) => {
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const rowParams = params.id;
const router = usePathname()
console.log(router);
  const covertParams = rowParams.replace(/%20/g, " ");
  console.log(covertParams);
  console.log(filterData);
  useEffect(() => {
    axios
      .get("https://biz-server-git-main-remontripuras-projects.vercel.app/news")
      .then((response) => {
        setFilterData(
          response.data.filter((item) => item.category == covertParams)
        );
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
    window.scrollTo(0, 100);
  }, []);
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

  return (
    <div className="bg-[#e3f3ff] md:pb-[80px] md:pt-[150px] pt-[100px] pb-5 ">
      <Container>
        <div className="text-center md:mb-[80px] mb-10">
          <h3 className="md:text-[64px] text-[44px] font-bold text-[#323232]">
            Category
          </h3>
          {/* <p>
            <span className="font-semibole text-[18px] font-bold">Home</span>
            {pathname.replace(/%20/g, "-")}
          </p> */}
        </div>
        <div className="grid grid-cols-12 gap-5 md:mx-0 mx-2">
          {filterData?.map((dataItem, i) => (
            <Link
              href={`/pages/news/${dataItem._id}`}
              key={i}
              className="md:col-span-4 col-span-6 duration-300"
            >
              <div className="h-full  border border-blue-800 relative">
                <div>
                  <Image
                    width={500}
                    height={500}
                    className="w-full h-[300px] object-cover border-b-4 border-blue-800"
                    src={dataItem.imageUrl}
                    alt=""
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-[18px] font-bold ">
                    {dataItem.title.slice(0, 30) + "..."}
                  </h3>
                  <div
                    className="mb-12"
                    dangerouslySetInnerHTML={{
                      __html: dataItem?.content
                        ? dataItem.content
                            .replace(/(<([^>]+)>)/gi, "")
                            .split(" ")
                            .slice(0, 20)
                            .join(" ")
                        : "",
                    }}
                  ></div>
                  <button className="px-4 py-2 bg-blue-800 rounded text-white mt-3 absolute bottom-2">
                    Read More
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Page;
