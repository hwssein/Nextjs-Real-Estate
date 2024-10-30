function AddPostForm({ textArea, type, name, title, defaultValue }) {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-start gap-2 mb-4">
        {textArea ? (
          <>
            <label htmlFor={`${name}-id`}>{title}</label>
            <textarea
              type="text"
              name={name}
              id={`${name}-id`}
              className="form_input"
              required
              defaultValue={defaultValue}
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
                    id={`${name}-id`}
                    className="form_input"
                    required
                    defaultValue={defaultValue}
                  />
                  <span className="p-1 bg-secondary rounded m-1">98+</span>
                </div>
              </>
            ) : (
              <>
                <label htmlFor={`${name}-id`}>{title}</label>
                <input
                  type={type}
                  name={name}
                  id={`${name}-id`}
                  className="form_input"
                  required
                  defaultValue={defaultValue}
                />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default AddPostForm;
