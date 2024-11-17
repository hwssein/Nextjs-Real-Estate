function DashboardPage({ createdAt, role }) {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-start">
        <span>سلام ✌️</span>
        <span>ملکی برای فروش یا اجاره داری؟</span>
        <span>اینجا ثبت کن تا هزاران نفر اون رو ببینن.</span>

        <div className="w-44 p-2 flex flex-row items-center gap-2 mt-4 bg-line rounded">
          <span>تاریخ عضویت:</span>
          <span>
            {!!createdAt
              ? new Date(createdAt).toLocaleDateString("fa-ir")
              : new Date().toLocaleDateString("fa-ir")}
          </span>
        </div>

        {role === "ADMIN" && (
          <div className="w-44 p-2 flex flex-row items-center gap-2 mt-2 bg-line rounded">
            <span>سطح دسترسی:</span>
            <span>ادمین</span>
          </div>
        )}
      </div>
    </>
  );
}

export default DashboardPage;
