import { redirect } from "next/navigation";

import DashboardMenu from "@/module/DashboardMenu";
import { auth } from "@/config/auth";

async function DashboardLayout({ children }) {
  const session = await auth();
  if (!session) redirect("/signIn");

  return (
    <>
      <div className="w-full flex flex-row items-start justify-start gap-12 px-1 ">
        <div className="hidden w-60 shadow rounded py-6 sm:flex">
          <DashboardMenu session={session?.user} />
        </div>

        <section className="w-full">{children}</section>
      </div>
    </>
  );
}

export default DashboardLayout;
