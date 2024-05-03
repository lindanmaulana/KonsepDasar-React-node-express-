import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import ErrorPage from "./404.jsx";
import store from "./redux/store.js";
import DashboardPage from "./Pages/DashboardPage.jsx";
import RegisterPage from "./Pages/Auth/RegisterPage.jsx";
import Students from "./Pages/Content/Students.jsx";
import LoginMahasiswa from "./Pages/Auth/LoginMahasiswa.jsx";
import LoginAdmin from "./Pages/Auth/LoginAdmin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login-mahasiswa",
    element: <LoginMahasiswa />
  },
  {
    path: "/login-admin",
    element: <LoginAdmin />
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/dashboard/students",
    element: <Students />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
