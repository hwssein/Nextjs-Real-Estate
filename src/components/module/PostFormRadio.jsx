"use client";

function PostFormRadio({ value, title, changeHandler, checked }) {
  return (
    <>
      <div className="flex">
        <input
          type="radio"
          name="category"
          value={value}
          onChange={changeHandler}
          id={`${value}-id`}
          className="peer hidden"
          checked={checked}
        />
        <label
          htmlFor={`${value}-id`}
          className="bg-line p-1 rounded w-20 text-center cursor-pointer transition ease-in duration-100 peer-checked:bg-primary peer-checked:text-bgMain"
        >
          {title}
        </label>
      </div>
    </>
  );
}

export default PostFormRadio;
