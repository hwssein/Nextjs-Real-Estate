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
    image: [],
    address: "",
    telNumber: "",
    price: "",
    realEstate: "",
    category: "",
    amenities: [],
    rules: [],
    constructionDate: new Date(),
  });

  const [editImage, setEditImage] = useState({
    imageUrl: [],
    removeImage: [],
    newImage: [],
  });

  useEffect(() => {
    if (data) setForm(data);
  }, []);

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const submitHandler = async () => {
    const formData = new FormData();

    for (let i in form) {
      if (i === "image") {
        formData.append("image", []);
      } else if (i === "amenities") {
        for (let amn = 0; amn < form.amenities.length; amn++) {
          formData.append("amenities", form.amenities[amn]);
        }
      } else if (i === "rules") {
        for (let rul = 0; rul < form.rules.length; rul++) {
          formData.append("rules", form.rules[rul]);
        }
      } else {
        formData.append(i, form[i]);
      }
    }

    for (let i in editImage) {
      if (i !== "imageUrl") {
        for (let item = 0; item < editImage[i].length; item++) {
          formData.append(i, editImage[i][item]);
        }
      }
    }

    const res = await submitPost(formData);

    if (res?.message) {
      toast.success("آگهی شما پس از بازبینی و تایید منتشر میشود.");

      editImage.imageUrl.map((item) => URL.revokeObjectURL(item));

      setForm({
        postTitle: "",
        description: "",
        image: [],
        address: "",
        telNumber: "",
        price: "",
        realEstate: "",
        category: "",
        amenities: [],
        rules: [],
        constructionDate: new Date(),
      });

      setEditImage({ imageUrl: [], removeImage: [], newImage: [] });
      router.refresh();
    }

    if (res?.error) toast.error(res.error);
  };

  const editHandler = async () => {
    const formData = new FormData();

    for (let i in form) {
      if (i === "image") {
        for (let img = 0; img < form.image.length; img++) {
          formData.append("image", form.image[img]);
        }
      } else if (i === "amenities") {
        for (let amn = 0; amn < form.amenities.length; amn++) {
          formData.append("amenities", form.amenities[amn]);
        }
      } else if (i === "rules") {
        for (let rul = 0; rul < form.rules.length; rul++) {
          formData.append("rules", form.rules[rul]);
        }
      } else {
        formData.append(i, form[i]);
      }
    }

    for (let i in editImage) {
      if (i !== "imageUrl") {
        for (let item = 0; item < editImage[i].length; item++) {
          formData.append(i, editImage[i][item]);
        }
      }
    }

    const res = await editPost(formData, data._id);

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
        editImage={editImage}
        setEditImage={setEditImage}
        changeHandler={changeHandler}
        submitHandler={submitHandler}
        editHandler={editHandler}
        data={data}
      />
    </>
  );
}

export default AddPostPage;
