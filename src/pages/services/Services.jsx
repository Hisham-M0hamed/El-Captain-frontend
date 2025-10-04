import { Box, Container } from "@mui/material";
import React from "react";
import Categories from "./Categories";

const Services = () => {
  return (
    <Box>
      <Box className="serviceTop">
        <div className="text">
          <h3>خدمات لوجستية مبتكرة</h3>
          <p>
            نحن لا نقدم مجرد نقل، بل حلولاً متكاملة وموثوقة تضمن نمو أعمالك
            وراحة بالك.
          </p>
          <h4>للتواصل 01211663322</h4>
        </div>
      </Box>
      <Container>
        <Categories />
      </Container>
    </Box>
  );
};

export default Services;
