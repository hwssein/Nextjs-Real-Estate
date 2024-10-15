"use server";

const { signIn } = require("@/config/auth");

const signInHandler = async (formData) => {
  try {
    const res = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    if (res.error) throw new Error(res.error);

    return { message: "success", data: res };
  } catch (error) {
    return { error: error.message };
  }
};
export default signInHandler;
