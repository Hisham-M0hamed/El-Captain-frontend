import { Box, Container, Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import DecorativeLine from "../../components/common/DecorativeLine/DecorativeLine";
const ContactHome = () => {
  return (
    <Box sx={{ bgcolor: "#0c1b33", margin: "40px 0" }}>
      <Container sx={{ padding: "40px" }}>
        <Paper
          elevation={0}
          sx={{
            bgcolor: "initial",
            color: "#f6f6f6",
            display: "flex",
            flexDirection: "column",
             alignItems: "flex-start", 
            textAlign: "right",   
          }}
        >
          <h1 style={{ fontSize: "40px" }}>لنبدأ العمل معاً</h1>
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
          <DecorativeLine />
          <p
            style={{
              fontSize: "18px",
              alignItems: "flex-start", 
              textAlign: "right",   
              width: "830px",
              margin: "18px 4px",
            }}
          >
            تواصل معنا اليوم لمناقشة احتياجاتك اللوجستية والحصول على عرض سعر
            مخصص.
          </p>
          <Link to="/about" className="cta-button">
            تواصل معنا الان
          </Link>
        </Paper>
      </Container>
    </Box>
  );
};

export default ContactHome;
