"use server";

import Users from "@/models/Users";
import findUser from "./findUser";

const getUserPost = async () => {
  try {
    const user = await findUser();
    if (user.error) throw new Error(user.error);

    const userPost = await Users.aggregate([
      { $match: { email: user.email } },
      {
        $lookup: {
          from: "posts",
          foreignField: "userId",
          localField: "_id",
          as: "posts",
        },
      },
    ]);

    const updatePost = userPost[0].posts.map((post) => ({
      ...post,
      _id: post._id.toString(),
      userId: post.userId.toString(),
      createdAt: post.createdAt.toISOString(),
      updatedAt: post.updatedAt.toISOString(),
      constructionDate: post.constructionDate.toISOString(),
    }));

    return updatePost;
  } catch (error) {
    return { error: error.message };
  }
};

export default getUserPost;
