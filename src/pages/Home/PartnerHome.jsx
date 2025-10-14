import { Box, Container, Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
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
            textAlign: "right",             }}
        >
          <h1 style={{ fontSize: "40px" }}> شركاء النجاح</h1>
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
              width: "830px", 
              margin: "18px 4px",
            }}
          >
            مهمتنا هي بناء شراكات طويلة الأمد مبنية على الثقة والشفافية. نفخر
            بكوننا جزءًا من قصة نجاح العديد من الشركات الرائدة في مصر.
          </p>
          <div
            className="partner-grid"
            // style={{
            //   display: "flex",
            //   justifyContent: "space-between",
            //   gap: "30px",
            //   textAlign: "center",
            //   alignItems: "center",
            //   alignContent: "center",
            //   flexWrap: "wrap",
            // }}
          >
            <div className="partner-card">
              <img src="public\images\arab.png" alt="Nike" />
            </div>

            <div className="partner-card">
              <img src="public\images\orascom.png" alt="Orascom" />
            </div>
            <div className="partner-card">
              <img src="public\images\elswedy.png" alt="Google" />
            </div>
          </div>
          <Link to="/partner" className="cta-button">
            شاهد جميع الشركاء
          </Link>
        </Paper>{" "}
      </Container>
    </Box>
  );
};

export default PartnerHome;
