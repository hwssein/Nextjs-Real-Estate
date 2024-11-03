import { redirect } from "next/navigation";

import DashboardSidebar from "@/layout/DashboardSidebar";
import findUser from "@/serverAction/findUser";

async function DashboardLayout({ children }) {
  const user = await findUser();
  if (!user || user.error) redirect("/signIn");

  const jsUser = JSON.parse(JSON.stringify(user));

  return (
    <>
      <div className="w-full flex flex-row items-start justify-start gap-12 px-1 ">
        <DashboardSidebar user={jsUser} />
        <section className="w-full">{children}</section>
      </div>
    </>
  );
}

export default DashboardLayout;
