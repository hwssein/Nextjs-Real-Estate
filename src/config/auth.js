import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const config = {
  providers: [Google],
  secret: process.env.AUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
