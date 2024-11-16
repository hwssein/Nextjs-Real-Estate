import findUser from "@/serverAction/findUser";
import DashboardPage from "@/template/DashboardPage";

async function Dashboard() {
  const user = await findUser();

  const jsUser = JSON.parse(JSON.stringify(user));

  return <DashboardPage createdAt={jsUser.createdAt} role={jsUser.role} />;
}

export default Dashboard;
