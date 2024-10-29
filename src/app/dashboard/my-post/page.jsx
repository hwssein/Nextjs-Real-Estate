import getUserPost from "@/serverAction/getUserPost";
import MyPostPage from "@/template/MyPostPage";

async function MyPost() {
  const posts = await getUserPost();

  return (
    <>
      <MyPostPage posts={posts} />
    </>
  );
}

export default MyPost;
