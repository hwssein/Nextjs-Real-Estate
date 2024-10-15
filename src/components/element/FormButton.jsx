import { useFormStatus } from "react-dom";
import { FiLoader } from "react-icons/fi";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <button
          className="button1 w-28 flex items-center justify-center"
          disabled
        >
          <FiLoader fontSize="1.5rem" />
        </button>
      ) : (
        <button type="submit" className="button1 w-28">
          ورود
        </button>
      )}
    </>
  );
}

export default FormButton;
