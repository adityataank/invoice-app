import { cn } from "../lib/utils";

function Button(props) {
  const {
    children,
    variant = "",
    className = "",
    onClick = () => {},
    disabled = false,
  } = props;
  const classMapping = {
    destructive: "bg-red-500",
  };
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      {...props}
      className={cn(
        "bg-primary-color h-12 min-w-16 text-white px-4 py-2 rounded-md transition-all hover:shadow-xl active:scale-95 active:translate-y-[1px] disabled:bg-neutral-500 disabled:hover:shadow-none disabled:cursor-not-allowed disabled:active:translate-y-0 disabled:active:scale-100",
        classMapping[variant],
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
