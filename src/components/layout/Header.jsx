"use client";

import { useState } from "react";

import ResMenu from "../module/ResMenu";

import { FaBars } from "react-icons/fa6";
import Link from "next/link";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="w-full flex flex-row items-center justify-between my-4 py-2 ">
        {showMenu && <ResMenu setShowMenu={setShowMenu} />}

        <div className="flex items-center justify-start gap-4">
          <div className="p-1 sm:hidden" onClick={() => setShowMenu(true)}>
            <FaBars color="var(--primary)" size="1.2rem" />
          </div>
          <div className="font-bold text-2xl text-primary">املاک کویر</div>

          <div className="hidden items-center justify-start gap-4 mr-10 sm:flex">
            <span className="p-1">صفحه اصلی</span>
            <span className="p-1">آگهی ها</span>
          </div>
        </div>

        <div className="flex items-center justify-start gap-4">
          <Link href="/signIn">
            <button className="button1">ورود</button>
          </Link>

          <Link href="/signUp">
            <button className="button2">ثبت نام</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
