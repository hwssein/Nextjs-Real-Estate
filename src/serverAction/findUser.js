"use server";

import { auth } from "@/config/auth";
import Users from "@/models/Users";
import connectDB from "@/utils/connectDB";

const findUser = async () => {
  try {
    await connectDB();

    const session = await auth();
    if (!session) throw new Error("لطفا وارد حساب کاربری خود شوید");

    const user = await Users.findOne({ email: session.user.email });
    if (!user) throw new Error("حساب کاربری وجود ندارد");

    return user;
  } catch (error) {
    return { error: error.message };
  }
};

export default findUser;
