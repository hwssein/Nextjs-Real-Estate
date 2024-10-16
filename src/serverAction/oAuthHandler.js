"use server";

import { signIn } from "@/config/auth";

const googleHandler = async () => {
  await signIn("google");
};

const githubHandler = async () => {
  await signIn("github");
};

export { googleHandler, githubHandler };
