"use server";

import Posts from "@/models/Posts";
import findUser from "@/serverAction/findUser";
import { convertToISO } from "@/utils/replaceNumber";

const editPost = async (formData, id) => {
  try {
    const user = await findUser();
    if (user.error) throw new Error(user.error);

    const post = await Posts.findOne({ _id: id });
    if (!user._id.equals(post.userId))
      throw new Error("دسترسی شما به این آگهی محدود شده است");

    formData.append("id", id);

    const formDataObject = {};

    const date = formData.get("constructionDate");
    const newDate = convertToISO(date);
    formData.delete("constructionDate");
    formData.append("constructionDate", newDate);

    for (const [key, value] of formData.entries()) {
      if (formDataObject[key]) {
        if (Array.isArray(formDataObject[key])) {
          formDataObject[key].push(value);
        } else {
          formDataObject[key] = [formDataObject[key], value];
        }
      } else {
        formDataObject[key] = value;
      }
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
      method: "PATCH",
      body: JSON.stringify(formDataObject),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    if (data.message) return { message: data.message };

    if (data.error) throw new Error(data.error);
  } catch (error) {
    return { error: error.message };
  }
};

export default editPost;
