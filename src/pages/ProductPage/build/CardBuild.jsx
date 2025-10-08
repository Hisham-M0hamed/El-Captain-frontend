// import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Box, Container } from "@mui/material";

const CardBuild = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "60px",
          // margin:'2px 50px',
          // gap: "16px",
        }}
      >
        {[
          {
            id: "1",
            image: "/images/bulid.webp",
            text: "شحن رمل و زلط ",
            desc: "توصيل الرمل والزلط (الحصى) بكميات ضخمة من المحاجر مباشرة إلى مواقع البناء والمشاريع.",
            more: " اضافة للسلة",
          },
          {
            id: "2",

            image: "/images/bulid.webp",
            text: " شحن رمل و زلط",
            desc: "توصيل الرمل والزلط (الحصى) بكميات ضخمة من المحاجر مباشرة إلى مواقع البناء والمشاريع.",
            more: " اضافة للسلة",
          },
        ].map((item, idx) => {
          return (
            <Box>
              <Link to={`./Card.jsx/${item.id}`}>
                <Card
                  className="card"
                  key={idx}
                  sx={{
                    position: "relative",
                    textAlign: "center",
                    display: "flex",
                    // gap:'20px',
                    margin: "16px 16px",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "12px",
                    width: "320px",
                    height: "490px",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={item.image}
                      width="350px"
                      sx={{ objectFit: "cover", width: "350px" }}
                    />
                    <CardContent>
                      <Typography
                        sx={{ color: "#0c1b33" }}
                        gutterBottom
                        variant="h4"
                        component="div"
                      >
                        {item.text}
                      </Typography>
                      <Typography variant="h6" sx={{ color: "text.secondary" }}>
                        {item.desc}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      //   className="button"
                      sx={{
                        width: "180px",
                        textAlign: "center",
                        backgroundColor: "#0c1b33",
                        padding: "4px 44px",
                        color: "#f6f6f6",
                        borderRadius: "20px",
                        ":hover": { bgcolor: "#f0a30b" },
                        position: "absolute",
                        bottom: "22px",
                        left: "50%",
                        transform: "translate(-50%)",
                        fontSize: "24px",
                      }}
                      size="large"
                      color="primary"
                    >
                      {item.more}
                    </Button>
                  </CardActions>
                </Card>
              </Link>
            </Box>
          );
        })}
        ;
      </Box>
    </Box>
  );
};

export default CardBuild;
