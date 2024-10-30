import { auth } from "@/config/auth";
import { redirect } from "next/navigation";

import SignInPage from "@/template/SignInPage";

async function SignIn() {
  const session = await auth();
  if (session) redirect("/dashboard");

  return (
    <>
      <div className="w-full max-w-xl mx-auto mt-20">
        <SignInPage />
      </div>
    </>
  );
}

export default SignIn;
