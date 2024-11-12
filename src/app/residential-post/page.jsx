import getAllPosts from "@/serverAction/getAllPosts";
import ResidentialPostPage from "@/template/ResidentialPostPage";

async function ResidentialPost({ searchParams }) {
  const posts = await getAllPosts();
  const jsPosts = JSON.parse(JSON.stringify(posts));

  if (jsPosts.error)
    return (
      <div className="w-full text-center p-2 bg-line rounded mb-6">
        هنوز آگهی منتشر نشده است
      </div>
    );

  return (
    <>
      <ResidentialPostPage data={jsPosts.data} searchParam={searchParams} />
    </>
  );
}

export default ResidentialPost;
