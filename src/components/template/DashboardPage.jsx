async function DashboardPage({ createdAt }) {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-start">
        <span>سلام ✌️</span>
        <span>ملکی برای فروش یا اجاره داری؟</span>
        <span>اینجا ثبت کن تا هزاران نفر اون رو ببینن.</span>

        <div className="p-2 flex flex-row items-center gap-2 mt-4 bg-line rounded">
          <span>تاریخ عضویت:</span>
          <span>{new Date(createdAt).toLocaleDateString("fa-ir")}</span>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
