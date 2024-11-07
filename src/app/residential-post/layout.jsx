import ResidentialSidebar from "@/layout/ResidentialSidebar";

function ResidentialLayout({ children }) {
  return (
    <>
      <div className="w-full p-1 flex flex-col items-center justify-start gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div className="w-full rounded sm:shadow sm:w-60 sm:pm-6">
          <ResidentialSidebar />
        </div>

        <span className="w-full h-px bg-line sm:hidden"></span>

        <div className="w-full">{children}</div>
      </div>
    </>
  );
}

export default ResidentialLayout;
