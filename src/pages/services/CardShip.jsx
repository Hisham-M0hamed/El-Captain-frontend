import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Box, Paper, Container, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const CardShip = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px",
          // gap: "20px",
        }}
      >
        {[
          {
            image: "/images/road.jpg",
            text: " النقل البري",
            desc: "أسطولنا الضخم يغطي جميع أنحاء الجمهورية، مما يضمن وصول شحناتكم بأمان وفي الوقت المحدد.",
            more: <ArrowBackIosNewIcon />,
          },
          {
            image: "/images/sea.jpeg",
            text: " النقل البحري",
            desc: "خدمات متكاملة للنقل البحري، سواء للحاويات أو البضائع العامة، عبر شبكتنا اللوجستية الواسعة.",
            more: <ArrowBackIosNewIcon />,
          },
          {
            image: "/images/air.jpg",
            text: " النقل الجوي",
            desc: "الحل الأمثل للشحنات العاجلة وذات الأهمية القصوى، مع ضمان السرعة والكفاءة في التوصيل.",
            more: <ArrowBackIosNewIcon />,
          },
          {
            image: "/images/post.png",
            text: " البريد السريع",
            desc: "خدمة البريد السريع لتلبية احتياجاتكم من التوصيل السريع والموثوق داخل وخارج البلاد.",
            more: <ArrowBackIosNewIcon />,
          },
        ].map((item, idx) => {
          return (
            <Box
              key={idx}
              sx={{
                flex: {
                  xs: "1 1 100%", // 1 per row on xs/sm
                  sm: "1 1 100%", // 1 per row on sm
                  md: "1 1 45%", // 2 per row on md
                  lg: "1 1 22%", // 4 per row on lg
                },
                maxWidth: {
                  xs: "100%",
                  sm: "100%",
                  md: "260px",
                  lg: "270px",
                },
                minWidth: "220px",
                margin: "16px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link to={"/build"} style={{ textDecoration: "none" }}>
                <Card
                  elevation={0}
                  className="card"
                  sx={{
                    position: "relative",
                    // textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    // alignItems: "center",
                    borderRadius: "12px",
                    width: "100%",
                    height: "300px",
                    border: "1px solid #e0dbdbff",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      transition: "transform 0.3s ease",
                    },
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="220"
                      image={item.image}
                      sx={{
                        objectFit: "cover",
                        width: "260px",
                        maxHeight: "220px",
                        borderRadius: "12px 12px 0 0",
                      }}
                    />
                    <CardContent>
                      <Typography
                        sx={{ color: "#0c1b33" }}
                        gutterBottom
                        variant="h5"
                        fontSize={20}
                        component="div"
                      >
                        <Paper
                          elevation={0}
                          sx={{
                            margin: "10px",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Paper elevation={0}>{item.text}</Paper>
                          <Paper elevation={0}>{item.more}</Paper>
                        </Paper>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions />
                </Card>
              </Link>
            </Box>
          );
        })}
        ;
      </Box>
    </Container>
  );
};

export default CardShip;
