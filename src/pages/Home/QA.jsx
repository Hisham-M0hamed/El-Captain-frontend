import { Box, Container, Paper } from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import DecorativeLine from "../../components/common/DecorativeLine/DecorativeLine";
const QA = () => {
  return (
    <Box sx={{ margin: "60px 0" }}>
      <Container>
        <Box
          elevation={0}
          sx={{
            bgcolor: "initial",
            color: "#333",
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "40px" }}> الأسئلة الشائعة</h1>
          {/* <hr
            style={{
              width: "100px",
              height: "px",
              color: "#f0a30b",
              bgcolor: "#f0a30b",
              borderColor: "#f0a30b",
              margin: "24px 4px",
            }}
          /> */}
          <DecorativeLine />

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ padding: "10px" }}
            >
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontWeight: "bold", color: "#333" }}
              >
                ما الذي يميز شركة الكابتن عن غيرها؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              نحن لسنا مجرد شركة نقل، بل كيان متخصص في توفير حلول لوجستية
              متكاملة وموثوقة. نمتلك فريقًا ذا خبرة عميقة في إدارة كافة تحديات
              النقل، ونلتزم بأعلى معايير الجودة والسلامة لضمان راحة بالك
              الكاملة. الكاملة.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ padding: "10px" }}
            >
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontWeight: "bold", color: "#333" }}
              >
                ما هي أنواع الشحنات التي تتعاملون معها؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              لدينا خبرة عميقة في التعامل مع جميع أنواع الشحنات، من الخامات
              المعدنية الثقيلة المستخرجة من المحاجر إلى البضائع التجارية
              والصناعية، بغض النظر عن حجمها أو طبيعتها.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ padding: "10px" }}
            >
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontWeight: "bold", color: "#333" }}
              >
                ما هي أنواع خدمات النقل التي تقدمونها؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              لدينا خبرة عميقة في التعامل مع جميع أنواع الشحنات، من الخامات
              المعدنية الثقيلة المستخرجة من المحاجر إلى البضائع التجارية
              والصناعية، بغض النظر عن حجمها أو طبيعتها.
            </AccordionDetails>
          </Accordion>
          {/* <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
              sx={{ padding: "10px" }}
            >
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontWeight: "bold", color: "#333" }}
              >
                ما هي أنواع خدمات النقل التي تقدمونها؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              نقدم حلول نقل شاملة برية وبحرية وجوية. أسطولنا الضخم وشبكتنا
              اللوجستية المتكاملة تضمن وصول بضائعكم في الوقت المحدد وبأمان تام.
            </AccordionDetails>
          </Accordion> */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4-content"
              id="panel4-header"
              sx={{ padding: "10px" }}
            >
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontWeight: "bold", color: "#333" }}
              >
                كيف تضمنون أمان الشحنات؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              نلتزم في شركة الكابتن بأعلى معايير الجودة والسلامة في كل خطوة. نحن
              ندرك أن كل شحنة تمثل أصولاً ثمينة لعملائنا، ولذلك نوفر حلولاً
              مخصصة تضمن سلامتها ووصولها بشكل آمن.
            </AccordionDetails>
          </Accordion>
          {/* <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5-content"
              id="panel5-header"
              sx={{ padding: "10px" }}
            >
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontWeight: "bold", color: "#333" }}
              >
                ما هو هدف شركة الكابتن الأساسي؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              مهمتنا هي بناء شراكات طويلة الأمد مبنية على الثقة والشفافية. نحن
              نعتبر نجاح شركائنا هدفنا الأساسي ونسعى لتحقيقه من خلال تقديم خدمات
              استثنائية.
            </AccordionDetails>
          </Accordion> */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4-content"
              id="panel4-header"
              sx={{ padding: "10px" }}
            >
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontWeight: "bold", color: "#333" }}
              >
                ماهو هدف شركة الكابتن الاساسي؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              نلتزم في شركة الكابتن بأعلى معايير الجودة والسلامة في كل خطوة. نحن
              ندرك أن كل شحنة تمثل أصولاً ثمينة لعملائنا، ولذلك نوفر حلولاً
              مخصصة تضمن سلامتها ووصولها بشكل آمن.
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </Box>
  );
};

export default QA;
