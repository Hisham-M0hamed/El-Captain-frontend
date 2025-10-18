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
import HeroAbout from "./HeroAbout";
import AboutUs from "./AboutUs";
import ContactAbout from "./ContactAbout";
import FeaturesCards from "./FeaturesCards";
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
      <HeroAbout />
      <AboutUs />

      
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

      <FeaturesCards />
      <ContactAbout />


     
      {/* <WhatsAppButton /> */}
    </div>
  );
};

export default About;
