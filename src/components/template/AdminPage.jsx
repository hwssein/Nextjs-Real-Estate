import MyPostCard from "@/module/MyPostCard";

function AdminPage({ posts, role }) {
  return (
    <>
      <div className="w-full text-center p-2 bg-line rounded mb-6">
        آگهی های در انتظار تایید
      </div>

      <div className="w-full flex flex-col items-center justify-start gap-2 sm:flex-row sm:flex-wrap sm:justify-center">
        {posts?.map((item) => (
          <MyPostCard data={item} role={role} key={item._id} />
        ))}
      </div>
    </>
  );
}

export default AdminPage;
