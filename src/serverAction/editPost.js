"use server";

import { revalidatePath } from "next/cache";

import Posts from "@/models/Posts";
import findUser from "@/serverAction/findUser";

const editPost = async (form, id) => {
  try {
    const user = await findUser();
    if (user.error) throw new Error(user.error);

    const postTitle = form.postTitle;
    const description = form.description;
    const address = form.address;
    const telNumber = form.telNumber;
    const price = form.price;
    const realEstate = form.realEstate;
    const category = form.category;
    const amenities = form.amenities;
    const rules = form.rules;
    const constructionDate = form.constructionDate;

    const regex = /^9\d{9}$/;
    const telNumberResult = regex.test(telNumber);

    if (
      !postTitle ||
      !description ||
      !address ||
      !telNumberResult ||
      !telNumber ||
      !price ||
      !realEstate ||
      !category ||
      !constructionDate
    )
      throw new Error("اطلاعات وارد شده معتبر نیست");

    const post = await Posts.findOne({ _id: id });
    if (!user._id.equals(post.userId))
      throw new Error("دسترسی شما به این آگهی محدود شده است");

    try {
      post.postTitle = postTitle;
      post.description = description;
      post.address = address;
      post.telNumber = Number(telNumber);
      post.price = Number(price);
      post.realEstate = realEstate;
      post.category = category;
      post.amenities = amenities;
      post.rules = rules;
      post.constructionDate = constructionDate;

      post.save();
    } catch (error) {
      console.log(error);
      return { error: "مشکلی در سرور رخ داده" };
    }

    revalidatePath(`/dashboard/my-post${id}`);
    return { message: "با موفقیت تغییر کرد" };
  } catch (error) {
    return { error: error.message };
  }
};

export default editPost;
