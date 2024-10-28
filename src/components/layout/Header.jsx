"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

import ResMenu from "./ResMenu";

import { FaBars } from "react-icons/fa6";

function Header() {
  const { status: session } = useSession();

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="w-full flex flex-row items-center justify-between my-4 py-2 ">
        {showMenu && <ResMenu setShowMenu={setShowMenu} />}

        <div className="flex items-center justify-start gap-2">
          <div className="p-1 sm:hidden" onClick={() => setShowMenu(true)}>
            <FaBars color="var(--primary)" size="1.2rem" />
          </div>
          <div className="font-black text-3xl text-primary">املاک کویر</div>

          <div className="hidden items-center justify-start gap-4 mr-10 sm:flex">
            <span className="p-1">صفحه اصلی</span>
            <span className="p-1">آگهی ها</span>
          </div>
        </div>

        {session === "authenticated" ? (
          <div className="flex items-center justify-start gap-1 sm:gap-3 ">
            <Link href="/dashboard">
              <button className="button1">داشبورد</button>
            </Link>

            <Link href="/#" className="sm:hidden">
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
