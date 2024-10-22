"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  const pathName = usePathname();

  if (pathName === "/signIn" || pathName === "/signUp") {
    return (
      <>
        <div className="container max-w-lg mx-auto">{children}</div>
      </>
    );
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
