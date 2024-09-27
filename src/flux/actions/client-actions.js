import AppDispatcher from "../dispatcher";
import { ADD_CLIENT, DELETE_CLIENT } from "../types";

const ClientActions = {
  addClient: (client) => {
    AppDispatcher.dispatch({
      actionType: ADD_CLIENT,
      client,
    });
  },
  deleteClient: (index) => {
    AppDispatcher.dispatch({
      actionType: DELETE_CLIENT,
      index,
    });
  },
};

export default ClientActions;
