import React, { useState } from "react";
import "./Contact.css";
import { FaPhoneSquare } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { Box } from "@mui/material";
import WhatsAppButton from "../WhatsAppButton";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    PhonNumbers: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:8000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("✅ تم إرسال الرسالة بنجاح، سنتواصل معك قريبًا");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setError(data.message || "❌ حدث خطأ أثناء إرسال الرسالة");
      }
    } catch (err) {
      console.error(err);
      setError("❌ فشل الاتصال بالسيرفر");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="contact-page">
      <WhatsAppButton />
      <section className="page-hero">
        <div className="container">
          <h1>هل أنت مستعد للبدء؟</h1>
          <p>
            نحن هنا للإجابة على جميع استفساراتك ومساعدتك في إيجاد الحلول
            اللوجستية المثالية لعملك.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-block">
            <div className="contact-details">
              <h2>معلومات التواصل</h2>
              <p>
                فريقنا جاهز دائمًا لخدمتك. لا تتردد في التواصل معنا عبر أي من
                القنوات التالية.
              </p>

              <div className="info-item">
                <i className="fas fa-map-marker-alt">
                  <FaMapLocationDot />
                </i>
                <span>الواسطى، محافظة بني سويف، مصر</span>
              </div>
              <div className="info-item">
                <i className="fas fa-phone-alt">
                  <FaPhoneSquare />
                </i>
                <span>+20 123 456 7890</span>
              </div>
              <div className="info-item">
                <i className="fas fa-envelope">
                  <MdEmail />
                </i>
                <span>info@elkaptan.com</span>
              </div>

              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-facebook-f">
                    <FaFacebook />
                  </i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter">
                    <FaSquareXTwitter />
                  </i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in">
                    <FaLinkedin />
                  </i>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h2>أرسل لنا رسالة</h2>

              {error && <div className="alert error">{error}</div>}
              {success && <div className="alert success">{success}</div>}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="الاسم الكامل"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="PhonNumbers"
                    placeholder="رقم الهاتف "
                    value={formData.PhonNumbers}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="رسالتك..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? "⏳ جاري الإرسال..." : "إرسال الرسالة"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55631.30908151271!2d31.18247076939599!3d29.213278917390003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145a278939023737%3A0xe52536a46a815774!2sAl%20Wasta%2C%20Beni%20Suef%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1727113504100!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
            ></iframe>
          </div>
        </div>
      </section>
    </Box>
  );
};

export default Contact;
