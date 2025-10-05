import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Categories from "./pages/services/Categories";
import Card from "./pages/services/Card";
import { Box } from "@mui/material";
import Root from "./Root";
// function MainLayout() {
//   return (
//     <>
//       <Navbar />
//       {/* <main>{children}</main> */}
//       <Home />
//       <Categories />

//       <Footer />
//     </>
//   );
// }

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
       
=======
    <Box>
      <Root />
    </Box>
    // <Router>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         <MainLayout>
    //           <Home />
    //         </MainLayout>
    //       }
    //     />
    //     <Route path="/card/:id" element={<Card />} />
>>>>>>> 12cd484a0ec132d89040e45b3d290e208741e282

    //     {/* <Route path="/services" element={<Categories />} /> */}
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/Register" element={<Register />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
