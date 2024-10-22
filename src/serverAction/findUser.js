"use server";

import { auth } from "@/config/auth";
import Users from "@/models/Users";
import connectDB from "@/utils/connectDB";

const findUser = async () => {
  const session = await auth();
  await connectDB();
  const user = await Users.findOne({ email: session.user.email });
  return user;
};

export default findUser;
