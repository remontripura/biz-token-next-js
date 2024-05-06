"use client";

import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import axios from "axios";
import Container from "@/app/_container/Container";
import lottieJson from "../../../public/json/loading.json";
import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https:biz-server-git-main-remontripuras-projects.vercel.app/news`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const reversedData = data && Array.isArray(data) ? [...data].reverse() : [];
  if (loading) {
    return (
      <div className=" flex justify-center items-center">
        <Lottie
          loop
          animationData={lottieJson}
          play
          style={{ width: 300, height: 300 }}
        />
      </div>
    );
  }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="bg-[#e3f3ff] md:pb-[80px] pt-[100px] pb-5 ">
      <head>
       
      </head>
      <Container>
        <div className="text-center md:mb-[80px] mb-10">
          <h3 className="md:text-[64px] text-[44px] font-bold text-[#323232]">
            Blog
          </h3>
          <p>
            <span className="font-semibole text-[18px] font-bold">Home</span>
            {location.pathname}
          </p>
        </div>
        <div className="grid grid-cols-12 gap-5 md:mx-0 mx-2">
          {currentItems?.map((dataItem, i) => (
            <Link
              href={`/news/${dataItem._id}`}
              key={i}
              className="md:col-span-4 col-span-6 duration-300"
            >
              <div className="h-full  border border-blue-800 relative">
                <div className="w-full md:h-[350px] h-[200px]">
                  <Image
                    // style={{
                    //   width: "100%",
                    //   height: "350px",
                    //   borderRadius: "10px",
                    //   objectFit: "cover",
                    // }}
                    className="w-full  md:h-[350px] h-[200px] object-cover"
                    width={300}
                    height={300}
                    src={dataItem?.imageUrl}
                    alt="Picture of the author"
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
                            .slice(0, 10)
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
        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <button
            className="mx-1 px-3 py-1 bg-gray-200"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map(
            (pageNumber) => (
              <button
                key={pageNumber}
                className={`mx-1 px-3 py-1 ${
                  currentPage === pageNumber + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => paginate(pageNumber + 1)}
              >
                {pageNumber + 1}
              </button>
            )
          )}
          <button
            className="mx-1 px-3 py-1 bg-gray-200"
            onClick={handleNextPage}
            disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
          >
            Next
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
