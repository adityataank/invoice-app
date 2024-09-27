import { useInvoices } from "../../hooks/useInvoices";
import InvoiceTable from "../invoices/invoice-table";
import NoData from "../no-data";

function Invoices() {
  const invoices = useInvoices();

  return (
    <div className="bg-background-color h-full flex flex-col gap-4">
      {invoices?.length ? (
        <>
          <InvoiceTable />
        </>
      ) : (
        <NoData type="invoices" />
      )}
    </div>
  );
}

export default Invoices;
