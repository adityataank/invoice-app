import { Link, useLocation } from "react-router-dom";
import InvoiceIcon from "../icons/invoice";
import ClientsIcon from "../icons/clients";
import { cn } from "../../lib/utils";

const IconMap = (isActive = false) => {
  const cls = isActive ? "fill-violet-200" : "";
  return {
    invoices: <InvoiceIcon className={cls} />,
    clients: <ClientsIcon className={cls} />,
  };
};

function NavLink({ name = "", route = "", active = [] }) {
  const { pathname } = useLocation();

  const isActive = active.includes(pathname);

  const icon = IconMap(isActive)[name?.toLowerCase()];

  return (
    <Link
      to={route}
      className={cn(
        "flex items-center gap-4 w-full group py-3 px-4 rounded-xl hover:bg-violet-100/35",
        isActive && "bg-violet-100/60 hover:bg-violet-100/60"
      )}
    >
      {icon}
      <p
        className={cn(
          "font-medium text-gray-500 group-hover:text-primary-color transition-colors",
          isActive && "text-primary-color"
        )}
      >
        {name}
      </p>
    </Link>
  );
}

export default NavLink;
