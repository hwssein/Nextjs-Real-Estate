"use server";

import { revalidatePath } from "next/cache";

import Posts from "@/models/Posts";
import findUser from "@/serverAction/findUser";
import removeImageUrl from "@/utils/removeImageUrl";
import uploadAndGetImageUrl from "@/utils/uploadAndGetImageUrl";

const editPost = async (formData, id) => {
  try {
    const user = await findUser();
    if (user.error) throw new Error(user.error);

    const postTitle = formData.get("postTitle");
    const description = formData.get("description");
    const image = formData.getAll("image");
    const removeImage = formData.getAll("removeImage");
    const newImage = formData.getAll("newImage");
    const address = formData.get("address");
    const telNumber = formData.get("telNumber");
    const price = formData.get("price");
    const realEstate = formData.get("realEstate");
    const category = formData.get("category");
    const amenities = formData.getAll("amenities");
    const rules = formData.getAll("rules");
    const constructionDate = formData.get("constructionDate");

    let imagePublicUrl = image;

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
    if (!user._id.equals(post.userId) && user?.role === "USER")
      throw new Error("دسترسی شما به این آگهی محدود شده است");
    if (!post) {
      throw new Error("پست مورد نظر پیدا نشد");
    }

    if (removeImage && removeImage.length !== 0) {
      const removedImages = await removeImageUrl(removeImage);
      if (removedImages.error) throw new Error(removedImages.error);
    }

    if (newImage && newImage.length !== 0) {
      const newImagesPublicUrl = await uploadAndGetImageUrl(
        newImage,
        user._id,
        post.imageFolderId
      );
      if (newImagesPublicUrl.error) throw new Error(newImagesPublicUrl.error);

      imagePublicUrl = [...imagePublicUrl, ...newImagesPublicUrl];
    }

    try {
      post.postTitle = postTitle;
      post.description = description;
      post.image = imagePublicUrl;
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
