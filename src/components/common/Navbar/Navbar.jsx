import React from "react";
import styles from "./Navbar.module.css";
import { FaArrowDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaravan } from "react-icons/fa";
const Navbar = () => {
  return (
    <div dir="rtl" className={styles.container}>
      <div className={styles.logo}>
        <h1>الكابتن</h1>

        <div className={styles.categories}>
          <div
            style={{
              display: "flex",
              gap: "10",
              marginRight: "20px",
              marginLeft: "10px",
            }}
          >
            <h3>منتجاتنا</h3>
            <div>
              <FaArrowDown
                style={{
                  fontSize: "13px",
                  marginRight: "7px",
                  marginTop: "8px",
                }}
              />
            </div>
          </div>
          <ul className={styles.ourCategories}>
            <li>مواد بناء</li>
            <li>صناعات كيمياوية</li>
            <li>صناعات دوائية</li>
            <li>صناعات هندسية</li>
          </ul>
        </div>
      </div>
      <div>
        <nav>
          <ul>
            <li>الصفحة الرئيسية</li>
            <li>خدمتنا</li>
            <li>من نحن</li>
            <li>شركائنا</li>
            <li>اتصل بنا</li>
          </ul>
        </nav>
      </div>
      <div className={styles.login}>
        <div className={styles.icons}>
          <a>
            <FaCartShopping />
          </a>
          <a>
            <FaCaravan />
          </a>
        </div>
        <button>تسجيل الدخول</button>
      </div>
    </div>
  );
};

export default Navbar;
