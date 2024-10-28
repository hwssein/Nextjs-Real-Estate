import { Types } from "mongoose";
import { NextResponse } from "next/server";

import Posts from "@/models/Posts";
import Users from "@/models/Users";
import connectDB from "@/utils/connectDB";

const POST = async (req) => {
  try {
    const body = await req.json();
    const {
      postTitle,
      description,
      address,
      telNumber,
      price,
      realEstate,
      category,
      amenities,
      rules,
      constructionDate,
      email,
    } = body;

    const regex = /^09\d{9}$/;
    const telNumberResult = regex.test(telNumber);

    if (
      !postTitle ||
      !description ||
      !address ||
      !telNumber ||
      !telNumberResult ||
      !price ||
      !realEstate ||
      !category ||
      !constructionDate
    )
      return NextResponse.json(
        { error: "اطلاعات وارد شده معتبر نیست" },
        { status: 422 }
      );

    await connectDB();

    const user = await Users.findOne({ email });
    if (!user)
      NextResponse.json({ error: "حساب کاربری وجود ندارد" }, { status: 401 });

    const newPost = await Posts.create({
      postTitle,
      description,
      address,
      telNumber: +telNumber,
      price: +price,
      realEstate,
      category,
      amenities,
      rules,
      constructionDate,
      userId: new Types.ObjectId(user._id),
    });
    return NextResponse.json(
      { message: "با موفقیت ذخیره شد" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده" },
      { status: 500 }
    );
  }
};

export { POST };
