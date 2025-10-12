import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  const [phoneNumbers, setPhoneNumbers] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(" Phone Number:", phoneNumbers);
  //   console.log(" Password:", password);

  //   fetch("/api/v1/users/login", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ phoneNumbers: phoneNumbers, password }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.error(err));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Phone Number:", phoneNumbers);
    console.log("Password:", password);

    try {
      const res = await fetch("/api/v1/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumbers, password }),
      });

      const data = await res.json();
      console.log("Response:", data);

      if (res.ok && (data.token || data.status === "success")) {
        alert("✅ تم تسجيل الدخول بنجاح!");
        window.location.href = "/dashboard"; // ← غيّرها حسب الصفحة اللي عايز تروحها بعد اللوجين
      } else {
        alert(data.message || "❌ فشل تسجيل الدخول، تحقق من البيانات.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("حدث خطأ أثناء الاتصال بالسيرفر.");
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
            <button type="submit" className="submit-btn">
              تسجيل الدخول
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
            {/* <p>
              <a href="/">العودة للرئيسية</a>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
