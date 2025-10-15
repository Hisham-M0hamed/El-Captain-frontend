import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phoneNumbers: "",
    password: "",
    passwordConfirm: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.passwordConfirm) {
      setError("كلمة المرور غير متطابقة");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const res = await fetch("/api/v1/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phoneNumbers: formData.phoneNumbers,
          password: formData.password,
          passwordConfirm: formData.passwordConfirm,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("تم إنشاء الحساب بنجاح 🎉");
        setTimeout(() => navigate("/Login"), 1500);
      } else {
        setError(data.message || "حدث خطأ أثناء التسجيل");
      }
    } catch (err) {
      console.error(err);
      setError("فشل الاتصال بالسيرفر");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-branding">
          <div className="logo">الكابتن</div>
          <p>شريكك الاستراتيجي في قطاع النقل. حلول لوجستية متكاملة وموثوقة.</p>
        </div>

        <div className="auth-form">
          <h1>إنشاء حساب جديد</h1>

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
                type="text"
                name="phoneNumbers"
                placeholder="رقم الهاتف"
                value={formData.phoneNumbers}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="كلمة المرور"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="passwordConfirm"
                placeholder="تأكيد كلمة المرور"
                value={formData.passwordConfirm}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "جاري إنشاء الحساب..." : "إنشاء الحساب"}
            </button>
          </form>

          <div className="separator">أو</div>

          <button type="button" className="google-btn">
            <i className="fab fa-google"></i>
            <span>التسجيل باستخدام جوجل</span>
          </button>

          <div className="form-footer">
            <p>
              لديك حساب بالفعل؟ <Link to="/Login">تسجيل الدخول</Link>
            </p>
            {/* <p>
              <Link to="/">العودة للرئيسية</Link>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
