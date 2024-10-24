import AddPostDate from "@/module/AddPostDate";
import AddPostForm from "@/module/AddPostForm";
import AddPostList from "@/module/AddPostList";
import AddPostRadio from "@/module/AddPostRadio";
import submitPost from "@/serverAction/submitPost";

function AddPostPage() {
  return (
    <>
      <div className="inline-block bg-secondary px-4 py-2 rounded mb-6">
        ثبت آگهی
      </div>

      <form action={submitPost} className="w-full">
        <AddPostForm
          type="text"
          textArea={false}
          name="postTitle"
          title="عنوان آگهی"
        />
        <AddPostForm
          type="text"
          textArea={true}
          name="description"
          title="توضیحات"
        />
        <AddPostForm type="text" textArea={false} name="address" title="آدرس" />
        <AddPostForm
          type="number"
          textArea={false}
          name="telNumber"
          title="شماره تماس"
        />
        <AddPostForm
          type="number"
          textArea={false}
          name="price"
          title="قیمت (تومان)"
        />
        <AddPostForm
          type="text"
          textArea={false}
          name="realEstate"
          title="نام بنگاه"
        />

        <div className="w-full block mb-2">دسته بندی</div>
        <div className="w-full flex flex-row flex-wrap items-center justify-center sm:justify-between gap-4 mb-6">
          <AddPostRadio value="vila" title="ویلا" />
          <AddPostRadio value="apartment" title="آپارتمان" />
          <AddPostRadio value="store" title="مغازه" />
          <AddPostRadio value="commercial" title="تجاری" />
          <AddPostRadio value="land" title="زمین" />
        </div>

        <div className="w-full block mb-2">امکانات رفاهی</div>
        <AddPostList name="amenities" />

        <div className="w-full block mb-2">قوانین</div>
        <AddPostList name="rules" />

        <div className="w-full block mb-2">تاریخ ساخت</div>
        <AddPostDate />

        <button type="submit" className="button1 w-full mt-4">
          ثبت
        </button>
      </form>
    </>
  );
}

export default AddPostPage;
