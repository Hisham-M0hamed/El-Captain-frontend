import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import CardAll from "./Card";
import CardShip from "./CardShip";

const Categories = () => {
  return (
    <Container sx={{ marginTop: "88px", textAlign: "center" }}>
      <Box>
        <Typography variant="h2">المنتجات المتاحة</Typography>
        {/* <hr sx={{ width: "10px", height: "3px" }} /> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CardAll />
        </Box>
      </Box>

      <Box>
        <Typography variant="h2"> الخيارات المتاحة للشحن </Typography>
        <Box
          sx={{
            // marginTop: "40px",
            display: "flex",
            justifyContent: "space-between",
            // gap: "20px",
          }}
        >
          <CardShip />
        </Box>
      </Box>
    </Container>
  );
};

export default Categories;
