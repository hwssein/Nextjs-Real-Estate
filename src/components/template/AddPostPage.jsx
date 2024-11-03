"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import submitPost from "@/serverAction/submitPost";
import editPost from "@/serverAction/editPost";

import FormButton from "@/element/FormButton";
import AddPostDate from "@/module/AddPostDate";
import AddPostForm from "@/module/AddPostForm";
import AddPostList from "@/module/AddPostList";
import AddPostRadio from "@/module/AddPostRadio";

import { toast } from "react-toastify";

function AddPostPage({ data }) {
  const router = useRouter();

  const formRef = useRef(null);

  useEffect(() => {
    if (data && formRef.current) {
      const formData = new FormData(formRef.current);

      for (const key in data) {
        if (formData.has(key)) {
          formRef.current[key].value = data[key];
        }
      }
    }
  }, [data]);

  const submitHandler = async (formData) => {
    const res = await submitPost(formData);

    if (res?.message) {
      toast.success(res.message);
      formRef.current.reset();
    }

    if (res?.error) toast.error(res.error);
  };

  const editHandler = async (formData) => {
    const res = await editPost(formData, data._id);

    if (res?.message) {
      toast.success(res.message);
      router.refresh();
    }

    if (res?.error) toast.error(res.error);
  };

  return (
    <>
      <div className="w-full text-center p-2 bg-secondary rounded mb-6">
        {data ? "ویرایش آگهی" : "ثبت آگهی"}
      </div>

      <form
        ref={formRef}
        action={data ? editHandler : submitHandler}
        className="w-full"
      >
        <AddPostForm
          type="text"
          textArea={false}
          name="postTitle"
          title="عنوان آگهی"
          defaultValue={data?.postTitle || ""}
        />
        <AddPostForm
          type="text"
          textArea={true}
          name="description"
          title="توضیحات"
          defaultValue={data?.description || ""}
        />
        <AddPostForm
          type="text"
          textArea={false}
          name="address"
          title="آدرس"
          defaultValue={data?.address || ""}
        />
        <AddPostForm
          type="number"
          textArea={false}
          name="telNumber"
          title="شماره تماس"
          defaultValue={data?.telNumber || ""}
        />
        <AddPostForm
          type="number"
          textArea={false}
          name="price"
          title="قیمت (تومان)"
          defaultValue={data?.price || ""}
        />
        <AddPostForm
          type="text"
          textArea={false}
          name="realEstate"
          title="نام بنگاه"
          defaultValue={data?.realEstate || ""}
        />

        <div className="w-full block mb-2">دسته بندی</div>
        <div className="w-full flex flex-row flex-wrap items-center justify-center sm:justify-between gap-4 mb-6">
          <AddPostRadio
            value="vila"
            title="ویلا"
            checked={data?.category === "vila"}
          />
          <AddPostRadio
            value="apartment"
            title="آپارتمان"
            checked={data?.category === "apartment"}
          />
          <AddPostRadio
            value="store"
            title="مغازه"
            checked={data?.category === "store"}
          />
          <AddPostRadio
            value="commercial"
            title="تجاری"
            checked={data?.category === "commercial"}
          />
          <AddPostRadio
            value="land"
            title="زمین"
            checked={data?.category === "land"}
          />
        </div>

        <div className="w-full block mb-2">امکانات رفاهی</div>
        <AddPostList name="amenities" initialList={data?.amenities || []} />

        <div className="w-full block mb-2">قوانین</div>
        <AddPostList name="rules" initialList={data?.rules || []} />

        <div className="w-full block mb-2">تاریخ ساخت</div>
        <AddPostDate value={data?.constructionDate} />

        <div className="mt-6">
          {data ? (
            <FormButton text="ویرایش" width="w-full" />
          ) : (
            <FormButton text="ثبت" width="w-full" />
          )}
        </div>
      </form>
    </>
  );
}

export default AddPostPage;
