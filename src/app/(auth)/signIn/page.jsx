"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import AuthForm from "@/module/AuthForm";
import signInHandler from "@/serverAction/signInHandler";

import { toast } from "react-toastify";

function SignIn() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: name === "email" ? value.trim().toLowerCase() : value.trim(),
    });
  };

  const handleSubmit = async () => {
    const result = await signInHandler(form);

    if (result?.error) {
      toast.error("اطلاعات وارد شده معتبر نیست");
    }

    if (result?.message) {
      toast.success("با موفقیت وارد شدید");
      router.replace("/");
    }

    setForm({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="w-full text-center rounded shadow-md p-1 mb-2">
        <p className="text-primary mb-7 font-medium"> ورود به املاک کویر</p>

        <AuthForm
          form={form}
          changeHandler={changeHandler}
          handleSubmit={handleSubmit}
        />
      </div>

      <p className="p-1">
        حساب کاربری ندارد؟ از این{" "}
        <Link href="/signUp" replace={true} className="text-primary">
          لینک
        </Link>{" "}
        حساب خود را ایجاد کنید
      </p>
    </>
  );
}

export default SignIn;
