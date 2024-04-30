import axios from "axios";

const AllBlog = async () => {
  try {
    const response = await axios.get(
      "https://biz-server-git-main-remontripuras-projects.vercel.app/news"
    );
    console.log(response);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export default AllBlog;
