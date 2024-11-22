"use client";

import { useState } from "react";

import { category } from "@/constants/strings";

import PostFormInput from "@/module/PostFormInput";
import PostFormRadio from "@/module/PostFormRadio";
import PostFormList from "@/module/PostFormList";
import PostFormDate from "@/module/PostFormDate";

import FormButton from "@/element/FormButton";
import Num2persian from "num2persian";
import PostFormImage from "./PostFormImage";

function PostForm({
  form,
  setForm,
  changeHandler,
  submitHandler,
  editHandler,
  data,
}) {
  const [uploadImage, setUploadImage] = useState(false);

  return (
    <>
      <form className="w-full" action={data ? editHandler : submitHandler}>
        <PostFormInput
          type="text"
          textArea={false}
          name="postTitle"
          value={form.postTitle}
          changeHandler={changeHandler}
          title="عنوان آگهی"
        />

        <PostFormInput
          type="text"
          textArea={true}
          name="description"
          value={form.description}
          changeHandler={changeHandler}
          title="توضیحات"
        />

        <PostFormImage
          name="image"
          form={form}
          setForm={setForm}
          uploadImage={uploadImage}
          setUploadImage={setUploadImage}
        />

        <PostFormInput
          type="text"
          textArea={false}
          name="address"
          value={form.address}
          changeHandler={changeHandler}
          title="آدرس"
        />

        <PostFormInput
          type="number"
          textArea={false}
          name="telNumber"
          value={form.telNumber}
          changeHandler={changeHandler}
          title="شماره تماس"
        />

        <PostFormInput
          type="number"
          textArea={false}
          name="price"
          value={form.price}
          changeHandler={changeHandler}
          title="قیمت (تومان)"
        />
        {!!form.price && (
          <div className="-mt-3 mb-4 w-full flex items-center justify-start gap-1 text-primary">
            <span>{Num2persian(form.price)}</span>
            <span>تومان</span>
          </div>
        )}

        <PostFormInput
          type="text"
          textArea={false}
          name="realEstate"
          value={form.realEstate}
          changeHandler={changeHandler}
          title="نام بنگاه"
        />

        <div className="w-full block mb-2">دسته بندی</div>
        <div className="w-full flex flex-row flex-wrap items-center justify-center sm:justify-between gap-4 mb-6">
          {Object.keys(category).map((item) => (
            <PostFormRadio
              key={item}
              value={item}
              title={category[item]}
              changeHandler={changeHandler}
              checked={form.category === item ? true : false}
            />
          ))}
        </div>

        <div className="w-full block mb-2">امکانات رفاهی</div>
        <PostFormList name="amenities" form={form} setForm={setForm} />

        <div className="w-full block mb-2">قوانین</div>
        <PostFormList name="rules" form={form} setForm={setForm} />

        <div className="w-full block mb-2">تاریخ ساخت</div>
        <PostFormDate form={form} setForm={setForm} />

        <div className="mt-6" onClick={() => setUploadImage(true)}>
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

export default PostForm;
