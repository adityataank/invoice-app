import BackIcon from "./icons/back";

import { useGoBack } from "../hooks/useGoBack";

function BackButton() {
  const goBack = useGoBack();
  return (
    <button
      onClick={goBack}
      className="p-2 rounded-full transition-colors hover:bg-neutral-200"
    >
      <BackIcon />
    </button>
  );
}

export default BackButton;
