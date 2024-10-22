function Footer() {
  return (
    <>
      <footer className="w-full flex flex-col items-center justify-start py-2 my-4 sm:items-start ">
        <p className="text-lg font-bold text-primary">سامانه خرید و فروش ملک</p>

        <ul className="w-full my-5 flex items-center justify-evenly flex-row gap-2">
          <li className="button3">خرید</li>
          <li className="button3">فروش</li>
          <li className="button3">رهن</li>
          <li className="button3">اجاره</li>
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
