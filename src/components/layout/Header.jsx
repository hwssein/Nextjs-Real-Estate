"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import ResMenu from "@/layout/ResMenu";

import { FaBars } from "react-icons/fa6";

function Header({ session }) {
  const pathName = usePathname();

  const [showMenu, setShowMenu] = useState(false);

  if (pathName === "/signIn" || pathName === "/signUp") {
    return null;
  }

  return (
    <>
      <header className="w-full flex flex-row items-center justify-between mb-12 py-2 ">
        {showMenu && <ResMenu setShowMenu={setShowMenu} session={session} />}

        <div className="flex items-center justify-start gap-2">
          <div className="p-1 sm:hidden" onClick={() => setShowMenu(true)}>
            <FaBars color="var(--primary)" size="1.2rem" />
          </div>
          <div className="font-black text-3xl text-primary">املاک کویر</div>

          <div className="hidden items-center justify-start gap-4 mr-10 sm:flex">
            <Link href="/">
              <span className="p-1">صفحه اصلی</span>
            </Link>

            <Link href="/residential-post">
              <span className="p-1">آگهی ها</span>
            </Link>
          </div>
        </div>

        {session ? (
          <div className="flex items-center justify-start gap-1 sm:gap-3 ">
            <Link href="/dashboard">
              <button className="button1">داشبورد</button>
            </Link>

            <Link href="/residential-post" className="sm:hidden">
              <button className="button2">آگهی ها</button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center justify-start gap-1 sm:gap-3">
            <Link href="/signIn">
              <button className="button1">ورود</button>
            </Link>

            <Link href="/signUp">
              <button className="button2">ثبت نام</button>
            </Link>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
