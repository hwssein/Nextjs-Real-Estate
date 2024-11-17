import { Suspense } from "react";

import ResidentialSidebar from "@/layout/ResidentialSidebar";
import Loader from "@/element/Loader";

function ResidentialLayout({ children }) {
  return (
    <>
      <div className="w-full p-1 flex flex-col items-center justify-start gap-5 sm:flex-row sm:items-start sm:justify-between md:gap-10">
        <div className="w-full rounded sm:shadow sm:w-72 sm:pb-6 sm:pt-3">
          <Suspense fallback={<Loader />}>
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
