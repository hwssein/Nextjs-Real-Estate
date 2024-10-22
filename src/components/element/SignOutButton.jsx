"use client";

import { signOut } from "next-auth/react";

function SignOutButton() {
  return (
    <>
      <button onClick={() => signOut()}>خروج</button>
    </>
  );
}

export default SignOutButton;
