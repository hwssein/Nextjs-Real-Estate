import ResidentialSidebar from "@/layout/ResidentialSidebar";
import { Suspense } from "react";

function ResidentialLayout({ children }) {
  return (
    <>
      <div className="w-full p-1 flex flex-col items-center justify-start gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div className="w-full rounded sm:shadow sm:w-60 sm:pm-6">
          <Suspense fallback={<div>Loading... </div>}>
            <ResidentialSidebar />
          </Suspense>
        </div>

        <span className="w-full h-px bg-line sm:hidden"></span>

        <section className="w-full">{children}</section>
      </div>
    </>
  );
}

export default ResidentialLayout;
