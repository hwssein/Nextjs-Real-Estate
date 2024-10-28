import { useFormStatus } from "react-dom";
import { FiLoader } from "react-icons/fi";

function FormButton({ text, width }) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <button
          className={`button1 ${width} flex items-center justify-center`}
          disabled
        >
          <FiLoader fontSize="1.5rem" />
        </button>
      ) : (
        <button type="submit" className={`button1 ${width}`}>
          {text}
        </button>
      )}
    </>
  );
}

export default FormButton;
