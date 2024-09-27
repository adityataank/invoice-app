import { useState, useEffect } from "react";

import Store from "../flux/store";

export function useInvoices() {
  const [invoices, setInvoices] = useState(Store.getAllInvoices());

  useEffect(() => {
    const onChange = () => setInvoices(Store.getAllInvoices());

    Store.addChangeListener(onChange);

    return () => {
      Store.removeChangeListener(onChange);
    };
  }, []);

  return invoices;
}
