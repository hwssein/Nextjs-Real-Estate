"use client";

import { SessionProvider } from "next-auth/react";

function SessionsProvider({ children }) {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
    </>
  );
}

export default SessionsProvider;
