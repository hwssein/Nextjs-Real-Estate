import findUser from "@/serverAction/findUser";
import DashboardPage from "@/template/DashboardPage";
import { redirect } from "next/navigation";

async function Dashboard() {
  const user = await findUser();
  if (!user || user.error) redirect("/signIn");

  const jsUser = JSON.parse(JSON.stringify(user));

  return <DashboardPage createdAt={jsUser.createdAt} />;
}

export default Dashboard;
