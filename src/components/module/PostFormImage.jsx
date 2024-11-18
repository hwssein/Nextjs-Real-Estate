import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function PostFormImage({ name, form, setForm }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setForm({
      ...form,
      [name]: images,
    });
  }, [images]);

  const changeHandler = (event) => {
    const { files } = event.target;

    Array.from(files).map((item) => {
      if (item.size >= 1500000) {
        toast.warning("عکس های بزرگتر از یک مگابایت و نیم پشتیبانی نمی شود");
      } else if (images.length >= 5) {
        toast.warning("بیشتر از پنج عدد عکس پشتیبانی نمی شود");
      } else {
        setImages([...images, ...Array.from(files)]);
      }
    });
  };

  const deleteHandler = (index) => {
    const updateImage = images.filter((item, number) => number !== index);

    setImages(updateImage);
  };

  return (
    <>
      <div className="w-full flex flex-col items-start justify-start gap-1">
        <div className="relative w-32 inline-block mb-3">
          <label
            htmlFor={`${name}-id`}
            className="w-full py-2 inline-block text-center bg-primary text-bgMain rounded cursor-pointer transition-all ease-in duration-100 hover:bg-darkPrimary"
          >
            افزودن تصویر
          </label>

          <input
            type="file"
            id={`${name}-id`}
            className="w-full h-full absolute top-0 right-0 cursor-pointer invisible"
            name={name}
            onChange={changeHandler}
            multiple
          />
        </div>

        {images.length !== 0 && (
          <div className="w-full flex items-center justify-start gap-1">
            {images.map((item, index) => (
              <div
                key={index}
                className="w-14 h-10 rounded overflow-hidden relative"
              >
                <Image
                  src={URL.createObjectURL(item)}
                  width={150}
                  height={100}
                  alt={`uploaded-${index}`}
                  className="w-full h-full"
                ></Image>

                <button
                  className="w-full h-full absolute top-0 right-0 backdrop-blur text-bgMain opacity-0 hover:opacity-100 transition-all ease-in duration-100"
                  onClick={() => deleteHandler(index)}
                >
                  حذف
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default PostFormImage;
