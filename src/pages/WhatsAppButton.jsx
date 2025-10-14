import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { Fab, Box } from "@mui/material";

const WHATSAPP_NUMBER = "201143051048";

const WhatsAppButton = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 40,
        right: 24,
        zIndex: 1000,
      }}
    >
      <Fab
        color="success"
        aria-label="WhatsApp Chat"
        href={whatsappLink}
        target="_blank"
        sx={{
          backgroundColor: "#25D366",
          width: "85px",
          height: "85px",
          "&:hover": {
            backgroundColor: "#1DA851",
          },
        }}
      >
        <WhatsAppIcon sx={{ fontSize: "60px" }} />
      </Fab>
    </Box>
  );
};

export default WhatsAppButton;
