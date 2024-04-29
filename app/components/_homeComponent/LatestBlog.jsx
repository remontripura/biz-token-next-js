import Container from "@/app/_container/Container";
import AllBlog from "@/lib/allBlog";
import SwiperComponent from "./Swiper";

const LatestBlog = async () => {
  const allBlogs = await AllBlog();
  return (
    <div className="">
      <Container>
        <div className="relative pb-20 w-full">
          {" "}
          <div className=" text-center mb-5">
            <h2 className="text-[#242424] font-bold lg:text-[48px] md:text-[32px] text-[28px] mb-4">
              Our Latest Blog
            </h2>
            <p className="text-style2">
              We work to develop attractive featuers for furure facilities of
              BIZ
              <br /> Community
            </p>
          </div>
          <SwiperComponent allBlogs={allBlogs} />
        </div>
      </Container>
    </div>
  );
};

export default LatestBlog;
