"use client";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function PostFormDate({ form, setForm }) {
  const changeHandler = (event) => {
    const updateDate = new Date(event);

    setForm({ ...form, constructionDate: updateDate });
  };

  return (
    <>
      <DatePicker
        value={form.constructionDate}
        name="constructionDate"
        onChange={changeHandler}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
      />
    </>
  );
}

export default PostFormDate;
