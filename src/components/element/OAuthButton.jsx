import { useFormStatus } from "react-dom";
import { FiLoader } from "react-icons/fi";

function OAuthButton({ text, icon }) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <button
          disabled
          className="button2 w-full  flex items-center justify-center gap-2"
        >
          <FiLoader fontSize="1.5rem" />
        </button>
      ) : (
        <button className="button2 w-full  flex items-center justify-center gap-2">
          {text}
          {icon}
        </button>
      )}
    </>
  );
}

export default OAuthButton;
