"use client";

function PostFormInput({ textArea, type, name, title, value, changeHandler }) {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-start gap-2 mb-4">
        {textArea ? (
          <>
            <label htmlFor={`${name}-id`}>{title}</label>
            <textarea
              type="text"
              name={name}
              value={value}
              onChange={changeHandler}
              id={`${name}-id`}
              className="form_input"
              required
            ></textarea>
          </>
        ) : (
          <>
            {name === "telNumber" ? (
              <>
                <label htmlFor={`${name}-id`}>{title}</label>
                <div className="w-[calc(100%-50px)]">
                  <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={changeHandler}
                    id={`${name}-id`}
                    className="form_input text-left"
                    required
                    pattern="\d*"
                    maxLength="10"
                  />
                  <span className="p-1 bg-line rounded m-1">98+</span>
                </div>
              </>
            ) : (
              <>
                <label htmlFor={`${name}-id`}>{title}</label>
                <input
                  type={type}
                  name={name}
                  value={value}
                  onChange={changeHandler}
                  id={`${name}-id`}
                  className="form_input"
                  required
                />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default PostFormInput;
