"use server";

import { auth } from "@/config/auth";
import Users from "@/models/Users";
import connectDB from "@/utils/connectDB";

const findUser = async () => {
  try {
    await connectDB();

    const session = await auth();
    if (!session) throw new Error("401 - unauthorized - session");

    const user = await Users.findOne({ email: session.user.email });
    if (!user) throw new Error("401 - unauthorized - user");

    return user;
  } catch (error) {
    return { error: error.message };
  }
};

export default findUser;
