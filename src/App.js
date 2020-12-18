import React from "react";
import { BrowserRouter } from "react-router-dom";

// style
import "./App.scss";
import AppLayout from "./layouts/AppLayout";

// Layout

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </React.Fragment>
  );
}
