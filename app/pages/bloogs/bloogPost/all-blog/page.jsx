import AllBlog from "@/lib/allBlog";
import AllCategory from "@/lib/allCategory";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const allBlogs = await AllBlog();
  const allCategory = await AllCategory();

  return (
    <div className="relative mx-2 h-[80vh]">
      <div className="grid grid-cols-12 gap-3">
        <div className="h-24 border col-span-4 flex flex-col justify-center items-center shadow rounded">
          <h3 className="text-[#656565] text-[20px] font-semibold">
            Total Blog
          </h3>
          <h3 className="text-[28px] font-semibold">{`${
            allBlogs.length < 10 ? 0 : ""
          }${allBlogs.length}`}</h3>
        </div>
        <div className="h-24 border col-span-4 flex flex-col justify-center items-center shadow rounded">
          <h3 className="text-[#656565] text-[20px] font-semibold">
            Total Category
          </h3>
          <h3 className="text-[28px] font-semibold">{`${
            allCategory?.length < 10 ? 0 : ""
          }${allCategory?.length}`}</h3>
        </div>
        <div className="h-24 border col-span-4 flex flex-col justify-center items-center shadow rounded">
          <h3 className="text-[#656565] text-[20px] font-semibold">
            Total User
          </h3>
          <h3 className="text-[28px] font-semibold">24</h3>
        </div>
      </div>
      <table className=" w-full border rounded-full mt-3">
        <thead className="border-b-2 bg-slate-300">
          <tr className="p-2">
            <th className="text-start p-2">No</th>
            <th className="text-start p-2">Image</th>
            <th className="text-start p-2">title</th>
            <th className="text-center p-2">Action</th>
          </tr>
        </thead>
        <tbody className="">
          {allBlogs?.map((data, i) => (
            <tr key={i} className="border-b-2 px-2 space-x-5">
              <td className=" text-start w-1/12 p-2">{i + 1}</td>
              <td className=" text-start w-2/12 p-2">
                <Image
                  width={100}
                  height={100}
                  className="size-14 rounded-full"
                  src={data?.imageUrl}
                  alt=""
                />
              </td>
              <td className=" text-start w-4/12 p-2">
                {" "}
                {`${data?.title?.slice(0, 20)}${
                  data?.title?.length > 20 ? "..." : ""
                }`}
              </td>
              <td className=" text-center w-3/12 space-x-3 p-2">
                <Link href={`/blog/blog-post/edit-blog/${data._id}`}>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#008000"
                      className="w-6 h-6"
                      
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </button>
                </Link>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#ff0000"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
