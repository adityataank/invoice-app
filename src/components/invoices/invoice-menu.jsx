import { Children } from "react";
import { cn } from "../../lib/utils";
import EmailIcon from "../icons/email";

const OPTIONS = [
  // {name: "Delete", className = ""}
];

const Button = ({ className = "", children, onClick, status = "", name }) => (
  <button
    onClick={onClick}
    className={cn(
      "font-medium text-sm px-3 py-2 transition-colors rounded-md whitespace-nowrap flex items-center justify-center gap-1",
      className
    )}
  >
    {children}
  </button>
);

function InvoiceMenu({ handlers = {}, status }) {
  const { deleteInvoice, markAsPaid, sendInvoice } = handlers;

  const BUTTONS_LIST = [
    { name: "Delete", className: "hover:bg-red-200", onClick: deleteInvoice },
    status === "Paid"
      ? null
      : {
          name: "Mark as paid",
          className: "hover:bg-green-200",
          onClick: markAsPaid,
        },
    {
      name: (
        <>
          Send via <EmailIcon />
        </>
      ),
      className: "hover:bg-blue-200",
      onClick: sendInvoice,
    },
  ];
  return (
    <div className="bg-white shadow-lg border w-auto border-gray-200 rounded-lg p-4 flex flex-col gap-2">
      {Children.toArray(
        BUTTONS_LIST.map(
          (button) =>
            button && (
              <Button {...button} status={status}>
                {button?.name}
              </Button>
            )
        )
      )}
    </div>
  );
}

export default InvoiceMenu;
