"use server";

import { Types } from "mongoose";
import { revalidatePath } from "next/cache";

import findUser from "@/serverAction/findUser";
import Posts from "@/models/Posts";

const submitPost = async (form) => {
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
      !telNumber ||
      !telNumberResult ||
      !price ||
      !realEstate ||
      !category ||
      !constructionDate
    )
      throw new Error("اطلاعات وارد شده معتبر نیست");

    try {
      const newPost = await Posts.create({
        postTitle,
        description,
        address,
        telNumber: Number(telNumber),
        price: Number(price),
        realEstate,
        category,
        amenities,
        rules,
        constructionDate,
        userId: new Types.ObjectId(user._id),
      });
    } catch (error) {
      console.log(error);
      return { error: "مشکلی در سرور رخ داده" };
    }

    revalidatePath("/dashboard/my-post");
    return { message: "با موفقیت ذخیره شد" };
  } catch (error) {
    return { error: error.message };
  }
};

export default submitPost;
