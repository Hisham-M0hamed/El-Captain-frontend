import { Box } from "@mui/material";
import { Outlet } from "react-router";
import Navbar from "./components/common/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/common/Footer/Footer";
import Categories from "./pages/services/Categories";
const Root = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* <Header1 />
      <Header2 />
      <div style={{ margin: "25px" }}>
        <Outlet />
      </div>
      <MainFooter /> */}
      <Navbar />
      {/* <main>{children}</main> */}
      {/* <Home /> */}
      {/* <Categories /> */}
      <div>
        <Outlet />
      </div>
      <Footer />
    </Box>
  );
};

export default Root;
