import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Root.jsx";
import Home from "./pages/Home/Home.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Login from "./pages/Login/Login.jsx";
import Services from "./pages/services/Services.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import About from "./pages/About/About.jsx";
import Partners from "./pages/Partners/Partners.jsx";
// import Track from "./pages/Track-order/Track.jsx";

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
        path: "El-Captain-frontend",
        element: <Home />,
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
        path: "about",
        element: <About />,
      },
      {
        path: "partner",
        element: <Partners />,
      },
      //  {
      //   path:"track",
      //   element: <Track />,
      // },
      {
        path: "contact",
        element: <Contact />,
      },
      29,
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
