function Footer() {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-start p-3 bg-bgCard rounded mt-4 ">
        <p className="text-lg font-bold text-secondary">
          سامانه خرید و فروش ملک
        </p>

        <ul className="w-full my-4 flex items-center justify-evenly flex-row gap-2">
          <li className="hover:text-secondary transition ease-in duration-200 cursor-pointer">
            خرید
          </li>
          <li className="hover:text-secondary transition ease-in duration-200 cursor-pointer">
            فروش
          </li>
          <li className="hover:text-secondary transition ease-in duration-200 cursor-pointer">
            رهن
          </li>
          <li className="hover:text-secondary transition ease-in duration-200 cursor-pointer">
            اجاره
          </li>
        </ul>

        <p className="w-full text-center mt-2 ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است
        </p>
      </div>
    </>
  );
}

export default Footer;
