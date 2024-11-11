"use client";

import { useEffect, useState } from "react";
import { BsShareFill } from "react-icons/bs";

function ShareButton() {
  const [isShowCopy, setIsShowCopy] = useState(false);
  const [myURL, setMyURL] = useState("");

  useEffect(() => {
    setMyURL(window.location.href);
  }, []);

  const copyHandler = () => {
    navigator.clipboard.writeText(myURL);

    setIsShowCopy(true);

    setTimeout(() => {
      setIsShowCopy(false);
    }, 1500);
  };

  return (
    <>
      <div className="flex items-center gap-2 p-2 cursor-pointer rounded transition-all ease-in duration-100 hover:bg-secondary">
        <span>
          <BsShareFill fontSize="1.2rem" />
        </span>

        <p onClick={copyHandler}>{isShowCopy ? "کپی شد" : "اشتراک گذاری"}</p>
      </div>
    </>
  );
}

export default ShareButton;
