import ActionButton from "@/app/components/shared/actionButton/actionButton";
import AllBlog from "@/lib/allBlog";
import AllCategory from "@/lib/allCategory";
import Image from "next/image";

const allblogs = async () => {
  const allBlogs = await AllBlog();
  const allCategory = await AllCategory();

  return (
    <div className="relative mx-2 h-[80vh]">
      <div className="grid grid-cols-12 gap-3">
        <div className="h-24 border col-span-4 flex flex-col justify-center items-center shadow rounded">
          <h3 className="text-[#656565] text-[20px] font-semibold">
            Total Blog
          </h3>
          <h3 className="text-[28px] font-semibold">{`${allBlogs?.length < 10 ? 0 : ""
            }${allBlogs?.length}`}</h3>
        </div>
        <div className="h-24 border col-span-4 flex flex-col justify-center items-center shadow rounded">
          <h3 className="text-[#656565] text-[20px] font-semibold">
            Total Category
          </h3>
          <h3 className="text-[28px] font-semibold">{`${allCategory?.length < 10 ? 0 : ""
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
                {`${data?.title?.slice(0, 20)}${data?.title?.length > 20 ? "..." : ""
                  }`}
              </td>
              <td className=" text-center w-3/12 space-x-3 p-2">
                <ActionButton data={data} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default allblogs;
