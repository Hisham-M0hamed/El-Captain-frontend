import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router";
import Root from "./Root.jsx";
import Home from "./pages/Home/Home.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Categories from "./pages/services/Categories.jsx";
import Login from "./pages/Login/Login.jsx";
import Services from "./pages/services/Services.jsx";
import Contact from "./pages/Contact/Contact.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "*",
        element: <PageNotFound />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
{
  /* <Router>
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/Register" element={<Register />} />
  </Routes>
</Router>; */
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
