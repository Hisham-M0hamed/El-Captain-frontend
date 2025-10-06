import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Box, Container, IconButton } from "@mui/material";

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
            more: " المزيد",
          },
          {
            image: "/images/sea.jpeg",
            text: " النقل البحري",
            desc: "خدمات متكاملة للنقل البحري، سواء للحاويات أو البضائع العامة، عبر شبكتنا اللوجستية الواسعة.",
            more: "المزيد",
          },
          {
            image: "/images/air.jpg",
            text: " النقل الجوي",
            desc: "الحل الأمثل للشحنات العاجلة وذات الأهمية القصوى، مع ضمان السرعة والكفاءة في التوصيل.",
            more: "المزيد",
          },
        ].map((item, idx) => {
          return (
            <Card
              key={idx}
              sx={{
                position: "relative",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "320px",
                margin:'16px',
                height: "490px",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  width="320px"
                  sx={{ objectFit: "cover", width: "320px" }}
                  alt="green iguana"
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
                  sx={{
                    textAlign: "center",
                    backgroundColor: "#0c1b33",
                    padding: "4px 44px",
                    color: "#f6f6f6",
                    borderRadius: "20px",
                    ":hover": { bgcolor: "#f0a30b" },
                    position: "absolute",
                    // margin: "15px 15px",
                    bottom: "16px",
                    left: "50%",
                    transform: "translate(-50%)",
                    fontSize: "23px",
                  }}
                  size="large"
                  color="primary"
                >
                  {item.more}
                </Button>
                <IconButton></IconButton>
              </CardActions>
            </Card>
          );
        })}
        ;
      </Box>
    </Container>
  );
};

export default CardShip;
