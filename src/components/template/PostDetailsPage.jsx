import icon from "@/constants/icons";
import { category } from "@/constants/strings";
import PostDetailsImage from "@/module/PostDetailsImage";
import { sp } from "@/utils/replaceNumber";
import Image from "next/image";

import { FaLocationDot } from "react-icons/fa6";

function PostDetailsPage({ data }) {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-start p-1">
        {data?.image.length !== 0 ? (
          <div className="w-full flex items-center justify-center mb-8 rounded">
            <PostDetailsImage data={data?.image} />
          </div>
        ) : (
          <div className="w-full flex items-center justify-center mb-8">
            <Image
              src="/image/image-unavailable.png"
              width={400}
              height={300}
              alt="image unavailable"
              className="w-28"
            ></Image>
          </div>
        )}

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

        {data?.amenities.length !== 0 ? (
          <ul className="w-full flex flex-col items-start justify-start">
            {data?.amenities.map((item, index) => (
              <li
                key={index}
                className={`w-full p-1 pr-2 rounded border border-line my-1`}
              >
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <div className="w-full text-line">موردی افزوده نشده است.</div>
        )}
      </div>

      <div className="w-full flex flex-col items-start justify-start gap-1 mb-8">
        <p className="w-full text-darkPrimary font-bold">قوانین</p>
        <span className="w-full h-px bg-line"></span>

        {data?.rules.length !== 0 ? (
          <ul className="w-full flex flex-col items-start justify-start">
            {data?.rules.map((item, index) => (
              <li
                key={index}
                className={`w-full p-1 pr-2 rounded border border-line my-1`}
              >
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <div className="w-full text-line">موردی افزوده نشده است.</div>
        )}
      </div>
    </>
  );
}

export default PostDetailsPage;
