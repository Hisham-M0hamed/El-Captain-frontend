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

export default CardShip;
