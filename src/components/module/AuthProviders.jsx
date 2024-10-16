import OAuthButton from "@/element/OAuthButton";
import { githubHandler, googleHandler } from "@/serverAction/oAuthHandler";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function AuthProviders() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-start gap-2 mb-4">
        <form action={googleHandler} className="w-3/4 sm:w-1/2">
          <OAuthButton
            text="ورود با گوگل"
            icon={<FaGoogle fontSize="1.2rem" />}
          />
        </form>

        <form action={githubHandler} className="w-3/4 sm:w-1/2">
          <OAuthButton
            text="ورود با گیت هاب"
            icon={<FaGithub fontSize="1.2rem" />}
          />
        </form>
      </div>
    </>
  );
}

export default AuthProviders;
