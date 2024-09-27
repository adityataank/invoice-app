import { Children } from "react";

import NoData from "../../components/no-data";
import NewButton from "../new-button";
import ClientCard from "../client/client-card";

import { useClients } from "../../hooks/useClients";

function MyClients() {
  const clients = useClients();
  return clients?.length ? (
    <div className="bg-white shadow-md rounded-xl h-full p-8 flex flex-col">
      <NewButton to="/clients/new" className="w-fit self-end">
        Add a new client
      </NewButton>
      <div className="grid grid-cols-3 gap-4 mt-4 max-h-[calc(100dvh-274px)] overflow-y-auto">
        {Children.toArray(
          clients.map((client, index) => (
            <ClientCard index={index} {...client} />
          ))
        )}
      </div>
    </div>
  ) : (
    <NoData type="clients" />
  );
}

export default MyClients;
