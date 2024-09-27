import { Link } from "react-router-dom";
import PlusIcon from "./icons/plus";
import { cn } from "../lib/utils";

function NewButton({ className = "", to = "/", children }) {
  return (
    <Link
      to={to}
      className={cn(
        "bg-primary-color flex items-center justify-center gap-2 text-white w-full px-4 py-3 rounded-xl transition-all hover:bg-violet-700 hover:shadow-lg",
        className
      )}
    >
      <PlusIcon />
      <p className="font-medium">{children}</p>
    </Link>
  );
}

export default NewButton;
