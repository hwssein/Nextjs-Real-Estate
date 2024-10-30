"use server";

import Posts from "@/models/Posts";
import findUser from "@/serverAction/findUser";
import { revalidatePath } from "next/cache";

const deletePost = async (id) => {
  try {
    const user = await findUser();
    if (user.error) throw new Error(user.error);

    const post = await Posts.findOne({ _id: id });
    if (!user._id.equals(post.userId))
      throw new Error("دسترسی شما به این آگهی محدود شده است");

    await Posts.deleteOne({ _id: id });

    revalidatePath("/dashboard/my-post");

    return { message: "با موفقیت حذف شد" };
  } catch (error) {
    return { error: error.message };
  }
};

export default deletePost;
