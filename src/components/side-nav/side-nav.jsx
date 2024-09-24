import { Children } from "react";

import NavLink from "./nav-link";
import NewInvoiceButton from "../new-invoice-button";

import NavLinks from "../../data/side-nav.json";

function SideNav() {
  return (
    <div className="flex bg-white flex-col gap-4 items-center p-8 shadow-md">
      <NewInvoiceButton className="mb-3" />
      {Children.toArray(NavLinks.map((nav) => <NavLink {...nav} />))}
    </div>
  );
}

export default SideNav;
