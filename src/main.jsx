import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import Protected from "./routes/Protected";
import ProtectedRoute from "./routes/auth/ProtectedRoute";
import SignIn from "./routes/SignIn";
import NotFound from "./routes/NotFound";
import Home from "./routes/Home";


ReactDOM.createRoot(document.getElementById("root")
).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path="/invoices/:invoiceId" element={<Invoice />} />
          </Route>
          <Route path="/expenses" element={<Expenses />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/protected" element={<Protected />} />
          </Route>


          <Route path="/signin" element={<SignIn />} />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
