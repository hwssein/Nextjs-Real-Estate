import Loader from "@/element/Loader";
import Posts from "@/models/Posts";
import AddPostPage from "@/template/AddPostPage";
import connectDB from "@/utils/connectDB";
import { Suspense } from "react";

async function EditPost({ params }) {
  await connectDB();

  const post = await Posts.findOne({ _id: params.postId });
  const jsPost = JSON.parse(JSON.stringify(post));

  if (!post)
    return (
      <>
        <div className="w-full text-center p-2 bg-secondary rounded">
          مشکلی پیش آمده ! لطفا دوباره امتحان کنید
        </div>
      </>
    );

  return (
    <>
      <Suspense fallback={<Loader />}>
        <AddPostPage data={jsPost} />
      </Suspense>
    </>
  );
}

export default EditPost;
