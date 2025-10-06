import { Box } from "@mui/material";
import { Outlet } from "react-router";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";
const Root = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Navbar />

      <div>
        <Outlet />
      </div>
      <Footer />
    </Box>
  );
};

export default Root;
