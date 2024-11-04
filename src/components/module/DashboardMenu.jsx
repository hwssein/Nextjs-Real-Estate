import SignOutButton from "@/element/SignOutButton";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";

function DashboardMenu({ user, clientUser }) {
  return (
    <>
      <div className="w-full p-2 flex flex-col items-center justify-start">
        <span>
          <CgProfile fontSize="3rem" color="var(--primary)" />
        </span>

        {clientUser && (
          <p className="w-full text-center mt-4 text-darkPrimary break-words font-mono font-bold">
            {clientUser?.user.email}
          </p>
        )}

        {user && (
          <p className="w-full text-center mt-4 text-darkPrimary break-words font-mono font-bold">
            {user?.email}
          </p>
        )}

        <span className="bg-line w-full h-px mt-4"></span>

        <ul className="w-full flex flex-col gap-5 items-start justify-start mt-4 px-2">
          <Link href="/dashboard">
            <li className="flex flex-row items-center justify-start gap-2 group">
              <span className="w-1 h-4 rounded bg-primary group-hover:bg-secondary transition ease-in duration-100"></span>
              <span>حساب کاربری</span>
            </li>
          </Link>

          <Link href="/dashboard/my-post">
            <li className="flex flex-row items-center justify-start gap-2 group">
              <span className="w-1 h-4 rounded bg-primary group-hover:bg-secondary transition ease-in duration-100"></span>
              <span>آگهی های من</span>
            </li>
          </Link>

          <Link href="/dashboard/add-post">
            <li className="flex flex-row items-center justify-start gap-2 group">
              <span className="w-1 h-4 rounded bg-primary group-hover:bg-secondary transition ease-in duration-100"></span>
              <span>ثبت آگهی</span>
            </li>
          </Link>

          <li className="flex flex-row items-center justify-start gap-2 group">
            <span className="w-1 h-4 rounded bg-primary group-hover:bg-secondary transition ease-in duration-100"></span>
            <SignOutButton />
          </li>
        </ul>
      </div>
    </>
  );
}

export default DashboardMenu;
