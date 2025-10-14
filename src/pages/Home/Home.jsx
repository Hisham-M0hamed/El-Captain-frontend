import { Box, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import React from "react";
import "./Home.css";
import Hero from "./Hero";
import Categories from "../services/Categories";
import WhatsAppButton from "../WhatsAppButton";
import AboutHome from "./AboutHome";
import PartnerHome from "./PartnerHome";
import ContactHome from "./ContactHome";
import QA from "./QA";
import Slick from "./slick";

const Home = () => {
  return (
    <Box>
      <Hero />
     <Slick />

      <Categories />
      <WhatsAppButton />
      <AboutHome />
      <PartnerHome />
      <ContactHome />
      <QA />
    </Box>
  );
};

export default Home;
