function AddPostForm({ textArea, type, name, title }) {
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
            ></textarea>
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
            />
          </>
        )}
      </div>
    </>
  );
}

export default AddPostForm;
