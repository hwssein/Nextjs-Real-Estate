import client from "@/lib/db";
import { verifyPassword } from "@/utils/verify";
import connectDB from "@/utils/connectDB";
import Users from "@/models/Users";

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

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

      const existingUser = await Users.findOne({ email });

      if (!existingUser) throw new Error("ایمیل یا رمز عبور اشتباه است");

      const isValidPassword = await verifyPassword(
        password,
        existingUser.password
      );

      if (!isValidPassword) throw new Error("ایمیل یا رمز  عبور اشتباه است");

      return { email };
    } catch (error) {
      console.log("error:", error.message);
      return null;
    }
  },
});

const authOption = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    credentialsOption,
  ],
  basePath: "/api/auth",
  secret: process.env.AUTH_SECRET,
  adapter: MongoDBAdapter(client),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/signIn",
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOption);
