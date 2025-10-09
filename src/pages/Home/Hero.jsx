import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import "./Home.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <Box className="image-container">
      <img
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          height: "750px",
        }}
        src="public\images\hero.jpg"
      />
      <div className="overlay"></div>
      <Container>
        <Box className="home" sx={{ padding: "20px" }}>
          <Paper className="text" elevation={0}>
            <Typography className="h" variant="h2" >
              شريكك الاستراتيجي في قطاع النقل
            </Typography>
            <Typography className="p" variant="p">
              حلول لوجستية متكاملة وموثوقة، تضمن أن تكون عملية شحن بضائعك جزءاً
              سلساً وميسراً من نجاحك.
            </Typography>
          </Paper>
          <Box className="links">
            <Paper className="link">للتواصل 01211663322</Paper>

            <Link to={"/contact"}>
              <Paper className="link"> ابدا معانا</Paper>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
