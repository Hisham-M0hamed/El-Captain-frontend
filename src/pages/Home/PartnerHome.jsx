import { Box, Container, Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import DecorativeLine from "../../components/common/DecorativeLine/DecorativeLine";
const PartnerHome = () => {
  return (
    <Box>
      <Container>
        <Paper
          elevation={0}
          sx={{
            bgcolor: "initial",
            color: "#333",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "right",
          }}
        >
          <h1 style={{ fontSize: "40px" }}> شركاء النجاح</h1>
          <DecorativeLine />

          {/* <hr
            style={{
              width: "100px",
              color: "#f0a30b",
              borderColor: "#f0a30b",
              margin: "24px 4px",
            }}
          /> */}
          <p
            style={{
              fontSize: "18px",
              textAlign: "right",
              margin: "18px 4px",
            }}
          >
            مهمتنا هي بناء شراكات طويلة الأمد مبنية على الثقة والشفافية. نفخر
            بكوننا جزءًا من قصة نجاح العديد من الشركات الرائدة في مصر.
          </p>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },
              gap: 2,
              justifyItems: "center",
              alignItems: "center",
              width: "100%",
              mb: 3,
            }}
          >
            <Box
              className="partner-card"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src="public/images/arab.png"
                alt="Nike"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
            <Box
              className="partner-card"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src="public/images/orascom.png"
                alt="Orascom"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
            <Box
              className="partner-card"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src="public/images/elswedy.png"
                alt="Google"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
          </Box>
          <Link to="/partner" className="cta-button">
            شاهد جميع الشركاء
          </Link>
        </Paper>
      </Container>
    </Box>
  );
};

export default PartnerHome;
