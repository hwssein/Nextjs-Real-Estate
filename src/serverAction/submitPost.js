"use server";

import { convertToISO } from "@/utils/replaceNumber";
import findUser from "@/serverAction/findUser";

const submitPost = async (formData) => {
  try {
    const user = await findUser();
    if (user.error) throw new Error(user.error);

    formData.append("_id", user._id);

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
      method: "POST",
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

export default submitPost;
