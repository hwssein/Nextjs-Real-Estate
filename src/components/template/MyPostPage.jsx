import MyPostCard from "@/module/MyPostCard";

function MyPostPage({ posts }) {
  if (!posts || posts.length === 0)
    return (
      <div className="w-full text-center p-2 bg-line rounded">
        هنوز آکهی ثبت نشده!
      </div>
    );

  return (
    <>
      <div className="w-full text-center p-2 bg-line rounded mb-6">
        آگهی های من
      </div>

      <div className="w-full flex flex-col items-center justify-start gap-2 sm:flex-row sm:flex-wrap sm:justify-center">
        {posts?.map((item) => (
          <MyPostCard data={item} key={item._id} />
        ))}
      </div>
    </>
  );
}

export default MyPostPage;
