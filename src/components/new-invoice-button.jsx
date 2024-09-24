import React from "react";
import { Link } from "react-router-dom";
import PlusIcon from "./icons/plus";
import { cn } from "../lib/utils";

function NewInvoiceButton({ className = "" }) {
  return (
    <Link
      to={"/new"}
      className={cn(
        "bg-primary-color flex items-center justify-center gap-2 text-white w-full py-3 rounded-xl transition-all hover:bg-violet-700 hover:shadow-lg",
        className
      )}
    >
      <PlusIcon />
      <p className="font-medium">New Invoice</p>
    </Link>
  );
}

export default NewInvoiceButton;
