function Header() {
  return (
    <>
      <div className="w-full flex flex-row items-center justify-between my-4 py-2 ">
        <div className="flex items-center justify-start gap-6">
          <div className="font-bold text-xl text-primary">املاک کویر</div>

          <div className="flex items-center justify-start gap-4">
            <span className="p-1">صفحه اصلی</span>
            <span className="p-1">آگهی ها</span>
          </div>
        </div>

        <div className="flex items-center justify-start gap-4">
          <button className="button1">ورود</button>
          <button className="button2">ثبت نام</button>
        </div>
      </div>
    </>
  );
}

export default Header;
