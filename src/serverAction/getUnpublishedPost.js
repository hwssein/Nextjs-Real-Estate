import Posts from "@/models/Posts";
import findUser from "./findUser";

const getUnpublishedPost = async () => {
  try {
    const user = await findUser();
    if (user.error) throw new Error(user.error);

    const posts = await Posts.find({ published: false }).select("-userId");
    if (!posts || posts.length === 0)
      throw new Error("آگهی برای انتشار وجود ندارد");

    return { data: posts };
  } catch (error) {
    return { error: error.message };
  }
};

export default getUnpublishedPost;
