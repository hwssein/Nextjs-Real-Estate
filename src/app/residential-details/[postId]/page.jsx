import PostDetailsSidebar from "@/layout/PostDetailsSidebar";
import getPostDetails from "@/serverAction/getPostDetails";
import PostDetailsPage from "@/template/PostDetailsPage";

async function PostDetails({ params }) {
  const { postId } = params;

  const post = await getPostDetails(postId);
  const jsPost = JSON.parse(JSON.stringify(post));

  if (!post || post.error || jsPost.length === 0) {
    return (
      <>
        <div className="w-full text-center p-2 bg-line rounded mb-6">
          آگهی با این مشخصات وجود ندارد
        </div>
      </>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-start gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-5 md:gap-10">
      <div className="w-full lg:w-3/4">
        <PostDetailsPage data={jsPost.data} />
      </div>

      <div className="w-full sm:w-72">
        <PostDetailsSidebar data={jsPost.data} />
      </div>
    </div>
  );
}

export const generateMetadata = async ({ params }) => {
  const { postId } = params;

  const post = await getPostDetails(postId);

  return {
    title: post.data.postTitle,
    description: post.data.description,
    authors: { name: post.data.realEstate },
  };
};

export default PostDetails;
