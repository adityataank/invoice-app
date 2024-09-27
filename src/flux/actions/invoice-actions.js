import AppDispatcher from "../dispatcher";
import { ADD_INVOICE, DELETE_INVOICE, UPDATE_INVOICES_LIST } from "../types";

const InvoiceActions = {
  addInvoice: (invoice) => {
    AppDispatcher.dispatch({
      actionType: ADD_INVOICE,
      invoice,
    });
  },
  deleteInvoice: (index) => {
    AppDispatcher.dispatch({
      actionType: DELETE_INVOICE,
      index,
    });
  },
  updateInvoicesList: (invoices = []) => {
    AppDispatcher.dispatch({
      actionType: UPDATE_INVOICES_LIST,
      invoices,
    });
  },
};

export default InvoiceActions;
