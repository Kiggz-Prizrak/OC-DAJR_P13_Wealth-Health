import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from "react-router-dom";
import router from "./router";

// import { Provider } from "react-redux";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider >
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  // </Provider>
);
