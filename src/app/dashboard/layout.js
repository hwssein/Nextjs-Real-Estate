import { auth } from "@/config/auth";
import { redirect } from "next/navigation";

import DashboardSidebar from "@/layout/DashboardSidebar";

async function DashboardLayout({ children }) {
  const session = await auth();
  if (!session) redirect("/signIn");
  return (
    <>
      <div className="w-full flex flex-row items-start justify-start gap-6 px-1 ">
        <DashboardSidebar user={session} />
        <section>{children}</section>
      </div>
    </>
  );
}

export default DashboardLayout;
