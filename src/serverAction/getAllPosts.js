"use server";

import Posts from "@/models/Posts";
import connectDB from "@/utils/connectDB";

const getAllPosts = async () => {
  try {
    await connectDB();

    const posts = await Posts.find({ published: true }).select("-userId");
    if (!posts || posts.length === 0)
      throw new Error("هنوز هیج آگهی منتشر نشده است");

    return { data: posts };
  } catch (error) {
    return { error: error.message };
  }
};

export default getAllPosts;
