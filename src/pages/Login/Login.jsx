import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(" Phone Number:", phoneNumber);
    console.log(" Password:", password);

   
     fetch("http://localhost:8000/users/login", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
body: JSON.stringify({ phone: phoneNumber, password }),
     })
       .then((res) => res.json())
       .then((data) => console.log(data))
       .catch((err) => console.error(err));
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
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
            <p>
              <a href="/">العودة للرئيسية</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
