import React from "react";
import Logo from "../../../assets/logo.jpg";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <h1>الكابتن</h1>

        <nav className={styles.nav}>
          <a>الصفحة الرئيسية</a>
          <a>خدمتنا </a>
          <a>من نحن </a>
          <a>شركائنا</a>
          <a>اتصل بنا</a>
        </nav>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <p style={{ fontSize: "20px" }}>لجميع خدمات الشحن برا وبحرا وجوا</p>
          <button>انضم الينا</button>
        </div>
      </div>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>© 2025 شركة الكابتن لخدمات النقل. جميع الحقوق محفوظة.</p>
      </div>
    </div>
  );
};

export default Footer;
