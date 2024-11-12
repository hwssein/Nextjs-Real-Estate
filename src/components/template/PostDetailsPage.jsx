import icon from "@/constants/icons";
import { category } from "@/constants/strings";
import { sp } from "@/utils/replaceNumber";

import { FaLocationDot } from "react-icons/fa6";

function PostDetailsPage({ data }) {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-start p-1">
        <h1 className="w-full text-xl font-black text-primary mb-2">
          {data.postTitle}
        </h1>

        <div className="w-full text-line flex items-center gap-1 mb-8">
          <FaLocationDot fontSize="1.2rem" /> {data.address}
        </div>

        <div className="w-full flex items-center justify-between gap-1 rounded mb-8 p-2 border border-line sm:hidden">
          <div className="w-full text-primary flex items-center justify-start gap-2">
            <span>{icon[data.category]}</span>
            <span>{category[data.category]}</span>
          </div>

          <div className="w-full text-primary flex items-center justify-center gap-2">
            <span>{sp(data.price)}</span>
            <span>تومان</span>
          </div>

          <div className="w-full text-primary  flex items-center justify-end">
            <span>
              {new Date(data.constructionDate).toLocaleDateString("fa-IR")}
            </span>
          </div>
        </div>

        <div className="w-full flex flex-col items-start justify-start gap-2 mb-8">
          <p className="w-full text-darkPrimary font-bold">توضیحات</p>
          <span className="w-full h-px bg-line"></span>

          <p className="w-full">{data.description}</p>
        </div>
      </div>

      <div className="w-full flex flex-col items-start justify-start gap-2 mb-8">
        <p className="w-full text-darkPrimary font-bold">امکانات</p>
        <span className="w-full h-px bg-line"></span>

        <ul className="w-full flex flex-col items-start justify-start">
          {data?.amenities.map((item, index) => (
            <li
              key={index}
              className={`w-full p-1 pr-2 rounded ${
                index % 2 ? "bg-bgMain" : "bg-primary"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full flex flex-col items-start justify-start gap-1 mb-8">
        <p className="w-full text-darkPrimary font-bold">قوانین</p>
        <span className="w-full h-px bg-line"></span>

        <ul className="w-full flex flex-col items-start justify-start">
          {data?.rules.map((item, index) => (
            <li
              key={index}
              className={`w-full p-1 pr-2 rounded ${
                index % 2 ? "bg-bgMain" : "bg-primary"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default PostDetailsPage;