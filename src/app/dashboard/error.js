"use client";

import React from "react";

function Error({ error, reset }) {
  const errorHandler = () => {
    window.location.replace("/");
  };
  return (
    <>
      <div className="w-full flex flex-col items-center justify-start">
        <h2 className="mb-4">مشکلی رخ داده است</h2>

        <button className="button1" onClick={errorHandler}>
          برگشتن به صفحه اصلی
        </button>
      </div>
    </>
  );
}

export default Error;
