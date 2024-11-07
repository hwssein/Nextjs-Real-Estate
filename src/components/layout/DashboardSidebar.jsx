import DashboardMenu from "@/module/DashboardMenu";

function DashboardSidebar({ user }) {
  return (
    <>
      <div className="w-full">
        <DashboardMenu user={user} />
      </div>
    </>
  );
}

export default DashboardSidebar;
