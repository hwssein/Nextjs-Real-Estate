"use server";

import Posts from "@/models/Posts";
import findUser from "@/serverAction/findUser";
import { revalidatePath } from "next/cache";

const deletePost = async (id) => {
  try {
    const user = await findUser();
    if (user.error) throw new Error(user.error);
    console.log(user);

    const post = await Posts.findOne({ _id: id });
    if (!user._id.equals(post.userId) && user?.role === "USER")
      throw new Error("دسترسی شما به این آگهی محدود شده است");

    await Posts.deleteOne({ _id: id });

    revalidatePath("/dashboard/my-post");
    revalidatePath("/residential-post");

    return { message: "با موفقیت حذف شد" };
  } catch (error) {
    return { error: error.message };
  }
};

export default deletePost;
