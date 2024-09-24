import InvoiceFilter from "../invoices/filter";
import InvoiceTable from "../invoices/invoice-table";

function Invoices() {
  return (
    <div className="bg-background-color h-full space-y-4">
      <InvoiceFilter />
      <InvoiceTable />
    </div>
  );
}

export default Invoices;
