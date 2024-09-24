import { useLocation } from "react-router-dom";
import HeadingJson from "../data/heading.json";

function Header() {
  const { pathname } = useLocation();
  return (
    <div className="bg-white flex items-center pl-8 shadow-sm">
      <h4 className="font-medium text-2xl">
        {HeadingJson[pathname] ?? "Invoices"}
      </h4>
    </div>
  );
}

export default Header;
