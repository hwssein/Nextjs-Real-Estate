"use client";

import FormButton from "@/element/FormButton";
import AddPostDate from "@/module/AddPostDate";
import AddPostForm from "@/module/AddPostForm";
import AddPostList from "@/module/AddPostList";
import AddPostRadio from "@/module/AddPostRadio";
import submitPost from "@/serverAction/submitPost";
import { useRef } from "react";
import { toast } from "react-toastify";

function AddPostPage() {
  const formRef = useRef(null);

  const submitHandler = async (formData) => {
    const res = await submitPost(formData);

    if (res.message) {
      toast.success(res.message);
      formRef.current.reset();
    }

    if (res.error) toast.error(res.error);
  };

  return (
    <>
      <div className="inline-block bg-secondary px-4 py-2 rounded mb-6">
        ثبت آگهی
      </div>

      <form ref={formRef} action={submitHandler} className="w-full">
        <AddPostForm
          type="text"
          textArea={false}
          name="postTitle"
          title="عنوان آگهی"
        />
        <AddPostForm
          type="text"
          textArea={true}
          name="description"
          title="توضیحات"
        />
        <AddPostForm type="text" textArea={false} name="address" title="آدرس" />
        <AddPostForm
          type="number"
          textArea={false}
          name="telNumber"
          title="شماره تماس"
        />
        <AddPostForm
          type="number"
          textArea={false}
          name="price"
          title="قیمت (تومان)"
        />
        <AddPostForm
          type="text"
          textArea={false}
          name="realEstate"
          title="نام بنگاه"
        />

        <div className="w-full block mb-2">دسته بندی</div>
        <div className="w-full flex flex-row flex-wrap items-center justify-center sm:justify-between gap-4 mb-6">
          <AddPostRadio value="vila" title="ویلا" />
          <AddPostRadio value="apartment" title="آپارتمان" />
          <AddPostRadio value="store" title="مغازه" />
          <AddPostRadio value="commercial" title="تجاری" />
          <AddPostRadio value="land" title="زمین" />
        </div>

        <div className="w-full block mb-2">امکانات رفاهی</div>
        <AddPostList name="amenities" />

        <div className="w-full block mb-2">قوانین</div>
        <AddPostList name="rules" />

        <div className="w-full block mb-2">تاریخ ساخت</div>
        <AddPostDate />

        <div className="mt-6">
          <FormButton text="ثبت" width="w-full" />
        </div>
      </form>
    </>
  );
}

export default AddPostPage;
