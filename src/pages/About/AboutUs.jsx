import { Box, Container, Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import DecorativeLine from "../../components/common/DecorativeLine/DecorativeLine";

const AboutUs = () => {
  return (
    <Box sx={{ bgcolor: "#f9f9f9", py: 6 }}>
      <Container>
        <Paper
          elevation={0}
          sx={{
            bgcolor: "transparent",
            color: "#333",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "right",
            direction: "rtl",
            p: { xs: 2, md: 4 },
          }}
        >
          <h1 style={{ fontSize: "40px", marginBottom: "8px" }}>نبذة عنّا</h1>

          <DecorativeLine />

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              marginTop: "24px",
              maxWidth: "800px",
            }}
          >
            شركة الكابتن شريكك الموثوق في مجال حلول النقل والخدمات اللوجستية
            المتكاملة في مصر. بفضل خبرتنا الكبيرة في التعامل مع جميع أنواع
            الشحنات من الخامات المعدنية الثقيلة إلى البضائع التجارية، نمتلك
            القدرة على تلبية احتياجاتكم بأعلى مستويات الكفاءة والاحترافية.
            <br />
            <br />
            مهمتنا هي بناء شراكات طويلة الأمد مبنية على الثقة والشفافية،
            والالتزام المطلق بتقديم خدمة استثنائية تحقق أهداف عملائنا وتضمن
            نجاحهم.
          </p>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },
              gap: 3,
              width: "100%",
              mt: 4,
            }}
          >
            {/* هنا ممكن تضيفي بطاقات أو صور لاحقاً */}
          </Box>

         
        </Paper>
      </Container>
    </Box>
  );
};

export default AboutUs;
