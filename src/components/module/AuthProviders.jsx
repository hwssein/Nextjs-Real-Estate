import { githubHandler, googleHandler } from "@/serverAction/oAuthHandler";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function AuthProviders() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-start gap-2 mb-4">
        <form action={googleHandler} className="w-3/4 sm:w-1/2">
          <button className="button2 w-full  flex items-center justify-center gap-2">
            ورود با گوگل <FaGoogle fontSize="1.2rem" />
          </button>
        </form>

        <form action={githubHandler} className="w-3/4 sm:w-1/2">
          <button className="button2 w-full flex items-center justify-center gap-2">
            ورود با گیت هاب <FaGithub fontSize="1.2rem" />
          </button>
        </form>
      </div>
    </>
  );
}

export default AuthProviders;
