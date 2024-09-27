import TrashIcon from "./icons/trash";

import { cn } from "../lib/utils";

function Delete({ handleDelete = () => {}, className = "" }) {
  return (
    <div
      className={cn(
        "cursor-pointer p-3 rounded-full w-fit grid place-items-center transition-colors hover:bg-white hover:animate-wiggle",
        className
      )}
      onClick={handleDelete}
    >
      <TrashIcon />
    </div>
  );
}

export default Delete;
