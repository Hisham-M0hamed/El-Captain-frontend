import { Box, Container, Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const AboutHome = () => {
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
            textAlign: "right",          }}
        >
          <h1 style={{ fontSize: "40px" }}>شريكك اللوجستي الموثوق</h1>
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
          <p
            style={{
              fontSize: "18px",
              alignItems: "flex-start", 
              textAlign: "right",   
              margin: "18px 4px",
              width: "830px",
            }}
          >
            تأسست شركة الكابتن لتكون شريكك الاستراتيجي في قطاع النقل، فنحن لسنا
            مجرد شركة نقل، بل كيان متخصص في توفير حلول لوجستية متكاملة وموثوقة
            تضمن نجاحك.
          </p>
          <Link to="/about" className="cta-button">
            اعرف عنا المزيد
          </Link>
        </Paper>
      </Container>
    </Box>
  );
};

export default AboutHome;
