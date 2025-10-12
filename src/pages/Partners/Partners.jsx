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
              <img src="/images/arab.png" alt="Arab" />
            </div>
            <div className="partner-card">
              <img src="/images/oil.png" alt="Oil" />
            </div>
            <div className="partner-card">
              <img src="/images/orascom.png" alt="Orascom" />
            </div>
            <div className="partner-card">
              <img src="/images/elswedy.png" alt="Elswedy" />
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
              <img src="/images/post.png" alt="Post" />
            </div>
            <div className="partner-card">
              <img src="/images/post2.jpeg" alt="Post2" />
            </div>
            <div className="partner-card">
              <img src="/images/abs.png" alt="ABS" />
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
