import { Box, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import React from "react";
import "./Home.css";
import Hero from "./Hero";
import Categories from "../services/Categories";
import WhatsAppButton from "../WhatsAppButton";
const Home = () => {
  return (
    <Box>
      <Hero />
      <Categories />
      <WhatsAppButton />
    </Box>
  );
};

export default Home;
