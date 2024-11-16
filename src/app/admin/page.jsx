import findUser from "@/serverAction/findUser";
import getUnpublishedPost from "@/serverAction/getUnpublishedPost";
import AdminPage from "@/template/AdminPage";

async function Admin() {
  const user = await findUser();
  const posts = await getUnpublishedPost();

  const jsPost = JSON.parse(JSON.stringify(posts));
  const jsUser = JSON.parse(JSON.stringify(user));

  if (!posts || posts.error || jsPost.length === 0) {
    return (
      <div className="w-full text-center p-2 bg-line rounded mb-6">
        آگهی برای انتشار وجود ندارد
      </div>
    );
  }

  return (
    <>
      <AdminPage posts={jsPost.data} role={jsUser.role} />
    </>
  );
}

export default Admin;
