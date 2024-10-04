function Header() {
  return (
    <>
      <div className="w-full bg-bgCard flex flex-row items-center justify-between px-3 py-5 mt-2 mb-4 rounded">
        <div className="flex items-center justify-start gap-4">
          <span>صفحه اصلی</span>
          <span>آگهی ها</span>
        </div>

        <div className="flex items-center justify-end gap-2">
          <button className="px-3 py-1 rounded bg-primary">ورود</button>
          <button className="px-3 py-1 rounded bg-primary">ثبت نام</button>
        </div>
      </div>
    </>
  );
}

export default Header;
