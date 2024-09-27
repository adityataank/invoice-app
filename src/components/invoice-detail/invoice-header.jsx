import moment from "moment";
import { formatDate } from "../../lib/utils";

const TitleWrapper = ({ children }) => (
  <p className="text-[#60737D] text-sm">{children}</p>
);

function InvoiceHeader({ invoice_id, issued_on, due_date, client }) {
  const Heading = () => <h4 className="font-semibold text-2xl">Invoice</h4>;

  const InvoiceId = () => (
    <div className="flex flex-col items-end">
      <TitleWrapper>Invoice no.</TitleWrapper>
      <h6 className="font-medium">#{invoice_id}</h6>
    </div>
  );

  const BilledTo = () => (
    <div>
      <TitleWrapper>Billed to:</TitleWrapper>
      <h5 className="font-medium my-2">{client?.label}</h5>
      <p className="text-sm">{client?.value?.contactInfo}</p>
    </div>
  );

  const Dates = () => (
    <div className="flex flex-col items-end justify-end pt-4">
      <TitleWrapper>Issued on</TitleWrapper>
      <p className="text-sm mb-3">{formatDate(issued_on)}</p>
      <TitleWrapper>Payment due</TitleWrapper>
      <p className="text-sm">{formatDate(due_date)}</p>
    </div>
  );

  return (
    <div className="bg-[#F2F5F9] h-auto min-h-[174px] rounded-xl grid grid-cols-2 grid-rows-[54px_auto] p-5 mb-2">
      <Heading />
      <InvoiceId />
      <BilledTo />
      <Dates />
    </div>
  );
}

export default InvoiceHeader;
