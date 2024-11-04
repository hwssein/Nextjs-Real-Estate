import getAllPosts from "@/serverAction/getAllPosts";

async function ResidentialPostPage() {
  const posts = await getAllPosts();

  if (posts.error)
    return (
      <div className="w-full text-center p-2 bg-line rounded mb-6">
        هنوز آگهی منتشر نشده است
      </div>
    );
  return <div>ResidentialPostPage</div>;
}

export default ResidentialPostPage;
