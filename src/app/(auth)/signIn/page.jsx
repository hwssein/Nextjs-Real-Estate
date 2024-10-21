import { auth } from "@/config/auth";
import { redirect } from "next/navigation";

import SignInPage from "@/template/SignInPage";

async function SignIn() {
  const session = await auth();
  if (session) redirect("/dashboard");

  return (
    <>
      <SignInPage />
    </>
  );
}

export default SignIn;
