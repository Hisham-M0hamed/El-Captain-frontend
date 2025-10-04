import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import "./Home.css";
const Hero = () => {
  return (
    <Box className="image-container">
      <img
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          height: "80vh",
        }}
        src="src\images\hero.jpg"
      />
      <div className="overlay"></div>
      <Container>
        <Box className="home" sx={{ padding: "20px" }}>
          <Paper className="text" elevation={0}>
            <Typography className="h" variant="h2">
              شريكك الاستراتيجي في قطاع النقل
            </Typography>
            <Typography className="p" variant="p">
              حلول لوجستية متكاملة وموثوقة، تضمن أن تكون عملية شحن بضائعك جزءاً
              سلساً وميسراً من نجاحك.
            </Typography>
          </Paper>
          <Box className="links">
            <Paper
              // className="link"
              sx={{
                color: "#0c1b33",
                bgcolor: "#f0a30b",
                borderRadius: "70px",
                marginRight: "5px",
                width: "300px",
                display: "flex",
                flexDirection: "column",
                fontSize: "25px",
                fontWeight: "bold",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              للتواصل 01211663322
            </Paper>
            <Button className="link"> ابدا معانا</Button>
            <Button className="link">
              <WhatsAppIcon sx={{ fontSize: "40px" }} /> واتساب
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
