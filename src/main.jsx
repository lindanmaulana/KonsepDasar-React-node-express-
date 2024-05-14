import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import ErrorPage from "./404.jsx";
import store from "./redux/store.js";
import RegisterPage from "./Pages/Auth/RegisterPage.jsx";
import Students from "./Pages/Dashboard/Students.jsx";
import LoginMahasiswa from "./Pages/LoginMahasiswa.jsx";
import LoginAdmin from "./Pages/LoginAdmin.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import DashboardPage from "./Pages/DashboardPage.jsx";
import CollegeLessons from "./Pages/Dashboard/CollegeLessons.jsx";
import DarkModeContextProvider from "./Context/DarkMode.jsx";
import ExploreClasses from "./Pages/Dashboard/ExploreClasses.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login-mahasiswa",
    element: <LoginMahasiswa />,
  },
  {
    path: "/login-admin",
    element: <LoginAdmin />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/dashboard/explore-classes",
    element: <ExploreClasses/>
  },
  {
    path: "/dashboard/students",
    element: <Students />,
  },
  {
    path: "/dashboard/college-lessons",
    element: <CollegeLessons />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <RouterProvider router={router} />
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
);
