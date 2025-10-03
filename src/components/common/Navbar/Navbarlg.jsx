import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaravan } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbarlg = () => {
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
        <Typography
          sx={{
            cursor: "pointer",
            fontSize: "20px",
            ":hover": { color: "#f0a30b" },
          }}
        >
          الصفحة الرئيسية
        </Typography>
        <Typography
          sx={{
            cursor: "pointer",
            fontSize: "20px",
            ":hover": { color: "#f0a30b" },
          }}
        >
          خدمتنا
        </Typography>
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
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "25px" }}>
        <Paper sx={{ bgcolor: "#0c1b33", color: "#f6f6f6", marginTop: "2px" }}>
          <IconButton sx={{ color: "#f6f6f6", mx: "10px" }}>
            <FaCartShopping />
          </IconButton>
          <IconButton sx={{ color: "#f6f6f6", mx: "10px" }}>
            <FaCaravan />
          </IconButton>
        </Paper>
        <Link to="/login">
          <Button
            sx={{
              padding: "8px 30px",
              color: "#f6f6f6",
              borderRadius: "15px",
              border: "1px solid #f0a30b",
              fontSize: "17px",
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
