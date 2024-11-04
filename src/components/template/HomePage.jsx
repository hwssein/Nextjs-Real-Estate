import HomePageCard from "@/module/HomePageCard";
import HomePageSlide from "@/module/HomePageSlide";
import Image from "next/image";

function HomePage() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-start">
        <div className="w-full h-60 bg-[url(/image/homepage-banner3.jpg)] bg-center bg-no-repeat bg-cover rounded sm:h-72">
          <div className="w-full h-full bg-gradient-to-b from-bgMain">
            <h1 className="w-full text-darkPrimary text-center text-2xl font-bold p-1">
              سامانه خرید و فروش ملک
            </h1>

            <p className="w-full text-secondary text-center">
              ملک رویایی خود را با ما پیدا کنید
            </p>
            <p className="w-full text-secondary text-center">
              جایی که آرامش و سرمایه گذاری در کنار هم می درخشند
            </p>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 justify-items-center justify-center gap-1 gap-y-4 mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:justify-between">
          <HomePageCard name="vila" title="ویلایی" />
          <HomePageCard name="apartment" title="آپارتمان" />
          <HomePageCard name="store" title="فروشگاه" />
          <HomePageCard name="land" title="زمین" />
        </div>

        <div className="w-full mt-12">
          <HomePageSlide />
        </div>

        <div className="w-full mt-12 rounded bg-primary p-1">
          <h3 className="w-full text-bgMain text-2xl font-bold text-center mt-2">
            به دستان ما بسپارید
          </h3>
          <p className="w-full text-bgMain text-center mt-1">
            صفر تا صد ساخت و ساز و تعمیرات با بهترین کیفیت و به روز ترین متد های
            دنیا
          </p>
        </div>

        <div className="w-full mt-1">
          <Image
            className="w-full rounded"
            src="/image/homepage-banner1.jpg"
            width={1400}
            height={1000}
            alt="banner"
          ></Image>
        </div>
      </div>
    </>
  );
}

export default HomePage;
