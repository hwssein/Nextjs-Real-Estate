import getAllPosts from "@/serverAction/getAllPosts";
import ResidentialPostPage from "@/template/ResidentialPostPage";

async function ResidentialPost() {
  const posts = await getAllPosts();
  const jsPosts = JSON.parse(JSON.stringify(posts));

  return (
    <>
      <ResidentialPostPage data={jsPosts} />
    </>
  );
}

export default ResidentialPost;
