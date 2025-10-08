import React from "react";
import { Link } from "react-router-dom";
import "./Partners.css";
import WhatsAppButton from "../WhatsAppButton";
import { Box } from "@mui/material";

const Partners = () => {
  return (
    <Box dir="rtl" className="partners-page">
      <WhatsAppButton />

      {/* --- Hero Section --- */}
      <section className="page-hero">
        <div className="container">
          <h1>شركاؤنا في النجاح</h1>
          <p>نفخر بالثقة التي تمنحنا إياها كبرى الشركات في مختلف القطاعات</p>
        </div>
      </section>

      {/* --- Industry Partners --- */}
      <section className="section">
        <div className="container">
          <div className="center-title">
            <h2 className="partner-category-title">
              شركاء قطاع الصناعة والمقاولات
            </h2>
          </div>
          <div className="partner-grid">
            <div className="partner-card">
              <img src="public\images\arab.png" alt="Nike" />
            </div>
            <div className="partner-card">
              <img src="public\images\oil.png" alt="Nestle" />
            </div>
            <div className="partner-card">
              <img src="public\images\orascom.png" alt="Orascom" />
            </div>
            <div className="partner-card">
              <img src="public\images\elswedy.png" alt="Google" />
            </div>
          </div>

          {/* --- Trade Partners --- */}
          <div className="center-title">
            <h2 className="partner-category-title">
              شركاء قطاع التجارة والتوزيع
            </h2>
          </div>
          <div className="partner-grid">
            <div className="partner-card">
              <img src="public\images\post.png" alt="AWS" />
            </div>
            <div className="partner-card">
              <img src="public\images\post2.jpeg" alt="X" />
            </div>
            <div className="partner-card">
              <img src="public\images\abs.png" alt="W3Schools" />
            </div>
          </div>
        </div>
      </section>

      {/* --- Join Us CTA --- */}
      <section className="section join-us-cta">
        <div className="container">
          <h2>انضم إلى شبكة شركائنا</h2>
          <p>
            هل تبحث عن شريك لوجستي موثوق يساهم في نمو أعمالك؟ نحن هنا لتقديم
            الحلول التي تحتاجها.
          </p>
          <Link to="/contact" className="cta-button">
            تواصل معنا
          </Link>
          <Link to="/contact" className="cta-button">
            تواصل معنا 01218803422
          </Link>
        </div>
      </section>
    </Box>
  );
};

export default Partners;
