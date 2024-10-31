"use server";

import Users from "@/models/Users";
import connectDB from "@/utils/connectDB";
import { hashPassword } from "@/utils/verify";

const signUpHandler = async (formData) => {
  try {
    const { email, password } = formData;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailRegexResult = emailRegex.test(email);

    if (!email || !password || !emailRegexResult)
      throw new Error("اطلاعات وارد شده معتبر نیست");

    if (password.length < 4) throw new Error("رمز عبور کوتاه است");

    await connectDB();

    const existingUser = await Users.findOne({ email });
    if (existingUser) throw new Error("حساب کاربری از قبل وجود دارد");

    const hashedPassword = await hashPassword(password);

    const user = await Users.create({
      email,
      password: hashedPassword,
    });

    return { message: "حساب کاربری با موفقیت ایجاد شد" };
  } catch (error) {
    return { error: error.message };
  }
};

export default signUpHandler;
