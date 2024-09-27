import moment from "moment";
import { twMerge } from "tailwind-merge";
import { EMAIL_REGEX } from "./constants";

export function cn(...inputs) {
  return twMerge(inputs);
}

export const formatAmount = (amount) => {
  if (amount >= 0) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  }
};

export const parseClientOptions = (options) => {
  return options.map((option) => {
    return {
      label: option?.name,
      value: option,
    };
  });
};

export const checkInvoiceData = (invoiceData) => {
  const { name, client, billing_address, due_date, lineItems } = invoiceData;

  return (
    name && client?.label && billing_address && due_date && lineItems?.length
  );
};

export const checkClientData = (clientData) => {
  const { name, email, contactInfo } = clientData;

  if (EMAIL_REGEX.test(email)) {
    return name && contactInfo;
  }
};

export const formatDate = (date) => {
  if (date) {
    return moment(date).format("MMMM DD, YYYY");
  }
};
