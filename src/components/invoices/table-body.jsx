import { Children } from "react";

import InvoiceRow from "./invoice-row";

import { useInvoices } from "../../hooks/useInvoices";

function TableBody() {
  const invoices = useInvoices();

  return (
    <tbody>
      {Children.toArray(
        invoices.map((invoice, index) => (
          <InvoiceRow index={index} {...invoice} />
        ))
      )}
    </tbody>
  );
}

export default TableBody;
