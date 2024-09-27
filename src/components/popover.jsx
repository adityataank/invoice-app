import { useEffect, useState } from "react";
import { useRef } from "react";

import { cn } from "../lib/utils";

function Popover({ children, index, className = "", triggerElement = <></> }) {
  const [openMenuIndex, setOpenMenuIndex] = useState(null); // Track which menu is open
  const menuRef = useRef(null);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenuIndex(null); // Close menu if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const stopEvent = (e) => e.stopPropagation();

  const handleMenuClick = (e) => {
    stopEvent(e);
    // Toggle menu: If clicked on the same menu button, close it; otherwise, open the new one
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  return (
    <div className={cn("grid place-items-center relative", className)}>
      <button onClick={handleMenuClick} id={`menu-btn-${index}`}>
        {triggerElement}
      </button>
      {openMenuIndex === index && (
        <div className="absolute right-12" ref={menuRef} onClick={stopEvent}>
          {children}
        </div>
      )}
    </div>
  );
}

export default Popover;
