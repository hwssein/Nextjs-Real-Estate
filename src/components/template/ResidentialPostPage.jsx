import Card from "@/module/Card";

async function ResidentialPostPage({ data }) {
  if (data.error)
    return (
      <div className="w-full text-center p-2 bg-line rounded mb-6">
        هنوز آگهی منتشر نشده است
      </div>
    );

  return (
    <>
      <div className="w-full flex flex-row flex-wrap items-center justify-center gap-2">
        {data.data.map((item) => (
          <div key={item._id} className="w-44 my-1 sm:w-52 md:w-68 lg:w-72">
            <Card data={item} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ResidentialPostPage;
