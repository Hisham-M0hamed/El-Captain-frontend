import React from "react";

import "./category.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Box, Container, Paper } from "@mui/material";
import { Link } from "react-router-dom";
const CardAll = () => {
  return (
    <Container>
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
            link: "build",
            image: "/images/bulid.webp",
            text: "مواد بناء",
            desc: "نمتلك الخبرة في التعامل مع الخامات الثقيلة ومواد البناء من المحاجر والمصانع إلى مواقع المشاريع.",
            more: <ArrowBackIosNewIcon />,
          },
          {
            id: "2",

            image: "/images/chemical.jpg",
            text: "صناعات كيمياوية",
            desc: "  حلول لوجستية متخصصة لنقل المواد الكيماوية مع الالتزام التام بإجراءات الأمان المطلوبة.",
            more: <ArrowBackIosNewIcon />,
          },
          {
            id: "3",

            image: "/images/doctor.jpg",
            text: "صناعات دوائية ",
            desc: "نقل آمن ومبرد للشحنات الدوائية الحساسة وفقًا لأعلى معايير الجودة والسلامة العالمية.",
            more: <ArrowBackIosNewIcon />,
          },
          {
            id: "4",

            image: "/images/engineer.jpg",
            text: "صناعات هندسة",
            desc: "  نقدم حلول نقل متخصصة للمنتجات الهندسية التي تتطلب دقة وعناية فائقة في التعامل.",
            more: <ArrowBackIosNewIcon />,
          },
          {
            id: "5",

            image: "/images/oil.jpeg",
            text: "مواد بترولية وزيوت",
            desc: "  نوفر جميع أنواع المواد البتروليةوالزيوت بأعلى جودة ووفقًا لأعلى معايير السلامة",
            more: <ArrowBackIosNewIcon />,
          },
          {
            id: "6",

            image: "/images/stone.jpg",
            text: "مواد محجرية",
            desc: "متخصصون في توريد المواد المحجرية مثل الرمل والسن والحصى والرخام لمشروعات البناء والبنية التحتية.",
            more: <ArrowBackIosNewIcon />,
          },
        ].map((item, idx) => {
          return (
            <Box
              sx={{
                width: { xs: "100%", sm: "340px", md: "340px", lg: "340px" },
                padding: {
                  xs: "8px 4px",
                  sm: "10px 8px",
                  md: "10px 8px",
                  lg: "10px 8px",
                },
                boxSizing: "border-box",
                flexBasis: {
                  xs: "100%",
                  sm: "calc(100% / 1 - 32px)",
                  md: "calc(100% / 2 - 32px)",
                  lg: "calc(100% / 3 - 32px)",
                },
                maxWidth: { xs: "100%", sm: "340px", md: "340px", lg: "340px" },
              }}
            >
              <Link to={"/build"}>
                <Card
                  elevation={0}
                  className="card"
                  key={idx}
                  sx={{
                    position: "relative",
                    // textAlign: "center",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "32px",
                    margin: "16px 20px",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "12px",
                    width: "310px",
                    height: "400px",
                    border: "1px solid #e0dbdbff",
                    // padding: "16px 8px",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      transition: "transform 0.3s ease",
                    },
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      // height="320px"
                      image={item.image}
                      sx={{ width: "310px", height: "320px" }}
                    />
                    <CardContent>
                      <Typography
                        sx={{ color: "#0c1b33" }}
                        gutterBottom
                        variant="h5"
                        fontSize={18}
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
                  <CardActions></CardActions>
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

export default CardAll;
/*  
<Card key={idx} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.text}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {item.desc}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                {item.more}
              </Button>
            </CardActions>
          </Card>
*/
