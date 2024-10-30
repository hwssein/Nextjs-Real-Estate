function AddPostRadio({ checked, value, title }) {
  return (
    <>
      <div className="flex">
        <input
          type="radio"
          name="category"
          defaultChecked={checked}
          value={value}
          id={`${value}-id`}
          className="peer hidden"
        />
        <label
          htmlFor={`${value}-id`}
          className="bg-secondary p-1 rounded w-20 text-center transition ease-in duration-100 peer-checked:bg-primary peer-checked:text-bgMain"
        >
          {title}
        </label>
      </div>
    </>
  );
}

export default AddPostRadio;
