import { useFormStatus } from "react-dom";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="button1 w-28" disabled={pending}>
      ورود
    </button>
  );
}

export default FormButton;
