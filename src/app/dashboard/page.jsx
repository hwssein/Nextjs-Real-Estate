import { auth } from "@/config/auth";
import { redirect } from "next/navigation";

import DashboardPage from "@/template/dashboardPage";

async function Dashboard() {
  const session = await auth();
  if (!session) redirect("/signIn");

  return <DashboardPage />;
}

export default Dashboard;
