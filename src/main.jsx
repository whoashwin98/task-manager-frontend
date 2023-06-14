import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./HomePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import EditPage from "./EditPage.jsx";
import ErrorPage from "./ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/edit/:id",
    element: <EditPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
