import { IoCloseSharp } from "react-icons/io5";

function ResMenu({ setShowMenu }) {
  return (
    <>
      <div className="w-full h-full fixed top-0 right-0 bg-bgMain">
        <span
          onClick={() => setShowMenu(false)}
          className="w-full flex align-center justify-end p-2 mt-2"
        >
          <IoCloseSharp size="1.3rem" color="var(--primary)" />
        </span>

        <ul className="my-2 px-2 flex flex-col items-start justify-start gap-2 ">
          <li className="flex flex-row items-center justify-start gap-2 group">
            <span className="w-1 h-4 rounded bg-secondary group-hover:bg-primary transition ease-in duration-100"></span>
            <span>آگهی ها</span>
          </li>

          <li className="flex flex-row items-center justify-start gap-2 group">
            <span className="w-1 h-4 rounded bg-secondary group-hover:bg-primary transition ease-in duration-100"></span>
            <span>ورود</span>
          </li>

          <li className="flex flex-row items-center justify-start gap-2 group">
            <span className="w-1 h-4 rounded bg-secondary group-hover:bg-primary transition ease-in duration-100"></span>
            <span>ثبت نام</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ResMenu;
