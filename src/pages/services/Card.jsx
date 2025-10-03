import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Box, Container } from "@mui/material";
const CardAll = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "120px",
          gap: "20px",
        }}
      >
        {[
          {
            image: "src/images/bulid.webp",
            text: "مواد بناء",
            desc: "نمتلك الخبرة في التعامل مع الخامات الثقيلة ومواد البناء من المحاجر والمصانع إلى مواقع المشاريع.",
            more: " المزيد",
          },
          {
            image: "src/images/chemical.jpg",
            text: "صناعات كيمياوية",
            desc: "  حلول لوجستية متخصصة لنقل المواد الكيماوية مع الالتزام التام بإجراءات الأمان المطلوبة.",
            more: "المزيد",
          },
          {
            image: "src/images/doctor.jpg",
            text: "صناعات دوائية ومستلزمات طبية",
            desc: "نقل آمن ومبرد للشحنات الدوائية الحساسة وفقًا لأعلى معايير الجودة والسلامة العالمية.",
            more: "المزيد",
          },
          {
            image: "src/images/engineer.jpg",
            text: "صناعات هندسة",
            desc: "  نقدم حلول نقل متخصصة للمنتجات الهندسية التي تتطلب دقة وعناية فائقة في التعامل.",
            more: "المزيد",
          },
          {
            image: "src/images/oil.jpeg",
            text: "مواد بترولية وزيوت",
            desc: "  نوفر جميع أنواع المواد البتروليةوالزيوت بأعلى جودة ووفقًا لأعلى معايير السلامة",
            more: "المزيد",
          },
          {
            image: "src/images/stone.jpg",
            text: "مواد محجرية",
            desc: "متخصصون في توريد المواد المحجرية مثل الرمل والسن والحصى والرخام لمشروعات البناء والبنية التحتية.",
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
                width: "350px",
                height: "470px",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  width="400px"
                  sx={{ objectFit: "cover", width: "350px" }}
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
                    padding: "8px 35px",
                    color: "#f6f6f6",
                    borderRadius: "20px",
                    ":hover": { bgcolor: "#f0a30b" },
                    position: "absolute",
                    margin: "15px 15px",
                    bottom: "1px",
                    left: "50%",
                    transform: "translate(-50%)",
                    fontSize: "23px",
                  }}
                  size="large"
                  color="primary"
                >
                  {item.more}
                </Button>
              </CardActions>
            </Card>
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
