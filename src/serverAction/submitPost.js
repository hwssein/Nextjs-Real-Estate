"use server";

import { auth } from "@/config/auth";
import { convertToISO } from "@/utils/replaceNumber";

const submitPost = async (formData) => {
  try {
    const formDataObject = {};

    const date = formData.get("constructionDate");
    const newDate = convertToISO(date);
    formData.delete("constructionDate");
    formData.append("constructionDate", newDate);

    const session = await auth();
    if (!session) throw new Error("لطفا وارد حساب کاربری خود شوید");
    formData.append("email", session.user.email);

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
