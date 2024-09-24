import moment from "moment";
import { cn, formatAmount } from "../../lib/utils";
import InvoiceLinearIcon from "../icons/invoice-linear";
import StatusTag from "../status-tag";
import TrashIcon from "../icons/trash";

const COLORS = [
  "#FFF8D780",
  "#DCF3FF80",
  "#FFE7D380",
  "#F5FCD280",
  "#D6E4FD80",
];

function InvoiceRow({
  name = "",
  status = "",
  amount = "",
  client = "",
  invoice_id = "",
  due_date = "",
  index,
}) {
  const bgColor = COLORS[index % COLORS.length];

  const Icon = () => (
    <td className="w-0 pr-6 pl-4">
      <div
        className={cn(`w-12 h-12 grid place-items-center rounded-full`)}
        style={{ background: bgColor }}
      >
        <InvoiceLinearIcon />
      </div>
    </td>
  );

  const Name = () => (
    <td>
      <div className="space-y-1">
        <h6 className="font-medium">{name}</h6>
        <p className="text-sm text-gray-500">{invoice_id}</p>
      </div>
    </td>
  );

  const DueDate = () => <td>{moment(due_date).format("MMMM DD, YYYY")}</td>;

  const Client = () => <td>{client}</td>;

  const Amount = () => (
    <td className="text-right pr-20">{formatAmount(amount)}</td>
  );

  const Status = () => (
    <td className="w-0">
      <StatusTag status={status} />
    </td>
  );

  const Delete = () => (
    <td align="center">
      <div className="p-3 rounded-full w-fit grid place-items-center transition-colors hover:bg-white hover:animate-wiggle">
        <TrashIcon />
      </div>
    </td>
  );

  return (
    <tr className="border-t h-20 cursor-pointer transition-colors hover:bg-violet-50/80">
      <Icon />
      <Name />
      <DueDate />
      <Client />
      <Amount />
      <Status />
      <Delete />
    </tr>
  );
}

export default InvoiceRow;
