import Link from "next/link";
import { sp } from "@/utils/replaceNumber";
import icon from "@/constants/icons";

function Card({ data }) {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-start gap-1 border border-line rounded p-2">
        <div className="w-full flex items-start justify-start gap-2">
          <span className="text-primary">{icon[data.category]}</span>
          <span className="text-lg h-16 break-words w-full">
            {data.postTitle}
          </span>
        </div>

        <span>{data.address}</span>

        <span>{sp(data.price)} تومان</span>

        <div className="w-full flex items-center justify-end">
          <Link href={`/residential-details/${data._id}`}>
            <button className="text-primary p-1">مشاهده آگهی</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
