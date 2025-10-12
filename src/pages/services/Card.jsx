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
            <Box>
              <Link to={"/build"}>
                <Card
                  elevation={0}
                  className="card"
                  key={idx}
                  sx={{
                    position: "relative",
                    textAlign: "center",
                    display: "flex",
                    gap: "20px",
                    margin: "16px 16px",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "12px",
                    width: "320px",
                    height: "280px",
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
                      height="200"
                      image={item.image}
                      width="320px"
                      // sx={{ objectFit: "cover", width: "320px" }}
                    />
                    <CardContent>
                      <Typography
                        sx={{ color: "#0c1b33" }}
                        gutterBottom
                        variant="h5"
                        fontSize={25}
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
                      {/* <Typography variant="h6" sx={{ color: "text.secondary" }}>
                        {item.desc}
                      </Typography> */}
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    {/* <Button
                      className="button"
                      sx={{
                        textAlign: "center",
                        backgroundColor: "#0c1b33",
                        padding: "4px 20px",
                        color: "#f6f6f6",
                        borderRadius: "20px",
                        ":hover": { bgcolor: "#f0a30b" },
                        position: "absolute",
                        // margin: "15px 15px",
                        bottom: "20px",
                        width: "100px",
                        left: "50%",
                        transform: "translate(-50%)",
                        fontSize: "22px",
                      }}
                      // size="large"
                      // color="primary"
                    >
                      {item.more}
                    </Button> */}
                  </CardActions>
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
