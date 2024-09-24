import { Children } from "react";
import { cn } from "../../lib/utils";

const FILTERS = ["All invoices", "Paid", "Unpaid", "Due"];

const Tab = ({ name = "" }) => {
  const isSelected = name.toLowerCase() == "paid";
  return (
    <div
      className={cn(
        "h-full text-gray-500 font-medium cursor-pointer px-4 grid place-items-center relative after:absolute after:w-0 after:h-[4px] after:bg-primary-color after:-bottom-[2px]",
        isSelected && "text-primary-color after:w-full"
      )}
    >
      {name}
    </div>
  );
};

function InvoiceFilter() {
  return (
    <div className="bg-white w-full h-16 rounded-xl gap-10 flex items-center px-7">
      {Children.toArray(FILTERS.map((filter) => <Tab name={filter} />))}
    </div>
  );
}

export default InvoiceFilter;
