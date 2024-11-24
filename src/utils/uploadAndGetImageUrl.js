import supabase from "@/lib/supabase";

const uploadAndGetImageUrl = async (images, userId, randomNumber) => {
  try {
    const imagesPublicUrl = [];

    for (let item of images) {
      const imageName = `${Date.now()}-${
        item.name ? item.name?.replace(/[^\w.-]+/g, "-") : ".png"
      }`;

      const { data, error } = await supabase.storage
        .from("upload-image")
        .upload(`${userId}/${randomNumber}/${imageName}`, item);

      if (error || !data) {
        console.log(error);
        throw new Error("مشکلی هنگام آپلود تصویر به وجود آمده است");
      }

      const { data: publicUrlData } = supabase.storage
        .from("upload-image")
        .getPublicUrl(data.path);

      if (publicUrlData) {
        imagesPublicUrl.push(publicUrlData.publicUrl);
      }
    }

    return imagesPublicUrl;
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};

export default uploadAndGetImageUrl;
