import { Box, Container, Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import DecorativeLine from "../../components/common/DecorativeLine/DecorativeLine";
import Contact from "../Contact/Contact";

const ContactAbout = () => {
  return (
<Box
      sx={{
        background: "linear-gradient(to left, #0C1B33, #435778)",
        margin: "40px 0",
        height: "410px",
        position: "relative",
      }}
    >
      <Container
        sx={{
          padding: "40px 0",
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
            margin: "42px 0",
          }}
        >
          <h1 style={{ fontSize: "40px" }}>نوفّر حلولًا متكاملة تلبي احتياجات أعمالك بكفاءة</h1>
          <DecorativeLine />
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
            دعنا نساعدك في تحسين عملياتك — تواصل معنا للحصول على تفاصيل أكثر
          </p>
          <Link
            style={{ color: "#f6f6f6", margin: "0", borderRadius: "10px" }}
            to="/Contac"
            className="cta-button"
          >
            تواصل معنا الآن
          </Link>
        </Paper>
      </Container>
    </Box>
  );

};
  export default ContactAbout;