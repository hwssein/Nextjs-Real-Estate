import { sp } from "@/utils/replaceNumber";
import ShareButton from "@/element/ShareButton";
import icon from "@/constants/icons";
import { category } from "@/constants/strings";

import { MdRealEstateAgent } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

function PostDetailsSidebar({ data }) {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-start">
        <div className="detailsPostCard flex flex-col items-center justify-center gap-2">
          <span className="w-16 h-16 p-1 rounded-full border-2 border-bgMain">
            <MdRealEstateAgent fontSize="3rem" />
          </span>
          <strong>{data.realEstate}</strong>
        </div>

        <div className="hidden detailsPostCard flex-col items-center justify-center gap-2 sm:flex">
          <div className="flex items-center justify-center gap-2">
            <span>{icon[data.category]}</span>
            <span>{category[data.category]}</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <span>{sp(data.price)}</span>
            <span>تومان</span>
          </div>

          <div>
            <span>
              {new Date(data.constructionDate).toLocaleDateString("fa-IR")}
            </span>
          </div>
        </div>

        <div className="detailsPostCard flex items-center justify-between gap-2 sm:flex-col sm:justify-center">
          <div className="flex items-center gap-2 p-2 cursor-pointer rounded transition-all ease-in duration-100 hover:bg-secondary">
            <span>
              <BsFillTelephoneFill fontSize="1.2rem" />
            </span>
            <a href={`tel:0${data.telNumber}`}>0{data.telNumber}</a>
          </div>

          <ShareButton />
        </div>
      </div>
    </>
  );
}

export default PostDetailsSidebar;
