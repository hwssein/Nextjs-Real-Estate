"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

function PostFormImage({
  name,
  form,
  setForm,
  editImage,
  setEditImage,
  editImageData,
}) {
  const refImage = useRef(null);

  useEffect(() => {
    if (editImageData && editImageData?.length !== 0) {
      setEditImage({ ...editImage, imageUrl: editImageData });
    }
  }, [editImageData]);

  const changeHandler = (event) => {
    const { files } = event.target;

    if (files[0]) {
      if (files[0].size >= 1500000) {
        toast.warning("عکس های بزرگتر از یک مگابایت و نیم پشتیبانی نمی شود");
      } else if (editImage.imageUrl.length >= 5) {
        toast.warning("بیشتر از پنج عدد عکس پشتیبانی نمی شود");
      } else {
        const newImageURl = URL.createObjectURL(files[0]);
        setEditImage((prvForm) => ({
          ...prvForm,
          imageUrl: [...editImage.imageUrl, newImageURl],
        }));

        setEditImage((prvData) => ({
          ...prvData,
          newImage: [...editImage.newImage, files[0]],
        }));
      }
    }
  };

  const deleteHandler = (event, item, index) => {
    event.stopPropagation();

    if (editImage.imageUrl && editImage.imageUrl.length !== 0) {
      const updateImage = editImage.imageUrl.filter(
        (i, number) => number !== index
      );

      setEditImage((prvForm) => ({ ...prvForm, imageUrl: updateImage }));
    }

    const updatedNewImage = editImage.newImage.filter(
      (i, number) => number !== index
    );
    setEditImage((prvForm) => ({ ...prvForm, newImage: updatedNewImage }));

    URL.revokeObjectURL(item);

    const removedImageUrl = editImage.imageUrl.filter(
      (i, number) => number === index
    );
    setEditImage((prvForm) => ({
      ...prvForm,
      removeImage: [...editImage.removeImage, ...removedImageUrl],
    }));

    const updateFormImage = form.image.filter((i, number) => number !== index);
    setForm((prvForm) => ({ ...prvForm, image: updateFormImage }));
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
          />
        </div>

        {editImage?.imageUrl?.length !== 0 && (
          <div className="w-full flex items-center justify-start gap-1">
            {editImage?.imageUrl?.map((item, index) => (
              <div
                key={item}
                className="w-14 h-10 rounded overflow-hidden relative"
              >
                <Image
                  src={item}
                  width={150}
                  height={100}
                  alt={`uploaded-${index}`}
                  className="w-full h-full"
                ></Image>

                <button
                  className="w-full h-full absolute top-0 right-0 backdrop-blur text-bgMain opacity-0 hover:opacity-100 transition-all ease-in duration-100"
                  onClick={(event) => deleteHandler(event, item, index)}
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
