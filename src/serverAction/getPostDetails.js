"use server";

import Posts from "@/models/Posts";
import connectDB from "@/utils/connectDB";

const getPostDetails = async (id) => {
  try {
    await connectDB();

    const post = await Posts.findOne({ _id: id }).select("-userId");
    if (!post || post.length === 0)
      throw new Error("آگهی با این مشخصات وجود ندارد");

    return { data: post };
  } catch (error) {
    return { error: error.message };
  }
};

export default getPostDetails;
