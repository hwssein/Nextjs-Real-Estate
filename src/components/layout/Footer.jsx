import { IoHomeSharp } from "react-icons/io5";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { FaStore } from "react-icons/fa6";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { PiIslandFill } from "react-icons/pi";

function Footer() {
  return (
    <>
      <footer className="w-full flex flex-col items-center justify-start py-2 mt-5 mb-1 sm:items-start ">
        <p className="text-lg font-bold text-primary">سامانه خرید و فروش ملک</p>

        <ul className="w-full my-5 flex items-center justify-evenly flex-row gap-2">
          <li className="p-2 bg-secondary rounded">
            <IoHomeSharp color="var(--bg-main)" fontSize="1.3rem" />
          </li>
          <li className="p-2 bg-secondary rounded">
            <PiBuildingApartmentFill color="var(--bg-main)" fontSize="1.3rem" />
          </li>
          <li className="p-2 bg-secondary rounded">
            <FaStore color="var(--bg-main)" fontSize="1.3rem" />
          </li>
          <li className="p-2 bg-secondary rounded">
            <HiMiniBuildingOffice color="var(--bg-main)" fontSize="1.3rem" />
          </li>
          <li className="p-2 bg-secondary rounded">
            <PiIslandFill color="var(--bg-main)" fontSize="1.3rem" />
          </li>
        </ul>

        <p className="w-full text-center mt-2 ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است
        </p>
      </footer>
    </>
  );
}

export default Footer;
