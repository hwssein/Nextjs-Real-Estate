import Link from "next/link";
import { sp } from "@/utils/replaceNumber";
import icon from "@/constants/icons";
import Image from "next/image";

function Card({ data }) {
  return (
    <>
      <Link href={`/residential-details/${data._id}`}>
        <div className="w-full flex items-start justify-between gap-1 border border-line rounded p-2">
          <div className="w-full flex flex-col items-start justify-start gap-1">
            <div className="w-full flex items-start justify-start gap-2">
              <span className="text-primary">{icon[data.category]}</span>
              <span className="text-lg h-20 break-words w-full">
                {data.postTitle}
              </span>
            </div>

            <span>{data.address}</span>

            <span>{sp(data.price)} تومان</span>
          </div>

          {data?.image.length !== 0 ? (
            <div className="w-28">
              <Image
                src={data?.image[0]}
                width={400}
                height={300}
                alt={`card-${data._id}`}
                className="w-full"
              ></Image>
            </div>
          ) : (
            <div className="w-28">
              <Image
                src="/image/image-unavailable.png"
                width={400}
                height={300}
                alt={`card-${data._id}`}
                className="w-full"
              ></Image>
            </div>
          )}
        </div>
      </Link>
    </>
  );
}

export default Card;
