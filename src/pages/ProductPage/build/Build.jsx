import React from "react";
import "./build.css";
import { Box, Container, Paper, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom";
import CardBuild from "./CardBuild";
import HeroBuild from "./HeroBuild";
import WordBuild from "./WordBuild";

const Build = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <HeroBuild />
      <Paper
        elevation={0}
        sx={{
          bgcolor: "initial",
          color: "#f6f6f6",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "45px 0",
        }}
      >
        <h1 style={{ fontSize: "40px", color: "#333" }}> ابرز المنتجات </h1>
        <hr
          style={{
            width: "100px",
            height: "px",
            color: "#f0a30b",
            bgcolor: "#f0a30b",
            borderColor: "#f0a30b",
            margin: "24px 4px",
          }}
        />
      </Paper>
      <CardBuild />
      <WordBuild />
    </Box>
  );
};

export default Build;
