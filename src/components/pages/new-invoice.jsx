import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../input";
import LineItemsHeading from "../line-items/line-item-headings";
import NewLineItem from "../line-items/new-line-item";
import LineItems from "../line-items/line-items";
import Button from "../button";

import { checkInvoiceData, parseClientOptions } from "../../lib/utils";

import { useClients } from "../../hooks/useClients";
import { useInvoices } from "../../hooks/useInvoices";
import InvoiceActions from "../../flux/actions/invoice-actions";

function NewInvoice() {
  const clients = useClients();
  const invoices = useInvoices();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    client: { label: "", value: { name: "", contactInfo: "" } },
    due_date: "",
    billing_address: "",
    additional_notes: "",
  });

  const [lineItems, setLineItems] = useState([]);

  const handleChange = (e) => {
    if (e) {
      const name = e?.target?.name;
      const value = e?.target?.value;
      // if (name === "billing_address") {
      //   return setFormData;
      // }
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSave = (lineItem = {}) => {
    setLineItems([...lineItems, lineItem]);
  };

  const createNewInvoice = () => {
    const amount = lineItems?.reduce(
      (acc, cv) => acc + Number(cv?.sub_total ?? 0),
      0
    );

    InvoiceActions.addInvoice({
      ...formData,
      amount,
      line_items: lineItems,
      invoice_id: `INV-${invoices?.length + 1}`,
      issued_on: new Date(),
    });
    navigate("/");
  };

  const goBack = () => navigate(-1);

  useEffect(() => {
    if (formData.client.value) {
      setFormData({
        ...formData,
        billing_address: formData.client.value.contactInfo,
      });
    }
  }, [formData.client.value]);

  const options = parseClientOptions(clients);

  return (
    <div className="bg-white h-full max-h-[calc(100dvh-146px)] overflow-y-auto rounded-xl shadow-md">
      <div className="mb-4 h-20 flex gap-4 items-center justify-end pr-8 sticky top-0 bg-white z-10">
        <Button variant="destructive" onClick={goBack}>
          Discard
        </Button>
        <Button
          onClick={createNewInvoice}
          disabled={!checkInvoiceData({ ...formData, lineItems })}
        >
          Save invoice
        </Button>
      </div>
      <div className="w-full flex gap-8 p-8">
        <div className="w-full flex flex-col gap-8">
          <Input
            label="Invoice name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            label="Due date"
            name="due_date"
            value={formData.due_date}
            type="date"
            onChange={handleChange}
          />
          <Input
            type="textarea"
            label="Additional notes"
            name="additional_notes"
            value={formData.additional_notes}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-8">
          <Input
            name="client"
            value={formData.client}
            label="Bill to"
            type="select"
            options={options}
            onChange={handleChange}
          />
          <Input
            name="billing_address"
            value={formData.billing_address}
            label="Billing address"
            type="textarea"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mt-8 p-8 pt-0">
        <LineItemsHeading />
        <LineItems items={lineItems} setLineItems={setLineItems} />
        <NewLineItem handleSave={handleSave} />
      </div>
    </div>
  );
}

export default NewInvoice;
