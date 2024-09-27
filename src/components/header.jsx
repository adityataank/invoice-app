import { useLocation } from "react-router-dom";
import HeadingJson from "../data/heading.json";
import BackButton from "./back-button";

function Header() {
  const { pathname } = useLocation();
  const showBackButton = pathname !== "/";
  return (
    <div className="bg-white flex gap-4 items-center pl-8 shadow-sm">
      {showBackButton && <BackButton />}
      <h4 className="font-medium text-2xl">
        {HeadingJson[pathname] ?? "Invoices"}
      </h4>
    </div>
  );
}

export default Header;
