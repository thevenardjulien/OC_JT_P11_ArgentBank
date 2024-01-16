import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "*",
    element: "Impossible de trouver la page",
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
