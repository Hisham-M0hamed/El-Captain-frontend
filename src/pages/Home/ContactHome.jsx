import { Box, Container, Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ContactHome = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to left, #0C1B33, #435778)",
        margin: "40px 0",
      }}
    >
      <Container sx={{ padding: "40px" }}>
        <Paper
          elevation={0}
          sx={{
            bgcolor: "initial",
            color: "#f6f6f6",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            // textAlign: "right",
            margin: "0",
          }}
        >
          <h1 style={{ fontSize: "40px" }}>لنبدأ العمل معاً</h1>

          <p
            style={{
              fontSize: "18px",
              alignItems: "flex-start",
              textAlign: "right",
              // width: "830px",
              margin: "8px 4px",
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
