"use server";

import { signIn } from "@/config/auth";

const googleHandler = async () => {
  await signIn("google", { redirectTo: "/" });
};

const githubHandler = async () => {
  await signIn("github", { redirectTo: "/" });
};

export { googleHandler, githubHandler };
