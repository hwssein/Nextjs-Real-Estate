"use server";

import { redirect } from "next/navigation";

const submitPost = async (formData) => {
  const postTitle = formData.get("postTitle");
  const description = formData.get("description");
  const address = formData.get("address");
  const telNumber = formData.get("telNumber");
  const price = formData.get("price");
  const realEstate = formData.get("realEstate");
  const category = formData.get("category");
  const amenities = formData.getAll("amenities");
  const rules = formData.getAll("rules");
  const constructionDate = formData.getAll("constructionDate");

  redirect("/dashboard");
};

export default submitPost;
