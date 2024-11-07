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
          <input
            className="form_input text-left placeholder:text-right font-mono"
            type="text"
            id="email-text"
            value={form.email}
            name="email"
            onChange={changeHandler}
            placeholder="ایمیل"
          />
        </div>

        <div className="w-full flex flex-row items-center justify-center gap-1">
          <div className="form_input flex items-center justify-between gap-1 focus-within:border-primary">
            {showPassword ? (
              <span
                className="cursor-pointer p-1"
                onClick={() => setShowPassword(false)}
              >
                <FaEye />
              </span>
            ) : (
              <span
                className="cursor-pointer p-1"
                onClick={() => setShowPassword(true)}
              >
                <FaEyeSlash />
              </span>
            )}

            <input
              className="w-full bg-bgMain text-left placeholder:text-right font-mono"
              type={showPassword ? "text" : "password"}
              id="email-password"
              value={form.password}
              name="password"
              onChange={changeHandler}
              placeholder="رمز عبور"
            />
          </div>
        </div>

        <FormButton text="ورود" width="w-28" />
      </form>
    </>
  );
}

export default AuthForm;
