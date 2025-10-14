import { Box, Container, Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const AboutHome = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to left, #0C1B33, #435778)",
        margin: "40px 0",
        height: "380px",
        position: "relative",
      }}
    >
      <Container
        sx={{
          padding: "40px",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            bgcolor: "initial",
            color: "#f6f6f6",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            // textAlign: "right",
            margin: "42px",
          }}
        >
          <h1 style={{ fontSize: "40px" }}>شريكك اللوجستي الموثوق</h1>
          {/* <hr
            style={{
              width: "100px",
              height: "px",
              color: "#f0a30b",
              bgcolor: "#f0a30b",
              borderColor: "#f0a30b",
              margin: "24px 4px",
            }}
          /> */}
          <p
            style={{
              fontSize: "18px",
              alignItems: "flex-start",
              // textAlign: "right",
              margin: "22px 4px 20px",
              // width: "80px",
            }}
          >
            تأسست شركة الكابتن لتكون شريكك الاستراتيجي في قطاع النقل، فنحن لسنا
            مجرد شركة نقل، بل كيان متخصص في توفير حلول لوجستية متكاملة وموثوقة
            تضمن نجاحك.
          </p>
          <Link
            style={{ color: "#f6f6f6", margin: "0", borderRadius: "10px" }}
            to="/about"
            className="cta-button"
          >
            اعرف عنا المزيد
          </Link>
        </Paper>
      </Container>
    </Box>
  );
};

export default AboutHome;
