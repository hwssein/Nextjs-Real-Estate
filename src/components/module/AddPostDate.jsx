"use client";

import { useState } from "react";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function AddPostDate() {
  const [date, setDate] = useState(new Date());

  const changeHandler = (event) => {
    const updateDate = new Date(event);

    setDate(updateDate);
  };

  return (
    <>
      <DatePicker
        value={date}
        name="constructionDate"
        onChange={changeHandler}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
      />
    </>
  );
}

export default AddPostDate;
