"use client";

import Card from "@/module/Card";

function MyPostCard({ data }) {
  const editHandler = () => {};

  const deleteHandler = () => {};

  return (
    <>
      <div className="w-72 my-1 sm:w-52 md:w-68 lg:w-72">
        <Card data={data} />

        <div className="w-full  flex justify-between border-l border-r border-b border-secondary rounded px-2 py-1">
          <button className="px-2" onClick={editHandler}>
            ویرایش
          </button>
          <button className="px-2" onClick={deleteHandler}>
            حذف
          </button>
        </div>
      </div>
    </>
  );
}

export default MyPostCard;
