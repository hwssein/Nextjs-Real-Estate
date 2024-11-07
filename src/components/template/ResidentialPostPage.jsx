import Card from "@/module/Card";
import { categoryFilter, searchFilter } from "@/utils/filter";

async function ResidentialPostPage({ data, searchParams }) {
  let displayData = categoryFilter(data, searchParams.category);
  displayData = searchFilter(displayData, searchParams.search);

  if (displayData.length === 0)
    return (
      <div className="w-full text-center p-2 bg-line rounded mb-6">
        آگهی با این مشخصات پیدا نشد
      </div>
    );

  return (
    <>
      <div className="w-full p-1 flex flex-row flex-wrap items-center justify-center gap-2">
        {displayData.map((item) => (
          <div key={item._id} className="w-44 my-1 sm:w-52 md:w-68 lg:w-72">
            <Card data={item} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ResidentialPostPage;
