import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import connectDB from "@/utils/connectDB";
import RealEstateUser from "@/models/RealEstateUser";
import { verifyPassword } from "@/utils/verify";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "@/lib/db";

const credentialsOption = Credentials({
  name: "credentials",
  authorize: async (credentials) => {
    try {
      const { email, password } = credentials;

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const emailRegexResult = emailRegex.test(email);

      if (!email || !password || !emailRegexResult || password.length < 4)
        throw new Error("اطلاعات وارد شده معتبر نیست");

      await connectDB();

      const existingUser = await RealEstateUser.findOne({ email });

      if (!existingUser) throw new Error("ایمیل یا رمز عبور اشتباه است");

      const isValidPassword = await verifyPassword(
        password,
        existingUser.password
      );

      if (!isValidPassword) throw new Error("ایمیل یا رمز  عبور اشتباه است");

      return { email };
    } catch (error) {
      console.log("can not connect to server\n", error);
      return null;
    }
  },
});

const authOption = {
  providers: [Google, GitHub, credentialsOption],
  basePath: "/api/auth",
  secret: process.env.AUTH_SECRET,
  adapter: MongoDBAdapter(client),
  session: { strategy: "jwt" },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOption);
