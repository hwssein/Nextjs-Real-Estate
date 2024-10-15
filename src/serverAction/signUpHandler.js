"use server";

const signUpHandler = async (formData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/signup`,
    {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    }
  );

  return await res.json();
};

export default signUpHandler;
