import { auth } from "@/config/auth";
import { redirect } from "next/navigation";

import SignUpPage from "@/template/SignUpPage";

async function SignUp() {
  const session = await auth();
  if (session) redirect("/dashboard");

  return (
    <>
      <div className="w-full max-w-xl mx-auto mt-20">
        <SignUpPage />
      </div>
    </>
  );
}

export default SignUp;
