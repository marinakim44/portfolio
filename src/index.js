import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Window from "./components/Window";
import Home from "./Home";

const router = createBrowserRouter([
  // {
  //   path: "/portfolio",
  //   element: <Window />,
  // },
  {
    path: "/portfolio",
    element: <App />,
  },
  {
    path: "/homepage",
    element: <Home />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
