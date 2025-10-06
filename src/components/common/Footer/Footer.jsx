import React from "react";
import styles from "./Footer.module.css";
import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#0c1b33",
        bottom: "0",
        // position: "fixed",
        zIndex: "100px",
      }}
    >
      {useMediaQuery("(max-width:900px)") && (
        <Container className={styles.footer}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // justifyContent: "space-around",
              alignItems: "center",
              gap: "30px",
              marginTop: "40px",
            }}
          >
            <h1>الكابتن</h1>
            <h1>01211253690</h1>
            {[
              { mainText: "الصفحة الرئيسية" },
              { mainText: " خدمتنا" },
              { mainText: "من نحن " },
              { mainText: "شركائنا" },
              { mainText: "اتصل بنا" },
            ].map((item, idx) => {
              return (
                <nav className={styles.nav}>
                  <Typography
                    key={idx}
                    sx={{
                      fontSize: "20px",
                      fontWeight: "600",
                      ":hover": { color: "#f0a30b" },
                    }}
                  >
                    {item.mainText}
                  </Typography>
                </nav>
              );
            })}
            {/* <Typography>خدمتنا </Typography>
              <Typography>من نحن </Typography>
              <Typography>شركائنا</Typography>
              <Typography>اتصل بنا</Typography> */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "18px",
              }}
            >
              <p style={{ fontSize: "20px", marginTop: "30px" }}>
                لجميع خدمات الشحن برا وبحرا وجوا
              </p>
              <button>انضم الينا</button>
            </div>
          </div>
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>© 2025 شركة الكابتن لخدمات النقل. جميع الحقوق محفوظة.</p>
          </div>
        </Container>
      )}
      {useMediaQuery("(min-width:900px)") && (
        <Container sx={{}} className={styles.footer}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              // alignItems: "center",
              gap: "30px",
            }}
          >
            <Stack direction={"column"} alignItems={"center"}>
              <h1>الكابتن</h1>
              <h1>01211253690</h1>
            </Stack>

            <nav className={styles.nav}>
              <a>الصفحة الرئيسية</a>
              <a>خدمتنا </a>
              <a>من نحن </a>
              <a>شركائنا</a>
              <a>اتصل بنا</a>
            </nav>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "18px",
              }}
            >
              <p style={{ fontSize: "20px" }}>
                لجميع خدمات الشحن برا وبحرا وجوا
              </p>
              <button>انضم الينا</button>
            </div>
          </div>
          <div
            style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>© 2025 شركة الكابتن لخدمات النقل. جميع الحقوق محفوظة.</p>
          </div>
        </Container>
      )}
    </Box>
  );
};

export default Footer;
