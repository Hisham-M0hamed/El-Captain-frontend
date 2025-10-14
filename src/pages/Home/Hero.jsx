import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

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
        src="./images/hero.jpg"
      />
      <div className="overlay"></div>
      <Container>
        <Box
          className="home"
          sx={{
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Paper className="text" elevation={0}>
              <Typography className="h" variant="h2">
                شريكك الاستراتيجي في قطاع النقل
              </Typography>
              <Typography sx={{ fontSize: "21px" }} className="p" variant="p">
                حلول لوجستية متكاملة وموثوقة، تضمن أن تكون عملية شحن بضائعك
                جزءاً سلساً وميسراً من نجاحك.
              </Typography>
            </Paper>
            <Box className="links">
              <Paper
                elevation={0}
                sx={{ display: "flex", justifyContent: "space-between" }}
                className="link"
              >
                <p> اتصل الان 01211663322</p>
                <p className="icon-phone">
                  <PhoneInTalkIcon />
                </p>
              </Paper>

              {/* <Link to={"/contact"}>
                <Paper elevation={0} className="link">
                  {" "}
                  ابدا معانا
                </Paper>
              </Link> */}
            </Box>
            <Box></Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
