import RealEstateUser from "@/models/RealEstateUser";
import connectDB from "@/utils/connectDB";
import { hashPassword } from "@/utils/verify";
import { NextResponse } from "next/server";

const POST = async (req) => {
  try {
    const { email, password } = await req.json();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailRegexResult = emailRegex.test(email);

    if (!email || !password || !emailRegexResult)
      return NextResponse.json(
        { error: "اطلاعات وارد شده معتبر نیست" },
        { status: 422 }
      );

    if (password < 4)
      return NextResponse.json(
        { error: "رمز عبور کوتاه است" },
        { status: "422" }
      );

    await connectDB();

    const existingUser = await RealEstateUser.findOne({ email });

    if (existingUser)
      return NextResponse.json(
        { error: "حساب کاربری از قبل وجود دارد" },
        { status: 409 }
      );

    const hashedPassword = await hashPassword(password);

    const user = await RealEstateUser.create({
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "حساب کاربری با موفقیت ایجاد شد" },
      { status: "201" },
      { data: user }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده" },
      { status: 500 }
    );
  }
};

export default POST;
