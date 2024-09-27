import { Children } from "react";

import NavLink from "./nav-link";
import NewButton from "../new-button";

import NavLinks from "../../data/side-nav.json";

function SideNav() {
  return (
    <div className="flex bg-white flex-col gap-4 items-center p-8 shadow-md">
      <NewButton to="/new" className="mb-3">
        New Invoice
      </NewButton>
      {Children.toArray(NavLinks.map((nav) => <NavLink {...nav} />))}
    </div>
  );
}

export default SideNav;
