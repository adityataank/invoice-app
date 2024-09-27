import { EventEmitter } from "events";
import AppDispatcher from "./dispatcher";
import {
  ADD_CLIENT,
  ADD_INVOICE,
  DELETE_CLIENT,
  DELETE_INVOICE,
  UPDATE_INVOICES_LIST,
} from "./types";

let _invoices = JSON.parse(localStorage.getItem("invoices")) ?? [];
let _clients = JSON.parse(localStorage.getItem("clients")) ?? [];

const updateLocalStorageForInvoices = () => {
  localStorage.setItem("invoices", JSON.stringify(_invoices));
};

const updateLocalStorageForClients = () => {
  localStorage.setItem("clients", JSON.stringify(_clients));
};

const Store = Object.assign({}, EventEmitter.prototype, {
  getAllInvoices: function () {
    return [..._invoices];
  },

  getAllClients: function () {
    return [..._clients];
  },

  emitChange: function () {
    this.emit("change");
  },

  addChangeListener: function (callback) {
    this.on("change", callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener("change", callback);
  },
});

AppDispatcher.register(function (action) {
  switch (action.actionType) {
    case ADD_INVOICE:
      _invoices.push(action.invoice);
      updateLocalStorageForInvoices();
      Store.emitChange();
      break;
    case DELETE_INVOICE:
      _invoices.splice(action.index, 1);
      updateLocalStorageForInvoices();
      Store.emitChange();
      break;
    case UPDATE_INVOICES_LIST:
      _invoices = action.invoices;
      updateLocalStorageForInvoices();
      Store.emitChange();
      break;

    case ADD_CLIENT:
      _clients.push(action.client);
      updateLocalStorageForClients();
      Store.emitChange();
      break;
    case DELETE_CLIENT:
      _clients.splice(action.index, 1);
      updateLocalStorageForClients();
      Store.emitChange();
      break;
  }
});

export default Store;
