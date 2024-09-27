import moment from "moment";
import { useNavigate } from "react-router-dom";

import InvoiceLinearIcon from "../icons/invoice-linear";

import StatusTag from "../status-tag";
import InvoiceActions from "../../flux/actions/invoice-actions";
import MenuIcon from "../icons/menu";
import Popover from "../popover";
import InvoiceMenu from "./invoice-menu";

import { cn, formatAmount } from "../../lib/utils";
import { useInvoices } from "../../hooks/useInvoices";

const COLORS = [
  "#FFF8D780",
  "#DCF3FF80",
  "#FFE7D380",
  "#F5FCD280",
  "#D6E4FD80",
];

function InvoiceRow({
  name = "",
  status = "Unpaid",
  amount = "",
  client = {},
  invoice_id = "",
  due_date = "",
  index,
}) {
  const navigate = useNavigate();
  const bgColor = COLORS[index % COLORS.length];

  const invoices = useInvoices();

  const deleteInvoice = () => InvoiceActions.deleteInvoice(index);

  const markAsPaid = () => {
    const tempList = [...invoices];
    tempList[index]["status"] = "Paid";
    InvoiceActions.updateInvoicesList(tempList);
  };

  const sendInvoice = () =>
    alert(`The invoice is sent to ${client?.value?.email ?? "client's mail"}`);

  const ACTION_HANDLER = {
    deleteInvoice,
    markAsPaid,
    sendInvoice,
  };

  const navigateToDetailPage = () => {
    navigate(`/invoices/${index + 1}`);
  };

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
        <h6 className="font-medium capitalize">{name}</h6>
        <p className="text-sm text-gray-500">{invoice_id}</p>
      </div>
    </td>
  );

  const DueDate = () => <td>{moment(due_date).format("MMMM DD, YYYY")}</td>;

  const Client = () => <td className="capitalize">{client?.label}</td>;

  const Amount = () => (
    <td className="text-right pr-20">{formatAmount(amount)}</td>
  );

  const Status = () => (
    <td className="w-0">
      <StatusTag status={status} due_date={due_date} />
    </td>
  );

  const Menu = () => (
    <td align="center">
      <Popover
        index={index}
        triggerElement={
          <div
            className="w-fit ml-1 p-1 rounded-full hover:bg-neutral-200"
            id={`menu-btn-${index}`}
          >
            <MenuIcon id={`menu-btn-${index}`} />
          </div>
        }
      >
        <InvoiceMenu handlers={ACTION_HANDLER} status={status} />
      </Popover>
    </td>
  );

  return (
    <tr
      onClick={navigateToDetailPage}
      className="border-t h-20 cursor-pointer transition-colors hover:bg-violet-50/80"
    >
      <Icon />
      <Name />
      <DueDate />
      <Client />
      <Amount />
      <Status />
      <Menu />
    </tr>
  );
}

export default InvoiceRow;
