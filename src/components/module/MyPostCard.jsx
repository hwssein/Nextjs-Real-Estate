"use client";

import Card from "@/module/Card";
import deletePost from "@/serverAction/deletePost";
import publishPost from "@/serverAction/publishPost";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function MyPostCard({ data, role }) {
  const router = useRouter();

  const editHandler = async () => {
    router.push(`/dashboard/my-post/${data._id}`);
  };

  const deleteHandler = async () => {
    const res = await deletePost(data._id);

    if (res.message) toast.success(res.message);
    if (res.error) toast.error(res.error);
  };

  const publishedHandler = async () => {
    const result = await publishPost(data._id);

    if (result.message) toast.success("با موفقیت منتشر شد");
    if (result.error) toast.error(result.error);
  };

  return (
    <>
      <div className="w-72 my-1 sm:w-52 md:w-68 lg:w-72">
        <Card data={data} />

        <div className="w-full  flex justify-between border-l border-r border-b border-line rounded px-2 py-1">
          <button className="px-2" onClick={editHandler}>
            ویرایش
          </button>

          {role === "ADMIN" && (
            <button className="px-2" onClick={publishedHandler}>
              انتشار
            </button>
          )}

          <button className="px-2" onClick={deleteHandler}>
            حذف
          </button>
        </div>
      </div>
    </>
  );
}

export default MyPostCard;
