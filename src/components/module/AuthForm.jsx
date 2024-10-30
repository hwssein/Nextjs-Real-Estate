"use client";

import FormButton from "@/element/FormButton";
import { useState } from "react";

import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";

function AuthForm({ handleSubmit, changeHandler, form }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <form
        action={handleSubmit}
        className="w-full flex flex-col items-center justify-start gap-4 pb-6"
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

          <div className="group w-2/3 flex items-center justify-center gap-2 p-2 rounded border border-secondary focus-within:border-primary transition ease-in duration-100">
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
              className="w-full bg-bgMain ltr text-left text-base "
              type={showPassword ? "text" : "password"}
              id="email-password"
              value={form.password}
              name="password"
              onChange={changeHandler}
            />
          </div>
        </div>

        <FormButton text="ورود" width="w-28" />
      </form>
    </>
  );
}

export default AuthForm;
