import SignOutButton from "@/element/SignOutButton";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";

function DashboardMenu({ user, clientUser }) {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-start">
        <span>
          <CgProfile fontSize="3rem" color="var(--primary-hover)" />
        </span>

        {clientUser && (
          <span className="mt-4 text-secondary font-mono font-bold">
            {clientUser?.user.email}
          </span>
        )}

        {user && (
          <span className="mt-4 text-secondary font-mono font-bold">
            {user?.email}
          </span>
        )}

        <span className="bg-secondary w-4/5 h-px mt-4"></span>

        <ul className="w-full flex flex-col gap-4 items-start justify-start mt-4 px-4">
          <Link href="/dashboard">
            <li className="flex flex-row items-center justify-start gap-2 group">
              <span className="w-1 h-4 rounded bg-secondary group-hover:bg-primary transition ease-in duration-100"></span>
              <span>حساب کاربری</span>
            </li>
          </Link>

          <Link href="/dashboard/my-post">
            <li className="flex flex-row items-center justify-start gap-2 group">
              <span className="w-1 h-4 rounded bg-secondary group-hover:bg-primary transition ease-in duration-100"></span>
              <span>آگهی های من</span>
            </li>
          </Link>

          <Link href="/dashboard/add-post">
            <li className="flex flex-row items-center justify-start gap-2 group">
              <span className="w-1 h-4 rounded bg-secondary group-hover:bg-primary transition ease-in duration-100"></span>
              <span>ثبت آگهی</span>
            </li>
          </Link>

          <li className="flex flex-row items-center justify-start gap-2 group">
            <span className="w-1 h-4 rounded bg-secondary group-hover:bg-primary transition ease-in duration-100"></span>
            <SignOutButton />
          </li>
        </ul>
      </div>
    </>
  );
}

export default DashboardMenu;
