import { useParams } from "react-router-dom";

import InvoiceHeader from "../invoice-detail/invoice-header";

import { useInvoices } from "../../hooks/useInvoices";
import LineItems from "../invoice-detail/line-items";
import TotalAmount from "../invoice-detail/total-amount";
import Details from "../invoice-detail/details";

function InvoiceDetail() {
  const invoices = useInvoices();
  const { id } = useParams();
  const invoiceData = invoices[Number(id) - 1];

  return (
    <div className="h-full flex max-h-[calc(100dvh-150px)] overflow-y-auto pb-8">
      <div className="bg-white h-fit min-h-full w-full flex flex-col max-w-2xl mx-auto rounded-2xl shadow-md p-3">
        <InvoiceHeader {...invoiceData} />
        <LineItems lineItems={invoiceData?.line_items} />
        <div className="mt-auto flex flex-col gap-10">
          <TotalAmount total={invoiceData?.amount} />
          <Details info={invoiceData?.additional_notes} />
        </div>
      </div>
    </div>
  );
}

export default InvoiceDetail;
