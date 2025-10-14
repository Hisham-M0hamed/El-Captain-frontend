import React, { useState } from "react";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [phoneNumbers, setPhoneNumbers] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phoneNumbers || !password) {
      setError("يرجى إدخال رقم الهاتف وكلمة المرور");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const res = await fetch("api/v1/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumbers, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // حفظ التوكن وبيانات المستخدم
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.data.user));

        setSuccess("تم تسجيل الدخول بنجاح ✅");
        setTimeout(() => navigate("/home"), 1500);
      } else {
        setError(data.message || "بيانات الدخول غير صحيحة");
      }
    } catch (err) {
      console.error("Login Error:", err);
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
          <h1>مرحباً بعودتك</h1>

          {error && <div className="alert error">{error}</div>}
          {success && <div className="alert success">{success}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="رقم الهاتف"
                value={phoneNumbers}
                onChange={(e) => setPhoneNumbers(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
            </button>
          </form>

          <div className="separator">أو</div>

          <button type="button" className="google-btn">
            <i className="fab fa-google"></i>
            <span>المتابعة باستخدام جوجل</span>
          </button>

          <div className="form-footer">
            <p>
              ليس لديك حساب؟ <Link to="/Register">إنشاء حساب جديد</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
