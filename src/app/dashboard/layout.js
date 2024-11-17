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
      <div className="w-full flex flex-row items-start justify-start gap-5 px-1 md:gap-10">
        <div className="hidden w-72 border border-line rounded py-8 sm:flex">
          <DashboardMenu session={jsUser?.email} role={jsUser?.role} />
        </div>

        <section className="w-full">{children}</section>
      </div>
    </>
  );
}

export default DashboardLayout;
