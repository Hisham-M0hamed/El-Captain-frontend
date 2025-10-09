import { Box, Container, Paper } from "@mui/material";
import React from "react";

const WordBuild = () => {
  return (
    <Container
      sx={{
        margin: "60px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        // right: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: "25px",
        }}
      >
        <h1
          style={{
            color: "#333",
            margin: "10px auto",
            textAlign: "center",
          }}
        >
          ما يميزنا في نقل مواد البناء؟
        </h1>

        <Paper
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "right",
            right: "30px",
          }}
        >
          <h5 style={{ fontSize: "24px", fontWeight: "bold", color: "#444" }}>
            التعامل مع الكميات الضخمة
          </h5>
          <p>
            أسطولنا مجهز لاستيعاب ونقل كميات هائلة من المواد، مما يضمن استمرارية
            العمل دون انقطاع.
          </p>
        </Paper>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "right",
            right: "30px",
          }}
        >
          <h5 style={{ fontSize: "24px", fontWeight: "bold", color: "#444" }}>
            شبكة واسعة من الموردين
          </h5>
          <p>
            لدينا علاقات قوية مع كبرى المحاجر والمصانع، مما يضمن توفير المواد
            بأفضل الأسعار وسرعة في التوريد.
          </p>
        </Paper>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "right",
            right: 0,
          }}
        >
          <h5 style={{ fontSize: "24px", fontWeight: "bold", color: "#444" }}>
            الوصول للمواقع الصعبة
          </h5>
          <p>
            سائقونا لديهم الخبرة للوصول إلى كافة مواقع العمل، حتى في المناطق
            النائية والوعرة.
          </p>
        </Paper>
      </Box>
    </Container>
  );
};

export default WordBuild;
