import Link from "next/link";
import icon from "@/constants/icons";

function Footer() {
  return (
    <>
      <footer className="w-full flex flex-col items-center justify-start py-2 mt-12 mb-1 sm:items-start ">
        <p className="text-xl font-black text-secondary">
          سامانه خرید و فروش ملک
        </p>

        <ul className="w-full my-5 flex items-center justify-evenly flex-row gap-2">
          {Object.keys(icon).map((item) => (
            <li key={item} className="p-2 bg-secondary rounded text-bgMain">
              {icon[item]}
            </li>
          ))}
        </ul>

        <p className="w-full text-center mt-2 ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است
        </p>

        <div className="w-full bg-secondary rounded flex items-center justify-center gap-1 p-2 mt-4">
          <Link
            href="https://github.com/hwssein"
            target="_blank"
            className="text-bgMain"
          >
            <p className="text-bgMain">
              توسعه داده شده توسط <span className="font-mono">hwssein</span>
            </p>
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;
