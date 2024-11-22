import supabase from "@/lib/supabase";
import findUser from "@/serverAction/findUser";
import { NextResponse } from "next/server";

const POST = async (req) => {
  try {
    const user = await findUser();
    if (!user || user.error)
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری خود شوید" },
        { status: "401" }
      );

    const formData = await req.formData();
    const images = formData.getAll("image");
    const imagePublicUrl = [];

    for (let i of images) {
      const { data, error } = await supabase.storage
        .from("upload-image")
        .upload(
          `${user._id}/${Date.now()}-${i.name
            .replace(/\s+/g, "-")
            .replace(/[^a-zA-Z0-9\.-]/g, "")}`,
          i
        );

      if (error) {
        return NextResponse.json(
          { error: "مشکلی در ارسال عکس ها به وجود آمده" },
          { status: 500 }
        );
      }

      const { data: publicUrlData } = supabase.storage
        .from("upload-image")
        .getPublicUrl(data.path);

      if (publicUrlData) {
        imagePublicUrl.push(publicUrlData.publicUrl);
      }
    }

    return NextResponse.json({ message: "پیام موقت" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: "500" }
    );
  }
};

export { POST };
