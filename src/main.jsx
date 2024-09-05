import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//import "./index.css";


import { EFA, KERN } from "@kern-ux/themes";
import { register } from "@public-ui/components";
import { defineCustomElements as Kolibri } from "@public-ui/components/dist/loader";
import { defineCustomElements as Kern } from "@kern-ux/components/dist/loader";
import Root from "./routes/root";
import Page1 from "./routes/page1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "page1",
    element: <Page1 />,
  },
]);

register([EFA, KERN], [Kern, Kolibri], {
  theme: {
    //efa or kern
    name: "efa",
  },
})
  .then(() => {
    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
       <RouterProvider router={router} />
      </React.StrictMode>
    );
  })
  .catch(console.warn);
