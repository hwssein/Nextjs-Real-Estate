"use client";

import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";

function AuthForm({ authHandler }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: name === "email" ? value.trim().toLowerCase() : value.trim(),
    });
  };

  return (
    <>
      <form
        action={authHandler}
        className="w-full flex flex-col items-center justify-start gap-4 pb-9"
      >
        <div className="w-full flex flex-row items-center justify-center gap-1">
          <label className="p-2 text-primary mr-2" htmlFor="email-text">
            ایمیل:
          </label>
          <input
            className="form_input mr-2 ltr text-left"
            type="text"
            id="email-text"
            value={form.email}
            name="email"
            onChange={changeHandler}
            placeholder="example@domin.com"
          />
        </div>

        <div className="w-full flex flex-row items-center justify-center gap-1">
          <label className="p-2 text-primary" htmlFor="email-password">
            رمز عبور:
          </label>
          <div className="group w-2/3 flex items-center justify-center gap-2 p-2 rounded border border-secondary focus-within:border-primary">
            {showPassword ? (
              <span
                className="cursor-pointer"
                onClick={() => setShowPassword(false)}
              >
                <FaEye />
              </span>
            ) : (
              <span
                className="cursor-pointer"
                onClick={() => setShowPassword(true)}
              >
                <FaEyeSlash />
              </span>
            )}

            <input
              className="w-full bg-bgMain ltr text-left text-xs"
              type={showPassword ? "text" : "password"}
              id="email-password"
              value={form.password}
              name="password"
              onChange={changeHandler}
            />
          </div>
        </div>

        <button type="submit" className="button1 w-28">
          ورود
        </button>
      </form>
    </>
  );
}

export default AuthForm;
