import React from "react";
import { Box, Paper, Typography,Container } from "@mui/material";
import { FaInfinity, FaMedal, FaPuzzlePiece, FaArrowUp } from "react-icons/fa";
import DecorativeLine from "../../components/common/DecorativeLine/DecorativeLine";

const FeaturesCards = () => {
  const features = [
    {
      icon: <FaArrowUp size={30} color="#D76F38" />,
      title: "خبرة وكفاءة لا مثيل لها",
      text: "نمتلك فريقًا متخصصًا وذا خبرة عميقة في إدارة كافة تحديات النقل، مما يضمن وصول شحناتك بأمان وفي الوقت المحدد.",
    },
    {
      icon: <FaPuzzlePiece size={30} color="#D76F38" />,
      title: "حلول متكاملة وشاملة",
      text: "نوفر لك كل ما تحتاجه في مكان واحد من نقل الخامات المعدنية والمناجم إلى شحن المنتجات التجارية والصناعية.",
    },
    {
      icon: <FaMedal size={30} color="#D76F38" />,
      title: "التزام تام بالجودة والسلامة",
      text: "مهمتنا هي تقديم خدمات لوجستية موثوقة مبنية على أعلى معايير الجودة والسلامة لضمان نمو أعمالك بثقة.",
    },
    {
      icon: <FaInfinity size={30} color="#D76F38" />,
      title: "شراكات طويلة الأمد",
      text: "نعمل دائمًا على بناء شراكات قائمة على الثقة والشفافية، لأن نجاحك هو هدفنا الأساسي.",
    },
  ];

  return (
    <Container>
    <Box
      sx={{
        textAlign: "center",
        mt: 8,
        direction: "rtl",
      }}
    >
      {/* العنوان الرئيسي */}
      <Paper
          elevation={0}
          sx={{
            bgcolor: "initial",
            color: "#000",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            // textAlign: "right",
            margin: "42px 0",
          }}
        >
          <h1 style={{ fontSize: "40px" }}>لماذا نحن أفضل اختيار ؟</h1>
          <DecorativeLine />
          </Paper>

      {/* كروت المميزات */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(4, 1fr)",
          },
          gap: 3,
        }}
      >
        {features.map((feature, index) => (
          <Paper
            key={index}
            elevation={1}
            sx={{
              p: 3,
              borderRadius: "16px",
              border: "1px solid #eee",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
              },
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
              {feature.icon}
            </Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#0c1b33", mb: 1 }}
            >
              {feature.title}
            </Typography>
            <Typography
              sx={{ color: "#555", fontSize: "15px", lineHeight: 1.8 }}
            >
              {feature.text}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
    </Container>
  );
};

export default FeaturesCards;
