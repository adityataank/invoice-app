import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/pages/layout";
import Invoices from "./components/pages/invoices";
import MyClients from "./components/pages/clients";
import NewClient from "./components/pages/new-client";
import NewInvoice from "./components/pages/new-invoice";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Invoices />} />
          <Route path="new" element={<NewInvoice />} />
          <Route path="clients" element={<MyClients />} />
          <Route path="clients/new" element={<NewClient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
