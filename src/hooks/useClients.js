import { useState, useEffect } from "react";

import Store from "../flux/store";

export function useClients() {
  const [clients, setClients] = useState(Store.getAllClients());

  useEffect(() => {
    const onChange = () => setClients(Store.getAllClients());

    Store.addChangeListener(onChange);

    return () => {
      Store.removeChangeListener(onChange);
    };
  }, []);

  return clients;
}
