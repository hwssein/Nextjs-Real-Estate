import { auth } from "@/config/auth";
import { redirect } from "next/navigation";

import SignUpPage from "@/template/SignUpPage";

async function SignUp() {
  const session = await auth();
  if (session) redirect("/dashboard");

  return (
    <>
      <SignUpPage />
    </>
  );
}

export default SignUp;
