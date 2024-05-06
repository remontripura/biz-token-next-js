"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Category = () => {
  const [category, setCategory] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://biz-server-git-main-remontripuras-projects.vercel.app/category",
        data
      );
      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          text: "Category set Successfully",
        });
        reset();
        fetchCategories();
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        Swal.fire({
          icon: "error",
          text: "category already exists",
        });
      } else {
        Swal.fire({
          icon: "error",
          text: "Oops something went wrong",
        });
      }
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://biz-server-git-main-remontripuras-projects.vercel.app/category"
      );
      setCategory(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="mx-2">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 ">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="font-semibold">
            Category
          </label>
          <input
            type="text"
            className="md:w-1/2 w-full px-2 py-2  rounded border border-slate-300  focus:outline focus:outline-slate-400"
            placeholder="Add Category"
            id="categoryName"
            {...register("categoryName", { required: true })}
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 px-8 py-2 text-[#fff] font-semibold rounded-md"
        >
          Save blog
        </button>
      </form>
      <div className="my-5 w-full">
        <h3 className="text-[24px] font-semibold my-3">Category List</h3>
        <div className="flex flex-wrap items-center gap-3 w-3/4 p-5 pl-0">
          {category?.map((item, i) => (
            <p
              key={i}
              className="px-3 py-1 bg-[#1E40AF] rounded text-[#fff] font-semibold cursor-pointer"
            >
              {item.categoryName}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
