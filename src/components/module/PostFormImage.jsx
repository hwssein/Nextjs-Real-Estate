import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

function PostFormImage({ name, form, setForm }) {
  const [images, setImages] = useState([]);
  const refImage = useRef(null);

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
      <div className="w-full flex flex-col items-start justify-start mb-4">
        <div className="w-full mb-2">
          <label
            onClick={() => refImage.current?.click()}
            className="px-4 py-2 text-bgMain bg-primary rounded transition ease-in duration-100 cursor-pointer hover:bg-darkPrimary"
          >
            افزودن تصویر
          </label>

          <input
            ref={refImage}
            type="file"
            className="hidden"
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
