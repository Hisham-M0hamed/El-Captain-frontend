import React, { useEffect } from "react";
import "./About.css";
import {
  FaTruckMoving,
  FaUsers,
  FaBriefcase,
  FaGlobeAfrica,
  FaUserTie,
  FaCogs,
  FaShieldAlt,
  FaHandshake,
} from "react-icons/fa";
import WhatsAppButton from "../WhatsAppButton";

const About = () => {
  useEffect(() => {
    // Animated Counters Logic
    const counters = document.querySelectorAll(".stat-number");
    const speed = 200;

    const animateCounters = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const inc = Math.ceil(target / speed);

            if (count < target) {
              counter.innerText = Math.min(count + inc, target);
              setTimeout(updateCount, 10);
            } else {
              counter.innerText = target;
            }
          };
          updateCount();
          observer.unobserve(counter);
        }
      });
    };

    const observer = new IntersectionObserver(animateCounters, {
      root: null,
      threshold: 0.5,
    });

    counters.forEach((counter) => observer.observe(counter));
  }, []);

  return (
    <div dir="rtl" className="about-page">
      {/* ---- HERO ---- */}
      <section className="page-hero">
        <h1>شريكك الاستراتيجي في قطاع النقل</h1>
        <p>
          نحن لسنا مجرد شركة نقل، بل كيان متخصص في توفير حلول لوجستية متكاملة
          وموثوقة تضمن نجاحك.
        </p>
      </section>

      {/* ---- STORY ---- */}
      <section className="section">
        <div className="container story-container">
          <div className="story-image">
            <img
              src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="فريق عمل شركة الكابتن"
            />
          </div>
          <div className="story-content">
            <h2>الخبرة التي تثق بها</h2>
            <p>
              تعد شركة الكابتن شريكك الموثوق في مجال حلول النقل والخدمات
              اللوجستية المتكاملة في مصر. بفضل خبرتنا العميقة في التعامل مع جميع
              أنواع الشحنات، من الخامات المعدنية الثقيلة إلى البضائع التجارية،
              نمتلك القدرة على تلبية احتياجاتكم بأعلى مستويات الكفاءة
              والاحترافية.
            </p>
            <p>
              مهمتنا هي بناء شراكات طويلة الأمد مبنية على الثقة والشفافية،
              والالتزام المطلق بتقديم خدمة استثنائية.
            </p>
          </div>
        </div>
      </section>

      {/* ---- STATS ---- */}
      <section className="section stats-section">
        <div className="container stats-grid">
          <div className="stat-item">
            <FaTruckMoving />
            <div className="stat-number" data-target="150">
              0
            </div>
            <div className="stat-text">شاحنة ومعدة متخصصة</div>
          </div>
          <div className="stat-item">
            <FaUsers />
            <div className="stat-number" data-target="300">
              0
            </div>
            <div className="stat-text">شراكات ناجحة</div>
          </div>
          <div className="stat-item">
            <FaBriefcase />
            <div className="stat-number" data-target="10">
              0
            </div>
            <div className="stat-text">سنوات من الخبرة العميقة</div>
          </div>
          <div className="stat-item">
            <FaGlobeAfrica />
            <div className="stat-number" data-target="3">
              0
            </div>
            <div className="stat-text">أنواع الشحن (بري، بحري، جوي)</div>
          </div>
        </div>
      </section>

      {/* ---- WHY US ---- */}
      <section className="section why-us-section">
        <div className="container">
          <h2 className="section-title">لماذا نحن الخيار الأفضل؟</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaUserTie />
              </div>
              <h3>خبرة وكفاءة لا مثيل لها</h3>
              <p>
                نمتلك فريقًا متخصصًا وذا خبرة عميقة في إدارة كافة تحديات النقل،
                مما يضمن وصول شحناتك بأمان وفي الوقت المحدد.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaCogs />
              </div>
              <h3>حلول متكاملة وشاملة</h3>
              <p>
                نوفر لك كل ما تحتاجه في مكان واحد، من نقل الخامات المعدنية
                والمناجم إلى شحن المنتجات التجارية والصناعية.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaShieldAlt />
              </div>
              <h3>التزام تام بالجودة والسلامة</h3>
              <p>
                مهمتنا هي تقديم خدمات لوجستية موثوقة مبنية على أعلى معايير
                الجودة والسلامة لضمان نمو أعمالك بثقة.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaHandshake />
              </div>
              <h3>شراكات طويلة الأمد</h3>
              <p>
                نعمل دائما على بناء شراكات قائمة على الثقة والشفافية، لأن نجاحك
                هو هدفنا الأساسي.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="cta-section">
        <div className="container">
          <h2>مستعدون لتقديم الحلول التي تحتاجها أعمالك؟</h2>
          <p>
            تواصل معنا اليوم لمناقشة احتياجاتك اللوجستية والحصول على عرض سعر
            مخصص.
          </p>
          <a href="/contact" className="cta-button">
            تواصل معنا الآن
          </a>
        </div>
      </section>
      <WhatsAppButton />
    </div>
  );
};

export default About;
