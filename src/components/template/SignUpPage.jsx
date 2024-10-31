"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import AuthForm from "@/module/AuthForm";
import signUpHandler from "@/serverAction/signUpHandler";

import { toast } from "react-toastify";

function SignUpPage() {
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
    const result = await signUpHandler(form);

    if (result?.error) {
      toast.error(result.error);
    }

    if (result?.message) {
      toast.success(result.message);
      toast.success("لطفا وارد حساب خود شوید");

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
        <p className="text-primary mb-7 font-black text-2xl">
          ثبت نام در املاک کویر
        </p>

        <AuthForm
          handleSubmit={handleSubmit}
          changeHandler={changeHandler}
          form={form}
        />
      </div>

      <p className="p-1">
        حساب کاربری ایجاد کرده اید؟ از این{" "}
        <Link href="signIn" replace={true} className="text-primary">
          لینک
        </Link>{" "}
        وارد شوید
      </p>
    </>
  );
}

export default SignUpPage;
