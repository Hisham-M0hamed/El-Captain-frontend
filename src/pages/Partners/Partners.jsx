import React from "react";
import { Link } from "react-router-dom";
import "./Partners.css";

const Partners = () => {
  return (
    <div dir="rtl" className="partners-page">
     

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
            <h2 className="partner-category-title">شركاء قطاع الصناعة والمقاولات</h2>
          </div>
          <div className="partner-grid">
            <div className="partner-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="Nike" />
            </div>
            <div className="partner-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Nestle.svg" alt="Nestle" />
            </div>
            <div className="partner-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Uber_logo_2018.svg" alt="Uber" />
            </div>
            <div className="partner-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
            </div>
          </div>

          {/* --- Trade Partners --- */}
          <div className="center-title">
            <h2 className="partner-category-title">شركاء قطاع التجارة والتوزيع</h2>
          </div>
          <div className="partner-grid">
            <div className="partner-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" />
            </div>
            <div className="partner-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/X_logo_2023_original.svg/1200px-X_logo_2023_original.svg.png" alt="X" />
            </div>
            <div className="partner-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/512px-W3Schools_logo.svg.png" alt="W3Schools" />
            </div>
          </div>
        </div>
      </section>

      {/* --- Join Us CTA --- */}
      <section className="section join-us-cta">
        <div className="container">
          <h2>انضم إلى شبكة شركائنا</h2>
          <p>هل تبحث عن شريك لوجستي موثوق يساهم في نمو أعمالك؟ نحن هنا لتقديم الحلول التي تحتاجها.</p>
          <Link to="/contact" className="cta-button">تواصل معنا</Link>
        </div>
      </section>

    </div>
  );
};

export default Partners;
