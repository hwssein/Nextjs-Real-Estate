import { Types } from "mongoose";
import { NextResponse } from "next/server";

import Posts from "@/models/Posts";

const POST = async (req) => {
  try {
    const {
      _id,
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
    } = await req.json();

    const regex = /^9\d{9}$/;
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

    const newPost = await Posts.create({
      postTitle,
      description,
      address,
      telNumber: Number(telNumber),
      price: Number(price),
      realEstate,
      category,
      amenities,
      rules,
      constructionDate,
      userId: new Types.ObjectId(_id),
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

const PATCH = async (req) => {
  try {
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
      id,
    } = await req.json();

    const regex = /^9\d{9}$/;
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

    const updatePost = await Posts.findOne({ _id: id });

    updatePost.postTitle = postTitle;
    updatePost.description = description;
    updatePost.address = address;
    updatePost.telNumber = Number(telNumber);
    updatePost.price = Number(price);
    updatePost.realEstate = realEstate;
    updatePost.category = category;
    updatePost.amenities = amenities;
    updatePost.rules = rules;
    updatePost.constructionDate = constructionDate;

    updatePost.save();

    return NextResponse.json(
      { message: "با موفقیت ذخیره شد" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده" },
      { status: "500" }
    );
  }
};

export { POST, PATCH };
