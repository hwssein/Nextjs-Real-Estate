"use client";

import { useState } from "react";

function AddPostList({ name }) {
  const [list, setList] = useState([]);

  const changeHandler = (event, index) => {
    const { value } = event.target;
    const updateList = [...list];
    updateList[index] = value;

    setList(updateList);
  };

  const addNew = () => {
    setList([...list, ""]);
  };

  const removeList = (index) => {
    const updateList = list.filter((item, number) => number !== index);

    setList(updateList);
  };

  return (
    <>
      <div className="w-full mb-6 flex flex-col items-start gap-4">
        <div className="w-full flex flex-col items-start gap-2">
          {list.map((item, index) => (
            <div key={index} className="w-full flex items-center gap-2">
              <input
                type="text"
                name={name}
                value={item}
                className="form_input"
                onChange={(event) => changeHandler(event, index)}
              />
              <button
                onClick={() => removeList(index)}
                className="text-primary"
              >
                حذف
              </button>
            </div>
          ))}
        </div>
        <button onClick={addNew} className="button2">
          افزودن
        </button>
      </div>
    </>
  );
}

export default AddPostList;
