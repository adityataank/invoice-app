import { cn } from "../../lib/utils";

function LineItemWrapper({ children, className = "" }) {
  return (
    <div
      className={cn("grid grid-cols-[25%_repeat(5,1fr)_40px] gap-6", className)}
    >
      {children}
    </div>
  );
}

export default LineItemWrapper;
