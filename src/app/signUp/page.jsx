import Link from "next/link";
import AuthForm from "src/components/module/AuthForm";

function SignUp() {
  const signUpHandler = async (formData) => {
    "use server";

    console.log(formData);
  };
  return (
    <>
      <div className="w-full text-center rounded shadow-md p-1 mb-2">
        <p className="text-primary mb-7 font-medium">ثبت نام در املاک کویر</p>

        <AuthForm authHandler={signUpHandler} />
      </div>
      <p className="p-1">
        حساب کاربری ایجاد کرده اید؟ از این{" "}
        <Link href="signIn" className="text-primary">
          لینک
        </Link>{" "}
        وارد شوید
      </p>
    </>
  );
}

export default SignUp;
