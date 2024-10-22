import { useSession } from "next-auth/react";
import Link from "next/link";

import DashboardMenu from "@/module/DashboardMenu";

import { IoCloseSharp } from "react-icons/io5";

function ResMenu({ setShowMenu }) {
  const { data: session, status } = useSession();

  return (
    <>
      <div className="w-full h-full fixed top-0 right-0 bg-bgMain">
        <span
          onClick={() => setShowMenu(false)}
          className="w-full flex align-center justify-end p-2 mt-2"
        >
          <IoCloseSharp size="1.3rem" color="var(--primary)" />
        </span>

        <ul className="my-1 px-4 flex flex-col items-start justify-start gap-4 ">
          {status === "authenticated" ? (
            <DashboardMenu user={session} />
          ) : (
            <>
              {" "}
              <Link href="/signIn">
                <li className="flex flex-row items-center justify-start gap-2 group">
                  <span className="w-1 h-4 rounded bg-secondary group-hover:bg-primary transition ease-in duration-100"></span>
                  <span>ورود</span>
                </li>
              </Link>
              <Link href="/signUp">
                <li className="flex flex-row items-center justify-start gap-2 group">
                  <span className="w-1 h-4 rounded bg-secondary group-hover:bg-primary transition ease-in duration-100"></span>
                  <span>ثبت نام</span>
                </li>
              </Link>
              <Link href="#">
                <li className="flex flex-row items-center justify-start gap-2 group">
                  <span className="w-1 h-4 rounded bg-secondary group-hover:bg-primary transition ease-in duration-100"></span>
                  <span>آگهی ها</span>
                </li>
              </Link>
            </>
          )}
        </ul>
      </div>
    </>
  );
}

export default ResMenu;
