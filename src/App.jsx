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

function App() {
  return (
    <Box>
      <Root />
    </Box>
  );
}

export default App;
