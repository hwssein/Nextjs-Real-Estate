"use client";

import { useState } from "react";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";

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
        onChange={changeHandler}
        name="constructionDate"
        calendar={persian}
        calendarPosition="bottom-right"
      />
    </>
  );
}

export default AddPostDate;
