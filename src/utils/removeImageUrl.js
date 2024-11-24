import supabase from "@/lib/supabase";

const removeImageUrl = async (imagesUrl) => {
  try {
    for (let item of imagesUrl) {
      const path = item.split("storage/v1/object/public/upload-image/")[1];

      const { error } = await supabase.storage
        .from("upload-image")
        .remove(path);

      if (error || !path) throw new Error("مشکلی در سرور رخ داد است");

      return { message: "deleted" };
    }
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};

export default removeImageUrl;
