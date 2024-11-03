"use server";

import Posts from "@/models/Posts";
import findUser from "@/serverAction/findUser";
import { convertToISO } from "@/utils/replaceNumber";

const editPost = async (formData, id) => {
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

    return { message: "با موفقیت تغییر کرد" };
  } catch (error) {
    return { error: error.message };
  }
};

export default editPost;
