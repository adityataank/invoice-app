import moment from "moment";
import { Children } from "react";
import InvoiceRow from "./invoice-row";

const dummyData = [
  {
    name: "New design project",
    invoice_id: "INV-101",
    due_date: moment().add(5, "days").toString(),
    status: "Unpaid",
    amount: "1240.00",
    client: "Jeffi Ramos",
  },
  {
    name: "New design project",
    invoice_id: "INV-101",
    due_date: moment().add(5, "days").toString(),
    status: "Paid",
    amount: "1240.00",
    client: "Jeffi Ramos",
  },
  {
    name: "New design project",
    invoice_id: "INV-101",
    due_date: moment().add(5, "days").toString(),
    status: "Due",
    amount: "1240.00",
    client: "Jeffi Ramos",
  },
  {
    name: "New design project",
    invoice_id: "INV-101",
    due_date: moment().add(5, "days").toString(),
    status: "Unpaid",
    amount: "1240.00",
    client: "Jeffi Ramos",
  },
  {
    name: "New design project",
    invoice_id: "INV-101",
    due_date: moment().add(5, "days").toString(),
    status: "Paid",
    amount: "1240.00",
    client: "Jeffi Ramos",
  },
  {
    name: "New design project",
    invoice_id: "INV-101",
    due_date: moment().add(5, "days").toString(),
    status: "Due",
    amount: "1240.00",
    client: "Jeffi Ramos",
  },
];

function TableBody() {
  return (
    <tbody>
      {Children.toArray(
        [...dummyData, ...dummyData, ...dummyData].map((invoice, index) => (
          <InvoiceRow index={index} {...invoice} />
        ))
      )}
    </tbody>
  );
}

export default TableBody;
