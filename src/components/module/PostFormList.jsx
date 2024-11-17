"use client";

function PostFormList({ name, form, setForm }) {
  const addNew = () => {
    setForm({ ...form, [name]: [...form[name], ""] });
  };

  const changeHandler = (event, index) => {
    const { value } = event.target;
    const updateList = [...form[name]];
    updateList[index] = value;

    setForm({ ...form, [name]: updateList });
  };

  const removeList = (index) => {
    const updateList = form[name].filter((item, number) => number !== index);

    setForm({ ...form, [name]: updateList });
  };

  return (
    <>
      <div className="w-full mb-6 flex flex-col items-start gap-4">
        <div className="w-full flex flex-col items-start gap-2">
          {form[name].map((item, index) => (
            <div key={index} className="w-full flex items-center gap-2">
              <input
                type="text"
                name={name}
                value={item}
                className="form_input"
                onChange={(event) => changeHandler(event, index)}
              />
              <span
                onClick={() => removeList(index)}
                className="text-secondary cursor-pointer"
              >
                حذف
              </span>
            </div>
          ))}
        </div>
        <span onClick={addNew} className="button2 cursor-pointer">
          افزودن
        </span>
      </div>
    </>
  );
}

export default PostFormList;
