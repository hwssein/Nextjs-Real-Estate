"use server";

import { Types } from "mongoose";

import { convertToISO } from "@/utils/replaceNumber";
import findUser from "@/serverAction/findUser";
import Posts from "@/models/Posts";

const submitPost = async (formData) => {
  try {
    const user = await findUser();
    if (user.error) throw new Error(user.error);

    const date = formData.get("constructionDate");
    const newDate = convertToISO(date);
    formData.delete("constructionDate");
    formData.append("constructionDate", newDate);

    const postTitle = formData.get("postTitle");
    const description = formData.get("description");
    const address = formData.get("address");
    const telNumber = formData.get("telNumber");
    const price = formData.get("price");
    const realEstate = formData.get("realEstate");
    const category = formData.get("category");
    const amenities = formData.getAll("amenities");
    const rules = formData.getAll("rules");
    const constructionDate = formData.get("constructionDate");

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

    return { message: "با موفقیت ذخیره شد" };
  } catch (error) {
    return { error: error.message };
  }
};

export default submitPost;
