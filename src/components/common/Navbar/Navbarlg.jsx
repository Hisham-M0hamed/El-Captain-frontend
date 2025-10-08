import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaravan } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Link as RouterLink, useLocation } from "react-router-dom"; // مهم جداً

const Navbarlg = () => {
  const location = useLocation(); // للحصول على المسار الحالي

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "25px",
          mx: "20px",
        }}
      >
        {[
          { link: "home", text: "الصفحة الرئيسية" },
          { link: "services", text: "خدمتنا" },
          { link: "about", text: "من نحن" },
          { link: "partner", text: "شركائنا" },
          { link: "contact", text: "اتصل بنا" },
        ].map((item, idx) => {
          const isActive = location.pathname === item.link;

          return (
            <Box key={idx} to={item.link}>
              <Button
                to={item.link}
                component={RouterLink}
                color="inherit"
                sx={{
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    borderBottom: "3px solid white",
                  },
                  ...(isActive && {
                    fontWeight: "bold",
                    backgroundColor: "rgba(255, 255, 255, 0.12)",
                    borderBottom: "3px solid yellow",
                  }),
                  // "&:hover": {
                  //   backgroundColor: "rgba(255, 255, 255, 0.08)",
                  //   borderBottom: isActive
                  //     ? "3px solid yellow"
                  //     : "3px solid white",
                  // },
                }}
              >
                <Typography
                  sx={{
                    cursor: "pointer",
                    fontSize: "20px",
                    ":hover": { color: "#f0a30b" },
                  }}
                >
                  {item.text}
                </Typography>
              </Button>
            </Box>
          );
        })}
        {/* <Typography
          sx={{
            cursor: "pointer",
            fontSize: "20px",
            ":hover": { color: "#f0a30b" },
          }}
        >
          الصفحة الرئيسية
        </Typography>
        <Link to="/services" style={{ color: "white" }}>
          <Typography
            sx={{
              cursor: "pointer",
              fontSize: "20px",
              ":hover": { color: "#f0a30b" },
            }}
          >
            خدمتنا
          </Typography>
        </Link>
        <Typography
          sx={{
            cursor: "pointer",
            fontSize: "20px",
            ":hover": { color: "#f0a30b" },
          }}
        >
          من نحن
        </Typography>
        <Typography
          sx={{
            cursor: "pointer",
            fontSize: "20px",
            ":hover": { color: "#f0a30b" },
          }}
        >
          شركائنا
        </Typography>
        <Typography
          sx={{
            cursor: "pointer",
            fontSize: "20px",
            ":hover": { color: "#f0a30b" },
          }}
        >
          اتصل بنا
        </Typography> */}
      </Box>
      <Box sx={{ display: "flex", gap: "25px" }}>
        <Paper
          elevation={0}
          sx={{ bgcolor: "#0c1b33", color: "#f6f6f6", marginTop: "2px" }}
        >
          <IconButton
            sx={{
              ":hover": { color: "#f0a30b" },
              color: "#f6f6f6",
              mx: "10px",
            }}
          >
            <FaCartShopping />
          </IconButton>
          <IconButton
            sx={{
              color: "#f6f6f6",
              mx: "10px",
              ":hover": { color: "#f0a30b" },
            }}
          >
            <FaCaravan />
          </IconButton>
        </Paper>
        <Link to="/login">
          <Button
            sx={{
              padding: "8px 30px",
              color: "#f6f6f6",
              borderRadius: "29px",
              border: "1px solid #f0a30b",
              fontSize: "17px",
              fontWeight: "600",
              width: "160px",
              ":hover": { bgcolor: "#f0a30b" },
            }}
          >
            تسجيل الدخول
          </Button>
        </Link>
      </Box>
      {/* <Box>
        <Paper>
          <IconButton>
            <FaCartShopping />
          </IconButton>
          <IconButton>
            <FaCaravan />
          </IconButton>
        </Paper>
        <Link to="/login">
          <Button>تسجيل الدخول</Button>
        </Link>
      </Box> */}
    </Box>
  );
};

export default Navbarlg;
