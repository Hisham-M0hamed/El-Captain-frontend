import { Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import React from "react";
import "./Home.css";
import Hero from "./Hero";
import Categories from "../services/Categories";
const Home = () => {
  return (
    <Box>
      <Hero />
      <Categories />
    </Box>
  );
};

export default Home;
