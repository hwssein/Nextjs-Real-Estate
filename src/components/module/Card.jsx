import Link from "next/link";
import { sp } from "@/utils/replaceNumber";

import { IoHomeSharp } from "react-icons/io5";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { FaStore } from "react-icons/fa6";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { PiIslandFill } from "react-icons/pi";

function Card({ data }) {
  const icon = {
    vila: <IoHomeSharp color="var(--primary)" fontSize="1.2rem" />,
    apartment: (
      <PiBuildingApartmentFill color="var(--primary)" fontSize="1.2rem" />
    ),
    store: <FaStore color="var(--primary)" fontSize="1.2rem" />,
    commercial: (
      <HiMiniBuildingOffice color="var(--primary)" fontSize="1.2rem" />
    ),
    land: <PiIslandFill color="var(--primary)" fontSize="1.2rem" />,
  };

  return (
    <>
      <div className="w-full flex flex-col items-start justify-start gap-1 border border-line rounded p-2">
        <div className="w-full flex items-center justify-start gap-2">
          <span>{icon[data.category]}</span>
          <span className="text-lg break-words w-full">{data.postTitle}</span>
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
