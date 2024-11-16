"use server";

import Posts from "@/models/Posts";
import findUser from "./findUser";
import { revalidatePath } from "next/cache";

const publishPost = async (id) => {
  try {
    const user = await findUser();
    if (user.error) throw new Error(user.error);
    if (user.role !== "ADMIN") throw new Error("اجازه دسترسی ندارید");

    const post = await Posts.findOne({ _id: id });
    if (!post || post.length === 0) throw new Error("مشکلی پیش آکده است");

    try {
      post.published = true;
      post.save();
    } catch (error) {
      return { error: "مشکلی در سرور رخ داده است" };
    }

    revalidatePath("/admin");
    return { message: "با موفقیت منتشر شد" };
  } catch (error) {
    return { error: error.message };
  }
};

export default publishPost;
