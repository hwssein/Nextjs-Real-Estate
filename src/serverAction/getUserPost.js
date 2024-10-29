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

    return JSON.parse(JSON.stringify(userPost[0].posts));
  } catch (error) {
    return { error: error.message };
  }
};

export default getUserPost;
