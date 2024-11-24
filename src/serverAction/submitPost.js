"use server";

import { Types } from "mongoose";
import { revalidatePath } from "next/cache";

import findUser from "@/serverAction/findUser";
import Posts from "@/models/Posts";
import uploadAndGetImageUrl from "@/utils/uploadAndGetImageUrl";

const submitPost = async (formData) => {
  try {
    const user = await findUser();
    if (user.error) throw new Error(user.error);

    const postTitle = formData.get("postTitle");
    const description = formData.get("description");
    const newImage = formData.getAll("newImage");
    const address = formData.get("address");
    const telNumber = formData.get("telNumber");
    const price = formData.get("price");
    const realEstate = formData.get("realEstate");
    const category = formData.get("category");
    const amenities = formData.getAll("amenities");
    const rules = formData.getAll("rules");
    const constructionDate = formData.get("constructionDate");

    let imagePublicUrl = null;
    const randomNumber = Math.floor(10000000 + Math.random() * 90000000);

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

    if (newImage && newImage.length !== 0) {
      imagePublicUrl = await uploadAndGetImageUrl(
        newImage,
        user._id,
        randomNumber
      );
      if (imagePublicUrl.error) throw new Error(imagePublicUrl.error);
    }

    try {
      const newPost = await Posts.create({
        postTitle,
        description,
        image: imagePublicUrl ?? [],
        imageFolderId: randomNumber,
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
