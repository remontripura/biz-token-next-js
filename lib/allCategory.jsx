import axios from "axios";

const AllCategory = async () => {
  try {
    const response = await axios.get(
      "https://biz-server-git-main-remontripuras-projects.vercel.app/category"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default AllCategory;
