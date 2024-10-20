import { auth } from "@/config/auth";
import { redirect } from "next/navigation";

async function Dashboard() {
  const session = await auth();
  if (!session) redirect("/signIn");

  return <div>Dashboard</div>;
}

export default Dashboard;
