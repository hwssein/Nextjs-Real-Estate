import findUser from "@/serverAction/findUser";
import DashboardPage from "@/template/DashboardPage";

async function Dashboard() {
  const user = await findUser();
  return <DashboardPage createdAt={user.createdAt} />;
}

export default Dashboard;
