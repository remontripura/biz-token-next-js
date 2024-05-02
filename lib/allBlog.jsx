import axios from "axios";

const AllBlog = async () => {
  const result = await fetch("https://biz-server-git-main-remontripuras-projects.vercel.app/news");
  return result.json();
};

export default AllBlog;
