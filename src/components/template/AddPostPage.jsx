"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import submitPost from "@/serverAction/submitPost";
import editPost from "@/serverAction/editPost";

import PostForm from "@/module/PostForm";

import { toast } from "react-toastify";

function AddPostPage({ data }) {
  const router = useRouter();

  const [form, setForm] = useState({
    postTitle: "",
    description: "",
    address: "",
    telNumber: "",
    price: "",
    realEstate: "",
    category: "",
    amenities: [],
    rules: [],
    constructionDate: new Date(),
  });

  useEffect(() => {
    if (data) setForm(data);
  }, []);

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const submitHandler = async () => {
    const res = await submitPost(form);

    if (res?.message) {
      toast.success(res.message);
      setForm({
        postTitle: "",
        description: "",
        address: "",
        telNumber: "",
        price: "",
        realEstate: "",
        category: "",
        amenities: [],
        rules: [],
        constructionDate: new Date(),
      });
      router.refresh();
    }

    if (res?.error) toast.error(res.error);
  };

  const editHandler = async () => {
    const res = await editPost(form, data._id);

    if (res?.message) {
      toast.success(res.message);
      router.refresh();
    }

    if (res?.error) toast.error(res.error);
  };

  return (
    <>
      <div className="w-full text-center p-2 bg-line rounded mb-6">
        {data ? "ویرایش آگهی" : "ثبت آگهی"}
      </div>

      <PostForm
        form={form}
        setForm={setForm}
        changeHandler={changeHandler}
        submitHandler={submitHandler}
        editHandler={editHandler}
        data={data}
      />
    </>
  );
}

export default AddPostPage;
