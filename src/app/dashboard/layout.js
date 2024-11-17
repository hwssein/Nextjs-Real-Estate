import { redirect } from "next/navigation";

import DashboardMenu from "@/module/DashboardMenu";
import findUser from "@/serverAction/findUser";

export const metadata = {
  title: "پنل کاربری | پروژه Next.js",
};

async function DashboardLayout({ children }) {
  const user = await findUser();
  if (!user || user.error) redirect("/signIn");

  const jsUser = JSON.parse(JSON.stringify(user));

  return (
    <>
      <div className="w-full flex flex-row items-start justify-start gap-12 px-1 ">
        <div className="hidden w-60 shadow rounded py-6 sm:flex">
          <DashboardMenu session={jsUser?.email} role={jsUser?.role} />
        </div>

        <section className="w-full">{children}</section>
      </div>
    </>
  );
}

export default DashboardLayout;
