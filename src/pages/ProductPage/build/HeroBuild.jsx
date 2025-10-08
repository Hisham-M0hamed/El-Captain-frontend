import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import "./build.css";
const HeroBuild = () => {
  return (
    <Box className="image-Build">
      <img
        // style={{
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        //   width: "100%",
        //   height: "80vh",
        // }}
        src="public\images\hero.jpg"
      />
      <div className="overlay"></div>
      <Box className="home" sx={{ padding: "20px" }}>
        <Paper className="text" elevation={0}>
          <Typography className="h" variant="h2">
            نقل وتوريد مواد البناء
          </Typography>
          <Typography className="p" variant="p">
            توصيل فعال وموثوق لجميع أنواع مواد البناء من المحاجر إلى مواقع العمل
            مباشرة
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default HeroBuild;
